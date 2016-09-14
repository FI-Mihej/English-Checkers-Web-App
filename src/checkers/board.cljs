(ns lg-checkers.board
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [put! chan <! >! timeout close!]]
            [reagent.core :as rc]
            [datascript.core :as ds]
            [datascript.db :as db]))

(enable-console-print!)

; ==============================================================================
; ==============================================================================
; === Utility Functions ========================================================

; =====================================================
; === Events registering and processing ===============

;;; EXAMPLE OF 'event-receivers-map':
;;;
;;;       (def some-module-event-receivers {
;;;         :some-first-event #{}
;;;         :some-second-event #{}
;;;         :some-other-event #{}
;;;       })
;;;
;;; After initialization (using 'register-channel-to-receive-event'
;;; function) it will be:
;;;
;;;       (def some-module1-event-receivers {
;;;         :some-first-event #{module2-chan module3-chan}
;;;         :some-second-event #{module3-chan}
;;;         :some-other-event #{module2-chan module10-chan module12-chan}
;;;       })

(defn register-channel-to-receive-event [event-receivers-map event-id channel]
  (assoc event-receivers-map event-id (conj (get event-receivers-map event-id) channel)))

(defn send-event-to-all-receivers [event-receivers-map event-id event-data]
  (doall (map #(send-event-to-single-receiver % event-data) (get event-receivers-map event-id))))

(defn send-event-to-single-receiver [channel event]
  (put! channel event))

; ==============================================================================
; ==============================================================================
; === Global Static Data =======================================================

; =====================================================
; === Global Game Constants ===========================

; Destinations
(def piece-neighbor-directions #{:up-left :up-right :down-left :down-right})
(def piece-neighbor-directions-black-forward #{:up-left :up-right})
(def piece-neighbor-directions-red-forward #{:down-left :down-right})
(def piece-neighbor-direction-by-number { 0 :up-left
                                          1 :up-right
                                          2 :down-left
                                          3 :down-right})
(def piece-neighbor-direction-number-by-direction { :up-left 0
                                                    :up-right 1
                                                    :down-left 2
                                                    :down-right 3})

; Pieces
(def original-piece-colors #{ :black-piece 
                              :red-piece})

(def all-movable-pieces #{:black-piece 
                          :black-piece-marked 
                          :red-piece 
                          :red-piece-marked 
                          :prom-black-piece 
                          :prom-black-piece-marked 
                          :prom-red-piece 
                          :prom-red-piece-marked})
(def all-normal-movable-pieces #{ :black-piece 
                                  :black-piece-marked 
                                  :red-piece 
                                  :red-piece-marked})
(def all-promoted-movable-pieces #{ :prom-black-piece 
                                    :prom-black-piece-marked 
                                    :prom-red-piece 
                                    :prom-red-piece-marked})

(def original-movable-pieces #{ :black-piece 
                                :red-piece 
                                :prom-black-piece 
                                :prom-red-piece})
(def original-normal-movable-pieces #{:black-piece 
                                      :red-piece})
(def original-promoted-movable-pieces #{:prom-black-piece 
                                        :prom-red-piece})

(def marked-movable-pieces #{ :black-piece-marked 
                              :red-piece-marked 
                              :prom-black-piece-marked 
                              :prom-red-piece-marked})
(def marked-normal-movable-pieces #{:black-piece-marked 
                                    :red-piece-marked})
(def marked-promoted-movable-pieces #{:prom-black-piece-marked 
                                      :prom-red-piece-marked})

(def all-black-movable-pieces #{:black-piece 
                                :black-piece-marked 
                                :prom-black-piece 
                                :prom-black-piece-marked})
(def all-red-movable-pieces #{:red-piece 
                              :red-piece-marked 
                              :prom-red-piece 
                              :prom-red-piece-marked})

(def way-to-mark-piece {:black-piece :black-piece-marked
                        :red-piece :red-piece-marked
                        :prom-black-piece :prom-black-piece-marked
                        :prom-red-piece :prom-red-piece-marked})
(def way-to-unmark-piece {:black-piece-marked :black-piece
                          :red-piece-marked :red-piece
                          :prom-black-piece-marked :prom-black-piece
                          :prom-red-piece-marked :prom-red-piece})

(def opponent-piece-color { :black-piece :red-piece
                            :red-piece :black-piece})

; Positional Constants
(def top-row 1)
(def bottom-row 8)

(def promotion-row-by-original-piece-color {:black-piece top-row
                                            :red-piece bottom-row})
(def promotion-piece-type-by-original-piece-color { :black-piece :prom-black-piece
                                                    :red-piece :prom-red-piece})
(def promotion-piece-type-by-piece-color {:black-piece :prom-black-piece
                                          :red-piece :prom-red-piece
                                          :black-piece-marked :prom-black-piece-marked
                                          :red-piece-marked :prom-red-piece-marked})

; ==============================================================================
; ==============================================================================
; === Utility Functions for processing using Global Static Data ================

; =====================================================
; === Piece Type/Color and Position processing ========

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
        (if kind-of-red-piece? :red-piece :empty-piece))))

(defn row-of-the-piece-position [pos]
  (Math/ceil (/ pos 4)))

(defn piece-can-be-promoted-to [pos piece-type]
  (let [piece-color (original-piece-color piece-type)
        piece-row (row-of-the-piece-position pos)]
    (if (= piece-row (get promotion-row-by-original-piece-color piece-color)) 
        (get promotion-piece-type-by-piece-color piece-type))))

