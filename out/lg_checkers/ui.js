// Compiled by ClojureScript 1.9.89 {}
goog.provide('lg_checkers.ui');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('lg_checkers.board');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
lg_checkers.ui.board_click = (function lg_checkers$ui$board_click(board_pos){
return cljs.core.async.put_BANG_.call(null,lg_checkers.board.board_events,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"board-clicked","board-clicked",1157654001),new cljs.core.Keyword(null,"position","position",-2011731912),board_pos], null));
});
lg_checkers.ui.draw_piece = (function lg_checkers$ui$draw_piece(piece_type,piece_type__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),piece_type__$1], null)], null);
});
lg_checkers.ui.draw_piece_with_pos = (function lg_checkers$ui$draw_piece_with_pos(piece_type,piece_type__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),piece_type__$1], null),[cljs.core.str(lg_checkers.ui.piece_pos)].join('')], null);
});
lg_checkers.ui.draw_piece_function = lg_checkers.ui.draw_piece;
lg_checkers.ui.draw_tuple = (function lg_checkers$ui$draw_tuple(piece,row_odd_QMARK_){
var piece_type = cljs.core.name.call(null,cljs.core.last.call(null,piece));
var piece_pos = cljs.core.first.call(null,piece);
var white_square = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.board.white","td.board.white",-1981613783)], null);
var green_square = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.board.green","td.board.green",130976504),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (piece_type,piece_pos,white_square){
return (function (e){
return lg_checkers.ui.board_click.call(null,piece_pos);
});})(piece_type,piece_pos,white_square))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lg_checkers.ui.draw_piece_function,piece_pos,piece_type], null)], null);
if(cljs.core.truth_(row_odd_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [white_square,green_square], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [green_square,white_square], null);
}
});
lg_checkers.ui.draw_row = (function lg_checkers$ui$draw_row(row){
var curr_row = (cljs.core.first.call(null,cljs.core.last.call(null,row)) / (4));
var row_odd_QMARK_ = cljs.core.odd_QMARK_.call(null,curr_row);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.board","tr.board",1183385330)], null),cljs.core.mapcat.call(null,((function (curr_row,row_odd_QMARK_){
return (function (p1__13465_SHARP_){
return lg_checkers.ui.draw_tuple.call(null,p1__13465_SHARP_,row_odd_QMARK_);
});})(curr_row,row_odd_QMARK_))
,row));
});
lg_checkers.ui.checkerboard = (function lg_checkers$ui$checkerboard(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.board","table.board",178754716),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody.board","tbody.board",754675003)], null),cljs.core.map.call(null,lg_checkers.ui.draw_row,cljs.core.partition.call(null,(4),cljs.core.deref.call(null,lg_checkers.board.board))))], null);
});
lg_checkers.ui.bootstrap_ui = (function lg_checkers$ui$bootstrap_ui(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lg_checkers.ui.checkerboard], null),document.getElementById("checkerboard"));
});
lg_checkers.ui.data_state = (function lg_checkers$ui$data_state(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lg_checkers.ui.app_state_renderer], null),document.getElementById("app-state"));
});
lg_checkers.ui.app_state_renderer = (function lg_checkers$ui$app_state_renderer(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody.app-state","tbody.app-state",439685597),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Mouse clicks: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mouse-clicks","span.mouse-clicks",2052805737),new cljs.core.Keyword(null,"number-of-mouse-clicks","number-of-mouse-clicks",-225975392).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lg_checkers.board.app_state))], null),"."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Captured pieces: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.captured-pieces","span.captured-pieces",-1852267751),new cljs.core.Keyword(null,"captured-pieces","captured-pieces",-1406669063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lg_checkers.board.app_state))], null),"."], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody.app-state","tbody.app-state",439685597),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"user-is-allowed-to-move","user-is-allowed-to-move",1540192799).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lg_checkers.board.app_state)))?"user-is-allowed-to-move-message":"user-is-disallowed-to-move-message")], null),(cljs.core.truth_(new cljs.core.Keyword(null,"user-is-allowed-to-move","user-is-allowed-to-move",1540192799).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lg_checkers.board.app_state)))?"Make your move!":[cljs.core.str("Please wait "),cljs.core.str((new cljs.core.Keyword(null,"ai-timeout-for-work-emulation","ai-timeout-for-work-emulation",549896297).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lg_checkers.board.app_state)) / (1000))),cljs.core.str("s (AI thinking very hard!) and click around...")].join(''))], null)], null)], null)], null)], null);
});
lg_checkers.ui.app_interface = (function lg_checkers$ui$app_interface(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lg_checkers.ui.app_interface_renderer], null),document.getElementById("app-interface"));
});
lg_checkers.ui.app_interface_renderer = (function lg_checkers$ui$app_interface_renderer(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),(cljs.core.truth_(new cljs.core.Keyword(null,"delay-timer-in-ai-is-on","delay-timer-in-ai-is-on",-641385360).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lg_checkers.board.app_state)))?true:false),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return lg_checkers.ui.input_click_toggle_delay_timer_in_ai.call(null);
})], null)], null),"Toggle delay timer in AI"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.truth_(new cljs.core.Keyword(null,"replay-is-in-progress","replay-is-in-progress",-1340850428).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lg_checkers.board.app_state)))?true:false),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return lg_checkers.ui.button_click_replay_recorded_game.call(null);
})], null),"Replay Recorded Game"], null)], null);
});
lg_checkers.ui.button_click_replay_recorded_game = (function lg_checkers$ui$button_click_replay_recorded_game(){
return cljs.core.async.put_BANG_.call(null,lg_checkers.board.board_events,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"replay-recorded-game","replay-recorded-game",826564334)], null));
});
lg_checkers.ui.input_click_toggle_delay_timer_in_ai = (function lg_checkers$ui$input_click_toggle_delay_timer_in_ai(){
return cljs.core.async.put_BANG_.call(null,lg_checkers.board.board_events,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"toggle-delay-timer-in-ai","toggle-delay-timer-in-ai",1893069099)], null));
});

//# sourceMappingURL=ui.js.map