English Checkers Web Game. Made with ClojureScript and React.
====================================
(https://fi-mihej.github.io/English-Checkers-Web-App)

# Tips:
* Make your move and click around to increment "Mouse clicks" counter while AI is thinking about it's movement (there is a timer for 2 seconds delay made for "hard thinking" process emulation).
* Only green squares are "clickable"
* You can check or uncheck your piece by clicking on it.
* You can do serial capture moves without re-checking your piece.
* Check other English Checkers rules on [Wikipedia](https://en.wikipedia.org/wiki/English_draughts).

# Tasks:
- [x] Made fully proper mechanics for English Chess (without "Flying Kings"): movement mechanics, serial capture mechanics, etc.
- [x] User is able to play for both sides (need to change variable "control-all-pieces" to "true")
- [x] Correct AI for Bot Enemy (not brilliant, but able to play by the rules)
- [x] Pieces captures counter; mouse clicks counter; game state indicator; emulation of hardly thinking AI process
- [x] Logic made with concurrent processes 
- [x] Fixed bugs in the original "compute-pos-neighbors" function
- [x] Swiched from Om to Reagent
- [x] Made some UI
- [ ] DB save/replay.

# Links:
You may play them at [English Checkers Web App](https://fi-mihej.github.io/English-Checkers-Web-App)

# Screenshots:
![Alt text](https://github.com/FI-Mihej/English-Checkers-Web-App/blob/gh-pages/screenshot-main.png?raw=true "Checkers Screenshot")
