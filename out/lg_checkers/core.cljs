(ns lg-checkers.core
   (:require [lg-checkers.ui :refer [bootstrap-ui data-state app-interface]]))

(enable-console-print!)

(do 
    (println "")
    (println "<< core - starded >>")
    (bootstrap-ui)
    (data-state)
    (app-interface)
    (println "")
    (println "<< core - initiated >>"))