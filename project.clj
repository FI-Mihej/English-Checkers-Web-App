(defproject lg-checkers "0.1.0-SNAPSHOT"
  :description "ButenkoMS Checkers"
  :url "http://example.com/FIXME"

  ; :dependencies [[org.clojure/clojure "1.6.0"]
  ;                [org.clojure/clojurescript "0.0-2311"]
  ;                [org.clojure/core.async "0.1.346.0-17112a-alpha"]
  ;                [om "0.7.1"]]

  ; :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]]
  
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.6.1"

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.89"]
                 [org.clojure/core.async "0.2.385"
                  :exclusions [org.clojure/tools.reader]]
                 [cljsjs/react "15.2.1-1"]
                 [cljsjs/react-dom "15.2.1-1"]
                 [sablono "0.7.3"]
                 [org.omcljs/om "1.0.0-alpha40"]
                 [datascript "0.15.2"]]

  :plugins [[lein-cljsbuild "1.1.3" :exclusions [[org.clojure/clojure]]]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "lg-checkers"
              :source-paths ["src"]
              :compiler {
                :output-to "lg_checkers.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]})
