(ns lg-checkers.ui
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            [lg-checkers.board :refer [board board-events]]))

(enable-console-print!)

(println "UI - start")

; == UI events ==========================================
; when we click a game square, we send an event
(defn board-click [board-pos]
  (put! board-events {:command :board-clicked
                      :position board-pos}))

; == Board UI Drawing ===================================
; draw pieces based on the piece-type
(defn draw-piece [piece-pos piece-type]
  (apply dom/div #js {:className piece-type} nil))

; == Board UI Drawing ===================================
; draw pieces based on the piece-type
(defn draw-piece-with-pos [piece-pos piece-type]
  (apply dom/div #js {:className piece-type :dangerouslySetInnerHTML #js {:__html (str piece-pos)}} nil))

; (def draw-piece-function draw-piece)
(def draw-piece-function draw-piece-with-pos)

; draws pairs of checkerboard squares within a row
; depending on if row is odd or even.
(defn draw-tuple [piece row-odd?]
	(let [piece-type (name (last piece))
		    piece-pos (first piece)
        white-square (dom/td #js {:className "white"})
        green-square (dom/td #js {:className "green"
                                  :onClick
                                    (fn [e] (board-click
                                             piece-pos))}
                                 (draw-piece-function piece-pos piece-type))]
    ; (println "")
    ; (println ">> UI - draw-tuple - start" piece row-odd?)
    ; (println "piece-type" piece-type)
    ; (println "piece-pos" piece-pos)
    (if row-odd?
      [white-square green-square]
      [green-square white-square])
    ; (println "draw-tuple - end")
  )
)

; given a row, determine if it is an odd or even row
; and iterates over the board positions, drawing each
; tuple of checkerboard squares
(defn draw-row [row]
  (let [curr-row (/ (first (last row)) 4)
        row-odd? (odd? curr-row)]
    ; (println "")
    ; (println "draw-row - start" row)
    ; (println "row" row)
    ; (println "(last row)" (last row))
    ; (println "(first (last row)" (first (last row)))
    ; (println "(/ (first (last row)) 4)" (/ (first (last row)) 4))
    ; (println "curr-row" curr-row)
    ; (println "row-odd?" row-odd?)
    (apply dom/tr nil
      (mapcat #(draw-tuple % row-odd?)
           row))
    ; (println "draw-row - end")
  )
)

; given a checkerboard data structure, partition into
; rows and draw the individual rows
(defn checkerboard [board owner]
  (println "")
  (println ">> UI - checkerboard - partition 4 board:" (partition 4 board))
  (om/component
   (apply dom/table nil
      (map draw-row
           (partition 4 board)))))

; == Bootstrap ============================================
(defn bootstrap-ui []
  (println ">> UI - bootstrap-ui - board" board)
  (om/root
    checkerboard ; our UI
    board        ; our game state
    {:target (. js/document (getElementById "checkers"))}))

(bootstrap-ui)

(println "UI - end")