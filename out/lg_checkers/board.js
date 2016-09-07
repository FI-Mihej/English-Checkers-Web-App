// Compiled by ClojureScript 1.9.89 {}
goog.provide('lg_checkers.board');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
lg_checkers.board.board_events = cljs.core.async.chan.call(null);
lg_checkers.board.board_api_commands = cljs.core.async.chan.call(null);
lg_checkers.board.board_commands = cljs.core.async.chan.call(null);
lg_checkers.board.board_state = cljs.core.async.chan.call(null);
lg_checkers.board.ai_commands = cljs.core.async.chan.call(null);
lg_checkers.board.piece_neighbor_directions = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"up-left","up-left",1510435846),null,new cljs.core.Keyword(null,"down-left","down-left",568486758),null,new cljs.core.Keyword(null,"down-right","down-right",1213350619),null,new cljs.core.Keyword(null,"up-right","up-right",-546303106),null], null), null);
lg_checkers.board.piece_neighbor_directions_black_forward = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"up-left","up-left",1510435846),null,new cljs.core.Keyword(null,"up-right","up-right",-546303106),null], null), null);
lg_checkers.board.piece_neighbor_directions_red_forward = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"down-left","down-left",568486758),null,new cljs.core.Keyword(null,"down-right","down-right",1213350619),null], null), null);
lg_checkers.board.piece_neighbor_direction_by_number = new cljs.core.PersistentArrayMap(null, 4, [(0),new cljs.core.Keyword(null,"up-left","up-left",1510435846),(1),new cljs.core.Keyword(null,"up-right","up-right",-546303106),(2),new cljs.core.Keyword(null,"down-left","down-left",568486758),(3),new cljs.core.Keyword(null,"down-right","down-right",1213350619)], null);
lg_checkers.board.piece_neighbor_direction_number_by_direction = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"up-left","up-left",1510435846),(0),new cljs.core.Keyword(null,"up-right","up-right",-546303106),(1),new cljs.core.Keyword(null,"down-left","down-left",568486758),(2),new cljs.core.Keyword(null,"down-right","down-right",1213350619),(3)], null);
lg_checkers.board.original_piece_colors = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"black-piece","black-piece",2048390247),null,new cljs.core.Keyword(null,"red-piece","red-piece",-398776236),null], null), null);
lg_checkers.board.all_movable_pieces = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"black-piece","black-piece",2048390247),null,new cljs.core.Keyword(null,"prom-black-piece","prom-black-piece",1634014567),null,new cljs.core.Keyword(null,"black-piece-marked","black-piece-marked",1865651465),null,new cljs.core.Keyword(null,"prom-red-piece","prom-red-piece",1261126575),null,new cljs.core.Keyword(null,"prom-black-piece-marked","prom-black-piece-marked",-895939439),null,new cljs.core.Keyword(null,"red-piece","red-piece",-398776236),null,new cljs.core.Keyword(null,"red-piece-marked","red-piece-marked",1660744598),null,new cljs.core.Keyword(null,"prom-red-piece-marked","prom-red-piece-marked",300839965),null], null), null);
lg_checkers.board.all_normal_movable_pieces = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"black-piece","black-piece",2048390247),null,new cljs.core.Keyword(null,"black-piece-marked","black-piece-marked",1865651465),null,new cljs.core.Keyword(null,"red-piece","red-piece",-398776236),null,new cljs.core.Keyword(null,"red-piece-marked","red-piece-marked",1660744598),null], null), null);
lg_checkers.board.all_promoted_movable_pieces = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"prom-black-piece","prom-black-piece",1634014567),null,new cljs.core.Keyword(null,"prom-red-piece","prom-red-piece",1261126575),null,new cljs.core.Keyword(null,"prom-black-piece-marked","prom-black-piece-marked",-895939439),null,new cljs.core.Keyword(null,"prom-red-piece-marked","prom-red-piece-marked",300839965),null], null), null);
lg_checkers.board.original_movable_pieces = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"black-piece","black-piece",2048390247),null,new cljs.core.Keyword(null,"prom-black-piece","prom-black-piece",1634014567),null,new cljs.core.Keyword(null,"prom-red-piece","prom-red-piece",1261126575),null,new cljs.core.Keyword(null,"red-piece","red-piece",-398776236),null], null), null);
lg_checkers.board.original_normal_movable_pieces = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"black-piece","black-piece",2048390247),null,new cljs.core.Keyword(null,"red-piece","red-piece",-398776236),null], null), null);
lg_checkers.board.original_promoted_movable_pieces = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prom-black-piece","prom-black-piece",1634014567),null,new cljs.core.Keyword(null,"prom-red-piece","prom-red-piece",1261126575),null], null), null);
lg_checkers.board.marked_movable_pieces = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"black-piece-marked","black-piece-marked",1865651465),null,new cljs.core.Keyword(null,"prom-black-piece-marked","prom-black-piece-marked",-895939439),null,new cljs.core.Keyword(null,"red-piece-marked","red-piece-marked",1660744598),null,new cljs.core.Keyword(null,"prom-red-piece-marked","prom-red-piece-marked",300839965),null], null), null);
lg_checkers.board.marked_normal_movable_pieces = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"black-piece-marked","black-piece-marked",1865651465),null,new cljs.core.Keyword(null,"red-piece-marked","red-piece-marked",1660744598),null], null), null);
lg_checkers.board.marked_promoted_movable_pieces = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prom-black-piece-marked","prom-black-piece-marked",-895939439),null,new cljs.core.Keyword(null,"prom-red-piece-marked","prom-red-piece-marked",300839965),null], null), null);
lg_checkers.board.all_black_movable_pieces = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"black-piece","black-piece",2048390247),null,new cljs.core.Keyword(null,"prom-black-piece","prom-black-piece",1634014567),null,new cljs.core.Keyword(null,"black-piece-marked","black-piece-marked",1865651465),null,new cljs.core.Keyword(null,"prom-black-piece-marked","prom-black-piece-marked",-895939439),null], null), null);
lg_checkers.board.all_red_movable_pieces = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"prom-red-piece","prom-red-piece",1261126575),null,new cljs.core.Keyword(null,"red-piece","red-piece",-398776236),null,new cljs.core.Keyword(null,"red-piece-marked","red-piece-marked",1660744598),null,new cljs.core.Keyword(null,"prom-red-piece-marked","prom-red-piece-marked",300839965),null], null), null);
lg_checkers.board.way_to_mark_piece = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"black-piece","black-piece",2048390247),new cljs.core.Keyword(null,"black-piece-marked","black-piece-marked",1865651465),new cljs.core.Keyword(null,"red-piece","red-piece",-398776236),new cljs.core.Keyword(null,"red-piece-marked","red-piece-marked",1660744598),new cljs.core.Keyword(null,"prom-black-piece","prom-black-piece",1634014567),new cljs.core.Keyword(null,"prom-black-piece-marked","prom-black-piece-marked",-895939439),new cljs.core.Keyword(null,"prom-red-piece","prom-red-piece",1261126575),new cljs.core.Keyword(null,"prom-red-piece-marked","prom-red-piece-marked",300839965)], null);
lg_checkers.board.way_to_unmark_piece = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"black-piece-marked","black-piece-marked",1865651465),new cljs.core.Keyword(null,"black-piece","black-piece",2048390247),new cljs.core.Keyword(null,"red-piece-marked","red-piece-marked",1660744598),new cljs.core.Keyword(null,"red-piece","red-piece",-398776236),new cljs.core.Keyword(null,"prom-black-piece-marked","prom-black-piece-marked",-895939439),new cljs.core.Keyword(null,"prom-black-piece","prom-black-piece",1634014567),new cljs.core.Keyword(null,"prom-red-piece-marked","prom-red-piece-marked",300839965),new cljs.core.Keyword(null,"prom-red-piece","prom-red-piece",1261126575)], null);
lg_checkers.board.top_row = (1);
lg_checkers.board.bottom_row = (8);
lg_checkers.board.promotion_row_by_original_piece_color = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"black-piece","black-piece",2048390247),lg_checkers.board.top_row,new cljs.core.Keyword(null,"red-piece","red-piece",-398776236),lg_checkers.board.bottom_row], null);
lg_checkers.board.promotion_piece_type_by_original_piece_color = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"black-piece","black-piece",2048390247),new cljs.core.Keyword(null,"prom-black-piece","prom-black-piece",1634014567),new cljs.core.Keyword(null,"red-piece","red-piece",-398776236),new cljs.core.Keyword(null,"prom-red-piece","prom-red-piece",1261126575)], null);
lg_checkers.board.original_piece_type = (function lg_checkers$board$original_piece_type(piece_type){
var kind_of_black_piece_QMARK_ = cljs.core.contains_QMARK_.call(null,lg_checkers.board.all_black_movable_pieces,piece_type);
var promoted_piece_QMARK_ = cljs.core.contains_QMARK_.call(null,lg_checkers.board.all_promoted_movable_pieces,piece_type);
if(promoted_piece_QMARK_){
if(kind_of_black_piece_QMARK_){
return new cljs.core.Keyword(null,"prom-black-piece","prom-black-piece",1634014567);
} else {
return new cljs.core.Keyword(null,"prom-red-piece","prom-red-piece",1261126575);
}
} else {
if(kind_of_black_piece_QMARK_){
return new cljs.core.Keyword(null,"black-piece","black-piece",2048390247);
} else {
return new cljs.core.Keyword(null,"red-piece","red-piece",-398776236);
}
}
});
lg_checkers.board.original_piece_color = (function lg_checkers$board$original_piece_color(piece_type){
var kind_of_black_piece_QMARK_ = cljs.core.contains_QMARK_.call(null,lg_checkers.board.all_black_movable_pieces,piece_type);
var kind_of_red_piece_QMARK_ = cljs.core.contains_QMARK_.call(null,lg_checkers.board.all_red_movable_pieces,piece_type);
if(kind_of_black_piece_QMARK_){
return new cljs.core.Keyword(null,"black-piece","black-piece",2048390247);
} else {
if(kind_of_red_piece_QMARK_){
return new cljs.core.Keyword(null,"red-piece","red-piece",-398776236);
} else {
return new cljs.core.Keyword(null,"empty-piece","empty-piece",515714264);
}
}
});
lg_checkers.board.row_of_the_piece_position = (function lg_checkers$board$row_of_the_piece_position(pos){
return Math.ceil((pos / (4)));
});
lg_checkers.board.piece_can_be_promoted_to = (function lg_checkers$board$piece_can_be_promoted_to(pos,piece_type){
var piece_color = lg_checkers.board.original_piece_color.call(null,piece_type);
var piece_row = lg_checkers.board.row_of_the_piece_position.call(null,pos);
if(cljs.core._EQ_.call(null,piece_row,cljs.core.get.call(null,lg_checkers.board.promotion_row_by_original_piece_color,piece_color))){
return cljs.core.get.call(null,lg_checkers.board.promotion_piece_type_by_original_piece_color,piece_color);
} else {
return null;
}
});
lg_checkers.board.compute_pos_neighbors = (function lg_checkers$board$compute_pos_neighbors(pos){
var curr_row = lg_checkers.board.row_of_the_piece_position.call(null,pos);
var row_odd_QMARK_ = cljs.core.odd_QMARK_.call(null,curr_row);
var row_even_QMARK_ = !(row_odd_QMARK_);
var top_row_QMARK_ = cljs.core._EQ_.call(null,curr_row,lg_checkers.board.top_row);
var bottom_row_QMARK_ = cljs.core._EQ_.call(null,curr_row,lg_checkers.board.bottom_row);
var right_edge_QMARK_ = cljs.core._EQ_.call(null,cljs.core.mod.call(null,pos,(4)),(0));
var left_edge_QMARK_ = cljs.core._EQ_.call(null,cljs.core.mod.call(null,pos,(4)),(1));
var up_left = ((row_odd_QMARK_)?(pos - (4)):(pos - (5)));
var up_right = ((row_odd_QMARK_)?(pos - (3)):(pos - (4)));
var down_left = ((row_odd_QMARK_)?(pos + (4)):(pos + (3)));
var down_right = ((row_odd_QMARK_)?(pos + (5)):(pos + (4)));
return cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((!(top_row_QMARK_))?((row_even_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((!(left_edge_QMARK_))?up_left:null),up_right], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [up_left,((!(right_edge_QMARK_))?up_right:null)], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)),((!(bottom_row_QMARK_))?((row_odd_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [down_left,((!(right_edge_QMARK_))?down_right:null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((!(left_edge_QMARK_))?down_left:null),down_right], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null))], null));
});
lg_checkers.board.compute_pos_neighbors_memo = cljs.core.memoize.call(null,lg_checkers.board.compute_pos_neighbors);
lg_checkers.board.compute_neighbor_positions = (function lg_checkers$board$compute_neighbor_positions(){
return cljs.core.map.call(null,(function (pos){
return cljs.core.PersistentArrayMap.fromArray([pos,lg_checkers.board.compute_pos_neighbors_memo.call(null,pos)], true, false);
}),cljs.core.range.call(null,(1),(33)));
});
lg_checkers.board.neighbor_piece_by_direction = (function lg_checkers$board$neighbor_piece_by_direction(pos,direction){
return cljs.core.get.call(null,cljs.core.to_array.call(null,lg_checkers.board.compute_pos_neighbors_memo.call(null,pos)),cljs.core.get.call(null,lg_checkers.board.piece_neighbor_direction_number_by_direction,direction));
});
lg_checkers.board.neighbor_piece_direction_by_neighbor_pos = (function lg_checkers$board$neighbor_piece_direction_by_neighbor_pos(pos,neighbor_pos){
var close_neighbor_QMARK_ = cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,lg_checkers.board.compute_pos_neighbors_memo.call(null,pos)),neighbor_pos);
var up_left_neighbor = ((!(close_neighbor_QMARK_))?lg_checkers.board.neighbor_piece_by_direction.call(null,pos,new cljs.core.Keyword(null,"up-left","up-left",1510435846)):null);
var up_right_neighbor = ((!(close_neighbor_QMARK_))?lg_checkers.board.neighbor_piece_by_direction.call(null,pos,new cljs.core.Keyword(null,"up-right","up-right",-546303106)):null);
var down_left_neighbor = ((!(close_neighbor_QMARK_))?lg_checkers.board.neighbor_piece_by_direction.call(null,pos,new cljs.core.Keyword(null,"down-left","down-left",568486758)):null);
var down_right_neighbor = ((!(close_neighbor_QMARK_))?lg_checkers.board.neighbor_piece_by_direction.call(null,pos,new cljs.core.Keyword(null,"down-right","down-right",1213350619)):null);
if(close_neighbor_QMARK_){
return cljs.core.get.call(null,lg_checkers.board.piece_neighbor_direction_by_number,cljs.core.to_array.call(null,lg_checkers.board.compute_pos_neighbors_memo.call(null,pos)).indexOf(neighbor_pos));
} else {
if((cljs.core.some_QMARK_.call(null,up_left_neighbor)) && (cljs.core._EQ_.call(null,neighbor_pos,lg_checkers.board.neighbor_piece_by_direction.call(null,up_left_neighbor,new cljs.core.Keyword(null,"up-left","up-left",1510435846))))){
return new cljs.core.Keyword(null,"up-left","up-left",1510435846);
} else {
if((cljs.core.some_QMARK_.call(null,up_right_neighbor)) && (cljs.core._EQ_.call(null,neighbor_pos,lg_checkers.board.neighbor_piece_by_direction.call(null,up_right_neighbor,new cljs.core.Keyword(null,"up-right","up-right",-546303106))))){
return new cljs.core.Keyword(null,"up-right","up-right",-546303106);
} else {
if((cljs.core.some_QMARK_.call(null,down_left_neighbor)) && (cljs.core._EQ_.call(null,neighbor_pos,lg_checkers.board.neighbor_piece_by_direction.call(null,down_left_neighbor,new cljs.core.Keyword(null,"down-left","down-left",568486758))))){
return new cljs.core.Keyword(null,"down-left","down-left",568486758);
} else {
if((cljs.core.some_QMARK_.call(null,down_right_neighbor)) && (cljs.core._EQ_.call(null,neighbor_pos,lg_checkers.board.neighbor_piece_by_direction.call(null,down_right_neighbor,new cljs.core.Keyword(null,"down-right","down-right",1213350619))))){
return new cljs.core.Keyword(null,"down-right","down-right",1213350619);
} else {
return null;
}
}
}
}
}
});
lg_checkers.board.good_piece_type_direction_QMARK_ = (function lg_checkers$board$good_piece_type_direction_QMARK_(piece_type,direction){
var promoted_QMARK_ = cljs.core.contains_QMARK_.call(null,lg_checkers.board.all_promoted_movable_pieces,piece_type);
var kind_of_black_piece_QMARK_ = cljs.core.contains_QMARK_.call(null,lg_checkers.board.all_black_movable_pieces,piece_type);
if(promoted_QMARK_){
return true;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"empty-piece","empty-piece",515714264),piece_type)){
return false;
} else {
if(kind_of_black_piece_QMARK_){
return cljs.core.contains_QMARK_.call(null,lg_checkers.board.piece_neighbor_directions_black_forward,direction);
} else {
return cljs.core.contains_QMARK_.call(null,lg_checkers.board.piece_neighbor_directions_red_forward,direction);
}
}
}
});
lg_checkers.board.create_board = (function lg_checkers$board$create_board(){
return reagent.core.atom.call(null,cljs.core.apply.call(null,cljs.core.sorted_map,cljs.core.flatten.call(null,cljs.core.map_indexed.call(null,(function (i,v){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(i + (1)),v],null));
}),cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.repeat.call(null,(12),new cljs.core.Keyword(null,"red-piece","red-piece",-398776236)),cljs.core.repeat.call(null,(8),new cljs.core.Keyword(null,"empty-piece","empty-piece",515714264)),cljs.core.repeat.call(null,(12),new cljs.core.Keyword(null,"black-piece","black-piece",2048390247))], null))))));
});
lg_checkers.board.board = lg_checkers.board.create_board.call(null);
if(typeof lg_checkers.board.app_state !== 'undefined'){
} else {
lg_checkers.board.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"user-is-allowed-to-move","user-is-allowed-to-move",1540192799),true,new cljs.core.Keyword(null,"captured-pieces","captured-pieces",-1406669063),(0),new cljs.core.Keyword(null,"number-of-mouse-clicks","number-of-mouse-clicks",-225975392),(0),new cljs.core.Keyword(null,"replay-is-in-progress","replay-is-in-progress",-1340850428),true,new cljs.core.Keyword(null,"delay-timer-in-ai-is-on","delay-timer-in-ai-is-on",-641385360),true,new cljs.core.Keyword(null,"original-piece-color-for-ai","original-piece-color-for-ai",1141180952),new cljs.core.Keyword(null,"red-piece","red-piece",-398776236),new cljs.core.Keyword(null,"ai-timeout-for-work-emulation","ai-timeout-for-work-emulation",549896297),(5000)], null));
}
lg_checkers.board.control_all_pieces = false;
var c__11834__auto___24955 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11834__auto___24955){
return (function (){
var f__11835__auto__ = (function (){var switch__11722__auto__ = ((function (c__11834__auto___24955){
return (function (state_24918){
var state_val_24919 = (state_24918[(1)]);
if((state_val_24919 === (7))){
var inst_24885 = (state_24918[(7)]);
var inst_24886 = (state_24918[(8)]);
var inst_24885__$1 = (state_24918[(2)]);
var inst_24886__$1 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(inst_24885__$1);
var inst_24887 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"board-clicked","board-clicked",1157654001),inst_24886__$1);
var state_24918__$1 = (function (){var statearr_24920 = state_24918;
(statearr_24920[(7)] = inst_24885__$1);

(statearr_24920[(8)] = inst_24886__$1);

return statearr_24920;
})();
if(inst_24887){
var statearr_24921_24956 = state_24918__$1;
(statearr_24921_24956[(1)] = (8));

} else {
var statearr_24922_24957 = state_24918__$1;
(statearr_24922_24957[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (1))){
var inst_24881 = lg_checkers.board.send_api_command_register_channel_to_receive_event.call(null,lg_checkers.board.board_events,new cljs.core.Keyword(null,"api-event-unblock-user-board-input","api-event-unblock-user-board-input",1661151846));
var state_24918__$1 = (function (){var statearr_24923 = state_24918;
(statearr_24923[(9)] = inst_24881);

return statearr_24923;
})();
var statearr_24924_24958 = state_24918__$1;
(statearr_24924_24958[(2)] = null);

(statearr_24924_24958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (4))){
var state_24918__$1 = state_24918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24918__$1,(7),lg_checkers.board.board_events);
} else {
if((state_val_24919 === (15))){
var state_24918__$1 = state_24918;
var statearr_24925_24959 = state_24918__$1;
(statearr_24925_24959[(2)] = null);

(statearr_24925_24959[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (13))){
var inst_24886 = (state_24918[(8)]);
var inst_24898 = (state_24918[(2)]);
var inst_24899 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"replay-recorded-game","replay-recorded-game",826564334),inst_24886);
var state_24918__$1 = (function (){var statearr_24926 = state_24918;
(statearr_24926[(10)] = inst_24898);

return statearr_24926;
})();
if(inst_24899){
var statearr_24927_24960 = state_24918__$1;
(statearr_24927_24960[(1)] = (14));

} else {
var statearr_24928_24961 = state_24918__$1;
(statearr_24928_24961[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (6))){
var inst_24914 = (state_24918[(2)]);
var state_24918__$1 = state_24918;
var statearr_24929_24962 = state_24918__$1;
(statearr_24929_24962[(2)] = inst_24914);

(statearr_24929_24962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (17))){
var inst_24885 = (state_24918[(7)]);
var inst_24907 = lg_checkers.board.toggle_delay_timer_in_ai.call(null,inst_24885);
var state_24918__$1 = state_24918;
var statearr_24930_24963 = state_24918__$1;
(statearr_24930_24963[(2)] = inst_24907);

(statearr_24930_24963[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (3))){
var inst_24916 = (state_24918[(2)]);
var state_24918__$1 = state_24918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24918__$1,inst_24916);
} else {
if((state_val_24919 === (12))){
var state_24918__$1 = state_24918;
var statearr_24931_24964 = state_24918__$1;
(statearr_24931_24964[(2)] = null);

(statearr_24931_24964[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (2))){
var state_24918__$1 = state_24918;
var statearr_24932_24965 = state_24918__$1;
(statearr_24932_24965[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (19))){
var inst_24910 = (state_24918[(2)]);
var state_24918__$1 = (function (){var statearr_24934 = state_24918;
(statearr_24934[(11)] = inst_24910);

return statearr_24934;
})();
var statearr_24935_24966 = state_24918__$1;
(statearr_24935_24966[(2)] = null);

(statearr_24935_24966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (11))){
var inst_24885 = (state_24918[(7)]);
var inst_24895 = lg_checkers.board.controller_unblock_user_board_input.call(null,inst_24885);
var state_24918__$1 = state_24918;
var statearr_24936_24967 = state_24918__$1;
(statearr_24936_24967[(2)] = inst_24895);

(statearr_24936_24967[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (9))){
var state_24918__$1 = state_24918;
var statearr_24937_24968 = state_24918__$1;
(statearr_24937_24968[(2)] = null);

(statearr_24937_24968[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (5))){
var state_24918__$1 = state_24918;
var statearr_24938_24969 = state_24918__$1;
(statearr_24938_24969[(2)] = null);

(statearr_24938_24969[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (14))){
var inst_24885 = (state_24918[(7)]);
var inst_24901 = lg_checkers.board.replay_recorded_game.call(null,inst_24885);
var state_24918__$1 = state_24918;
var statearr_24939_24970 = state_24918__$1;
(statearr_24939_24970[(2)] = inst_24901);

(statearr_24939_24970[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (16))){
var inst_24886 = (state_24918[(8)]);
var inst_24904 = (state_24918[(2)]);
var inst_24905 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"toggle-delay-timer-in-ai","toggle-delay-timer-in-ai",1893069099),inst_24886);
var state_24918__$1 = (function (){var statearr_24940 = state_24918;
(statearr_24940[(12)] = inst_24904);

return statearr_24940;
})();
if(inst_24905){
var statearr_24941_24971 = state_24918__$1;
(statearr_24941_24971[(1)] = (17));

} else {
var statearr_24942_24972 = state_24918__$1;
(statearr_24942_24972[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (10))){
var inst_24886 = (state_24918[(8)]);
var inst_24892 = (state_24918[(2)]);
var inst_24893 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"api-event-unblock-user-board-input","api-event-unblock-user-board-input",1661151846),inst_24886);
var state_24918__$1 = (function (){var statearr_24943 = state_24918;
(statearr_24943[(13)] = inst_24892);

return statearr_24943;
})();
if(inst_24893){
var statearr_24944_24973 = state_24918__$1;
(statearr_24944_24973[(1)] = (11));

} else {
var statearr_24945_24974 = state_24918__$1;
(statearr_24945_24974[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (18))){
var state_24918__$1 = state_24918;
var statearr_24946_24975 = state_24918__$1;
(statearr_24946_24975[(2)] = null);

(statearr_24946_24975[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (8))){
var inst_24885 = (state_24918[(7)]);
var inst_24889 = lg_checkers.board.controler_worker_board_clicked.call(null,inst_24885);
var state_24918__$1 = state_24918;
var statearr_24947_24976 = state_24918__$1;
(statearr_24947_24976[(2)] = inst_24889);

(statearr_24947_24976[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11834__auto___24955))
;
return ((function (switch__11722__auto__,c__11834__auto___24955){
return (function() {
var lg_checkers$board$state_machine__11723__auto__ = null;
var lg_checkers$board$state_machine__11723__auto____0 = (function (){
var statearr_24951 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24951[(0)] = lg_checkers$board$state_machine__11723__auto__);

(statearr_24951[(1)] = (1));

return statearr_24951;
});
var lg_checkers$board$state_machine__11723__auto____1 = (function (state_24918){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__.call(null,state_24918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e24952){if((e24952 instanceof Object)){
var ex__11726__auto__ = e24952;
var statearr_24953_24977 = state_24918;
(statearr_24953_24977[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24978 = state_24918;
state_24918 = G__24978;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
lg_checkers$board$state_machine__11723__auto__ = function(state_24918){
switch(arguments.length){
case 0:
return lg_checkers$board$state_machine__11723__auto____0.call(this);
case 1:
return lg_checkers$board$state_machine__11723__auto____1.call(this,state_24918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lg_checkers$board$state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = lg_checkers$board$state_machine__11723__auto____0;
lg_checkers$board$state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = lg_checkers$board$state_machine__11723__auto____1;
return lg_checkers$board$state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11834__auto___24955))
})();
var state__11836__auto__ = (function (){var statearr_24954 = f__11835__auto__.call(null);
(statearr_24954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11834__auto___24955);

return statearr_24954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11836__auto__);
});})(c__11834__auto___24955))
);

lg_checkers.board.controller_user_board_actions_are_allowed = true;
lg_checkers.board.controller_unblock_user_board_input = (function lg_checkers$board$controller_unblock_user_board_input(event){
lg_checkers.board.controller_user_board_actions_are_allowed = true;

cljs.core.swap_BANG_.call(null,lg_checkers.board.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"user-is-allowed-to-move","user-is-allowed-to-move",1540192799),true);

return lg_checkers.board.controller_last_click_board_pos = null;
});
lg_checkers.board.controler_worker_board_clicked = (function lg_checkers$board$controler_worker_board_clicked(event){
var current_event = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(event);
var board_pos = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(event);
var red_piece_QMARK_ = cljs.core.contains_QMARK_.call(null,lg_checkers.board.all_red_movable_pieces,cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.board),board_pos));
var allowed_piece_type_QMARK_ = (function (){var or__6251__auto__ = (!(red_piece_QMARK_)) && (cljs.core.not.call(null,lg_checkers.board.control_all_pieces));
if(or__6251__auto__){
return or__6251__auto__;
} else {
return lg_checkers.board.control_all_pieces;
}
})();
var same_board_pos_QMARK_ = (board_pos === lg_checkers.board.controller_last_click_board_pos);
var new_board_pos_QMARK_ = !(same_board_pos_QMARK_);
lg_checkers.board.update_number_of_mouse_clicks_for_ui.call(null);

if(cljs.core.truth_(allowed_piece_type_QMARK_)){
if(cljs.core.truth_(lg_checkers.board.controller_user_board_actions_are_allowed)){
if(new_board_pos_QMARK_){
lg_checkers.board.controller_last_click_board_pos = board_pos;

return lg_checkers.board.send_api_command_board_piece_mouse_click.call(null,board_pos);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
lg_checkers.board.send_api_command_board_piece_mouse_click = (function lg_checkers$board$send_api_command_board_piece_mouse_click(pos){
lg_checkers.board.controller_user_board_actions_are_allowed = false;

cljs.core.swap_BANG_.call(null,lg_checkers.board.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"user-is-allowed-to-move","user-is-allowed-to-move",1540192799),false);

return cljs.core.async.put_BANG_.call(null,lg_checkers.board.board_api_commands,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"board-clicked","board-clicked",1157654001),new cljs.core.Keyword(null,"position","position",-2011731912),pos], null));
});
lg_checkers.board.update_number_of_mouse_clicks_for_ui = (function lg_checkers$board$update_number_of_mouse_clicks_for_ui(){
return cljs.core.swap_BANG_.call(null,lg_checkers.board.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"number-of-mouse-clicks","number-of-mouse-clicks",-225975392),((1) + cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.app_state),new cljs.core.Keyword(null,"number-of-mouse-clicks","number-of-mouse-clicks",-225975392))));
});
lg_checkers.board.replay_recorded_game = (function lg_checkers$board$replay_recorded_game(event){
return cljs.core.swap_BANG_.call(null,lg_checkers.board.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"replay-is-in-progress","replay-is-in-progress",-1340850428),true);
});
lg_checkers.board.toggle_delay_timer_in_ai = (function lg_checkers$board$toggle_delay_timer_in_ai(event){
return cljs.core.async.put_BANG_.call(null,lg_checkers.board.board_api_commands,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"toggle-delay-timer-in-ai","toggle-delay-timer-in-ai",1893069099)], null));
});
var c__11834__auto___25053 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11834__auto___25053){
return (function (){
var f__11835__auto__ = (function (){var switch__11722__auto__ = ((function (c__11834__auto___25053){
return (function (state_25016){
var state_val_25017 = (state_25016[(1)]);
if((state_val_25017 === (7))){
var inst_24984 = (state_25016[(7)]);
var inst_24983 = (state_25016[(8)]);
var inst_24983__$1 = (state_25016[(2)]);
var inst_24984__$1 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(inst_24983__$1);
var inst_24985 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"board-clicked","board-clicked",1157654001),inst_24984__$1);
var state_25016__$1 = (function (){var statearr_25018 = state_25016;
(statearr_25018[(7)] = inst_24984__$1);

(statearr_25018[(8)] = inst_24983__$1);

return statearr_25018;
})();
if(inst_24985){
var statearr_25019_25054 = state_25016__$1;
(statearr_25019_25054[(1)] = (8));

} else {
var statearr_25020_25055 = state_25016__$1;
(statearr_25020_25055[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (1))){
var inst_24979 = lg_checkers.board.send_ai_command_register_channel_to_receive_event.call(null,lg_checkers.board.board_api_commands,new cljs.core.Keyword(null,"ai-event-ai-made-movement","ai-event-ai-made-movement",-259615458));
var state_25016__$1 = (function (){var statearr_25021 = state_25016;
(statearr_25021[(9)] = inst_24979);

return statearr_25021;
})();
var statearr_25022_25056 = state_25016__$1;
(statearr_25022_25056[(2)] = null);

(statearr_25022_25056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (4))){
var state_25016__$1 = state_25016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25016__$1,(7),lg_checkers.board.board_api_commands);
} else {
if((state_val_25017 === (15))){
var state_25016__$1 = state_25016;
var statearr_25023_25057 = state_25016__$1;
(statearr_25023_25057[(2)] = null);

(statearr_25023_25057[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (13))){
var inst_24984 = (state_25016[(7)]);
var inst_24996 = (state_25016[(2)]);
var inst_24997 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ai-event-ai-made-movement","ai-event-ai-made-movement",-259615458),inst_24984);
var state_25016__$1 = (function (){var statearr_25024 = state_25016;
(statearr_25024[(10)] = inst_24996);

return statearr_25024;
})();
if(inst_24997){
var statearr_25025_25058 = state_25016__$1;
(statearr_25025_25058[(1)] = (14));

} else {
var statearr_25026_25059 = state_25016__$1;
(statearr_25026_25059[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (6))){
var inst_25012 = (state_25016[(2)]);
var state_25016__$1 = state_25016;
var statearr_25027_25060 = state_25016__$1;
(statearr_25027_25060[(2)] = inst_25012);

(statearr_25027_25060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (17))){
var inst_24983 = (state_25016[(8)]);
var inst_25005 = lg_checkers.board.api_toggle_delay_timer_in_ai.call(null,inst_24983);
var state_25016__$1 = state_25016;
var statearr_25028_25061 = state_25016__$1;
(statearr_25028_25061[(2)] = inst_25005);

(statearr_25028_25061[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (3))){
var inst_25014 = (state_25016[(2)]);
var state_25016__$1 = state_25016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25016__$1,inst_25014);
} else {
if((state_val_25017 === (12))){
var state_25016__$1 = state_25016;
var statearr_25029_25062 = state_25016__$1;
(statearr_25029_25062[(2)] = null);

(statearr_25029_25062[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (2))){
var state_25016__$1 = state_25016;
var statearr_25030_25063 = state_25016__$1;
(statearr_25030_25063[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (19))){
var inst_25008 = (state_25016[(2)]);
var state_25016__$1 = (function (){var statearr_25032 = state_25016;
(statearr_25032[(11)] = inst_25008);

return statearr_25032;
})();
var statearr_25033_25064 = state_25016__$1;
(statearr_25033_25064[(2)] = null);

(statearr_25033_25064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (11))){
var inst_24983 = (state_25016[(8)]);
var inst_24993 = lg_checkers.board.api_worker_register_channel_to_receive_event.call(null,inst_24983);
var state_25016__$1 = state_25016;
var statearr_25034_25065 = state_25016__$1;
(statearr_25034_25065[(2)] = inst_24993);

(statearr_25034_25065[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (9))){
var state_25016__$1 = state_25016;
var statearr_25035_25066 = state_25016__$1;
(statearr_25035_25066[(2)] = null);

(statearr_25035_25066[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (5))){
var state_25016__$1 = state_25016;
var statearr_25036_25067 = state_25016__$1;
(statearr_25036_25067[(2)] = null);

(statearr_25036_25067[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (14))){
var inst_24983 = (state_25016[(8)]);
var inst_24999 = lg_checkers.board.api_worker_ai_made_movement.call(null,inst_24983);
var state_25016__$1 = state_25016;
var statearr_25037_25068 = state_25016__$1;
(statearr_25037_25068[(2)] = inst_24999);

(statearr_25037_25068[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (16))){
var inst_24984 = (state_25016[(7)]);
var inst_25002 = (state_25016[(2)]);
var inst_25003 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"toggle-delay-timer-in-ai","toggle-delay-timer-in-ai",1893069099),inst_24984);
var state_25016__$1 = (function (){var statearr_25038 = state_25016;
(statearr_25038[(12)] = inst_25002);

return statearr_25038;
})();
if(inst_25003){
var statearr_25039_25069 = state_25016__$1;
(statearr_25039_25069[(1)] = (17));

} else {
var statearr_25040_25070 = state_25016__$1;
(statearr_25040_25070[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (10))){
var inst_24984 = (state_25016[(7)]);
var inst_24990 = (state_25016[(2)]);
var inst_24991 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"register-channel-to-receive-event","register-channel-to-receive-event",322539620),inst_24984);
var state_25016__$1 = (function (){var statearr_25041 = state_25016;
(statearr_25041[(13)] = inst_24990);

return statearr_25041;
})();
if(inst_24991){
var statearr_25042_25071 = state_25016__$1;
(statearr_25042_25071[(1)] = (11));

} else {
var statearr_25043_25072 = state_25016__$1;
(statearr_25043_25072[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (18))){
var state_25016__$1 = state_25016;
var statearr_25044_25073 = state_25016__$1;
(statearr_25044_25073[(2)] = null);

(statearr_25044_25073[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25017 === (8))){
var inst_24983 = (state_25016[(8)]);
var inst_24987 = lg_checkers.board.board_worker_board_clicked.call(null,inst_24983);
var state_25016__$1 = state_25016;
var statearr_25045_25074 = state_25016__$1;
(statearr_25045_25074[(2)] = inst_24987);

(statearr_25045_25074[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11834__auto___25053))
;
return ((function (switch__11722__auto__,c__11834__auto___25053){
return (function() {
var lg_checkers$board$state_machine__11723__auto__ = null;
var lg_checkers$board$state_machine__11723__auto____0 = (function (){
var statearr_25049 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25049[(0)] = lg_checkers$board$state_machine__11723__auto__);

(statearr_25049[(1)] = (1));

return statearr_25049;
});
var lg_checkers$board$state_machine__11723__auto____1 = (function (state_25016){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__.call(null,state_25016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e25050){if((e25050 instanceof Object)){
var ex__11726__auto__ = e25050;
var statearr_25051_25075 = state_25016;
(statearr_25051_25075[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25076 = state_25016;
state_25016 = G__25076;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
lg_checkers$board$state_machine__11723__auto__ = function(state_25016){
switch(arguments.length){
case 0:
return lg_checkers$board$state_machine__11723__auto____0.call(this);
case 1:
return lg_checkers$board$state_machine__11723__auto____1.call(this,state_25016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lg_checkers$board$state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = lg_checkers$board$state_machine__11723__auto____0;
lg_checkers$board$state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = lg_checkers$board$state_machine__11723__auto____1;
return lg_checkers$board$state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11834__auto___25053))
})();
var state__11836__auto__ = (function (){var statearr_25052 = f__11835__auto__.call(null);
(statearr_25052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11834__auto___25053);

return statearr_25052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11836__auto__);
});})(c__11834__auto___25053))
);

lg_checkers.board.api_event_receivers = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"api-event-unblock-user-board-input","api-event-unblock-user-board-input",1661151846),cljs.core.PersistentHashSet.EMPTY], null);
lg_checkers.board.send_api_command_register_channel_to_receive_event = (function lg_checkers$board$send_api_command_register_channel_to_receive_event(channel,event){
return cljs.core.async.put_BANG_.call(null,lg_checkers.board.board_api_commands,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"register-channel-to-receive-event","register-channel-to-receive-event",322539620),new cljs.core.Keyword(null,"channel","channel",734187692),channel,new cljs.core.Keyword(null,"event","event",301435442),event], null));
});
lg_checkers.board.api_worker_register_channel_to_receive_event = (function lg_checkers$board$api_worker_register_channel_to_receive_event(full_event){
var channel = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(full_event);
var event = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(full_event);
return lg_checkers.board.api_event_receivers = cljs.core.assoc.call(null,lg_checkers.board.api_event_receivers,event,cljs.core.conj.call(null,cljs.core.get.call(null,lg_checkers.board.api_event_receivers,event),channel));
});
lg_checkers.board.send_all_receivers_unblock_user_board_input = (function lg_checkers$board$send_all_receivers_unblock_user_board_input(){
return cljs.core.doall.call(null,cljs.core.map.call(null,lg_checkers.board.send_single_receiver_unblock_user_board_input,cljs.core.get.call(null,lg_checkers.board.api_event_receivers,new cljs.core.Keyword(null,"api-event-unblock-user-board-input","api-event-unblock-user-board-input",1661151846))));
});
lg_checkers.board.send_single_receiver_unblock_user_board_input = (function lg_checkers$board$send_single_receiver_unblock_user_board_input(channel){
return cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"api-event-unblock-user-board-input","api-event-unblock-user-board-input",1661151846)], null));
});
lg_checkers.board.board_worker_board_clicked = (function lg_checkers$board$board_worker_board_clicked(event){
var source_is_set_QMARK_ = cljs.core.some_QMARK_.call(null,lg_checkers.board.source_piece_position);
var current_position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(event);
var current_piece_type = cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.board),current_position);
var source_original_piece_type = ((cljs.core.some_QMARK_.call(null,lg_checkers.board.source_piece_position))?lg_checkers.board.original_piece_type.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.board),lg_checkers.board.source_piece_position)):null);
if(!(source_is_set_QMARK_)){
if(cljs.core.contains_QMARK_.call(null,lg_checkers.board.original_movable_pieces,current_piece_type)){
lg_checkers.board.source_piece_position = current_position;

lg_checkers.board.mark_piece_as.call(null,lg_checkers.board.source_piece_position,new cljs.core.Keyword(null,"source-piece","source-piece",-1368744576));
} else {
}

return lg_checkers.board.send_all_receivers_unblock_user_board_input.call(null);
} else {
if(cljs.core._EQ_.call(null,lg_checkers.board.source_piece_position,current_position)){
lg_checkers.board.update_board_position.call(null,lg_checkers.board.source_piece_position,source_original_piece_type);

lg_checkers.board.source_piece_position = null;

return lg_checkers.board.send_all_receivers_unblock_user_board_input.call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"empty-piece","empty-piece",515714264),current_piece_type)){
if(cljs.core.truth_(lg_checkers.board.test_move_piece.call(null,lg_checkers.board.source_piece_position,current_position))){
if(cljs.core.truth_(lg_checkers.board.move_piece.call(null,lg_checkers.board.source_piece_position,current_position))){
lg_checkers.board.promote_piece.call(null,current_position);

lg_checkers.board.send_db_command_save_movement.call(null,new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"movement-is-over","movement-is-over",81885100),lg_checkers.board.source_piece_position,current_position,cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.board),current_position));

lg_checkers.board.send_ai_command_compute_movement.call(null);

return lg_checkers.board.source_piece_position = null;
} else {
lg_checkers.board.promote_piece.call(null,current_position);

lg_checkers.board.send_db_command_save_movement.call(null,new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"movement-continues","movement-continues",908307741),lg_checkers.board.source_piece_position,current_position,cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.board),current_position));

lg_checkers.board.send_all_receivers_unblock_user_board_input.call(null);

return lg_checkers.board.source_piece_position = current_position;
}
} else {
return lg_checkers.board.send_all_receivers_unblock_user_board_input.call(null);
}
} else {
return lg_checkers.board.send_all_receivers_unblock_user_board_input.call(null);
}
}
}
});
lg_checkers.board.test_move_piece = (function lg_checkers$board$test_move_piece(source_pos,destination_pos){
var piece_type = cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.board),source_pos);
var source_piece_is_black_QMARK_ = cljs.core.contains_QMARK_.call(null,lg_checkers.board.all_black_movable_pieces,piece_type);
var direction = lg_checkers.board.neighbor_piece_direction_by_neighbor_pos.call(null,source_pos,destination_pos);
var close_neighbor = ((cljs.core.some_QMARK_.call(null,direction))?lg_checkers.board.neighbor_piece_by_direction.call(null,source_pos,direction):null);
var close_neighbor_type = ((cljs.core.some_QMARK_.call(null,close_neighbor))?cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.board),close_neighbor):null);
if(cljs.core.some_QMARK_.call(null,direction)){
if(cljs.core.truth_(lg_checkers.board.good_piece_type_direction_QMARK_.call(null,piece_type,direction))){
if(cljs.core._EQ_.call(null,destination_pos,close_neighbor)){
return true;
} else {
if(source_piece_is_black_QMARK_){
if(cljs.core.contains_QMARK_.call(null,lg_checkers.board.all_red_movable_pieces,close_neighbor_type)){
return true;
} else {
return false;
}
} else {
if(cljs.core.contains_QMARK_.call(null,lg_checkers.board.all_black_movable_pieces,close_neighbor_type)){
return true;
} else {
return false;
}
}
}
} else {
return false;
}
} else {
return false;
}
});
lg_checkers.board.update_internal_score = (function lg_checkers$board$update_internal_score(piece_type,original_piece_color_type,delta_score){
cljs.core.swap_BANG_.call(null,lg_checkers.board.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"captured-pieces","captured-pieces",-1406669063),(delta_score + cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.app_state),new cljs.core.Keyword(null,"captured-pieces","captured-pieces",-1406669063))));

return lg_checkers.board.update_score_for_ui.call(null,original_piece_color_type,((100) * delta_score));
});
lg_checkers.board.update_score_for_ui = (function lg_checkers$board$update_score_for_ui(original_piece_color_type,delta_score){
return null;
});
lg_checkers.board.is_there_are_victim_QMARK_ = (function lg_checkers$board$is_there_are_victim_QMARK_(test_pos,source_pos,actor_piece_type,just_bool){
var current_piece_color = lg_checkers.board.original_piece_color.call(null,actor_piece_type);
var test_piece_color = lg_checkers.board.original_piece_color.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.board),test_pos));
var direction = lg_checkers.board.neighbor_piece_direction_by_neighbor_pos.call(null,source_pos,test_pos);
var good_direction_QMARK_ = lg_checkers.board.good_piece_type_direction_QMARK_.call(null,actor_piece_type,direction);
var place_to_move_pos = ((cljs.core.some_QMARK_.call(null,direction))?lg_checkers.board.neighbor_piece_by_direction.call(null,test_pos,direction):null);
var is_there_are_place_to_move_QMARK_ = ((cljs.core.some_QMARK_.call(null,place_to_move_pos))?cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"empty-piece","empty-piece",515714264),cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.board),place_to_move_pos)):false);
var potentially_positive_answer = (cljs.core.truth_(just_bool)?(function (){var and__6239__auto__ = good_direction_QMARK_;
if(cljs.core.truth_(and__6239__auto__)){
return is_there_are_place_to_move_QMARK_;
} else {
return and__6239__auto__;
}
})():(cljs.core.truth_((function (){var and__6239__auto__ = good_direction_QMARK_;
if(cljs.core.truth_(and__6239__auto__)){
return is_there_are_place_to_move_QMARK_;
} else {
return and__6239__auto__;
}
})())?test_pos:null));
var negative_answer = (cljs.core.truth_(just_bool)?false:null);
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"empty-piece","empty-piece",515714264),test_piece_color)){
if(cljs.core.not_EQ_.call(null,current_piece_color,test_piece_color)){
return potentially_positive_answer;
} else {
return negative_answer;
}
} else {
return negative_answer;
}
});
lg_checkers.board.can_take_victim_enemy_QMARK_ = (function lg_checkers$board$can_take_victim_enemy_QMARK_(test_pos,actor_piece_type){
return cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__25077_SHARP_){
return lg_checkers.board.is_there_are_victim_QMARK_.call(null,p1__25077_SHARP_,test_pos,actor_piece_type,true);
}),cljs.core.set.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,lg_checkers.board.compute_pos_neighbors_memo.call(null,test_pos))))),true);
});
lg_checkers.board.promote_piece = (function lg_checkers$board$promote_piece(pos){
var piece_type = cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.board),pos);
var can_be_promoted_to = lg_checkers.board.piece_can_be_promoted_to.call(null,pos,piece_type);
if(cljs.core.some_QMARK_.call(null,can_be_promoted_to)){
return lg_checkers.board.update_board_position.call(null,pos,can_be_promoted_to);
} else {
return null;
}
});
lg_checkers.board.move_piece = (function lg_checkers$board$move_piece(source_pos,destination_pos){
var current_source_piece_type = cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.board),source_pos);
var kind_of_black_piece_QMARK_ = cljs.core.contains_QMARK_.call(null,lg_checkers.board.all_black_movable_pieces,current_source_piece_type);
var current_original_piece_color_type = ((kind_of_black_piece_QMARK_)?new cljs.core.Keyword(null,"black-piece","black-piece",2048390247):new cljs.core.Keyword(null,"red-piece","red-piece",-398776236));
var promoted_piece_QMARK_ = cljs.core.contains_QMARK_.call(null,lg_checkers.board.all_promoted_movable_pieces,current_source_piece_type);
var current_original_piece_type = lg_checkers.board.original_piece_type.call(null,current_source_piece_type);
var direction = lg_checkers.board.neighbor_piece_direction_by_neighbor_pos.call(null,source_pos,destination_pos);
var close_neighbor = lg_checkers.board.neighbor_piece_by_direction.call(null,source_pos,direction);
lg_checkers.board.update_board_position.call(null,source_pos,new cljs.core.Keyword(null,"empty-piece","empty-piece",515714264));

