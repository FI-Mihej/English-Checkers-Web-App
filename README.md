English Checkers
====================================
(https://fi-mihej.github.io/English-Checkers-Web-App)

Done:
* * Fixed bugs in the original "compute-pos-neighbors" function
* * Made fully proper mechanics for English Chess (without "Flying Kings"): movement mechanics, serial capture mechanics, etc.
* * User is able to play for both sides (need to change variable "control-all-pieces" to "true")
* * Correct AI for Bot Enemy (not brilliant, but able to play by the rules)
* * Pieces captures counter
* * Logic made with concurrent processes 

Not Done:
* * DB save/replay. Actually there is interface for this already, and whole design made to be able work with game replays. But DataStore lack documentation, I'm not familiar with it's interface, and I just need more time for an investigation how to work with DataStore. But come one: I learned completely new language (Clojure) from scratch (having really not big practical background in FunctionalProgramming) and made Web Checkers. And this is all in less than five days. :)

You may play them at https://fi-mihej.github.io/English-Checkers-Web-App