; given a board position, return the position of neighbors
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

; =====================================================
; === Board Creation ==================================

; initialize a board, where positions are indexed 1-32.
; each position is an atom containing the symbol of the
; piece in it.
(defn create-board []
  (apply sorted-map
        (flatten
          (map-indexed (fn [i v] (vector (inc i) v))
                      (flatten
                        [(repeat 12 :red-piece)
                        (repeat 8 :empty-piece)
                        (repeat 12 :black-piece)])))))

; ==============================================================================
; ==============================================================================
; === Global Dynamic Data ======================================================

; =====================================================
; === Global Channels =================================

; Commands to Controller.
(def board-events (chan))

; Commands to Logic API (Model).
(def api-commands (chan))

; Commands to Board Updater process. 
; (May be usefull for some external tests.)
(def board-commands (chan))

; Commands to AI process
(def ai-commands (chan))

; Commands to Game History DB
(def game-history-db-commands (chan))

; Commands to Game History DB Timer
(def game-history-db-timer-commands (chan))

; =====================================================
; === Global Game State ===============================

; instantiate our game board state, initializing our
; board with starting pieces
(defonce board (rc/atom (create-board)))

(defonce app-state (rc/atom { :user-is-allowed-to-move true 
                              :captured-pieces 0 
                              :number-of-mouse-clicks 0
                              :replay-is-in-progress false
                              :delay-timer-in-ai-is-on false
                              :ai-delay-timer-can-be-toggled true
                              :ai-can-be-toggled true
                              :original-piece-color-for-ai :red-piece
                              :ai-timeout-for-work-emulation 5000
                              :replay-movement-timeout 750
                              :user-board-actions-are-allowed true
                              :user-can-control-all-pieces false}))

; ==============================================================================
; ==============================================================================
; === Utility Functions for processing using Global Dynamic Data ===============

; =====================================================
; === Board ===========================================

(defn update-board-position [pos piece]
  (swap! board assoc pos piece))

(defn reset-board []
  (swap! board merge (create-board)))

; =====================================================
; === Score ===========================================

(defn update-internal-score [piece-type original-piece-color-type delta-score]
    (swap! app-state assoc :captured-pieces (+ delta-score (get (deref app-state) :captured-pieces)))
    (update-score-for-ui original-piece-color-type (* 100 delta-score)))

(defn update-score-for-ui [original-piece-color-type delta-score]
    )

(defn reset-internal-score-and-srore-for-ui []
    (swap! app-state assoc :captured-pieces 0))

; =====================================================
; === Pieces ==========================================

(defn test-move-piece [source-pos destination-pos]
  (let [piece-type (get (deref board) source-pos)
        source-piece-is-black? (contains? all-black-movable-pieces piece-type)
        direction (neighbor-piece-direction-by-neighbor-pos source-pos destination-pos)
        close-neighbor (if (some? direction) (neighbor-piece-by-direction source-pos direction))
        close-neighbor-type (if (some? close-neighbor) (get (deref board) close-neighbor))] (do
    (if (some? direction)
        (if (good-piece-type-direction? piece-type direction)
            (if (= destination-pos close-neighbor)
                true
                (if source-piece-is-black?
                    (if (contains? all-red-movable-pieces close-neighbor-type) true false)
                    (if (contains? all-black-movable-pieces close-neighbor-type) true false)))
            false)
        false))))

(defn is-there-are-victim? [test-pos source-pos actor-piece-type just-bool]
  (let [current-piece-color (original-piece-color actor-piece-type)
        test-piece-color (original-piece-color (get (deref board) test-pos))
        direction (neighbor-piece-direction-by-neighbor-pos source-pos test-pos)
        good-direction? (good-piece-type-direction? actor-piece-type direction)
        place-to-move-pos (if (some? direction) (neighbor-piece-by-direction test-pos direction))
        is-there-are-place-to-move? (if (some? place-to-move-pos)
            (= :empty-piece (get (deref board) place-to-move-pos))
            false)
        potentially-positive-answer (if just-bool
                                        (and good-direction? is-there-are-place-to-move?)
                                        (if (and good-direction? is-there-are-place-to-move?) test-pos nil))
        negative-answer (if just-bool false nil)]
    (if (not= :empty-piece test-piece-color)
        (if (not= current-piece-color test-piece-color)
            potentially-positive-answer
            negative-answer)
        negative-answer)))

