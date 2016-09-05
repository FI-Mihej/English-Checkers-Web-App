(ns lg-checkers.board
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [put! chan <!]]))

(enable-console-print!)

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

(defn neighbor-piece-by-direction [pos direction]
  (let []
    (get (to-array (compute-pos-neighbors-memo pos)) (get piece-neighbor-direction-number-by-direction direction))
    ))

(defn neighbor-piece-direction-by-neighbor-pos [pos neighbor-pos]
  (let [close-neighbor? (contains? (set (compute-pos-neighbors-memo pos)) neighbor-pos)
        up-left-neighbor (if (not close-neighbor?) (neighbor-piece-by-direction pos :up-left))
        up-right-neighbor (if (not close-neighbor?) (neighbor-piece-by-direction pos :up-right))
        down-left-neighbor (if (not close-neighbor?) (neighbor-piece-by-direction pos :down-left))
        down-right-neighbor (if (not close-neighbor?) (neighbor-piece-by-direction pos :down-right))]
    (if close-neighbor?
      (get piece-neighbor-direction-by-number (.indexOf (to-array (compute-pos-neighbors-memo pos)) neighbor-pos))
      (if (and (some? up-left-neighbor) (= neighbor-pos (neighbor-piece-by-direction up-left-neighbor :up-left))) :up-left
        (if (and (some? up-right-neighbor) (= neighbor-pos (neighbor-piece-by-direction up-right-neighbor :up-right))) :up-right
          (if (and (some? down-left-neighbor) (= neighbor-pos (neighbor-piece-by-direction down-left-neighbor :down-left))) :down-left
            (if (and (some? down-right-neighbor) (= neighbor-pos (neighbor-piece-by-direction down-right-neighbor :down-right))) :down-right)))))))

(defn good-piece-type-direction? [piece-type direction]
  (let [promoted? (contains? all-promoted-movable-pieces piece-type)
        kind-of-black-piece? (contains? all-black-movable-pieces piece-type)]
    (if promoted?
      true
      (if (= :empty-piece piece-type)
        false
        (if kind-of-black-piece?
          (contains? piece-neighbor-directions-black-forward direction)
          (contains? piece-neighbor-directions-red-forward direction))))))

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

(defonce app-state (atom {:user-is-allowed-to-move true}))

(compute-neighbor-positions)

; =====================================================

; Controller
(go (do
  (send-api-command-register-channel-to-receive-event board-events :api-event-unblock-user-board-input)
  (while true
    (let [event (<! board-events)
          current-event (:command event)]
      (if (= :board-clicked current-event)
        (controler-worker-board-clicked event))
      (if (= :api-event-unblock-user-board-input current-event)
        (controller-unblock-user-board-input))
))))

(def controller-user-board-actions-are-allowed true)

(defn controller-unblock-user-board-input []
  (do 
    (set! controller-user-board-actions-are-allowed true)
    (swap! app-state assoc :user-is-allowed-to-move true)
    (set! controller-last-click-board-pos nil)
    ))

(def controller-last-click-board-pos)

(defn controler-worker-board-clicked [event]
  (let [current-event (:command event)
        board-pos (:position event)
        same-board-pos? (== board-pos controller-last-click-board-pos)
        new-board-pos? (not same-board-pos?)]
    (do 
      (if controller-user-board-actions-are-allowed
        (if new-board-pos?
          (do (set! controller-last-click-board-pos board-pos)
            (send-api-command-board-piece-mouse-click board-pos)))))))

(defn send-api-command-board-piece-mouse-click [pos]
  (set! controller-user-board-actions-are-allowed false)
  (swap! app-state assoc :user-is-allowed-to-move false)
  (put! board-api-commands
        {:command :board-clicked
        :position pos}))

; =====================================================

