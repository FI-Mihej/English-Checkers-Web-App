(ns lg-checkers.board
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [put! chan <!]]))

(enable-console-print!)

(println "board - start")

; == Notes ==============================================
; Board pieces are defined in the checkers.css file.  The
; currently defined pieces are:
;     :red-piece
;     :black-piece
;     :red-piece-marked
;     :black-piece-marked
;     :empty
;
; The board is laid out as a 32 element map, one element
; for each position.  It is stored in an atom, and bound
; to the UI.  Any update of the atom will cause an UI
; refresh to reflect the current board state.
;
; core.async is used to implement CSP (Communicating
; Sequential Proceses), and channels are used to report
; user interaction events, as well as changing the board
; state.

; ===Channels ===========================================
; the board generates events on this channel
;     {:event :event-symbol
;      :position <int>}
(def board-events (chan))

; ===Channels ===========================================
; the board generates events on this channel
;     {:event :event-symbol
;      :position <int>}
(def board-api-commands (chan))

; the board receives commands to manipulate its state
;     {:command :command-symbol
;      :position <integer>
;      :piece :piece-symbol}
(def board-commands (chan))

; for other processes to acquire the board state atom
;     (atom (create-board))
(def board-state (chan))

(def ai-commands (chan))

; === Utility Functions =================================
; Destinations
(def piece-neighbor-directions #{:up-left :up-right :down-left :down-right})
(def piece-neighbor-directions-black-forward #{:up-left :up-right})
(def piece-neighbor-directions-red-forward #{:down-left :down-right})
(def piece-neighbor-direction-by-number {0 :up-left, 1 :up-right, 2 :down-left, 3 :down-right})
(def piece-neighbor-direction-number-by-direction {:up-left 0, :up-right 1, :down-left 2, :down-right 3})

; Pieces
(def original-piece-colors #{:black-piece :red-piece})

(def all-movable-pieces #{:black-piece :black-piece-marked :red-piece :red-piece-marked :prom-black-piece :prom-black-piece-marked :prom-red-piece :prom-red-piece-marked})
(def all-normal-movable-pieces #{:black-piece :black-piece-marked :red-piece :red-piece-marked})
(def all-promoted-movable-pieces #{:prom-black-piece :prom-black-piece-marked :prom-red-piece :prom-red-piece-marked})

(def original-movable-pieces #{:black-piece :red-piece :prom-black-piece :prom-red-piece})
(def original-normal-movable-pieces #{:black-piece :red-piece})
(def original-promoted-movable-pieces #{:prom-black-piece :prom-red-piece})

(def marked-movable-pieces #{:black-piece-marked :red-piece-marked :prom-black-piece-marked :prom-red-piece-marked})
(def marked-normal-movable-pieces #{:black-piece-marked :red-piece-marked})
(def marked-promoted-movable-pieces #{:prom-black-piece-marked :prom-red-piece-marked})

(def all-black-movable-pieces #{:black-piece :black-piece-marked :prom-black-piece :prom-black-piece-marked})
(def all-red-movable-pieces #{:red-piece :red-piece-marked :prom-red-piece :prom-red-piece-marked})

(def way-to-mark-piece {:black-piece :black-piece-marked, :red-piece :red-piece-marked, :prom-black-piece :prom-black-piece-marked, :prom-red-piece :prom-red-piece-marked})
(def way-to-unmark-piece {:black-piece-marked :black-piece, :red-piece-marked :red-piece, :prom-black-piece-marked :prom-black-piece, :prom-red-piece-marked :prom-red-piece})

; Positional Constants
(def top-row 1)
(def bottom-row 8)

(def promotion-row-by-original-piece-color {:black-piece top-row, :red-piece bottom-row})
(def promotion-piece-type-by-original-piece-color {:black-piece :prom-black-piece, :red-piece :prom-red-piece})

(defn original-piece-type [piece-type]
  (let [kind-of-black-piece? (contains? all-black-movable-pieces piece-type)
        promoted-piece? (contains? all-promoted-movable-pieces piece-type)]
    (if promoted-piece?
        (if kind-of-black-piece? :prom-black-piece :prom-red-piece)
        (if kind-of-black-piece? :black-piece :red-piece))
    ))

(defn original-piece-color [piece-type]
  (let [kind-of-black-piece? (contains? all-black-movable-pieces piece-type)
        kind-of-red-piece? (contains? all-red-movable-pieces piece-type)]
    (if kind-of-black-piece? 
      :black-piece 
      (if kind-of-red-piece? :red-piece :empty-piece))
    ))

(defn row-of-the-piece-position [pos]
  (Math/ceil (/ pos 4)))

(defn piece-can-be-promoted-to [pos piece-type]
  (let [piece-color (original-piece-color piece-type)
        piece-row (row-of-the-piece-position pos)]
    (if (= piece-row (get promotion-row-by-original-piece-color piece-color)) 
      (get promotion-piece-type-by-original-piece-color piece-color))))

; given a board position, return the position of neighbors
; [NOTE:] Challengee should investigate memoization of
;         this function.
(defn compute-pos-neighbors [pos]
  (let [curr-row (row-of-the-piece-position pos)
        row-odd? (odd? curr-row)
        row-even? (not row-odd?)
        top-row? (= curr-row top-row)
        bottom-row? (= curr-row bottom-row)
        right-edge? (= (mod pos 4) 0)
        left-edge? (= (mod pos 4) 1)
        up-left (if row-odd? (- pos 4)
                             (- pos 5))
        up-right (if row-odd? (- pos 3)
                              (- pos 4))
        down-left (if row-odd? (+ pos 4)
                               (+ pos 3))
        down-right (if row-odd? (+ pos 5)
                                (+ pos 4))]
    (println "")
    (println ">> compute-pos-neighbors: " pos)
    (println "curr-row: " curr-row)
    (println "row-odd?: " row-odd?)
    (println "row-even?: " row-even?)
    (println "top-row?: " top-row?)
    (println "bottom-row?: " bottom-row?)
    (println "right-edge?: " right-edge?)
    (println "left-edge?: " left-edge?)
    (println "up-left: " up-left)
    (println "up-right: " up-right)
    (println "down-left: " down-left)
    (println "down-right: " down-right)
    (flatten
      [(if (not top-row?)
        (if row-even?
          [(if (not left-edge?)
              up-left) 
            up-right]
          [up-left
            (if (not right-edge?)
              up-right)])
        [nil nil])
      (if (not bottom-row?)
        (if row-odd?
          [down-left 
            (if (not right-edge?)
              down-right)]
          [(if (not left-edge?)
              down-left)
            down-right])
        [nil nil])])))

(def compute-pos-neighbors-memo (memoize compute-pos-neighbors))

; compute neighbors for every board position
(defn compute-neighbor-positions []
  (map (fn [pos] {pos (compute-pos-neighbors-memo pos)})
       (range 1 33)))

(defn neighbor-piece-by-destination [pos destination]
  (let []
    (println "")
    (println ">> neighbor-piece-by-destination" pos destination)
    ; (println "(get piece-neighbor-direction-number-by-direction destination) :" (get piece-neighbor-direction-number-by-direction destination))
    ; (println "(compute-pos-neighbors-memo pos) :" (to-array (compute-pos-neighbors-memo pos)))
    ; (println "(get (to-array (compute-pos-neighbors-memo pos)) (get piece-neighbor-direction-number-by-direction destination)) :" (get (to-array (compute-pos-neighbors-memo pos)) (get piece-neighbor-direction-number-by-direction destination)))
    (get (to-array (compute-pos-neighbors-memo pos)) (get piece-neighbor-direction-number-by-direction destination))
    ))

(defn neighbor-piece-destination-by-neighbor-pos [pos neighbor-pos]
  (let [close-neighbor? (contains? (set (compute-pos-neighbors-memo pos)) neighbor-pos)
        up-left-neighbor (if (not close-neighbor?) (neighbor-piece-by-destination pos :up-left))
        up-right-neighbor (if (not close-neighbor?) (neighbor-piece-by-destination pos :up-right))
        down-left-neighbor (if (not close-neighbor?) (neighbor-piece-by-destination pos :down-left))
        down-right-neighbor (if (not close-neighbor?) (neighbor-piece-by-destination pos :down-right))]
    (println "")
    (println ">> neighbor-piece-destination-by-neighbor-pos" pos neighbor-pos)
    (println "close-neighbor? :" close-neighbor?)
    (println "up-left-neighbor :" up-left-neighbor)
    (println "up-right-neighbor :" up-right-neighbor)
    (println "down-left-neighbor :" down-left-neighbor)
    (println "down-right-neighbor :" down-right-neighbor)
    (println "neighbors :" (compute-pos-neighbors-memo pos))
    (if close-neighbor?
      (get piece-neighbor-direction-by-number (.indexOf (to-array (compute-pos-neighbors-memo pos)) neighbor-pos))
      (if (and (some? up-left-neighbor) (= neighbor-pos (neighbor-piece-by-destination up-left-neighbor :up-left))) :up-left
        (if (and (some? up-right-neighbor) (= neighbor-pos (neighbor-piece-by-destination up-right-neighbor :up-right))) :up-right
          (if (and (some? down-left-neighbor) (= neighbor-pos (neighbor-piece-by-destination down-left-neighbor :down-left))) :down-left
            (if (and (some? down-right-neighbor) (= neighbor-pos (neighbor-piece-by-destination down-right-neighbor :down-right))) :down-right)))))))

(defn good-piece-type-destination? [piece-type destination]
  (let [promoted? (contains? all-promoted-movable-pieces piece-type)
        kind-of-black-piece? (contains? all-black-movable-pieces piece-type)]
    (if promoted?
      true
      (if kind-of-black-piece?
        (contains? piece-neighbor-directions-black-forward destination)
        (contains? piece-neighbor-directions-red-forward destination)))))

; == Board State ==========================================
; initialize a board, where positions are indexed 1-32.
; each position is an atom containing the symbol of the
; piece in it.
(defn create-board []
  (atom
   (apply sorted-map
          (flatten
           (map-indexed (fn [i v] (vector (inc i) v))
                        (flatten
                         [(repeat 12 :red-piece)
                          (repeat 8 :empty-piece)
                          (repeat 12 :black-piece)]))))))

; instantiate our game board state, initializing our
; board with starting pieces
(def board (create-board))

(println "compute-neighbor-positions: " (compute-neighbor-positions))

; =====================================================

; Controller
(go (do
  (println "")
  (println "STARTED: Controller")
  (send-api-command-register-channel-to-receive-event board-events :api-event-unblock-user-board-input)
  (while true
    (let [event (<! board-events)
          current-event (:command event)]
      (println "")
      (println "Controller Event: " event)
      (if (= :board-clicked current-event)
        (controler-worker-board-clicked event))
      (if (= :api-event-unblock-user-board-input current-event)
        (controller-unblock-user-board-input))
))))

(def controller-user-board-actions-are-allowed true)

(defn controller-unblock-user-board-input []
  (do 
    (println "")
    (println ">> controller-unblock-user-board-input")
    (set! controller-user-board-actions-are-allowed true)
    (println "== controller-user-board-actions-are-allowed: " controller-user-board-actions-are-allowed)
    (set! controller-last-click-board-pos nil)
    (println "== controller-last-click-board-pos: " controller-last-click-board-pos)))

(def controller-last-click-board-pos)
(println "== controller-last-click-board-pos: " controller-last-click-board-pos)

(defn controler-worker-board-clicked [event]
  (let [current-event (:command event)
        board-pos (:position event)
        same-board-pos? (== board-pos controller-last-click-board-pos)
        new-board-pos? (not same-board-pos?)]
    (do 
      (println "")
      (println ">> controler-worker-board-clicked: " current-event)
      (if controller-user-board-actions-are-allowed
        (if new-board-pos?
          (do (set! controller-last-click-board-pos board-pos)
            (println "== controller-last-click-board-pos: " controller-last-click-board-pos)
            (send-api-command-board-piece-mouse-click board-pos)))))))

(defn send-api-command-board-piece-mouse-click [pos]
  (println "")
  (println ">> send-api-command-board-piece-mouse-click: " pos)
  (set! controller-user-board-actions-are-allowed false)
  ; (println "")
  (println "== controller-user-board-actions-are-allowed: " controller-user-board-actions-are-allowed)
  (put! board-api-commands
        {:command :board-clicked
        :position pos}))

; =====================================================

; Logic API
(go (do 
    (println "")
    (println "STARTED: API")
    (send-ai-command-register-channel-to-receive-event board-api-commands :ai-event-ai-made-movement)
    (while true
      (let [event (<! board-api-commands)
            current-event (:command event)] (do
        (println "")
        (println "API Command: " event)
        (if (= :board-clicked current-event)
          (board-worker-board-clicked event))
        (if (= :register-channel-to-receive-event current-event)
          (api-worker-register-channel-to-receive-event event))
        (if (= :ai-event-ai-made-movement current-event)
          (api-worker-ai-made-movement event))
)))))

(def api-event-receivers {:api-event-unblock-user-board-input #{}})

(defn send-api-command-register-channel-to-receive-event [channel event]
  (put! board-api-commands
        {:command :register-channel-to-receive-event
        :channel channel
        :event event}))

(defn api-worker-register-channel-to-receive-event [full-event]
  (let [channel (:channel full-event)
        event (:event full-event) ] (do 
          (set! api-event-receivers (assoc api-event-receivers event (conj (get api-event-receivers event) channel)))
        )))

(defn send-all-receivers-unblock-user-board-input []
  (println "")
  (println ">> send-all-receivers-unblock-user-board-input")
  ; (println "Send To: " (get api-event-receivers :api-event-unblock-user-board-input))
  ; (println (map inc #{1 2 3}))
  ; (println (map some? #{1 2 3}))
  ; (println (map some? (get api-event-receivers :api-event-unblock-user-board-input)))
  ; (doall (map println #{1 2 3}))
  ; (doall (map println (get api-event-receivers :api-event-unblock-user-board-input)))
  ; (map send-single-receiver-unblock-user-board-input #{board-events})
  (doall (map send-single-receiver-unblock-user-board-input (get api-event-receivers :api-event-unblock-user-board-input)))
  ; (println "<< send-all-receivers-unblock-user-board-input")
)

(defn send-single-receiver-unblock-user-board-input [channel]
  (println "")
  (println ">> send-single-receiver-unblock-user-board-input" channel)
  (put! channel {:command :api-event-unblock-user-board-input}))

(def source-piece-position)
(def destination-piece-position)

(defn board-worker-board-clicked [event]
  (let [source-is-set? (some? source-piece-position)
        current-position (:position event)
        current-piece-type (get (deref board) current-position)
        source-original-piece-type (if (some? source-piece-position) (original-piece-type (get (deref board) source-piece-position)))] (do 
    (println "")
    (println ">> board-worker-board-clicked: " event)
    (println "source-is-set?: " source-is-set?)
    (println "current-position: " current-position)
    (println "current-piece-type: " current-piece-type)
    ; (println "board: " (deref board))
    (if (not source-is-set?) 
        (do 
          (println "1")
          (if (contains? original-movable-pieces current-piece-type) 
              (do
                (println "2")
                (set! source-piece-position current-position)
                (mark-piece-as source-piece-position :source-piece))
              (do
                (println "3")
              ))
          (send-all-receivers-unblock-user-board-input))
        (do 
          (println "4")
          (if (= source-piece-position current-position)
            (do 
              (println "5")
              (update-board-position source-piece-position source-original-piece-type)
              (set! source-piece-position nil)
              (send-all-receivers-unblock-user-board-input))
            (do
              (println "6")
              (if (= :empty-piece current-piece-type) 
                  (do 
                      (println "7")
                      (if (test-move-piece source-piece-position current-position) 
                          (do
                            (println "8")
                            ; (send-db-command-save-movement :user source-piece-position current-position)
                            (if (move-piece source-piece-position current-position)
                              (do (promote-piece current-position)
                                (send-db-command-save-movement :user :movement-is-over source-piece-position current-position (get (deref board) current-position))
                                (send-ai-command-compute-movement)
                                (set! source-piece-position nil))
                              (do (promote-piece current-position)
                                (send-db-command-save-movement :user :movement-continues source-piece-position current-position (get (deref board) current-position))
                                (send-all-receivers-unblock-user-board-input)
                                (set! source-piece-position current-position))))
                          (do
                            (println "9")
                            (send-all-receivers-unblock-user-board-input)
                          )))
                  (do
                      (println "10")
                      (send-all-receivers-unblock-user-board-input)))
            )
          )
)))))

(defn test-move-piece [source-pos destination-pos]
  (let [piece-type (get (deref board) source-pos)
        source-piece-is-black? (contains? all-black-movable-pieces piece-type)
        destination (neighbor-piece-destination-by-neighbor-pos source-pos destination-pos)
        close-neighbor (if (some? destination) (neighbor-piece-by-destination source-pos destination))
        close-neighbor-type (if (some? close-neighbor) (get (deref board) close-neighbor))] (do
    (println "")
    (println ">> test-move-piece: " source-pos destination-pos)
    (println "piece-type: " piece-type)
    (println "source-piece-is-black?: " source-piece-is-black?)
    (println "destination: " destination)
    (println "close-neighbor: " close-neighbor)
    (if (some? destination)
      (do (println "1")
        (if (good-piece-type-destination? piece-type destination)
          (do (println "2")
            (if (= destination-pos close-neighbor)
              (do (println "3")
                true)
              (do (println "4")
                (if source-piece-is-black?
                  (do (println "5")
                    (if (contains? all-red-movable-pieces close-neighbor-type)
                      (do (println "6")
                        true)
                      (do (println "7")
                        false)))
                  (do (println "8")
                    (if (contains? all-black-movable-pieces close-neighbor-type)
                      (do (println "9")
                        true)
                      (do (println "10")
                        false)))))))
          (do (println "11")
            false)))
      (do (println "12")
        false))
)))

(defn update-internal-score [piece-type original-piece-color-type delta-score]
  (let []
    ; (update-score-for-ui original-piece-color-type (* 100 delta-score))
    ))

(defn update-score-for-ui [original-piece-color-type delta-score]
  (let []
    ))

(defn is-there-are-victim? [test-pos source-pos actor-piece-type]
  (let [current-piece-color (original-piece-color actor-piece-type)
        test-piece-color (original-piece-color (get (deref board) test-pos))
        destination (neighbor-piece-destination-by-neighbor-pos source-pos test-pos)
        place-to-move-pos (if (some? destination) (neighbor-piece-by-destination test-pos destination))
        is-there-are-place-to-move? (if (some? place-to-move-pos)
            (= :empty-piece (get (deref board) place-to-move-pos))
            false)
            ] (do
    (println "")
    (println ">> is-there-are-victim?: " test-pos source-pos actor-piece-type)
    (println "current-piece-color: " current-piece-color)
    (println "test-piece-color: " test-piece-color)
    (if (not= :empty-piece test-piece-color)
      (do (println "1")
        (if (not= current-piece-color test-piece-color)
          (do (println "2")
            is-there-are-place-to-move?)
          (do (println "3")
            false)))
      (do (println "4")
        false)))))

(defn can-take-victim-enemy? [test-pos actor-piece-type]
  (let [] (do
    (println "")
    (println ">> can-take-victim-enemy?: " test-pos actor-piece-type)
    (println "1: " (set (remove nil? (compute-pos-neighbors-memo test-pos))))
    (println "2: " (set (map #(is-there-are-victim? % test-pos actor-piece-type) (set (remove nil? (compute-pos-neighbors-memo test-pos))))))
    (println "3: " (contains? (set (map #(is-there-are-victim? % test-pos actor-piece-type) (set (remove nil? (compute-pos-neighbors-memo test-pos))))) true))
    (println "test-piece-color: " test-piece-color)
    (contains? (set (map #(is-there-are-victim? % test-pos actor-piece-type) (set (remove nil? (compute-pos-neighbors-memo test-pos))))) true)
)))

(defn promote-piece [pos]
  (let [piece-type (get (deref board) pos)
        can-be-promoted-to (piece-can-be-promoted-to pos piece-type)]
    (if  (some? can-be-promoted-to) (update-board-position pos can-be-promoted-to))))

(defn move-piece [source-pos destination-pos]
  (let [current-source-piece-type (get (deref board) source-pos)
        kind-of-black-piece? (contains? all-black-movable-pieces current-source-piece-type)
        current-original-piece-color-type (if kind-of-black-piece? :black-piece :red-piece)
        promoted-piece? (contains? all-promoted-movable-pieces current-source-piece-type)
        current-original-piece-type (original-piece-type current-source-piece-type)
        destination (neighbor-piece-destination-by-neighbor-pos source-pos destination-pos)
        close-neighbor (neighbor-piece-by-destination source-pos destination)]
    (println "")
    (println ">> move-piece: " source-pos destination-pos)
    (println "current-source-piece-type: " current-source-piece-type)
    (println "kind-of-black-piece?: " kind-of-black-piece?)
    ; (println "all-black-pieces" all-black-movable-pieces)
    (println "current-original-piece-type: " current-original-piece-type)
    (update-board-position source-pos :empty-piece)
    (if (= destination-pos close-neighbor) 
      (do (println "1")
        (update-board-position destination-pos current-original-piece-type)
        true)
      (do (println "2")
        (update-internal-score current-source-piece-type current-original-piece-color-type 1)
        (update-board-position close-neighbor :empty-piece)
        (if (can-take-victim-enemy? destination-pos current-original-piece-type)
          (do (println "3")
            (update-board-position destination-pos current-source-piece-type)
            false)
          (do (println "4")
            (update-board-position destination-pos current-original-piece-type)
            true))))))

(defn send-db-command-save-movement [actor movement-condition source-pos destination-pos piece-type]
  (let []
  ))

(defn send-ai-command-compute-movement []
  (put! ai-commands
        {:command :make-move}))

(defn api-worker-ai-made-movement []
  (send-all-receivers-unblock-user-board-input)
)

; (defn mark-piece-as [pos state]
;   (let [current-piece-type (get (deref board) pos)] (do 
;     (if (= :source-piece state) (do
;         (if (= :red-piece current-piece-type) (do
;           (update-board-position pos :red-piece-marked)
;         ))
;         (if (= :black-piece current-piece-type) (do
;           (update-board-position pos :black-piece-marked)
;         ))))
;     (if (= :normal-piece state) (do
;         (if (= :red-piece-marked current-piece-type) (do
;           (update-board-position pos :red-piece)
;         ))
;         (if (= :black-piece-marked current-piece-type) (do
;           (update-board-position pos :black-piece)
;         )))))))

(defn mark-piece-as [pos state]
  (let [current-piece-type (get (deref board) pos)] (do 
    (if (= :source-piece state) (do
        (if (contains? original-movable-pieces current-piece-type)
          (update-board-position pos (get way-to-mark-piece current-piece-type)))
        ))
    (if (= :normal-piece state) (do
        (if (contains? marked-movable-pieces current-piece-type)
          (update-board-position pos (get way-to-unmark-piece current-piece-type)))
        ))
)))

(defn send-board-command-update-board-position [pos piece]
  (put! board-commands
        {:command :update-board-position
        :position pos
        :piece piece}))

(defn update-board-position [pos piece]
  (swap! board assoc pos piece))

; =====================================================

; AI
(go (do 
    (println "")
    (println "STARTED: AI")
    (while true
      (let [event (<! ai-commands)
            current-event (:command event)] (do
        (println "")
        (println "AI Command: " event)
        (if (= :make-move current-event)
          (ai-worker-make-move event))
        (if (= :register-channel-to-receive-event current-event)
          (ai-worker-register-channel-to-receive-event event))
)))))

(def ai-event-receivers {:ai-event-ai-made-movement #{}})

(defn send-ai-command-register-channel-to-receive-event [channel event]
  (println "")
  (println ">> send-ai-command-register-channel-to-receive-event" channel event)
  (put! ai-commands
        {:command :register-channel-to-receive-event
        :channel channel
        :event event}))

(defn ai-worker-register-channel-to-receive-event [full-event]
  (let [channel (:channel full-event)
        event (:event full-event) ] 
    (println "")
    (println ">> ai-worker-register-channel-to-receive-event" full-event)
    (set! ai-event-receivers (assoc ai-event-receivers event (conj (get ai-event-receivers event) channel)))))

(defn send-all-receivers-ai-made-movement []
  (println "")
  (println ">> send-all-receivers-ai-made-movement")
  (println "ai-event-receivers: " ai-event-receivers)
  (doall (map send-single-receiver-ai-made-movement (get ai-event-receivers :ai-event-ai-made-movement))))

(defn send-single-receiver-ai-made-movement [channel]
  (println "")
  (println ">> send-single-receiver-ai-made-movement" channel)
  (put! channel {:command :ai-event-ai-made-movement}))

(defn ai-worker-make-move [event]
  (let []
    (println "")
    (println ">> ai-worker-make-move" event)
    (send-all-receivers-ai-made-movement)
    ))

; ; =====================================================

; ; this concurrent process receives board command messages
; ; and executes on them.  at present, the only thing it does
; ; is sets the desired game position to the desired piece
; (go (do
;     (println "")
;     (println "STARTED: Board Updater")
;     (while true
;       (let [command (<! board-commands)
;             current-command (:command event)] (do
;         (println "")
;         (println "Board Updater Command: " command)
;         (if (= :update-board-position current-command) (do
;           (println "")
;           (println "in command" command)
;           (println "board - before" board)
;           (update-board-position (:position command) (:piece command))
;           (println "board - after_" board)
;         ))
; )))))

(println "board - end")
