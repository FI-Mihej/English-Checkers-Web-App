(ns lg-checkers.ui
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            [lg-checkers.board :refer [ board app-state
                                        send-controller-command-board-click
                                        send-controller-command-replay-recorded-game
                                        send-controller-command-toggle-delay-timer-in-ai
                                        send-controller-command-toggle-ai]]
            [reagent.core :as rc]))

(enable-console-print!)

; == Board UI Drawing ===================================
; draw pieces based on the piece-type
(defn draw-piece [piece-pos piece-type]
  [:div {:class piece-type}])

; draw pieces and it's position number based on the piece-type
(defn draw-piece-with-pos [piece-pos piece-type]
  [:div {:class piece-type} (str piece-pos)])

(def draw-piece-function draw-piece)
; (def draw-piece-function draw-piece-with-pos)

(defn draw-tuple [piece row-odd?]
  (let [piece-type (name (last piece))
        piece-pos (first piece)
        white-square [:td.board.white]
        green-square [:td.board.green {:on-click (fn [e] (send-controller-command-board-click piece-pos))}
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
; == App-State ===============================================

(defn data-state []
  (rc/render-component [app-state-renderer]
      (. js/document (getElementById "app-state"))))

(defn app-state-renderer[]
  [:div
    [:table
      [render-counters]
    ]
    [:table
      [render-game-state-messages]
    ]
  ]
)

(defn render-counters []
  [:tr
    [:th 
        "Mouse clicks: " 
        [:span.font-size-20 {:id "mouse-clicks"} (:number-of-mouse-clicks @app-state)] 
        "."
    ]
    [:th 
        "Captured pieces: " 
        [:span.font-size-20 {:id "captured-pieces"} (:captured-pieces @app-state)] 
        "."
    ]
  ]
)

(defn render-game-state-messages []
  [:tr
    [:th {:class (if (and (:user-is-allowed-to-move @app-state) (not (:replay-is-in-progress @app-state))) 
                      "user-is-allowed-to-move-message" 
                      "user-is-disallowed-to-move-message")}
        (if (:replay-is-in-progress @app-state) 
            "Replay is in progress. Please wait..."
            (if (:user-is-allowed-to-move @app-state) 
                "Make your move!" 
                (str "Please wait " (/ (:ai-timeout-for-work-emulation @app-state) 1000) "s (AI thinking very hard!) and click around...")))
    ]
  ]
)

; =============================================================
; == App-Interface ============================================

(defn app-interface []
  (rc/render-component [app-interface-renderer]
      (. js/document (getElementById "app-interface"))))

(defn app-interface-renderer[]
  [:div
    [:table.width100percent
      [:tr
        [:th
          [:table
            [:tbody.align-h-left
              [:tr
                [:th
                  [render-toggle-ai-checkbox]
                ]
              ]
              [:tr
                [:th
                  [render-toggle-delay-timer-in-ai-checkbox]
                ]
              ]
            ]
          ]
        ]
        [:th
          [render-replay-recorded-game-button]
        ]
      ]
    ]
  ]
)

(defn render-toggle-ai-checkbox []
  [:label
      [:input { :type "checkbox"
                :disabled (if (:ai-can-be-toggled @app-state) false true)
                :checked (if (:user-can-control-all-pieces @app-state) false true)
                :on-change (fn [e] (send-controller-command-toggle-ai))}
      ]
      [:span {:class (if (:ai-can-be-toggled @app-state) nil "disabled-text")}
          "Toggle AI"
      ]
  ]
)

(defn render-toggle-delay-timer-in-ai-checkbox []
  [:label
      [:input { :type "checkbox"
                :disabled (if (:ai-delay-timer-can-be-toggled @app-state) false true)
                :checked (if (:delay-timer-in-ai-is-on @app-state) true false)
                :on-change (fn [e] (send-controller-command-toggle-delay-timer-in-ai))}
      ]
      [:span {:class (if (:ai-delay-timer-can-be-toggled @app-state) nil "disabled-text")}
          "Toggle delay timer in AI"
      ]
  ]
)

(defn render-replay-recorded-game-button []
  [:button {:type "button"
            :class "btn bold-font font-size-14"
            :disabled (if (:user-board-actions-are-allowed @app-state) false true)
            :on-click (fn [e] (send-controller-command-replay-recorded-game))} 
      "Replay Recorded Game"
  ]
)