; Logic API
(go (do 
    (send-ai-command-register-channel-to-receive-event board-api-commands :ai-event-ai-made-movement)
    (while true
      (let [event (<! board-api-commands)
            current-event (:command event)] (do
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
  (doall (map send-single-receiver-unblock-user-board-input (get api-event-receivers :api-event-unblock-user-board-input)))
)

(defn send-single-receiver-unblock-user-board-input [channel]
  (put! channel {:command :api-event-unblock-user-board-input}))

(def source-piece-position)
(def destination-piece-position)

(defn board-worker-board-clicked [event]
  (let [source-is-set? (some? source-piece-position)
        current-position (:position event)
        current-piece-type (get (deref board) current-position)
        source-original-piece-type (if (some? source-piece-position) (original-piece-type (get (deref board) source-piece-position)))] (do 
    (if (not source-is-set?) 
        (do 
          (if (contains? original-movable-pieces current-piece-type) 
              (do
                (set! source-piece-position current-position)
                (mark-piece-as source-piece-position :source-piece))
              (do
              ))
          (send-all-receivers-unblock-user-board-input))
        (do 
          (if (= source-piece-position current-position)
            (do 
              (update-board-position source-piece-position source-original-piece-type)
              (set! source-piece-position nil)
              (send-all-receivers-unblock-user-board-input))
            (do
              (if (= :empty-piece current-piece-type) 
                  (do 
                      (if (test-move-piece source-piece-position current-position) 
                          (do
                            ; (send-db-command-save-movement :user source-piece-position current-position)
                            (if (move-piece source-piece-position current-position)
                              (do 
                                (promote-piece current-position)
                                (send-db-command-save-movement :user :movement-is-over source-piece-position current-position (get (deref board) current-position))
                                (send-ai-command-compute-movement)
                                (set! source-piece-position nil))
                              (do
                                (promote-piece current-position)
                                (send-db-command-save-movement :user :movement-continues source-piece-position current-position (get (deref board) current-position))
                                (send-all-receivers-unblock-user-board-input)
                                (set! source-piece-position current-position))))
                          (do
                            (send-all-receivers-unblock-user-board-input)
                          )))
                  (do
                      (send-all-receivers-unblock-user-board-input)))
            )
          )
)))))

(defn test-move-piece [source-pos destination-pos]
  (let [piece-type (get (deref board) source-pos)
        source-piece-is-black? (contains? all-black-movable-pieces piece-type)
        direction (neighbor-piece-direction-by-neighbor-pos source-pos destination-pos)
        close-neighbor (if (some? direction) (neighbor-piece-by-direction source-pos direction))
        close-neighbor-type (if (some? close-neighbor) (get (deref board) close-neighbor))] (do
    (if (some? direction)
      (do 
        (if (good-piece-type-direction? piece-type direction)
          (do 
            (if (= destination-pos close-neighbor)
              (do 
                true)
              (do 
                (if source-piece-is-black?
                  (do 
                    (if (contains? all-red-movable-pieces close-neighbor-type)
                      (do 
                        true)
                      (do 
                        false)))
                  (do 
                    (if (contains? all-black-movable-pieces close-neighbor-type)
                      (do 
                        true)
                      (do 
                        false)))))))
          (do 
            false)))
      (do 
        false))
)))

(defn update-internal-score [piece-type original-piece-color-type delta-score]
  (let []
    ; (update-score-for-ui original-piece-color-type (* 100 delta-score))
    ))

(defn update-score-for-ui [original-piece-color-type delta-score]
  (let []
    ))

(defn is-there-are-victim? [test-pos source-pos actor-piece-type just-bool]
  (let [current-piece-color (original-piece-color actor-piece-type)
        test-piece-color (original-piece-color (get (deref board) test-pos))
        direction (neighbor-piece-direction-by-neighbor-pos source-pos test-pos)
        place-to-move-pos (if (some? direction) (neighbor-piece-by-direction test-pos direction))
        is-there-are-place-to-move? (if (some? place-to-move-pos)
            (= :empty-piece (get (deref board) place-to-move-pos))
            false)
        potentially-positive-answer (if just-bool
                                        is-there-are-place-to-move?
                                        (if is-there-are-place-to-move? test-pos nil))
        negative-answer (if just-bool false nil)
            ] (do
    (if (not= :empty-piece test-piece-color)
      (do 
        (if (not= current-piece-color test-piece-color)
          (do 
            potentially-positive-answer)
          (do 
            negative-answer)))
      (do 
        negative-answer)))))

(defn can-take-victim-enemy? [test-pos actor-piece-type]
  (let [] (do
    (contains? (set (map #(is-there-are-victim? % test-pos actor-piece-type true) (set (remove nil? (compute-pos-neighbors-memo test-pos))))) true)
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
        direction (neighbor-piece-direction-by-neighbor-pos source-pos destination-pos)
        close-neighbor (neighbor-piece-by-direction source-pos direction)]
    (update-board-position source-pos :empty-piece)
    (if (= destination-pos close-neighbor) 
      (do 
        (update-board-position destination-pos current-original-piece-type)
        true)
      (do 
        (update-internal-score current-source-piece-type current-original-piece-color-type 1)
        (update-board-position close-neighbor :empty-piece)
        (if (can-take-victim-enemy? destination-pos current-original-piece-type)
          (do 
            (update-board-position destination-pos current-source-piece-type)
            false)
          (do 
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

(def original-piece-color-for-ai :red-piece)
(def movable-piece-colors-for-ai (if (= :red-piece original-piece-color-for-ai) all-red-movable-pieces all-black-movable-pieces))

(go (do 
    (while true
      (let [event (<! ai-commands)
            current-event (:command event)] (do
        (if (= :make-move current-event)
          (ai-worker-make-move event))
        (if (= :register-channel-to-receive-event current-event)
          (ai-worker-register-channel-to-receive-event event))
)))))

(def ai-event-receivers {:ai-event-ai-made-movement #{}})

(defn send-ai-command-register-channel-to-receive-event [channel event]
  (put! ai-commands
        {:command :register-channel-to-receive-event
        :channel channel
        :event event}))

(defn ai-worker-register-channel-to-receive-event [full-event]
  (let [channel (:channel full-event)
        event (:event full-event) ] 
    (set! ai-event-receivers (assoc ai-event-receivers event (conj (get ai-event-receivers event) channel)))))

(defn send-all-receivers-ai-made-movement []
  (doall (map send-single-receiver-ai-made-movement (get ai-event-receivers :ai-event-ai-made-movement))))

(defn send-single-receiver-ai-made-movement [channel]
  (put! channel {:command :ai-event-ai-made-movement}))

(defn ai-worker-make-move [event]
  (let []
    (make-move false)
    (send-all-receivers-ai-made-movement)
    ))

(defn calculate-ai-piece-to-move [captures-only]
  (let [neighbors (calculate-neighbors)
        list-of-black-victims (seq (calculate-real-black-victim-neighbors neighbors))
        list-of-available-moves (seq (calculate-red-moves neighbors))] (do
    (if (< 0 (count list-of-black-victims))
      [:capture (first list-of-black-victims)]
      (if (not captures-only)
        (if (< 0 (count list-of-available-moves))
          [:movement (first list-of-available-moves)])))
    )))

(defn calculate-move [captures-only]
  (let [move-data (calculate-ai-piece-to-move captures-only)
        move-type (if (some? move-data) (get move-data 0))
        move-positions (if (some? move-data) (get move-data 1))
        source-pos (if (some? move-positions) (get move-positions 0))
        destination-variants  (if (some? move-positions) (get move-positions 1))
        destination-pos (if (some? destination-variants) (first destination-variants))
        ] (do
    (if (some? destination-pos) [source-pos destination-pos move-type])
    )))

(defn make-move [captures-only]
  (let [move (calculate-move captures-only)
        source-pos (if (some? move) (get move 0))
        destination-pos (if (some? move) (get move 1))
        move-type (if (some? move) (get move 2))] (do
    (if (some? move) 
      (do
        (move-piece source-pos destination-pos)
        (promote-piece destination-pos)
        (send-db-command-save-movement :ai :movement-is-over source-pos destination-pos (get (deref board) source-pos))
        (if (= :capture move-type) 
          (if (< 0 (count (calculate-real-black-victim-neighbors (calculate-neighbors)))) (make-move true)))
    ))
    )))

(defn ai-piece [index]
  (let [our-board (deref board)
        our-piece-type (get our-board index)] (do
    (if (contains? movable-piece-colors-for-ai our-piece-type) index nil)
    )))

(defn list-of-red-pieces []
  (let [] (do
    (set (remove nil? (map ai-piece (range 1 33))))
    )))

(defn calculate-neighbors []
  (let [red-pieces (list-of-red-pieces)] (do
    (map (fn [pos] [pos (remove nil?(compute-pos-neighbors-memo pos))]) red-pieces)
    )))

(defn calculate-real-black-victim-neighbors [neighbors]
  (let [] (do
    (remove nil? (map (fn [piece-data] (check-neighbors-for-piece piece-data)) neighbors))
    )))

(defn check-neighbors-for-piece [piece-data]
  (let [piece-pos (get piece-data 0)
        piece-potential-neighbors (get piece-data 1)
        result (check-neighbors-for-piece-internal piece-data)] (do
    (if (< 0 (count result)) [piece-pos result] nil)
    )))

(defn check-neighbors-for-piece-internal [piece-data]
  (let [piece-pos (get piece-data 0)
        piece-potential-neighbors (get piece-data 1)] (do
    (remove nil? (map #(check-is-neighbor-is-victim piece-pos %) (seq piece-potential-neighbors)))
    )))

(defn check-is-neighbor-is-victim [ai-pos, neighbor-pos]
  (let [ai-pos-type (get (deref board) ai-pos)
        neighbor-type (get (deref board) neighbor-pos)
        direction (neighbor-piece-direction-by-neighbor-pos ai-pos, neighbor-pos)
        good-direction? (good-piece-type-direction? ai-pos-type direction)
        piece-after-neighbor (neighbor-piece-by-direction neighbor-pos direction)
        piece-after-neighbor-type (if (some? piece-after-neighbor) (get (deref board) piece-after-neighbor))
        ] (do
    (if good-direction?
      (if (= :black-piece neighbor-type)
        (if (some? piece-after-neighbor-type) 
          (if (= :empty-piece piece-after-neighbor-type) piece-after-neighbor)))))))

(defn calculate-red-moves [neighbors]
  (let [] (do
    (remove nil? (map (fn [piece-data] (moves-check-neighbors-for-piece piece-data)) neighbors))
    )))

(defn moves-check-neighbors-for-piece [piece-data]
  (let [piece-pos (get piece-data 0)
        piece-potential-neighbors (get piece-data 1)
        result (moves-check-neighbors-for-piece-internal piece-data)] (do
    (if (< 0 (count result)) [piece-pos result] nil)
    )))

(defn moves-check-neighbors-for-piece-internal [piece-data]
  (let [piece-pos (get piece-data 0)
        piece-potential-neighbors (get piece-data 1)] (do
    (remove nil? (map #(moves-check-is-neighbor-is-good-place-to-move piece-pos %) (seq piece-potential-neighbors)))
    )))

(defn moves-check-is-neighbor-is-good-place-to-move [ai-pos, neighbor-pos]
  (let [ai-pos-type (get (deref board) ai-pos)
        neighbor-type (get (deref board) neighbor-pos)
        direction (neighbor-piece-direction-by-neighbor-pos ai-pos, neighbor-pos)
        good-direction? (good-piece-type-direction? ai-pos-type direction)
        ] (do
    (if good-direction?
      (if (= :empty-piece neighbor-type) neighbor-pos)))))