if(cljs.core._EQ_.call(null,destination_pos,close_neighbor)){
lg_checkers.board.update_board_position.call(null,destination_pos,current_original_piece_type);

return true;
} else {
lg_checkers.board.update_internal_score.call(null,current_source_piece_type,current_original_piece_color_type,(1));

lg_checkers.board.update_board_position.call(null,close_neighbor,new cljs.core.Keyword(null,"empty-piece","empty-piece",515714264));

if(cljs.core.truth_(lg_checkers.board.can_take_victim_enemy_QMARK_.call(null,destination_pos,current_original_piece_type))){
lg_checkers.board.update_board_position.call(null,destination_pos,current_source_piece_type);

return false;
} else {
lg_checkers.board.update_board_position.call(null,destination_pos,current_original_piece_type);

return true;
}
}
});
lg_checkers.board.send_db_command_save_movement = (function lg_checkers$board$send_db_command_save_movement(actor,movement_condition,source_pos,destination_pos,piece_type){
return null;
});
lg_checkers.board.send_ai_command_compute_movement = (function lg_checkers$board$send_ai_command_compute_movement(){
return cljs.core.async.put_BANG_.call(null,lg_checkers.board.ai_commands,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"make-move","make-move",-1146306373)], null));
});
lg_checkers.board.api_worker_ai_made_movement = (function lg_checkers$board$api_worker_ai_made_movement(){
return lg_checkers.board.send_all_receivers_unblock_user_board_input.call(null);
});
lg_checkers.board.mark_piece_as = (function lg_checkers$board$mark_piece_as(pos,state){
var current_piece_type = cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.board),pos);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"source-piece","source-piece",-1368744576),state)){
if(cljs.core.contains_QMARK_.call(null,lg_checkers.board.original_movable_pieces,current_piece_type)){
lg_checkers.board.update_board_position.call(null,pos,cljs.core.get.call(null,lg_checkers.board.way_to_mark_piece,current_piece_type));
} else {
}
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"normal-piece","normal-piece",-456099758),state)){
if(cljs.core.contains_QMARK_.call(null,lg_checkers.board.marked_movable_pieces,current_piece_type)){
return lg_checkers.board.update_board_position.call(null,pos,cljs.core.get.call(null,lg_checkers.board.way_to_unmark_piece,current_piece_type));
} else {
return null;
}
} else {
return null;
}
});
lg_checkers.board.send_board_command_update_board_position = (function lg_checkers$board$send_board_command_update_board_position(pos,piece){
return cljs.core.async.put_BANG_.call(null,lg_checkers.board.board_commands,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"update-board-position","update-board-position",-522194238),new cljs.core.Keyword(null,"position","position",-2011731912),pos,new cljs.core.Keyword(null,"piece","piece",1396691784),piece], null));
});
lg_checkers.board.update_board_position = (function lg_checkers$board$update_board_position(pos,piece){
return cljs.core.swap_BANG_.call(null,lg_checkers.board.board,cljs.core.assoc,pos,piece);
});
lg_checkers.board.api_toggle_delay_timer_in_ai = (function lg_checkers$board$api_toggle_delay_timer_in_ai(event){
return lg_checkers.board.send_ai_command_toggle_delay_timer_in_ai.call(null,event);
});
lg_checkers.board.send_ai_command_toggle_delay_timer_in_ai = (function lg_checkers$board$send_ai_command_toggle_delay_timer_in_ai(event){
return cljs.core.async.put_BANG_.call(null,lg_checkers.board.ai_commands,event);
});
lg_checkers.board.movable_piece_colors_for_ai = (function lg_checkers$board$movable_piece_colors_for_ai(){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"red-piece","red-piece",-398776236),cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.app_state),new cljs.core.Keyword(null,"original-piece-color-for-ai","original-piece-color-for-ai",1141180952)))){
return lg_checkers.board.all_red_movable_pieces;
} else {
return lg_checkers.board.all_black_movable_pieces;
}
});
var c__11834__auto___25160 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11834__auto___25160){
return (function (){
var f__11835__auto__ = (function (){var switch__11722__auto__ = ((function (c__11834__auto___25160){
return (function (state_25122){
var state_val_25123 = (state_25122[(1)]);
if((state_val_25123 === (7))){
var inst_25081 = (state_25122[(7)]);
var inst_25082 = (state_25122[(8)]);
var inst_25081__$1 = (state_25122[(2)]);
var inst_25082__$1 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(inst_25081__$1);
var inst_25083 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"make-move","make-move",-1146306373),inst_25082__$1);
var state_25122__$1 = (function (){var statearr_25124 = state_25122;
(statearr_25124[(7)] = inst_25081__$1);

(statearr_25124[(8)] = inst_25082__$1);

return statearr_25124;
})();
if(inst_25083){
var statearr_25125_25161 = state_25122__$1;
(statearr_25125_25161[(1)] = (8));

} else {
var statearr_25126_25162 = state_25122__$1;
(statearr_25126_25162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25123 === (20))){
var inst_25081 = (state_25122[(7)]);
var inst_25111 = lg_checkers.board.ai_worker_toggle_delay_timer_in_ai.call(null,inst_25081);
var state_25122__$1 = state_25122;
var statearr_25127_25163 = state_25122__$1;
(statearr_25127_25163[(2)] = inst_25111);

(statearr_25127_25163[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25123 === (1))){
var state_25122__$1 = state_25122;
var statearr_25128_25164 = state_25122__$1;
(statearr_25128_25164[(2)] = null);

(statearr_25128_25164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25123 === (4))){
var state_25122__$1 = state_25122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25122__$1,(7),lg_checkers.board.ai_commands);
} else {
if((state_val_25123 === (15))){
var inst_25095 = (state_25122[(2)]);
var state_25122__$1 = state_25122;
var statearr_25129_25165 = state_25122__$1;
(statearr_25129_25165[(2)] = inst_25095);

(statearr_25129_25165[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25123 === (21))){
var state_25122__$1 = state_25122;
var statearr_25130_25166 = state_25122__$1;
(statearr_25130_25166[(2)] = null);

(statearr_25130_25166[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25123 === (13))){
var inst_25081 = (state_25122[(7)]);
var inst_25098 = (state_25122[(2)]);
var inst_25099 = lg_checkers.board.ai_worker_make_move.call(null,inst_25081);
var state_25122__$1 = (function (){var statearr_25131 = state_25122;
(statearr_25131[(9)] = inst_25098);

return statearr_25131;
})();
var statearr_25132_25167 = state_25122__$1;
(statearr_25132_25167[(2)] = inst_25099);

(statearr_25132_25167[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25123 === (22))){
var inst_25114 = (state_25122[(2)]);
var state_25122__$1 = (function (){var statearr_25133 = state_25122;
(statearr_25133[(10)] = inst_25114);

return statearr_25133;
})();
var statearr_25134_25168 = state_25122__$1;
(statearr_25134_25168[(2)] = null);

(statearr_25134_25168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25123 === (6))){
var inst_25118 = (state_25122[(2)]);
var state_25122__$1 = state_25122;
var statearr_25135_25169 = state_25122__$1;
(statearr_25135_25169[(2)] = inst_25118);

(statearr_25135_25169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25123 === (17))){
var inst_25081 = (state_25122[(7)]);
var inst_25105 = lg_checkers.board.ai_worker_register_channel_to_receive_event.call(null,inst_25081);
var state_25122__$1 = state_25122;
var statearr_25136_25170 = state_25122__$1;
(statearr_25136_25170[(2)] = inst_25105);

(statearr_25136_25170[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25123 === (3))){
var inst_25120 = (state_25122[(2)]);
var state_25122__$1 = state_25122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25122__$1,inst_25120);
} else {
if((state_val_25123 === (12))){
var state_25122__$1 = state_25122;
var statearr_25137_25171 = state_25122__$1;
(statearr_25137_25171[(2)] = null);

(statearr_25137_25171[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25123 === (2))){
var state_25122__$1 = state_25122;
var statearr_25138_25172 = state_25122__$1;
(statearr_25138_25172[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25123 === (19))){
var inst_25082 = (state_25122[(8)]);
var inst_25108 = (state_25122[(2)]);
var inst_25109 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"toggle-delay-timer-in-ai","toggle-delay-timer-in-ai",1893069099),inst_25082);
var state_25122__$1 = (function (){var statearr_25140 = state_25122;
(statearr_25140[(11)] = inst_25108);

return statearr_25140;
})();
if(inst_25109){
var statearr_25141_25173 = state_25122__$1;
(statearr_25141_25173[(1)] = (20));

} else {
var statearr_25142_25174 = state_25122__$1;
(statearr_25142_25174[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25123 === (11))){
var state_25122__$1 = state_25122;
var statearr_25143_25175 = state_25122__$1;
(statearr_25143_25175[(2)] = null);

(statearr_25143_25175[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25123 === (9))){
var state_25122__$1 = state_25122;
var statearr_25144_25176 = state_25122__$1;
(statearr_25144_25176[(2)] = null);

(statearr_25144_25176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25123 === (5))){
var state_25122__$1 = state_25122;
var statearr_25145_25177 = state_25122__$1;
(statearr_25145_25177[(2)] = null);

(statearr_25145_25177[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25123 === (14))){
var inst_25089 = cljs.core.deref.call(null,lg_checkers.board.app_state);
var inst_25090 = cljs.core.get.call(null,inst_25089,new cljs.core.Keyword(null,"ai-timeout-for-work-emulation","ai-timeout-for-work-emulation",549896297));
var inst_25091 = cljs.core.async.timeout.call(null,inst_25090);
var state_25122__$1 = state_25122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25122__$1,(16),inst_25091);
} else {
if((state_val_25123 === (16))){
var inst_25093 = (state_25122[(2)]);
var state_25122__$1 = state_25122;
var statearr_25146_25178 = state_25122__$1;
(statearr_25146_25178[(2)] = inst_25093);

(statearr_25146_25178[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25123 === (10))){
var inst_25082 = (state_25122[(8)]);
var inst_25102 = (state_25122[(2)]);
var inst_25103 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"register-channel-to-receive-event","register-channel-to-receive-event",322539620),inst_25082);
var state_25122__$1 = (function (){var statearr_25147 = state_25122;
(statearr_25147[(12)] = inst_25102);

return statearr_25147;
})();
if(inst_25103){
var statearr_25148_25179 = state_25122__$1;
(statearr_25148_25179[(1)] = (17));

} else {
var statearr_25149_25180 = state_25122__$1;
(statearr_25149_25180[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25123 === (18))){
var state_25122__$1 = state_25122;
var statearr_25150_25181 = state_25122__$1;
(statearr_25150_25181[(2)] = null);

(statearr_25150_25181[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25123 === (8))){
var inst_25085 = cljs.core.deref.call(null,lg_checkers.board.app_state);
var inst_25086 = cljs.core.get.call(null,inst_25085,new cljs.core.Keyword(null,"delay-timer-in-ai-is-on","delay-timer-in-ai-is-on",-641385360));
var state_25122__$1 = state_25122;
if(cljs.core.truth_(inst_25086)){
var statearr_25151_25182 = state_25122__$1;
(statearr_25151_25182[(1)] = (11));

} else {
var statearr_25152_25183 = state_25122__$1;
(statearr_25152_25183[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11834__auto___25160))
;
return ((function (switch__11722__auto__,c__11834__auto___25160){
return (function() {
var lg_checkers$board$state_machine__11723__auto__ = null;
var lg_checkers$board$state_machine__11723__auto____0 = (function (){
var statearr_25156 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25156[(0)] = lg_checkers$board$state_machine__11723__auto__);

(statearr_25156[(1)] = (1));

return statearr_25156;
});
var lg_checkers$board$state_machine__11723__auto____1 = (function (state_25122){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__.call(null,state_25122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e25157){if((e25157 instanceof Object)){
var ex__11726__auto__ = e25157;
var statearr_25158_25184 = state_25122;
(statearr_25158_25184[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25185 = state_25122;
state_25122 = G__25185;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
lg_checkers$board$state_machine__11723__auto__ = function(state_25122){
switch(arguments.length){
case 0:
return lg_checkers$board$state_machine__11723__auto____0.call(this);
case 1:
return lg_checkers$board$state_machine__11723__auto____1.call(this,state_25122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lg_checkers$board$state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = lg_checkers$board$state_machine__11723__auto____0;
lg_checkers$board$state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = lg_checkers$board$state_machine__11723__auto____1;
return lg_checkers$board$state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11834__auto___25160))
})();
var state__11836__auto__ = (function (){var statearr_25159 = f__11835__auto__.call(null);
(statearr_25159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11834__auto___25160);

return statearr_25159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11836__auto__);
});})(c__11834__auto___25160))
);

lg_checkers.board.ai_event_receivers = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ai-event-ai-made-movement","ai-event-ai-made-movement",-259615458),cljs.core.PersistentHashSet.EMPTY], null);
lg_checkers.board.send_ai_command_register_channel_to_receive_event = (function lg_checkers$board$send_ai_command_register_channel_to_receive_event(channel,event){
return cljs.core.async.put_BANG_.call(null,lg_checkers.board.ai_commands,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"register-channel-to-receive-event","register-channel-to-receive-event",322539620),new cljs.core.Keyword(null,"channel","channel",734187692),channel,new cljs.core.Keyword(null,"event","event",301435442),event], null));
});
lg_checkers.board.ai_worker_register_channel_to_receive_event = (function lg_checkers$board$ai_worker_register_channel_to_receive_event(full_event){
var channel = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(full_event);
var event = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(full_event);
return lg_checkers.board.ai_event_receivers = cljs.core.assoc.call(null,lg_checkers.board.ai_event_receivers,event,cljs.core.conj.call(null,cljs.core.get.call(null,lg_checkers.board.ai_event_receivers,event),channel));
});
lg_checkers.board.send_all_receivers_ai_made_movement = (function lg_checkers$board$send_all_receivers_ai_made_movement(){
return cljs.core.doall.call(null,cljs.core.map.call(null,lg_checkers.board.send_single_receiver_ai_made_movement,cljs.core.get.call(null,lg_checkers.board.ai_event_receivers,new cljs.core.Keyword(null,"ai-event-ai-made-movement","ai-event-ai-made-movement",-259615458))));
});
lg_checkers.board.send_single_receiver_ai_made_movement = (function lg_checkers$board$send_single_receiver_ai_made_movement(channel){
return cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"ai-event-ai-made-movement","ai-event-ai-made-movement",-259615458)], null));
});
lg_checkers.board.ai_worker_toggle_delay_timer_in_ai = (function lg_checkers$board$ai_worker_toggle_delay_timer_in_ai(event){
return cljs.core.swap_BANG_.call(null,lg_checkers.board.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"delay-timer-in-ai-is-on","delay-timer-in-ai-is-on",-641385360),cljs.core.not.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.app_state),new cljs.core.Keyword(null,"delay-timer-in-ai-is-on","delay-timer-in-ai-is-on",-641385360))));
});
lg_checkers.board.ai_worker_make_move = (function lg_checkers$board$ai_worker_make_move(event){
lg_checkers.board.make_move.call(null,false,null);

return lg_checkers.board.send_all_receivers_ai_made_movement.call(null);
});
lg_checkers.board.calculate_ai_piece_to_move = (function lg_checkers$board$calculate_ai_piece_to_move(captures_only,specific_piece){
var neighbors = lg_checkers.board.calculate_neighbors.call(null);
var list_of_black_victims = cljs.core.seq.call(null,lg_checkers.board.calculate_real_black_victim_neighbors.call(null,neighbors));
var list_of_available_moves = cljs.core.seq.call(null,lg_checkers.board.calculate_red_moves.call(null,neighbors));
if(((0) < cljs.core.count.call(null,list_of_black_victims))){
if(cljs.core.some_QMARK_.call(null,specific_piece)){
if(cljs.core._EQ_.call(null,specific_piece,cljs.core.get.call(null,cljs.core.first.call(null,list_of_black_victims),(0)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"capture","capture",-677031143),cljs.core.first.call(null,list_of_black_victims)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"capture","capture",-677031143),cljs.core.first.call(null,list_of_black_victims)], null);
}
} else {
if(cljs.core.not.call(null,captures_only)){
if(((0) < cljs.core.count.call(null,list_of_available_moves))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"movement","movement",1777030977),cljs.core.first.call(null,list_of_available_moves)], null);
} else {
return null;
}
} else {
return null;
}
}
});
lg_checkers.board.calculate_move = (function lg_checkers$board$calculate_move(captures_only,specific_piece){
var move_data = lg_checkers.board.calculate_ai_piece_to_move.call(null,captures_only,specific_piece);
var move_type = ((cljs.core.some_QMARK_.call(null,move_data))?cljs.core.get.call(null,move_data,(0)):null);
var move_positions = ((cljs.core.some_QMARK_.call(null,move_data))?cljs.core.get.call(null,move_data,(1)):null);
var source_pos = ((cljs.core.some_QMARK_.call(null,move_positions))?cljs.core.get.call(null,move_positions,(0)):null);
var destination_variants = ((cljs.core.some_QMARK_.call(null,move_positions))?cljs.core.get.call(null,move_positions,(1)):null);
var destination_pos = ((cljs.core.some_QMARK_.call(null,destination_variants))?cljs.core.first.call(null,destination_variants):null);
if(cljs.core.some_QMARK_.call(null,destination_pos)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [source_pos,destination_pos,move_type], null);
} else {
return null;
}
});
lg_checkers.board.make_move = (function lg_checkers$board$make_move(captures_only,specific_piece){
var move = lg_checkers.board.calculate_move.call(null,captures_only,specific_piece);
var source_pos = ((cljs.core.some_QMARK_.call(null,move))?cljs.core.get.call(null,move,(0)):null);
var destination_pos = ((cljs.core.some_QMARK_.call(null,move))?cljs.core.get.call(null,move,(1)):null);
var move_type = ((cljs.core.some_QMARK_.call(null,move))?cljs.core.get.call(null,move,(2)):null);
if(cljs.core.some_QMARK_.call(null,move)){
lg_checkers.board.move_piece.call(null,source_pos,destination_pos);

lg_checkers.board.promote_piece.call(null,destination_pos);

lg_checkers.board.send_db_command_save_movement.call(null,new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"movement-is-over","movement-is-over",81885100),source_pos,destination_pos,cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.board),source_pos));

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"capture","capture",-677031143),move_type)){
if(((0) < cljs.core.count.call(null,lg_checkers.board.calculate_real_black_victim_neighbors.call(null,lg_checkers.board.calculate_neighbors.call(null))))){
return lg_checkers$board$make_move.call(null,true,source_pos);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
lg_checkers.board.ai_piece = (function lg_checkers$board$ai_piece(index){
var our_board = cljs.core.deref.call(null,lg_checkers.board.board);
var our_piece_type = cljs.core.get.call(null,our_board,index);
if(cljs.core.contains_QMARK_.call(null,lg_checkers.board.movable_piece_colors_for_ai.call(null),our_piece_type)){
return index;
} else {
return null;
}
});
lg_checkers.board.list_of_red_pieces = (function lg_checkers$board$list_of_red_pieces(){
return cljs.core.set.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,lg_checkers.board.ai_piece,cljs.core.range.call(null,(1),(33)))));
});
lg_checkers.board.calculate_neighbors = (function lg_checkers$board$calculate_neighbors(){
var red_pieces = lg_checkers.board.list_of_red_pieces.call(null);
return cljs.core.map.call(null,((function (red_pieces){
return (function (pos){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,cljs.core.remove.call(null,cljs.core.nil_QMARK_,lg_checkers.board.compute_pos_neighbors_memo.call(null,pos))], null);
});})(red_pieces))
,red_pieces);
});
lg_checkers.board.calculate_real_black_victim_neighbors = (function lg_checkers$board$calculate_real_black_victim_neighbors(neighbors){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (piece_data){
return lg_checkers.board.check_neighbors_for_piece.call(null,piece_data);
}),neighbors));
});
lg_checkers.board.check_neighbors_for_piece = (function lg_checkers$board$check_neighbors_for_piece(piece_data){
var piece_pos = cljs.core.get.call(null,piece_data,(0));
var piece_potential_neighbors = cljs.core.get.call(null,piece_data,(1));
var result = lg_checkers.board.check_neighbors_for_piece_internal.call(null,piece_data);
if(((0) < cljs.core.count.call(null,result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [piece_pos,result], null);
} else {
return null;
}
});
lg_checkers.board.check_neighbors_for_piece_internal = (function lg_checkers$board$check_neighbors_for_piece_internal(piece_data){
var piece_pos = cljs.core.get.call(null,piece_data,(0));
var piece_potential_neighbors = cljs.core.get.call(null,piece_data,(1));
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (piece_pos,piece_potential_neighbors){
return (function (p1__25186_SHARP_){
return lg_checkers.board.check_is_neighbor_is_victim.call(null,piece_pos,p1__25186_SHARP_);
});})(piece_pos,piece_potential_neighbors))
,cljs.core.seq.call(null,piece_potential_neighbors)));
});
lg_checkers.board.check_is_neighbor_is_victim = (function lg_checkers$board$check_is_neighbor_is_victim(ai_pos,neighbor_pos){
var ai_pos_type = cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.board),ai_pos);
var neighbor_type = cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.board),neighbor_pos);
var direction = lg_checkers.board.neighbor_piece_direction_by_neighbor_pos.call(null,ai_pos,neighbor_pos);
var good_direction_QMARK_ = lg_checkers.board.good_piece_type_direction_QMARK_.call(null,ai_pos_type,direction);
var piece_after_neighbor = lg_checkers.board.neighbor_piece_by_direction.call(null,neighbor_pos,direction);
var piece_after_neighbor_type = ((cljs.core.some_QMARK_.call(null,piece_after_neighbor))?cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.board),piece_after_neighbor):null);
if(cljs.core.truth_(good_direction_QMARK_)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black-piece","black-piece",2048390247),neighbor_type)){
if(cljs.core.some_QMARK_.call(null,piece_after_neighbor_type)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"empty-piece","empty-piece",515714264),piece_after_neighbor_type)){
return piece_after_neighbor;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
lg_checkers.board.calculate_red_moves = (function lg_checkers$board$calculate_red_moves(neighbors){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (piece_data){
return lg_checkers.board.moves_check_neighbors_for_piece.call(null,piece_data);
}),neighbors));
});
lg_checkers.board.moves_check_neighbors_for_piece = (function lg_checkers$board$moves_check_neighbors_for_piece(piece_data){
var piece_pos = cljs.core.get.call(null,piece_data,(0));
var piece_potential_neighbors = cljs.core.get.call(null,piece_data,(1));
var result = lg_checkers.board.moves_check_neighbors_for_piece_internal.call(null,piece_data);
if(((0) < cljs.core.count.call(null,result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [piece_pos,result], null);
} else {
return null;
}
});
lg_checkers.board.moves_check_neighbors_for_piece_internal = (function lg_checkers$board$moves_check_neighbors_for_piece_internal(piece_data){
var piece_pos = cljs.core.get.call(null,piece_data,(0));
var piece_potential_neighbors = cljs.core.get.call(null,piece_data,(1));
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (piece_pos,piece_potential_neighbors){
return (function (p1__25187_SHARP_){
return lg_checkers.board.moves_check_is_neighbor_is_good_place_to_move.call(null,piece_pos,p1__25187_SHARP_);
});})(piece_pos,piece_potential_neighbors))
,cljs.core.seq.call(null,piece_potential_neighbors)));
});
lg_checkers.board.moves_check_is_neighbor_is_good_place_to_move = (function lg_checkers$board$moves_check_is_neighbor_is_good_place_to_move(ai_pos,neighbor_pos){
var ai_pos_type = cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.board),ai_pos);
var neighbor_type = cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.board),neighbor_pos);
var direction = lg_checkers.board.neighbor_piece_direction_by_neighbor_pos.call(null,ai_pos,neighbor_pos);
var good_direction_QMARK_ = lg_checkers.board.good_piece_type_direction_QMARK_.call(null,ai_pos_type,direction);
if(cljs.core.truth_(good_direction_QMARK_)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"empty-piece","empty-piece",515714264),neighbor_type)){
return neighbor_pos;
} else {
return null;
}
} else {
return null;
}
});
var c__11834__auto___25229 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11834__auto___25229){
return (function (){
var f__11835__auto__ = (function (){var switch__11722__auto__ = ((function (c__11834__auto___25229){
return (function (state_25208){
var state_val_25209 = (state_25208[(1)]);
if((state_val_25209 === (7))){
var inst_25191 = (state_25208[(2)]);
var inst_25192 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(lg_checkers.board.event);
var inst_25193 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"update-board-position","update-board-position",-522194238),inst_25192);
var state_25208__$1 = (function (){var statearr_25210 = state_25208;
(statearr_25210[(7)] = inst_25191);

return statearr_25210;
})();
if(inst_25193){
var statearr_25211_25230 = state_25208__$1;
(statearr_25211_25230[(1)] = (8));

} else {
var statearr_25212_25231 = state_25208__$1;
(statearr_25212_25231[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25209 === (1))){
var state_25208__$1 = state_25208;
var statearr_25213_25232 = state_25208__$1;
(statearr_25213_25232[(2)] = null);

(statearr_25213_25232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25209 === (4))){
var state_25208__$1 = state_25208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25208__$1,(7),lg_checkers.board.board_commands);
} else {
if((state_val_25209 === (6))){
var inst_25204 = (state_25208[(2)]);
var state_25208__$1 = state_25208;
var statearr_25214_25233 = state_25208__$1;
(statearr_25214_25233[(2)] = inst_25204);

(statearr_25214_25233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25209 === (3))){
var inst_25206 = (state_25208[(2)]);
var state_25208__$1 = state_25208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25208__$1,inst_25206);
} else {
if((state_val_25209 === (2))){
var state_25208__$1 = state_25208;
var statearr_25215_25234 = state_25208__$1;
(statearr_25215_25234[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25209 === (9))){
var state_25208__$1 = state_25208;
var statearr_25217_25235 = state_25208__$1;
(statearr_25217_25235[(2)] = null);

(statearr_25217_25235[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25209 === (5))){
var state_25208__$1 = state_25208;
var statearr_25218_25236 = state_25208__$1;
(statearr_25218_25236[(2)] = null);

(statearr_25218_25236[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25209 === (10))){
var inst_25200 = (state_25208[(2)]);
var state_25208__$1 = (function (){var statearr_25219 = state_25208;
(statearr_25219[(8)] = inst_25200);

return statearr_25219;
})();
var statearr_25220_25237 = state_25208__$1;
(statearr_25220_25237[(2)] = null);

(statearr_25220_25237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25209 === (8))){
var inst_25191 = (state_25208[(7)]);
var inst_25195 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(inst_25191);
var inst_25196 = new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(inst_25191);
var inst_25197 = lg_checkers.board.update_board_position.call(null,inst_25195,inst_25196);
var state_25208__$1 = state_25208;
var statearr_25221_25238 = state_25208__$1;
(statearr_25221_25238[(2)] = inst_25197);

(statearr_25221_25238[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__11834__auto___25229))
;
return ((function (switch__11722__auto__,c__11834__auto___25229){
return (function() {
var lg_checkers$board$state_machine__11723__auto__ = null;
var lg_checkers$board$state_machine__11723__auto____0 = (function (){
var statearr_25225 = [null,null,null,null,null,null,null,null,null];
(statearr_25225[(0)] = lg_checkers$board$state_machine__11723__auto__);

(statearr_25225[(1)] = (1));

return statearr_25225;
});
var lg_checkers$board$state_machine__11723__auto____1 = (function (state_25208){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__.call(null,state_25208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e25226){if((e25226 instanceof Object)){
var ex__11726__auto__ = e25226;
var statearr_25227_25239 = state_25208;
(statearr_25227_25239[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25226;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25240 = state_25208;
state_25208 = G__25240;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
lg_checkers$board$state_machine__11723__auto__ = function(state_25208){
switch(arguments.length){
case 0:
return lg_checkers$board$state_machine__11723__auto____0.call(this);
case 1:
return lg_checkers$board$state_machine__11723__auto____1.call(this,state_25208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lg_checkers$board$state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = lg_checkers$board$state_machine__11723__auto____0;
lg_checkers$board$state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = lg_checkers$board$state_machine__11723__auto____1;
return lg_checkers$board$state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11834__auto___25229))
})();
var state__11836__auto__ = (function (){var statearr_25228 = f__11835__auto__.call(null);
(statearr_25228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11834__auto___25229);

return statearr_25228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11836__auto__);
});})(c__11834__auto___25229))
);


//# sourceMappingURL=board.js.map