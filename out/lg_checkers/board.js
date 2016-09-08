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
var c__9240__auto___11607 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9240__auto___11607){
return (function (){
var f__9241__auto__ = (function (){var switch__9175__auto__ = ((function (c__9240__auto___11607){
return (function (state_11570){
var state_val_11571 = (state_11570[(1)]);
if((state_val_11571 === (7))){
var inst_11538 = (state_11570[(7)]);
var inst_11537 = (state_11570[(8)]);
var inst_11537__$1 = (state_11570[(2)]);
var inst_11538__$1 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(inst_11537__$1);
var inst_11539 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"board-clicked","board-clicked",1157654001),inst_11538__$1);
var state_11570__$1 = (function (){var statearr_11572 = state_11570;
(statearr_11572[(7)] = inst_11538__$1);

(statearr_11572[(8)] = inst_11537__$1);

return statearr_11572;
})();
if(inst_11539){
var statearr_11573_11608 = state_11570__$1;
(statearr_11573_11608[(1)] = (8));

} else {
var statearr_11574_11609 = state_11570__$1;
(statearr_11574_11609[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11571 === (1))){
var inst_11533 = lg_checkers.board.send_api_command_register_channel_to_receive_event.call(null,lg_checkers.board.board_events,new cljs.core.Keyword(null,"api-event-unblock-user-board-input","api-event-unblock-user-board-input",1661151846));
var state_11570__$1 = (function (){var statearr_11575 = state_11570;
(statearr_11575[(9)] = inst_11533);

return statearr_11575;
})();
var statearr_11576_11610 = state_11570__$1;
(statearr_11576_11610[(2)] = null);

(statearr_11576_11610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11571 === (4))){
var state_11570__$1 = state_11570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11570__$1,(7),lg_checkers.board.board_events);
} else {
if((state_val_11571 === (15))){
var state_11570__$1 = state_11570;
var statearr_11577_11611 = state_11570__$1;
(statearr_11577_11611[(2)] = null);

(statearr_11577_11611[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11571 === (13))){
var inst_11538 = (state_11570[(7)]);
var inst_11550 = (state_11570[(2)]);
var inst_11551 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"replay-recorded-game","replay-recorded-game",826564334),inst_11538);
var state_11570__$1 = (function (){var statearr_11578 = state_11570;
(statearr_11578[(10)] = inst_11550);

return statearr_11578;
})();
if(inst_11551){
var statearr_11579_11612 = state_11570__$1;
(statearr_11579_11612[(1)] = (14));

} else {
var statearr_11580_11613 = state_11570__$1;
(statearr_11580_11613[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11571 === (6))){
var inst_11566 = (state_11570[(2)]);
var state_11570__$1 = state_11570;
var statearr_11581_11614 = state_11570__$1;
(statearr_11581_11614[(2)] = inst_11566);

(statearr_11581_11614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11571 === (17))){
var inst_11537 = (state_11570[(8)]);
var inst_11559 = lg_checkers.board.toggle_delay_timer_in_ai.call(null,inst_11537);
var state_11570__$1 = state_11570;
var statearr_11582_11615 = state_11570__$1;
(statearr_11582_11615[(2)] = inst_11559);

(statearr_11582_11615[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11571 === (3))){
var inst_11568 = (state_11570[(2)]);
var state_11570__$1 = state_11570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11570__$1,inst_11568);
} else {
if((state_val_11571 === (12))){
var state_11570__$1 = state_11570;
var statearr_11583_11616 = state_11570__$1;
(statearr_11583_11616[(2)] = null);

(statearr_11583_11616[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11571 === (2))){
var state_11570__$1 = state_11570;
var statearr_11584_11617 = state_11570__$1;
(statearr_11584_11617[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11571 === (19))){
var inst_11562 = (state_11570[(2)]);
var state_11570__$1 = (function (){var statearr_11586 = state_11570;
(statearr_11586[(11)] = inst_11562);

return statearr_11586;
})();
var statearr_11587_11618 = state_11570__$1;
(statearr_11587_11618[(2)] = null);

(statearr_11587_11618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11571 === (11))){
var inst_11537 = (state_11570[(8)]);
var inst_11547 = lg_checkers.board.controller_unblock_user_board_input.call(null,inst_11537);
var state_11570__$1 = state_11570;
var statearr_11588_11619 = state_11570__$1;
(statearr_11588_11619[(2)] = inst_11547);

(statearr_11588_11619[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11571 === (9))){
var state_11570__$1 = state_11570;
var statearr_11589_11620 = state_11570__$1;
(statearr_11589_11620[(2)] = null);

(statearr_11589_11620[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11571 === (5))){
var state_11570__$1 = state_11570;
var statearr_11590_11621 = state_11570__$1;
(statearr_11590_11621[(2)] = null);

(statearr_11590_11621[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11571 === (14))){
var inst_11537 = (state_11570[(8)]);
var inst_11553 = lg_checkers.board.replay_recorded_game.call(null,inst_11537);
var state_11570__$1 = state_11570;
var statearr_11591_11622 = state_11570__$1;
(statearr_11591_11622[(2)] = inst_11553);

(statearr_11591_11622[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11571 === (16))){
var inst_11538 = (state_11570[(7)]);
var inst_11556 = (state_11570[(2)]);
var inst_11557 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"toggle-delay-timer-in-ai","toggle-delay-timer-in-ai",1893069099),inst_11538);
var state_11570__$1 = (function (){var statearr_11592 = state_11570;
(statearr_11592[(12)] = inst_11556);

return statearr_11592;
})();
if(inst_11557){
var statearr_11593_11623 = state_11570__$1;
(statearr_11593_11623[(1)] = (17));

} else {
var statearr_11594_11624 = state_11570__$1;
(statearr_11594_11624[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11571 === (10))){
var inst_11538 = (state_11570[(7)]);
var inst_11544 = (state_11570[(2)]);
var inst_11545 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"api-event-unblock-user-board-input","api-event-unblock-user-board-input",1661151846),inst_11538);
var state_11570__$1 = (function (){var statearr_11595 = state_11570;
(statearr_11595[(13)] = inst_11544);

return statearr_11595;
})();
if(inst_11545){
var statearr_11596_11625 = state_11570__$1;
(statearr_11596_11625[(1)] = (11));

} else {
var statearr_11597_11626 = state_11570__$1;
(statearr_11597_11626[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11571 === (18))){
var state_11570__$1 = state_11570;
var statearr_11598_11627 = state_11570__$1;
(statearr_11598_11627[(2)] = null);

(statearr_11598_11627[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11571 === (8))){
var inst_11537 = (state_11570[(8)]);
var inst_11541 = lg_checkers.board.controler_worker_board_clicked.call(null,inst_11537);
var state_11570__$1 = state_11570;
var statearr_11599_11628 = state_11570__$1;
(statearr_11599_11628[(2)] = inst_11541);

(statearr_11599_11628[(1)] = (10));


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
});})(c__9240__auto___11607))
;
return ((function (switch__9175__auto__,c__9240__auto___11607){
return (function() {
var lg_checkers$board$state_machine__9176__auto__ = null;
var lg_checkers$board$state_machine__9176__auto____0 = (function (){
var statearr_11603 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11603[(0)] = lg_checkers$board$state_machine__9176__auto__);

(statearr_11603[(1)] = (1));

return statearr_11603;
});
var lg_checkers$board$state_machine__9176__auto____1 = (function (state_11570){
while(true){
var ret_value__9177__auto__ = (function (){try{while(true){
var result__9178__auto__ = switch__9175__auto__.call(null,state_11570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9178__auto__;
}
break;
}
}catch (e11604){if((e11604 instanceof Object)){
var ex__9179__auto__ = e11604;
var statearr_11605_11629 = state_11570;
(statearr_11605_11629[(5)] = ex__9179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11630 = state_11570;
state_11570 = G__11630;
continue;
} else {
return ret_value__9177__auto__;
}
break;
}
});
lg_checkers$board$state_machine__9176__auto__ = function(state_11570){
switch(arguments.length){
case 0:
return lg_checkers$board$state_machine__9176__auto____0.call(this);
case 1:
return lg_checkers$board$state_machine__9176__auto____1.call(this,state_11570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lg_checkers$board$state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$0 = lg_checkers$board$state_machine__9176__auto____0;
lg_checkers$board$state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$1 = lg_checkers$board$state_machine__9176__auto____1;
return lg_checkers$board$state_machine__9176__auto__;
})()
;})(switch__9175__auto__,c__9240__auto___11607))
})();
var state__9242__auto__ = (function (){var statearr_11606 = f__9241__auto__.call(null);
(statearr_11606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9240__auto___11607);

return statearr_11606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9242__auto__);
});})(c__9240__auto___11607))
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
var c__9240__auto___11705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9240__auto___11705){
return (function (){
var f__9241__auto__ = (function (){var switch__9175__auto__ = ((function (c__9240__auto___11705){
return (function (state_11668){
var state_val_11669 = (state_11668[(1)]);
if((state_val_11669 === (7))){
var inst_11635 = (state_11668[(7)]);
var inst_11636 = (state_11668[(8)]);
var inst_11635__$1 = (state_11668[(2)]);
var inst_11636__$1 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(inst_11635__$1);
var inst_11637 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"board-clicked","board-clicked",1157654001),inst_11636__$1);
var state_11668__$1 = (function (){var statearr_11670 = state_11668;
(statearr_11670[(7)] = inst_11635__$1);

(statearr_11670[(8)] = inst_11636__$1);

return statearr_11670;
})();
if(inst_11637){
var statearr_11671_11706 = state_11668__$1;
(statearr_11671_11706[(1)] = (8));

} else {
var statearr_11672_11707 = state_11668__$1;
(statearr_11672_11707[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11669 === (1))){
var inst_11631 = lg_checkers.board.send_ai_command_register_channel_to_receive_event.call(null,lg_checkers.board.board_api_commands,new cljs.core.Keyword(null,"ai-event-ai-made-movement","ai-event-ai-made-movement",-259615458));
var state_11668__$1 = (function (){var statearr_11673 = state_11668;
(statearr_11673[(9)] = inst_11631);

return statearr_11673;
})();
var statearr_11674_11708 = state_11668__$1;
(statearr_11674_11708[(2)] = null);

(statearr_11674_11708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11669 === (4))){
var state_11668__$1 = state_11668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11668__$1,(7),lg_checkers.board.board_api_commands);
} else {
if((state_val_11669 === (15))){
var state_11668__$1 = state_11668;
var statearr_11675_11709 = state_11668__$1;
(statearr_11675_11709[(2)] = null);

(statearr_11675_11709[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11669 === (13))){
var inst_11636 = (state_11668[(8)]);
var inst_11648 = (state_11668[(2)]);
var inst_11649 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ai-event-ai-made-movement","ai-event-ai-made-movement",-259615458),inst_11636);
var state_11668__$1 = (function (){var statearr_11676 = state_11668;
(statearr_11676[(10)] = inst_11648);

return statearr_11676;
})();
if(inst_11649){
var statearr_11677_11710 = state_11668__$1;
(statearr_11677_11710[(1)] = (14));

} else {
var statearr_11678_11711 = state_11668__$1;
(statearr_11678_11711[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11669 === (6))){
var inst_11664 = (state_11668[(2)]);
var state_11668__$1 = state_11668;
var statearr_11679_11712 = state_11668__$1;
(statearr_11679_11712[(2)] = inst_11664);

(statearr_11679_11712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11669 === (17))){
var inst_11635 = (state_11668[(7)]);
var inst_11657 = lg_checkers.board.api_toggle_delay_timer_in_ai.call(null,inst_11635);
var state_11668__$1 = state_11668;
var statearr_11680_11713 = state_11668__$1;
(statearr_11680_11713[(2)] = inst_11657);

(statearr_11680_11713[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11669 === (3))){
var inst_11666 = (state_11668[(2)]);
var state_11668__$1 = state_11668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11668__$1,inst_11666);
} else {
if((state_val_11669 === (12))){
var state_11668__$1 = state_11668;
var statearr_11681_11714 = state_11668__$1;
(statearr_11681_11714[(2)] = null);

(statearr_11681_11714[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11669 === (2))){
var state_11668__$1 = state_11668;
var statearr_11682_11715 = state_11668__$1;
(statearr_11682_11715[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11669 === (19))){
var inst_11660 = (state_11668[(2)]);
var state_11668__$1 = (function (){var statearr_11684 = state_11668;
(statearr_11684[(11)] = inst_11660);

return statearr_11684;
})();
var statearr_11685_11716 = state_11668__$1;
(statearr_11685_11716[(2)] = null);

(statearr_11685_11716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11669 === (11))){
var inst_11635 = (state_11668[(7)]);
var inst_11645 = lg_checkers.board.api_worker_register_channel_to_receive_event.call(null,inst_11635);
var state_11668__$1 = state_11668;
var statearr_11686_11717 = state_11668__$1;
(statearr_11686_11717[(2)] = inst_11645);

(statearr_11686_11717[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11669 === (9))){
var state_11668__$1 = state_11668;
var statearr_11687_11718 = state_11668__$1;
(statearr_11687_11718[(2)] = null);

(statearr_11687_11718[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11669 === (5))){
var state_11668__$1 = state_11668;
var statearr_11688_11719 = state_11668__$1;
(statearr_11688_11719[(2)] = null);

(statearr_11688_11719[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11669 === (14))){
var inst_11635 = (state_11668[(7)]);
var inst_11651 = lg_checkers.board.api_worker_ai_made_movement.call(null,inst_11635);
var state_11668__$1 = state_11668;
var statearr_11689_11720 = state_11668__$1;
(statearr_11689_11720[(2)] = inst_11651);

(statearr_11689_11720[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11669 === (16))){
var inst_11636 = (state_11668[(8)]);
var inst_11654 = (state_11668[(2)]);
var inst_11655 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"toggle-delay-timer-in-ai","toggle-delay-timer-in-ai",1893069099),inst_11636);
var state_11668__$1 = (function (){var statearr_11690 = state_11668;
(statearr_11690[(12)] = inst_11654);

return statearr_11690;
})();
if(inst_11655){
var statearr_11691_11721 = state_11668__$1;
(statearr_11691_11721[(1)] = (17));

} else {
var statearr_11692_11722 = state_11668__$1;
(statearr_11692_11722[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11669 === (10))){
var inst_11636 = (state_11668[(8)]);
var inst_11642 = (state_11668[(2)]);
var inst_11643 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"register-channel-to-receive-event","register-channel-to-receive-event",322539620),inst_11636);
var state_11668__$1 = (function (){var statearr_11693 = state_11668;
(statearr_11693[(13)] = inst_11642);

return statearr_11693;
})();
if(inst_11643){
var statearr_11694_11723 = state_11668__$1;
(statearr_11694_11723[(1)] = (11));

} else {
var statearr_11695_11724 = state_11668__$1;
(statearr_11695_11724[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11669 === (18))){
var state_11668__$1 = state_11668;
var statearr_11696_11725 = state_11668__$1;
(statearr_11696_11725[(2)] = null);

(statearr_11696_11725[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11669 === (8))){
var inst_11635 = (state_11668[(7)]);
var inst_11639 = lg_checkers.board.board_worker_board_clicked.call(null,inst_11635);
var state_11668__$1 = state_11668;
var statearr_11697_11726 = state_11668__$1;
(statearr_11697_11726[(2)] = inst_11639);

(statearr_11697_11726[(1)] = (10));


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
});})(c__9240__auto___11705))
;
return ((function (switch__9175__auto__,c__9240__auto___11705){
return (function() {
var lg_checkers$board$state_machine__9176__auto__ = null;
var lg_checkers$board$state_machine__9176__auto____0 = (function (){
var statearr_11701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11701[(0)] = lg_checkers$board$state_machine__9176__auto__);

(statearr_11701[(1)] = (1));

return statearr_11701;
});
var lg_checkers$board$state_machine__9176__auto____1 = (function (state_11668){
while(true){
var ret_value__9177__auto__ = (function (){try{while(true){
var result__9178__auto__ = switch__9175__auto__.call(null,state_11668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9178__auto__;
}
break;
}
}catch (e11702){if((e11702 instanceof Object)){
var ex__9179__auto__ = e11702;
var statearr_11703_11727 = state_11668;
(statearr_11703_11727[(5)] = ex__9179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11728 = state_11668;
state_11668 = G__11728;
continue;
} else {
return ret_value__9177__auto__;
}
break;
}
});
lg_checkers$board$state_machine__9176__auto__ = function(state_11668){
switch(arguments.length){
case 0:
return lg_checkers$board$state_machine__9176__auto____0.call(this);
case 1:
return lg_checkers$board$state_machine__9176__auto____1.call(this,state_11668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lg_checkers$board$state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$0 = lg_checkers$board$state_machine__9176__auto____0;
lg_checkers$board$state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$1 = lg_checkers$board$state_machine__9176__auto____1;
return lg_checkers$board$state_machine__9176__auto__;
})()
;})(switch__9175__auto__,c__9240__auto___11705))
})();
var state__9242__auto__ = (function (){var statearr_11704 = f__9241__auto__.call(null);
(statearr_11704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9240__auto___11705);

return statearr_11704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9242__auto__);
});})(c__9240__auto___11705))
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
return cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__11729_SHARP_){
return lg_checkers.board.is_there_are_victim_QMARK_.call(null,p1__11729_SHARP_,test_pos,actor_piece_type,true);
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
var c__9240__auto___11812 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9240__auto___11812){
return (function (){
var f__9241__auto__ = (function (){var switch__9175__auto__ = ((function (c__9240__auto___11812){
return (function (state_11774){
var state_val_11775 = (state_11774[(1)]);
if((state_val_11775 === (7))){
var inst_11734 = (state_11774[(7)]);
var inst_11733 = (state_11774[(8)]);
var inst_11733__$1 = (state_11774[(2)]);
var inst_11734__$1 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(inst_11733__$1);
var inst_11735 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"make-move","make-move",-1146306373),inst_11734__$1);
var state_11774__$1 = (function (){var statearr_11776 = state_11774;
(statearr_11776[(7)] = inst_11734__$1);

(statearr_11776[(8)] = inst_11733__$1);

return statearr_11776;
})();
if(inst_11735){
var statearr_11777_11813 = state_11774__$1;
(statearr_11777_11813[(1)] = (8));

} else {
var statearr_11778_11814 = state_11774__$1;
(statearr_11778_11814[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11775 === (20))){
var inst_11733 = (state_11774[(8)]);
var inst_11763 = lg_checkers.board.ai_worker_toggle_delay_timer_in_ai.call(null,inst_11733);
var state_11774__$1 = state_11774;
var statearr_11779_11815 = state_11774__$1;
(statearr_11779_11815[(2)] = inst_11763);

(statearr_11779_11815[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11775 === (1))){
var state_11774__$1 = state_11774;
var statearr_11780_11816 = state_11774__$1;
(statearr_11780_11816[(2)] = null);

(statearr_11780_11816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11775 === (4))){
var state_11774__$1 = state_11774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11774__$1,(7),lg_checkers.board.ai_commands);
} else {
if((state_val_11775 === (15))){
var inst_11747 = (state_11774[(2)]);
var state_11774__$1 = state_11774;
var statearr_11781_11817 = state_11774__$1;
(statearr_11781_11817[(2)] = inst_11747);

(statearr_11781_11817[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11775 === (21))){
var state_11774__$1 = state_11774;
var statearr_11782_11818 = state_11774__$1;
(statearr_11782_11818[(2)] = null);

(statearr_11782_11818[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11775 === (13))){
var inst_11733 = (state_11774[(8)]);
var inst_11750 = (state_11774[(2)]);
var inst_11751 = lg_checkers.board.ai_worker_make_move.call(null,inst_11733);
var state_11774__$1 = (function (){var statearr_11783 = state_11774;
(statearr_11783[(9)] = inst_11750);

return statearr_11783;
})();
var statearr_11784_11819 = state_11774__$1;
(statearr_11784_11819[(2)] = inst_11751);

(statearr_11784_11819[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11775 === (22))){
var inst_11766 = (state_11774[(2)]);
var state_11774__$1 = (function (){var statearr_11785 = state_11774;
(statearr_11785[(10)] = inst_11766);

return statearr_11785;
})();
var statearr_11786_11820 = state_11774__$1;
(statearr_11786_11820[(2)] = null);

(statearr_11786_11820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11775 === (6))){
var inst_11770 = (state_11774[(2)]);
var state_11774__$1 = state_11774;
var statearr_11787_11821 = state_11774__$1;
(statearr_11787_11821[(2)] = inst_11770);

(statearr_11787_11821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11775 === (17))){
var inst_11733 = (state_11774[(8)]);
var inst_11757 = lg_checkers.board.ai_worker_register_channel_to_receive_event.call(null,inst_11733);
var state_11774__$1 = state_11774;
var statearr_11788_11822 = state_11774__$1;
(statearr_11788_11822[(2)] = inst_11757);

(statearr_11788_11822[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11775 === (3))){
var inst_11772 = (state_11774[(2)]);
var state_11774__$1 = state_11774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11774__$1,inst_11772);
} else {
if((state_val_11775 === (12))){
var state_11774__$1 = state_11774;
var statearr_11789_11823 = state_11774__$1;
(statearr_11789_11823[(2)] = null);

(statearr_11789_11823[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11775 === (2))){
var state_11774__$1 = state_11774;
var statearr_11790_11824 = state_11774__$1;
(statearr_11790_11824[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11775 === (19))){
var inst_11734 = (state_11774[(7)]);
var inst_11760 = (state_11774[(2)]);
var inst_11761 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"toggle-delay-timer-in-ai","toggle-delay-timer-in-ai",1893069099),inst_11734);
var state_11774__$1 = (function (){var statearr_11792 = state_11774;
(statearr_11792[(11)] = inst_11760);

return statearr_11792;
})();
if(inst_11761){
var statearr_11793_11825 = state_11774__$1;
(statearr_11793_11825[(1)] = (20));

} else {
var statearr_11794_11826 = state_11774__$1;
(statearr_11794_11826[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11775 === (11))){
var state_11774__$1 = state_11774;
var statearr_11795_11827 = state_11774__$1;
(statearr_11795_11827[(2)] = null);

(statearr_11795_11827[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11775 === (9))){
var state_11774__$1 = state_11774;
var statearr_11796_11828 = state_11774__$1;
(statearr_11796_11828[(2)] = null);

(statearr_11796_11828[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11775 === (5))){
var state_11774__$1 = state_11774;
var statearr_11797_11829 = state_11774__$1;
(statearr_11797_11829[(2)] = null);

(statearr_11797_11829[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11775 === (14))){
var inst_11741 = cljs.core.deref.call(null,lg_checkers.board.app_state);
var inst_11742 = cljs.core.get.call(null,inst_11741,new cljs.core.Keyword(null,"ai-timeout-for-work-emulation","ai-timeout-for-work-emulation",549896297));
var inst_11743 = cljs.core.async.timeout.call(null,inst_11742);
var state_11774__$1 = state_11774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11774__$1,(16),inst_11743);
} else {
if((state_val_11775 === (16))){
var inst_11745 = (state_11774[(2)]);
var state_11774__$1 = state_11774;
var statearr_11798_11830 = state_11774__$1;
(statearr_11798_11830[(2)] = inst_11745);

(statearr_11798_11830[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11775 === (10))){
var inst_11734 = (state_11774[(7)]);
var inst_11754 = (state_11774[(2)]);
var inst_11755 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"register-channel-to-receive-event","register-channel-to-receive-event",322539620),inst_11734);
var state_11774__$1 = (function (){var statearr_11799 = state_11774;
(statearr_11799[(12)] = inst_11754);

return statearr_11799;
})();
if(inst_11755){
var statearr_11800_11831 = state_11774__$1;
(statearr_11800_11831[(1)] = (17));

} else {
var statearr_11801_11832 = state_11774__$1;
(statearr_11801_11832[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11775 === (18))){
var state_11774__$1 = state_11774;
var statearr_11802_11833 = state_11774__$1;
(statearr_11802_11833[(2)] = null);

(statearr_11802_11833[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11775 === (8))){
var inst_11737 = cljs.core.deref.call(null,lg_checkers.board.app_state);
var inst_11738 = cljs.core.get.call(null,inst_11737,new cljs.core.Keyword(null,"delay-timer-in-ai-is-on","delay-timer-in-ai-is-on",-641385360));
var state_11774__$1 = state_11774;
if(cljs.core.truth_(inst_11738)){
var statearr_11803_11834 = state_11774__$1;
(statearr_11803_11834[(1)] = (11));

} else {
var statearr_11804_11835 = state_11774__$1;
(statearr_11804_11835[(1)] = (12));

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
});})(c__9240__auto___11812))
;
return ((function (switch__9175__auto__,c__9240__auto___11812){
return (function() {
var lg_checkers$board$state_machine__9176__auto__ = null;
var lg_checkers$board$state_machine__9176__auto____0 = (function (){
var statearr_11808 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11808[(0)] = lg_checkers$board$state_machine__9176__auto__);

(statearr_11808[(1)] = (1));

return statearr_11808;
});
var lg_checkers$board$state_machine__9176__auto____1 = (function (state_11774){
while(true){
var ret_value__9177__auto__ = (function (){try{while(true){
var result__9178__auto__ = switch__9175__auto__.call(null,state_11774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9178__auto__;
}
break;
}
}catch (e11809){if((e11809 instanceof Object)){
var ex__9179__auto__ = e11809;
var statearr_11810_11836 = state_11774;
(statearr_11810_11836[(5)] = ex__9179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11837 = state_11774;
state_11774 = G__11837;
continue;
} else {
return ret_value__9177__auto__;
}
break;
}
});
lg_checkers$board$state_machine__9176__auto__ = function(state_11774){
switch(arguments.length){
case 0:
return lg_checkers$board$state_machine__9176__auto____0.call(this);
case 1:
return lg_checkers$board$state_machine__9176__auto____1.call(this,state_11774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lg_checkers$board$state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$0 = lg_checkers$board$state_machine__9176__auto____0;
lg_checkers$board$state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$1 = lg_checkers$board$state_machine__9176__auto____1;
return lg_checkers$board$state_machine__9176__auto__;
})()
;})(switch__9175__auto__,c__9240__auto___11812))
})();
var state__9242__auto__ = (function (){var statearr_11811 = f__9241__auto__.call(null);
(statearr_11811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9240__auto___11812);

return statearr_11811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9242__auto__);
});})(c__9240__auto___11812))
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
return (function (p1__11838_SHARP_){
return lg_checkers.board.check_is_neighbor_is_victim.call(null,piece_pos,p1__11838_SHARP_);
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
return (function (p1__11839_SHARP_){
return lg_checkers.board.moves_check_is_neighbor_is_good_place_to_move.call(null,piece_pos,p1__11839_SHARP_);
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
var c__9240__auto___11881 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9240__auto___11881){
return (function (){
var f__9241__auto__ = (function (){var switch__9175__auto__ = ((function (c__9240__auto___11881){
return (function (state_11860){
var state_val_11861 = (state_11860[(1)]);
if((state_val_11861 === (7))){
var inst_11843 = (state_11860[(2)]);
var inst_11844 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(lg_checkers.board.event);
var inst_11845 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"update-board-position","update-board-position",-522194238),inst_11844);
var state_11860__$1 = (function (){var statearr_11862 = state_11860;
(statearr_11862[(7)] = inst_11843);

return statearr_11862;
})();
if(inst_11845){
var statearr_11863_11882 = state_11860__$1;
(statearr_11863_11882[(1)] = (8));

} else {
var statearr_11864_11883 = state_11860__$1;
(statearr_11864_11883[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11861 === (1))){
var state_11860__$1 = state_11860;
var statearr_11865_11884 = state_11860__$1;
(statearr_11865_11884[(2)] = null);

(statearr_11865_11884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11861 === (4))){
var state_11860__$1 = state_11860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11860__$1,(7),lg_checkers.board.board_commands);
} else {
if((state_val_11861 === (6))){
var inst_11856 = (state_11860[(2)]);
var state_11860__$1 = state_11860;
var statearr_11866_11885 = state_11860__$1;
(statearr_11866_11885[(2)] = inst_11856);

(statearr_11866_11885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11861 === (3))){
var inst_11858 = (state_11860[(2)]);
var state_11860__$1 = state_11860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11860__$1,inst_11858);
} else {
if((state_val_11861 === (2))){
var state_11860__$1 = state_11860;
var statearr_11867_11886 = state_11860__$1;
(statearr_11867_11886[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11861 === (9))){
var state_11860__$1 = state_11860;
var statearr_11869_11887 = state_11860__$1;
(statearr_11869_11887[(2)] = null);

(statearr_11869_11887[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11861 === (5))){
var state_11860__$1 = state_11860;
var statearr_11870_11888 = state_11860__$1;
(statearr_11870_11888[(2)] = null);

(statearr_11870_11888[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11861 === (10))){
var inst_11852 = (state_11860[(2)]);
var state_11860__$1 = (function (){var statearr_11871 = state_11860;
(statearr_11871[(8)] = inst_11852);

return statearr_11871;
})();
var statearr_11872_11889 = state_11860__$1;
(statearr_11872_11889[(2)] = null);

(statearr_11872_11889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11861 === (8))){
var inst_11843 = (state_11860[(7)]);
var inst_11847 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(inst_11843);
var inst_11848 = new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(inst_11843);
var inst_11849 = lg_checkers.board.update_board_position.call(null,inst_11847,inst_11848);
var state_11860__$1 = state_11860;
var statearr_11873_11890 = state_11860__$1;
(statearr_11873_11890[(2)] = inst_11849);

(statearr_11873_11890[(1)] = (10));


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
});})(c__9240__auto___11881))
;
return ((function (switch__9175__auto__,c__9240__auto___11881){
return (function() {
var lg_checkers$board$state_machine__9176__auto__ = null;
var lg_checkers$board$state_machine__9176__auto____0 = (function (){
var statearr_11877 = [null,null,null,null,null,null,null,null,null];
(statearr_11877[(0)] = lg_checkers$board$state_machine__9176__auto__);

(statearr_11877[(1)] = (1));

return statearr_11877;
});
var lg_checkers$board$state_machine__9176__auto____1 = (function (state_11860){
while(true){
var ret_value__9177__auto__ = (function (){try{while(true){
var result__9178__auto__ = switch__9175__auto__.call(null,state_11860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9178__auto__;
}
break;
}
}catch (e11878){if((e11878 instanceof Object)){
var ex__9179__auto__ = e11878;
var statearr_11879_11891 = state_11860;
(statearr_11879_11891[(5)] = ex__9179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11892 = state_11860;
state_11860 = G__11892;
continue;
} else {
return ret_value__9177__auto__;
}
break;
}
});
lg_checkers$board$state_machine__9176__auto__ = function(state_11860){
switch(arguments.length){
case 0:
return lg_checkers$board$state_machine__9176__auto____0.call(this);
case 1:
return lg_checkers$board$state_machine__9176__auto____1.call(this,state_11860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lg_checkers$board$state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$0 = lg_checkers$board$state_machine__9176__auto____0;
lg_checkers$board$state_machine__9176__auto__.cljs$core$IFn$_invoke$arity$1 = lg_checkers$board$state_machine__9176__auto____1;
return lg_checkers$board$state_machine__9176__auto__;
})()
;})(switch__9175__auto__,c__9240__auto___11881))
})();
var state__9242__auto__ = (function (){var statearr_11880 = f__9241__auto__.call(null);
(statearr_11880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9240__auto___11881);

return statearr_11880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9242__auto__);
});})(c__9240__auto___11881))
);


//# sourceMappingURL=board.js.map