(defn can-take-victim-enemy? [test-pos actor-piece-type]
  (let [] (do
    (contains? (set (map #(is-there-are-victim? % test-pos actor-piece-type true) (set (remove nil? (compute-pos-neighbors-memo test-pos))))) true))))

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
          (promote-piece destination-pos)
          true)
        (do 
          (update-internal-score current-source-piece-type current-original-piece-color-type 1)
          (update-board-position close-neighbor :empty-piece)
          (update-board-position destination-pos current-original-piece-type)
          (promote-piece destination-pos)
          (if (can-take-victim-enemy? destination-pos (get (deref board) destination-pos))
              (do 
                (mark-piece-as destination-pos :source-piece)
                false)
              (do 
                (mark-piece-as destination-pos :normal-piece)
                true))))))

(defn mark-piece-as [pos state]
  (let [current-piece-type (get (deref board) pos)] 
    (if (= :source-piece state)
        (if (contains? original-movable-pieces current-piece-type)
            (update-board-position pos (get way-to-mark-piece current-piece-type))))
    (if (= :normal-piece state)
        (if (contains? marked-movable-pieces current-piece-type)
            (update-board-position pos (get way-to-unmark-piece current-piece-type)))
        )))

; =====================================================
; === Neighbors ==========================================

(defn movable-piece-colors-for-actor [current-piece-color] 
  (if (= :red-piece current-piece-color) all-red-movable-pieces all-black-movable-pieces))

(defn check-board-index-to-color [current-piece-color index]
  (let [our-board (deref board)
        our-piece-type (get our-board index)]
    (if (contains? (movable-piece-colors-for-actor current-piece-color) our-piece-type) index nil)))

(defn list-of-current-actors-pieces [current-piece-color]
  (set (remove nil? (map #(check-board-index-to-color current-piece-color %) (range 1 33)))))

(defn calculate-neighbors [current-piece-color]
  (let [actors-pieces (list-of-current-actors-pieces current-piece-color)]
    (map (fn [pos] [pos (remove nil?(compute-pos-neighbors-memo pos))]) actors-pieces)))

; =====================================================
; === Victims ==========================================

(defn calculate-real-opponent-victim-neighbors [neighbors]
  (remove nil? (map (fn [piece-data] (check-neighbors-for-piece piece-data)) neighbors)))

(defn check-neighbors-for-piece [piece-data]
  (let [piece-pos (get piece-data 0)
        piece-potential-neighbors (get piece-data 1)
        result (check-neighbors-for-piece-internal piece-data)]
    (if (< 0 (count result)) [piece-pos result] nil)))

(defn check-neighbors-for-piece-internal [piece-data]
  (let [piece-pos (get piece-data 0)
        piece-potential-neighbors (get piece-data 1)]
    (remove nil? (map #(check-is-neighbor-is-victim piece-pos %) (seq piece-potential-neighbors)))))

(defn check-is-neighbor-is-victim [actors-piece-pos, neighbor-pos]
  (let [actors-piece-type (get (deref board) actors-piece-pos)
        actors-color (original-piece-color actors-piece-type)
        opponent-color (actors-color opponent-piece-color)
        neighbor-type (get (deref board) neighbor-pos)
        neighbor-original-color (original-piece-color neighbor-type)
        direction (neighbor-piece-direction-by-neighbor-pos actors-piece-pos, neighbor-pos)
        good-direction? (good-piece-type-direction? actors-piece-type direction)
        piece-after-neighbor (neighbor-piece-by-direction neighbor-pos direction)
        piece-after-neighbor-type (if (some? piece-after-neighbor) (get (deref board) piece-after-neighbor))]
    (if good-direction?
        (if (= opponent-color neighbor-original-color)
            (if (some? piece-after-neighbor-type) 
                (if (= :empty-piece piece-after-neighbor-type) piece-after-neighbor))))))

(defn destination-should-and-have-victims [source-pos destination-pos]
  (let [actors-piece-type (get (deref board) source-pos)
        actors-color (original-piece-color actors-piece-type)
        opponent-color (actors-color opponent-piece-color)
        neighbors (calculate-neighbors actors-color)
        list-of-opponent-victims (seq (calculate-real-opponent-victim-neighbors neighbors))
        victims-is-not-empty (if (< 0 (count list-of-opponent-victims)) true false)
        filtered-victims (filter (fn [victim] (if (= source-pos (get victim 0)) true false)) list-of-opponent-victims)
        filtered-victims-is-not-empty (if (< 0 (count filtered-victims)) true false)
        is-destination-pos-is-in-victims-list? (if (contains? (set (get (first filtered-victims) 1)) destination-pos) true false)
        ]
    (if victims-is-not-empty
        (if filtered-victims-is-not-empty 
            (if is-destination-pos-is-in-victims-list?
                true
                false) 
            false)
        true)
))

; =====================================================
; === Movement ==========================================

(defn calculate-actors-pieces-moves [neighbors]
  (remove nil? (map (fn [piece-data] (moves-check-neighbors-for-piece piece-data)) neighbors)))

(defn moves-check-neighbors-for-piece [piece-data]
  (let [piece-pos (get piece-data 0)
        piece-potential-neighbors (get piece-data 1)
        result (moves-check-neighbors-for-piece-internal piece-data)]
    (if (< 0 (count result)) [piece-pos result] nil)))

(defn moves-check-neighbors-for-piece-internal [piece-data]
  (let [piece-pos (get piece-data 0)
        piece-potential-neighbors (get piece-data 1)]
    (remove nil? (map #(moves-check-is-neighbor-is-good-place-to-move piece-pos %) (seq piece-potential-neighbors)))))

(defn moves-check-is-neighbor-is-good-place-to-move [actors-piece-pos, neighbor-pos]
  (let [actors-piece-type (get (deref board) actors-piece-pos)
        neighbor-type (get (deref board) neighbor-pos)
        direction (neighbor-piece-direction-by-neighbor-pos actors-piece-pos, neighbor-pos)
        good-direction? (good-piece-type-direction? actors-piece-type direction)]
    (if good-direction?
        (if (= :empty-piece neighbor-type) neighbor-pos))))

; ==============================================================================
; ==============================================================================
; === Controller ===============================================================

; =====================================================
; === Controller process ==============================

(go (do
  (send-api-command-register-channel-to-receive-event board-events :api-event-unblock-user-board-input)
  (send-api-command-register-channel-to-receive-event board-events :api-event-ai-delay-timer-toggled)
  (send-api-command-register-channel-to-receive-event board-events :api-event-ai-toggled)
  (send-api-command-register-channel-to-receive-event board-events :api-event-history-replay-stopped)
  (while true
    (let [event (<! board-events)
          current-event (:command event)]
      (println "")
      (println "<<>> Controller: " event)
      (if (= :api-event-unblock-user-board-input current-event)
          (controller-worker-unblock-user-board-input event))
      (if (= :api-event-ai-delay-timer-toggled current-event)
          (controller-worker-ai-delay-timer-toggled event))
      (if (= :api-event-ai-toggled current-event)
          (controller-worker-ai-toggled event))
      (if (= :api-event-history-replay-stopped current-event)
          (controller-worker-history-replay-stopped event))
      (if (= :board-clicked current-event)
          (controller-worker-board-clicked event))
      (if (= :replay-recorded-game current-event)
          (controller-worker-replay-recorded-game event))
      (if (= :toggle-delay-timer-in-ai current-event)
          (controller-worker-toggle-delay-timer-in-ai event))
      (if (= :toggle-ai current-event)
          (controller-worker-toggle-ai event))
      (println "<<>> Controller events done")
))))

; === Initialization ===

(def controller-last-click-board-pos)

; === Interface ===

(defn send-controller-command-board-click [board-pos]
  (println "")
  (println " >> send-controller-command-board-click: " board-pos)
  (put! board-events {:command :board-clicked
                      :position board-pos})
   (println " << send-controller-command-board-click")
)

(defn send-controller-command-replay-recorded-game []
  (println "")
  (println " >> send-controller-command-replay-recorded-game")
  (put! board-events {:command :replay-recorded-game})
  (println " << send-controller-command-replay-recorded-game")
)

(defn send-controller-command-toggle-delay-timer-in-ai []
  (println "")
  (println " >> send-controller-command-toggle-delay-timer-in-ai")
  (put! board-events {:command :toggle-delay-timer-in-ai})
  (println " << send-controller-command-toggle-delay-timer-in-ai")
)

(defn send-controller-command-toggle-ai []
  (println "")
  (println " >> send-controller-command-toggle-ai")
  (put! board-events {:command :toggle-ai})
  (println " << send-controller-command-toggle-ai")
)

; === Implementation ===

; = Workers =
(defn controller-worker-unblock-user-board-input [event]
  (do 
    (swap! app-state assoc :user-board-actions-are-allowed true)
    (swap! app-state assoc :user-is-allowed-to-move true)
    (set! controller-last-click-board-pos nil)
    ))

(defn controller-worker-ai-delay-timer-toggled [event]
  (swap! app-state assoc :ai-delay-timer-can-be-toggled true))

(defn controller-worker-ai-toggled [event]
  (swap! app-state assoc :ai-can-be-toggled true))

(defn controller-worker-history-replay-stopped [event]
  (swap! app-state assoc :user-board-actions-are-allowed true)
  (swap! app-state assoc :replay-is-in-progress false))

(defn controller-worker-board-clicked [event]
  (let [current-event (:command event)
        board-pos (:position event)
        red-piece? (contains? all-red-movable-pieces (get (deref board) board-pos))
        user-can-control-all-pieces (:user-can-control-all-pieces (deref app-state))
        allowed-piece-type? (or (and (not red-piece?) (not user-can-control-all-pieces)) user-can-control-all-pieces)
        same-board-pos? (== board-pos controller-last-click-board-pos)
        new-board-pos? (not same-board-pos?)]
    (do
      (controller-internal-update-number-of-mouse-clicks-for-ui)
      (if allowed-piece-type? 
          (if (:user-board-actions-are-allowed (deref app-state))
              (if new-board-pos?
                (do (set! controller-last-click-board-pos board-pos)
                  (controller-internal-send-api-command-mouse-click-to-piece-on-board board-pos))))))))

(defn controller-worker-replay-recorded-game [event]
  (swap! app-state assoc :user-board-actions-are-allowed false)
  (swap! app-state assoc :replay-is-in-progress true)
  (send-api-command-replay-recorded-game))

(defn controller-worker-toggle-delay-timer-in-ai [event]
  (swap! app-state assoc :ai-delay-timer-can-be-toggled false)
  (send-api-command-toggle-delay-timer-in-ai))

(defn controller-worker-toggle-ai [event]
  (swap! app-state assoc :ai-can-be-toggled false)
  (send-api-command-toggle-ai))

; = Internal =
(defn controller-internal-send-api-command-mouse-click-to-piece-on-board [pos]
  (swap! app-state assoc :user-board-actions-are-allowed false)
  (swap! app-state assoc :user-is-allowed-to-move false)
  (send-api-command-mouse-click-to-piece-on-board pos))

(defn controller-internal-update-number-of-mouse-clicks-for-ui []
    (swap! app-state assoc :number-of-mouse-clicks (+ 1 (get (deref app-state) :number-of-mouse-clicks))))


; ==============================================================================
; ==============================================================================
; === Logic API (Model) ========================================================

; =====================================================
; === Logic API process ===============================

(go (do 
    (send-ai-command-register-channel-to-receive-event api-commands :ai-event-ai-made-movement)
    (send-ai-command-register-channel-to-receive-event api-commands :ai-event-delay-timer-toggled)
    (send-ai-command-register-channel-to-receive-event api-commands :ai-event-ai-toggled)
    (send-game-history-db-command-register-channel-to-receive-event api-commands :game-history-db-event-replay-started)
    (send-game-history-db-command-register-channel-to-receive-event api-commands :game-history-db-event-replay-stopped)
    (send-game-history-db-command-register-channel-to-receive-event api-commands :game-history-db-event-movement)
    (while true
      (let [event (<! api-commands)
            current-event (:command event)] (do
        (println "")
        (println "<<>> Model: " event)
        (if (= :register-channel-to-receive-event current-event)
            (api-worker-register-channel-to-receive-event event))
        (if (= :mouse-click-to-piece-on-board current-event)
            (api-worker-board-worker-board-clicked event))
        (if (= :toggle-delay-timer-in-ai current-event)
            (api-worker-toggle-delay-timer-in-ai event))
        (if (= :toggle-ai current-event)
            (api-worker-toggle-ai event))
        (if (= :replay-recorded-game current-event)
            (api-worker-replay-recorded-game event))
        (if (= :ai-event-ai-made-movement current-event)
            (api-worker-ai-event-ai-made-movement event))
        (if (= :ai-event-delay-timer-toggled current-event)
            (api-worker-ai-event-delay-timer-toggled event))
        (if (= :ai-event-ai-toggled current-event)
            (api-worker-ai-event-ai-toggled event))
        (if (= :game-history-db-event-replay-started current-event)
            (do (api-worker-game-history-db-event-replay-started event)
                (<! (timeout (get (deref app-state) :replay-movement-timeout)))))
        (if (= :game-history-db-event-replay-stopped current-event)
            (api-worker-game-history-db-event-replay-stopped event))
        (if (= :game-history-db-event-movement current-event)
            (if (api-worker-game-history-db-event-movement event)
                (<! (timeout (get (deref app-state) :replay-movement-timeout)))))
        (println "<<>> Model events done")
)))))

; === Initialization ===

(def api-event-receivers {:api-event-unblock-user-board-input #{}
                          :api-event-ai-delay-timer-toggled #{}
                          :api-event-ai-toggled #{}
                          :api-event-history-replay-stopped #{}})
(def source-piece-position)
(def destination-piece-position)

; === Interface ===

(defn send-api-command-register-channel-to-receive-event [channel event]
  (println "")
  (println " >> send-api-command-register-channel-to-receive-event: " channel event)
  (put! api-commands
        {:command :register-channel-to-receive-event
        :channel channel
        :event event})
  (println " << send-api-command-register-channel-to-receive-event")
)

(defn send-api-command-mouse-click-to-piece-on-board [pos]
  (println "")
  (println " >> send-api-command-mouse-click-to-piece-on-board: " pos)
  (put! api-commands
        {:command :mouse-click-to-piece-on-board
        :position pos})
  (println " << send-api-command-mouse-click-to-piece-on-board")
)

(defn send-api-command-toggle-delay-timer-in-ai []
  (println "")
  (println " >> send-api-command-toggle-delay-timer-in-ai")
  (put! api-commands
        {:command :toggle-delay-timer-in-ai})
  (println " << send-api-command-toggle-delay-timer-in-ai")
)

(defn send-api-command-toggle-ai []
  (println "")
  (println " >> send-api-command-toggle-ai")
  (put! api-commands
        {:command :toggle-ai})
  (println " << send-api-command-ai")
)

(defn send-api-command-replay-recorded-game []
  (println "")
  (println " >> send-api-command-replay-recorded-game")
  (put! api-commands
        {:command :replay-recorded-game})
  (println " << send-api-command-replay-recorded-game")
)

; === Implementation ===

; = General =
(defn api-worker-register-channel-to-receive-event [full-event]
  (let [channel (:channel full-event)
        event (:event full-event) ] 
    (set! api-event-receivers (register-channel-to-receive-event api-event-receivers event channel))))

(defn api-send-event-to-all-receivers [event-data]
  (let [event-id (:command event-data)]
    (send-event-to-all-receivers api-event-receivers event-id event-data))
)

; = Events =
(defn api-do-send-to-all-receivers-unblock-user-board-input []
  (api-send-event-to-all-receivers {:command :api-event-unblock-user-board-input}))

(defn api-do-send-to-all-receivers-ai-delay-timer-toggled []
  (api-send-event-to-all-receivers {:command :api-event-ai-delay-timer-toggled}))

(defn api-do-send-to-all-receivers-ai-toggled []
  (api-send-event-to-all-receivers {:command :api-event-ai-toggled}))

(defn api-do-send-to-all-receivers-history-replay-stopped []
  (api-send-event-to-all-receivers {:command :api-event-history-replay-stopped}))

; = Workers
(defn api-worker-board-worker-board-clicked [event]
  (let [source-is-set? (some? source-piece-position)
        current-position (:position event)
        current-piece-type (get (deref board) current-position)
        source-original-piece-type (if (some? source-piece-position) (original-piece-type (get (deref board) source-piece-position)))] (do 
    (if (not source-is-set?) 
        (do 
          (if (contains? original-movable-pieces current-piece-type) 
              (do
                (set! source-piece-position current-position)
                (mark-piece-as source-piece-position :source-piece)))
          (api-do-send-to-all-receivers-unblock-user-board-input))
        (if (= source-piece-position current-position)
            (do 
              (update-board-position source-piece-position source-original-piece-type)
              (set! source-piece-position nil)
              (api-do-send-to-all-receivers-unblock-user-board-input))
            (if (= :empty-piece current-piece-type) 
                (if (test-move-piece source-piece-position current-position) 
                    (if (destination-should-and-have-victims source-piece-position current-position)
                        (if (move-piece source-piece-position current-position)
                            (api-internal-movement-is-over current-position)
                            (api-internal-movement-continues current-position))
                        (api-do-send-to-all-receivers-unblock-user-board-input))
                    (api-do-send-to-all-receivers-unblock-user-board-input))
                (api-do-send-to-all-receivers-unblock-user-board-input)))))))

(defn api-worker-ai-event-ai-made-movement [event]
  (api-do-send-to-all-receivers-unblock-user-board-input))

(defn api-worker-ai-event-delay-timer-toggled [event]
  (api-do-send-to-all-receivers-ai-delay-timer-toggled))

(defn api-worker-ai-event-ai-toggled [event]
  (api-do-send-to-all-receivers-ai-toggled))

(defn api-worker-toggle-delay-timer-in-ai [event]
  (send-ai-command-toggle-delay-timer-in-ai))

(defn api-worker-toggle-ai [event]
  (send-ai-command-toggle-ai))

(defn api-worker-replay-recorded-game [event]
  (send-game-history-db-command-replay-recorded-game))

(defn api-worker-game-history-db-event-replay-started [event]
  (reset-board)
  (reset-internal-score-and-srore-for-ui))

(defn api-worker-game-history-db-event-replay-stopped [event]
  (api-do-send-to-all-receivers-history-replay-stopped))

(defn api-worker-game-history-db-event-movement [event]
  (let [movement-data (:movement-data event)
        actor (:actor movement-data)
        movement-continuation (:movement-continuation movement-data)
        source-piece-position (:source-piece-position movement-data)
        destination-piece-position (:destination-piece-position movement-data)
        piece-type (:piece-type movement-data)]
    (move-piece source-piece-position destination-piece-position)
    (if (= :movement-is-over movement-continuation) true false)))

; = Internal =
(defn api-internal-movement-is-over [current-position]
  (send-game-history-db-command-save-movement :user :movement-is-over source-piece-position current-position (get (deref board) current-position))
  (send-ai-command-compute-movement)
  (set! source-piece-position nil))

(defn api-internal-movement-continues [current-position]
  (send-game-history-db-command-save-movement :user :movement-continues source-piece-position current-position (get (deref board) current-position))
  (api-do-send-to-all-receivers-unblock-user-board-input)
  (set! source-piece-position current-position))

; =====================================================
; === AI process ======================================

(go (do 
    (while true
      (let [event (<! ai-commands)
            current-event (:command event)] (do
        (println "")
        (println "<<>> AI: " event)
        (if (= :register-channel-to-receive-event current-event)
            (ai-worker-register-channel-to-receive-event event))
        (if (= :compute-movement current-event)
            (if (not (:user-can-control-all-pieces (deref app-state)))
                (do
                  (if (get (deref app-state) :delay-timer-in-ai-is-on) (<! (timeout (get (deref app-state) :ai-timeout-for-work-emulation))))
                  (ai-worker-make-move event))
                (ai-worker-make-no-move event)))
        (if (= :toggle-delay-timer-in-ai current-event)
            (ai-worker-toggle-delay-timer-in-ai event))
        (if (= :toggle-ai current-event)
            (ai-worker-toggle-ai event))
        (println "<<>> AI events done")
)))))

; === Initialization ===

(def ai-event-receivers { :ai-event-ai-made-movement #{}
                          :ai-event-delay-timer-toggled #{}
                          :ai-event-ai-toggled #{}})

; === Interface ===

(defn send-ai-command-register-channel-to-receive-event [channel event]
  (println "")
  (println " >> send-ai-command-register-channel-to-receive-event: " channel event)
  (put! ai-commands
        {:command :register-channel-to-receive-event
        :channel channel
        :event event})
  (println " << send-ai-command-register-channel-to-receive-event")
)

(defn send-ai-command-compute-movement []
  (println "")
  (println " >> send-ai-command-compute-movement")
  (put! ai-commands
        {:command :compute-movement})
  (println " << send-ai-command-compute-movement")
)

(defn send-ai-command-toggle-delay-timer-in-ai []
  (println "")
  (println " >> send-ai-command-toggle-delay-timer-in-ai")
  (put! ai-commands
        {:command :toggle-delay-timer-in-ai})
  (println " << send-ai-command-toggle-delay-timer-in-ai")
)

(defn send-ai-command-toggle-ai []
  (println "")
  (println " >> send-ai-command-toggle-ai")
  (put! ai-commands
        {:command :toggle-ai})
  (println " << send-ai-command-toggle-ai")
)

; === Implementation ===

; = General =
(defn ai-worker-register-channel-to-receive-event [full-event]
  (let [channel (:channel full-event)
        event (:event full-event) ] 
    (set! ai-event-receivers (register-channel-to-receive-event ai-event-receivers event channel))))

(defn ai-send-event-to-all-receivers [event-data]
  (let [event-id (:command event-data)]
    (send-event-to-all-receivers ai-event-receivers event-id event-data))
)

; = Events =
(defn ai-do-send-to-all-receivers-ai-made-movement []
  (ai-send-event-to-all-receivers {:command :ai-event-ai-made-movement}))

(defn ai-do-send-to-all-receivers-delay-timer-toggled []
  (ai-send-event-to-all-receivers {:command :ai-event-delay-timer-toggled}))

(defn ai-do-send-to-all-receivers-ai-toggled []
  (ai-send-event-to-all-receivers {:command :ai-event-ai-toggled}))

; = Workers =
(defn ai-worker-make-move [event]
  (ai-internal-make-move false nil)
  (ai-do-send-to-all-receivers-ai-made-movement))

(defn ai-worker-make-no-move [event]
  (ai-do-send-to-all-receivers-ai-made-movement))

(defn ai-worker-toggle-delay-timer-in-ai [event]
  (swap! app-state assoc :delay-timer-in-ai-is-on (not (get (deref app-state) :delay-timer-in-ai-is-on)))
  (ai-do-send-to-all-receivers-delay-timer-toggled))

(defn ai-worker-toggle-ai [event]
  (swap! app-state assoc :user-can-control-all-pieces (not (get (deref app-state) :user-can-control-all-pieces)))
  (ai-do-send-to-all-receivers-ai-toggled))

; = Internal =
(defn ai-internal-calculate-piece-to-move [captures-only specific-piece]
  (let [current-piece-color (get (deref app-state) :original-piece-color-for-ai)
        neighbors (calculate-neighbors current-piece-color)
        list-of-opponent-victims (seq (calculate-real-opponent-victim-neighbors neighbors))
        list-of-available-moves (seq (calculate-actors-pieces-moves neighbors))]
    (if (< 0 (count list-of-opponent-victims))
        (if (some? specific-piece)
            (do
              [:capture (first (filter (fn [victim] (if (= specific-piece (get victim 0)) true false)) list-of-opponent-victims))])
            [:capture (first (shuffle list-of-opponent-victims))])
        (if (not captures-only)
            (if (< 0 (count list-of-available-moves))
                [:movement (first (shuffle list-of-available-moves))])))))

(defn ai-internal-calculate-move [captures-only specific-piece]
  (let [move-data (ai-internal-calculate-piece-to-move captures-only specific-piece)
        move-type (if (some? move-data) (get move-data 0))
        move-positions (if (some? move-data) (get move-data 1))
        source-pos (if (some? move-positions) (get move-positions 0))
        destination-variants  (if (some? move-positions) (get move-positions 1))
        destination-pos (if (some? destination-variants) (first destination-variants))
        ] (do
    (if (some? destination-pos) [source-pos destination-pos move-type])
    )))

(defn ai-internal-make-move [captures-only specific-piece]
  (let [move (ai-internal-calculate-move captures-only specific-piece)
        source-pos (if (some? move) (get move 0))
        destination-pos (if (some? move) (get move 1))
        move-type (if (some? move) (get move 2))
        current-piece-color (get (deref app-state) :original-piece-color-for-ai)]
    (if (some? move) 
        (do
          (move-piece source-pos destination-pos)
          (if (= :capture move-type) 
              (if (< 0 (count (calculate-real-opponent-victim-neighbors (calculate-neighbors current-piece-color)))) 
                  (do
                    (send-game-history-db-command-save-movement :ai :movement-continues source-pos destination-pos (get (deref board) source-pos))
                    (ai-internal-make-move true destination-pos))
                  (send-game-history-db-command-save-movement :ai :movement-is-over source-pos destination-pos (get (deref board) source-pos)))
              (send-game-history-db-command-save-movement :ai :movement-is-over source-pos destination-pos (get (deref board) source-pos)))))))

; =====================================================
; === Board Updater process ===========================

(go (do
    (while true
      (let [event (<! board-commands)
            current-command (:command event)]
        (println "")
        (println "<<>> Board Updater: " event)
        (board-updater-worker-update-board-position event)
        (println "<<>> Board Updater events done")
        ))))

; === Interface ===

(defn send-board-updater-command-update-board-position [pos piece]
  (println "")
  (println " >> send-board-updater-command-update-board-position: " pos piece)
  (put! board-commands
        {:command :update-board-position
        :position pos
        :piece piece})
  (println " << send-board-updater-command-update-board-position")
)

; = Workers =
(defn board-updater-worker-update-board-position [event]
  (let [position (:position event)
        piece-type (:piece event)]
    (update-board-position position piece-type)))

; =====================================================
; === Game History DB process =========================

(go (do 
    (while true
      (let [event (<! game-history-db-commands)
            current-event (:command event)] (do
        (println "")
        (println "<<>> Game History DB: " event)
        (if (= :register-channel-to-receive-event current-event)
            (game-history-db-worker-register-channel-to-receive-event event))
        (if (= :save-movement current-event)
            (game-history-db-worker-save-movement event))
        (if (= :replay-recorded-game current-event) (do 
            (game-history-db-do-send-to-all-receivers-replay-started)
            (doall (map game-history-db-do-send-to-all-receivers-movement (game-history-db-internal-get-all-moves-from-db)))
            (game-history-db-do-send-to-all-receivers-replay-stopped)))
        (println "<<>> Game History DB events done")
)))))

; === Initialization ===

(def game-db-schema { :game.history.movement/id {
                        :db/type :db.type/bigint
                        :db.cardinality :db.cardinality/one
                        :db/unique :db.unique/identity
                        }
                      :game.history.movement/actor {
                        :db.type :db.type/keyword
                        :db.cardinality :db.cardinality/one
                        }
                      :game.history.movement/movement-continuation {
                        :db.type :db.type/keyword
                        :db.cardinality :db.cardinality/one
                        }
                      :game.history.movement/source-piece-position {
                        :db.type :db.type/long
                        :db.cardinality :db.cardinality/one
                        }
                      :game.history.movement/destination-piece-position {
                        :db.type :db.type/long
                        :db.cardinality :db.cardinality/one
                        }
                      :game.history.movement/piece-type {
                        :db.type :db.type/keyword
                        :db.cardinality :db.cardinality/one
                        }})

(def game-db )

(def game-db-conn )

(def game-history-db-state-template {:current-movement-id 0})

(def game-history-db-state (atom {}))

(defn game-history-db-initialization-reset-db []
  (set! game-db (ds/empty-db game-db-schema))
  (set! game-db-conn (ds/create-conn game-db))
  (swap! game-history-db-state merge game-history-db-state-template)
  )

(game-history-db-initialization-reset-db)

(def game-history-db-event-receivers {:game-history-db-event-replay-started #{}
                                      :game-history-db-event-replay-stopped #{}
                                      :game-history-db-event-movement #{}})

; === Interface ===

(defn send-game-history-db-command-register-channel-to-receive-event [channel event]
  (println "")
  (println " >> send-game-history-db-command-register-channel-to-receive-event: " channel event)
  (put! game-history-db-commands
        {:command :register-channel-to-receive-event
        :channel channel
        :event event})
  (println " << send-game-history-db-command-register-channel-to-receive-event")
)

(defn send-game-history-db-command-save-movement [actor movement-continuation source-piece-position destination-piece-position piece-type]
  (println "")
  (println " >> send-game-history-db-command-save-movement: " actor movement-continuation source-piece-position destination-piece-position piece-type)
  (put! game-history-db-commands {
    :command :save-movement
    :movement-data {
      :actor actor
      :movement-continuation movement-continuation
      :source-piece-position source-piece-position
      :destination-piece-position destination-piece-position
      :piece-type piece-type}})
  (println " << send-game-history-db-command-save-movement")
)

(defn send-game-history-db-command-replay-recorded-game []
  (println "")
  (println " >> send-game-history-db-command-replay-recorded-game")
  (put! game-history-db-commands
        {:command :replay-recorded-game})
  (println " << send-game-history-db-command-replay-recorded-game")
)

; === Implementation ===

; = General =
(defn game-history-db-worker-register-channel-to-receive-event [full-event]
  (let [channel (:channel full-event)
        event (:event full-event) ] 
    (set! game-history-db-event-receivers (register-channel-to-receive-event game-history-db-event-receivers event channel))))

(defn game-history-db-send-event-to-all-receivers [event-data]
  (let [event-id (:command event-data)]
    (send-event-to-all-receivers game-history-db-event-receivers event-id event-data))
)

; = Events =
(defn game-history-db-do-send-to-all-receivers-replay-started []
  (game-history-db-send-event-to-all-receivers {
    :command :game-history-db-event-replay-started
  }))

(defn game-history-db-do-send-to-all-receivers-replay-stopped []
  (game-history-db-send-event-to-all-receivers {
    :command :game-history-db-event-replay-stopped
  }))

(defn game-history-db-do-send-to-all-receivers-movement [movement-data]
  (let [id (get movement-data 0)
        actor (get movement-data 1)
        movement-continuation (get movement-data 2)
        source-piece-position (get movement-data 3)
        destination-piece-position (get movement-data 4)
        piece-type (get movement-data 5)]
    (game-history-db-send-event-to-all-receivers {
    :command :game-history-db-event-movement
    :movement-data {
      :actor actor
      :movement-continuation movement-continuation
      :source-piece-position source-piece-position
      :destination-piece-position destination-piece-position
      :piece-type piece-type
    }})))

; = Workers =
(defn game-history-db-worker-save-movement [event]
  (locking game-history-db-state 
    (let [current-movement-id (get (deref game-history-db-state) :current-movement-id)
          movement-data (:movement-data event)
          actor (:actor movement-data)
          movement-continuation (:movement-continuation movement-data)
          source-piece-position (:source-piece-position movement-data)
          destination-piece-position (:destination-piece-position movement-data)
          piece-type (:piece-type movement-data)]
      (game-history-db-internal-save-movement current-movement-id actor movement-continuation source-piece-position destination-piece-position piece-type)
      (swap! game-history-db-state assoc :current-movement-id (inc current-movement-id)))))

; = Internal =
(defn game-history-db-internal-save-movement [current-movement-id actor movement-continuation source-piece-position destination-piece-position piece-type]
  (ds/transact! game-db-conn [{
    :game.history.movement/id current-movement-id
    :game.history.movement/actor actor
    :game.history.movement/movement-continuation movement-continuation
    :game.history.movement/source-piece-position source-piece-position
    :game.history.movement/destination-piece-position destination-piece-position
    :game.history.movement/piece-type piece-type
    }]))

(defn game-history-db-internal-get-all-moves-from-db []
  (sort-by first 
    (ds/q '[:find ?id ?actor ?movement-continuation ?source-piece-position ?destination-piece-position ?piece-type
            :where
            [?en :game.history.movement/id ?id]
            [?en :game.history.movement/actor ?actor]
            [?en :game.history.movement/movement-continuation ?movement-continuation]
            [?en :game.history.movement/source-piece-position ?source-piece-position]
            [?en :game.history.movement/destination-piece-position ?destination-piece-position]
            [?en :game.history.movement/piece-type ?piece-type]
            ]
          @game-db-conn)))
