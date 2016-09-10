English Checkers Web Game. Made with ClojureScript and React.
====================================
(https://fi-mihej.github.io/English-Checkers-Web-App)

# About:
* MVC. Concurent code design with several ClojureScript processes (message flow can be seen in the browser console). Concurency can be tester by toggling AI Delay Timer which emulates some long process of calculations: UI still will be accessable to use (for example it still will count mouse clicks).
* Player can play against the AI or with himself (for both parties). Just Toggle AI.
* You can check or uncheck your piece by clicking on it.
* You can do serial capture moves without re-checking your piece.

# Tasks:
Original task can be seen [here](https://github.com/FI-Mihej/English-Checkers-Web-App/blob/master/README-ORIGINAL-TASK.md)

- [x] Made fully proper mechanics for English Chess (without "Flying Kings"): movement mechanics, serial capture mechanics, etc.
- [x] User is able to play for both sides (need to change variable "control-all-pieces" to "true")
- [x] Correct AI for Bot Enemy (not brilliant, but able to play by the rules)
- [x] Pieces captures counter; mouse clicks counter; game state indicator; emulation of hardly thinking AI process
- [x] Logic made with concurrent processes 
- [x] Fixed bugs in the original "compute-pos-neighbors" function
- [x] Swiched from Om to Reagent
- [x] Made some UI
- [x] Save moves to DB and implement Game Replay.
- [ ] Result should compiles cleanly using `lein clean; lein cljsbuild`, and executes in a browser.

# Links:
You may play them at [English Checkers Web App](https://fi-mihej.github.io/English-Checkers-Web-App)

# Screenshots:
![Alt text](https://github.com/FI-Mihej/English-Checkers-Web-App/blob/gh-pages/screenshot-main.png?raw=true "Checkers Screenshot")

# Used Technology:
* ClojureScript
    * Reagent
    * Datascript
* React

