// Compiled by ClojureScript 1.9.89 {}
goog.provide('lg_checkers.ui');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('lg_checkers.board');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
lg_checkers.ui.draw_piece = (function lg_checkers$ui$draw_piece(piece_pos,piece_type){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),piece_type], null)], null);
});
lg_checkers.ui.draw_piece_with_pos = (function lg_checkers$ui$draw_piece_with_pos(piece_pos,piece_type){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),piece_type], null),[cljs.core.str(piece_pos)].join('')], null);
});
lg_checkers.ui.draw_piece_function = lg_checkers.ui.draw_piece;
lg_checkers.ui.draw_tuple = (function lg_checkers$ui$draw_tuple(piece,row_odd_QMARK_){
var piece_type = cljs.core.name.call(null,cljs.core.last.call(null,piece));
var piece_pos = cljs.core.first.call(null,piece);
var white_square = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.board.white","td.board.white",-1981613783)], null);
var green_square = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.board.green","td.board.green",130976504),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (piece_type,piece_pos,white_square){
return (function (e){
return lg_checkers.board.send_controller_command_board_click.call(null,piece_pos);
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
return (function (p1__128356_SHARP_){
return lg_checkers.ui.draw_tuple.call(null,p1__128356_SHARP_,row_odd_QMARK_);
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lg_checkers.ui.render_counters], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lg_checkers.ui.render_game_state_messages], null)], null)], null);
});
lg_checkers.ui.render_counters = (function lg_checkers$ui$render_counters(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Mouse clicks: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-size-20","span.font-size-20",835903944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"mouse-clicks"], null),new cljs.core.Keyword(null,"number-of-mouse-clicks","number-of-mouse-clicks",-225975392).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lg_checkers.board.app_state))], null),"."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Captured pieces: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-size-20","span.font-size-20",835903944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"captured-pieces"], null),new cljs.core.Keyword(null,"captured-pieces","captured-pieces",-1406669063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lg_checkers.board.app_state))], null),"."], null)], null);
});
lg_checkers.ui.render_game_state_messages = (function lg_checkers$ui$render_game_state_messages(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((function (){var and__6239__auto__ = new cljs.core.Keyword(null,"user-is-allowed-to-move","user-is-allowed-to-move",1540192799).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lg_checkers.board.app_state));
if(cljs.core.truth_(and__6239__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"replay-is-in-progress","replay-is-in-progress",-1340850428).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lg_checkers.board.app_state)));
} else {
return and__6239__auto__;
}
})())?"user-is-allowed-to-move-message":"user-is-disallowed-to-move-message")], null),(cljs.core.truth_(new cljs.core.Keyword(null,"replay-is-in-progress","replay-is-in-progress",-1340850428).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lg_checkers.board.app_state)))?"Replay is in progress. Please wait...":(cljs.core.truth_(new cljs.core.Keyword(null,"user-is-allowed-to-move","user-is-allowed-to-move",1540192799).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lg_checkers.board.app_state)))?"Make your move!":[cljs.core.str("Please wait "),cljs.core.str((new cljs.core.Keyword(null,"ai-timeout-for-work-emulation","ai-timeout-for-work-emulation",549896297).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lg_checkers.board.app_state)) / (1000))),cljs.core.str("s (AI thinking very hard!) and click around...")].join('')))], null)], null);
});
lg_checkers.ui.app_interface = (function lg_checkers$ui$app_interface(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lg_checkers.ui.app_interface_renderer], null),document.getElementById("app-interface"));
});
lg_checkers.ui.app_interface_renderer = (function lg_checkers$ui$app_interface_renderer(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.width100percent","table.width100percent",1893986779),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody.align-h-left","tbody.align-h-left",-42927310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lg_checkers.ui.render_toggle_ai_checkbox], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lg_checkers.ui.render_toggle_delay_timer_in_ai_checkbox], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lg_checkers.ui.render_replay_recorded_game_button], null)], null)], null)], null)], null);
});
lg_checkers.ui.render_toggle_ai_checkbox = (function lg_checkers$ui$render_toggle_ai_checkbox(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.truth_(new cljs.core.Keyword(null,"ai-can-be-toggled","ai-can-be-toggled",-889130242).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lg_checkers.board.app_state)))?false:true),new cljs.core.Keyword(null,"checked","checked",-50955819),(cljs.core.truth_(new cljs.core.Keyword(null,"user-can-control-all-pieces","user-can-control-all-pieces",-882077365).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lg_checkers.board.app_state)))?false:true),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return lg_checkers.board.send_controller_command_toggle_ai.call(null);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"ai-can-be-toggled","ai-can-be-toggled",-889130242).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lg_checkers.board.app_state)))?null:"disabled-text")], null),"Toggle AI"], null)], null);
});
lg_checkers.ui.render_toggle_delay_timer_in_ai_checkbox = (function lg_checkers$ui$render_toggle_delay_timer_in_ai_checkbox(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.truth_(new cljs.core.Keyword(null,"ai-delay-timer-can-be-toggled","ai-delay-timer-can-be-toggled",2016336033).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lg_checkers.board.app_state)))?false:true),new cljs.core.Keyword(null,"checked","checked",-50955819),(cljs.core.truth_(new cljs.core.Keyword(null,"delay-timer-in-ai-is-on","delay-timer-in-ai-is-on",-641385360).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lg_checkers.board.app_state)))?true:false),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return lg_checkers.board.send_controller_command_toggle_delay_timer_in_ai.call(null);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"ai-delay-timer-can-be-toggled","ai-delay-timer-can-be-toggled",2016336033).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lg_checkers.board.app_state)))?null:"disabled-text")], null),"Toggle delay timer in AI"], null)], null);
});
lg_checkers.ui.render_replay_recorded_game_button = (function lg_checkers$ui$render_replay_recorded_game_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),"btn bold-font font-size-14",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.truth_(new cljs.core.Keyword(null,"user-board-actions-are-allowed","user-board-actions-are-allowed",1642515933).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lg_checkers.board.app_state)))?false:true),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return lg_checkers.board.send_controller_command_replay_recorded_game.call(null);
})], null),"Replay Recorded Game"], null);
});

//# sourceMappingURL=ui.js.map