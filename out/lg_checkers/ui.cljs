(ns lg-checkers.ui
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            [lg-checkers.board :refer [board board-events app-state]]
            [reagent.core :as rc]))

(enable-console-print!)

; == UI events ==========================================
; when we click a game square, we send an event
(defn board-click [board-pos]
  (put! board-events {:command :board-clicked
                      :position board-pos}))

; == Board UI Drawing ===================================
; draw pieces based on the piece-type
(defn draw-piece [piece-type piece-type]
  [:div {:class piece-type}])

; == Board UI Drawing ===================================
; draw pieces based on the piece-type
(defn draw-piece-with-pos [piece-type piece-type]
  [:div {:class piece-type} (str piece-pos)])

(def draw-piece-function draw-piece)
; (def draw-piece-function draw-piece-with-pos)

(defn draw-tuple [piece row-odd?]
  (let [piece-type (name (last piece))
        piece-pos (first piece)
        white-square [:td.board.white]
        green-square [:td.board.green {:on-click (fn [e] (board-click piece-pos))}
                      [draw-piece-function piece-pos piece-type]]]
    (do
      (if row-odd?
        [white-square green-square]
        [green-square white-square]))))

(defn draw-row [row]
  (let [curr-row (/ (first (last row)) 4)
        row-odd? (odd? curr-row)]
    (do
      (into [:tr.board]
        (mapcat #(draw-tuple % row-odd?)
                row)))))

(defn checkerboard []
  [:table.board
    (into [:tbody.board]
      (map draw-row (partition 4 @board)))])

== Bootstrap ============================================
(defn bootstrap-ui []
  (rc/render-component [checkerboard]
      (. js/document (getElementById "checkerboard"))))

; =============================================================
; == App-State ============================================
(defn data-state []
  (rc/render-component [app-state-renderer]
      (. js/document (getElementById "app-state"))))

(defn app-state-renderer[]
  [:table
    [:tbody.app-state
      [:tr
        [:th "Mouse clicks: " [:span.mouse-clicks (:number-of-mouse-clicks @app-state)] "."]
        [:th "Captured pieces: " [:span.captured-pieces (:captured-pieces @app-state)] "."]
        [:th {:class (if (:user-is-allowed-to-move @app-state) "user-is-allowed-to-move-message" "user-is-disallowed-to-move-message")}
            (if (:user-is-allowed-to-move @app-state) 
              "Make your move!" 
              (str "Please wait " (/ (:ai-timeout-for-work-emulation @app-state) 1000) "s (AI thinking very hard!) and click around..."))]
        ]]])

; =============================================================
; == App-Interface ============================================
(defn app-interface []
  (rc/render-component [app-interface-renderer]
      (. js/document (getElementById "app-interface"))))

(defn app-interface-renderer[]
  [:div
    [:label 
      [:input {:type "checkbox"
                :checked (if (:delay-timer-in-ai-is-on @app-state) true false)
                :on-change (fn [e] (input-click-toggle-delay-timer-in-ai))}]
      "Toggle delay timer in AI"]
    [:br]
    [:br]
    [:button {:type "button"
              :disabled (if (:replay-is-in-progress @app-state) true false )
              :on-click (fn [e] (button-click-replay-recorded-game))} "Replay Recorded Game"]
  ])

(defn button-click-replay-recorded-game []
  (put! board-events {:command :replay-recorded-game}))

(defn input-click-toggle-delay-timer-in-ai []
  (put! board-events {:command :toggle-delay-timer-in-ai}))

