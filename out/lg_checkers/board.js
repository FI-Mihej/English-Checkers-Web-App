// Compiled by ClojureScript 1.9.89 {}
goog.provide('lg_checkers.board');
goog.require('cljs.core');
goog.require('cljs.core.async');
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
return cljs.core.atom.call(null,cljs.core.apply.call(null,cljs.core.sorted_map,cljs.core.flatten.call(null,cljs.core.map_indexed.call(null,(function (i,v){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(i + (1)),v],null));
}),cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.repeat.call(null,(12),new cljs.core.Keyword(null,"red-piece","red-piece",-398776236)),cljs.core.repeat.call(null,(8),new cljs.core.Keyword(null,"empty-piece","empty-piece",515714264)),cljs.core.repeat.call(null,(12),new cljs.core.Keyword(null,"black-piece","black-piece",2048390247))], null))))));
});
lg_checkers.board.board = lg_checkers.board.create_board.call(null);
if(typeof lg_checkers.board.app_state !== 'undefined'){
} else {
lg_checkers.board.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user-is-allowed-to-move","user-is-allowed-to-move",1540192799),true,new cljs.core.Keyword(null,"captured-pieces","captured-pieces",-1406669063),(0)], null));
}
lg_checkers.board.control_all_pieces = false;
var c__8814__auto___11159 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8814__auto___11159){
return (function (){
var f__8815__auto__ = (function (){var switch__8749__auto__ = ((function (c__8814__auto___11159){
return (function (state_11132){
var state_val_11133 = (state_11132[(1)]);
if((state_val_11133 === (7))){
var inst_11111 = (state_11132[(7)]);
var inst_11112 = (state_11132[(8)]);
var inst_11111__$1 = (state_11132[(2)]);
var inst_11112__$1 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(inst_11111__$1);
var inst_11113 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"board-clicked","board-clicked",1157654001),inst_11112__$1);
var state_11132__$1 = (function (){var statearr_11134 = state_11132;
(statearr_11134[(7)] = inst_11111__$1);

(statearr_11134[(8)] = inst_11112__$1);

return statearr_11134;
})();
if(inst_11113){
var statearr_11135_11160 = state_11132__$1;
(statearr_11135_11160[(1)] = (8));

} else {
var statearr_11136_11161 = state_11132__$1;
(statearr_11136_11161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11133 === (1))){
var inst_11107 = lg_checkers.board.send_api_command_register_channel_to_receive_event.call(null,lg_checkers.board.board_events,new cljs.core.Keyword(null,"api-event-unblock-user-board-input","api-event-unblock-user-board-input",1661151846));
var state_11132__$1 = (function (){var statearr_11137 = state_11132;
(statearr_11137[(9)] = inst_11107);

return statearr_11137;
})();
var statearr_11138_11162 = state_11132__$1;
(statearr_11138_11162[(2)] = null);

(statearr_11138_11162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11133 === (4))){
var state_11132__$1 = state_11132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11132__$1,(7),lg_checkers.board.board_events);
} else {
if((state_val_11133 === (13))){
var inst_11124 = (state_11132[(2)]);
var state_11132__$1 = (function (){var statearr_11139 = state_11132;
(statearr_11139[(10)] = inst_11124);

return statearr_11139;
})();
var statearr_11140_11163 = state_11132__$1;
(statearr_11140_11163[(2)] = null);

(statearr_11140_11163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11133 === (6))){
var inst_11128 = (state_11132[(2)]);
var state_11132__$1 = state_11132;
var statearr_11141_11164 = state_11132__$1;
(statearr_11141_11164[(2)] = inst_11128);

(statearr_11141_11164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11133 === (3))){
var inst_11130 = (state_11132[(2)]);
var state_11132__$1 = state_11132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11132__$1,inst_11130);
} else {
if((state_val_11133 === (12))){
var state_11132__$1 = state_11132;
var statearr_11142_11165 = state_11132__$1;
(statearr_11142_11165[(2)] = null);

(statearr_11142_11165[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11133 === (2))){
var state_11132__$1 = state_11132;
var statearr_11143_11166 = state_11132__$1;
(statearr_11143_11166[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11133 === (11))){
var inst_11121 = lg_checkers.board.controller_unblock_user_board_input.call(null);
var state_11132__$1 = state_11132;
var statearr_11145_11167 = state_11132__$1;
(statearr_11145_11167[(2)] = inst_11121);

(statearr_11145_11167[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11133 === (9))){
var state_11132__$1 = state_11132;
var statearr_11146_11168 = state_11132__$1;
(statearr_11146_11168[(2)] = null);

(statearr_11146_11168[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11133 === (5))){
var state_11132__$1 = state_11132;
var statearr_11147_11169 = state_11132__$1;
(statearr_11147_11169[(2)] = null);

(statearr_11147_11169[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11133 === (10))){
var inst_11112 = (state_11132[(8)]);
var inst_11118 = (state_11132[(2)]);
var inst_11119 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"api-event-unblock-user-board-input","api-event-unblock-user-board-input",1661151846),inst_11112);
var state_11132__$1 = (function (){var statearr_11148 = state_11132;
(statearr_11148[(11)] = inst_11118);

return statearr_11148;
})();
if(inst_11119){
var statearr_11149_11170 = state_11132__$1;
(statearr_11149_11170[(1)] = (11));

} else {
var statearr_11150_11171 = state_11132__$1;
(statearr_11150_11171[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11133 === (8))){
var inst_11111 = (state_11132[(7)]);
var inst_11115 = lg_checkers.board.controler_worker_board_clicked.call(null,inst_11111);
var state_11132__$1 = state_11132;
var statearr_11151_11172 = state_11132__$1;
(statearr_11151_11172[(2)] = inst_11115);

(statearr_11151_11172[(1)] = (10));


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
});})(c__8814__auto___11159))
;
return ((function (switch__8749__auto__,c__8814__auto___11159){
return (function() {
var lg_checkers$board$state_machine__8750__auto__ = null;
var lg_checkers$board$state_machine__8750__auto____0 = (function (){
var statearr_11155 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11155[(0)] = lg_checkers$board$state_machine__8750__auto__);

(statearr_11155[(1)] = (1));

return statearr_11155;
});
var lg_checkers$board$state_machine__8750__auto____1 = (function (state_11132){
while(true){
var ret_value__8751__auto__ = (function (){try{while(true){
var result__8752__auto__ = switch__8749__auto__.call(null,state_11132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8752__auto__;
}
break;
}
}catch (e11156){if((e11156 instanceof Object)){
var ex__8753__auto__ = e11156;
var statearr_11157_11173 = state_11132;
(statearr_11157_11173[(5)] = ex__8753__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11174 = state_11132;
state_11132 = G__11174;
continue;
} else {
return ret_value__8751__auto__;
}
break;
}
});
lg_checkers$board$state_machine__8750__auto__ = function(state_11132){
switch(arguments.length){
case 0:
return lg_checkers$board$state_machine__8750__auto____0.call(this);
case 1:
return lg_checkers$board$state_machine__8750__auto____1.call(this,state_11132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lg_checkers$board$state_machine__8750__auto__.cljs$core$IFn$_invoke$arity$0 = lg_checkers$board$state_machine__8750__auto____0;
lg_checkers$board$state_machine__8750__auto__.cljs$core$IFn$_invoke$arity$1 = lg_checkers$board$state_machine__8750__auto____1;
return lg_checkers$board$state_machine__8750__auto__;
})()
;})(switch__8749__auto__,c__8814__auto___11159))
})();
var state__8816__auto__ = (function (){var statearr_11158 = f__8815__auto__.call(null);
(statearr_11158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8814__auto___11159);

return statearr_11158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8816__auto__);
});})(c__8814__auto___11159))
);

lg_checkers.board.controller_user_board_actions_are_allowed = true;
lg_checkers.board.controller_unblock_user_board_input = (function lg_checkers$board$controller_unblock_user_board_input(){
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
var c__8814__auto___11238 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8814__auto___11238){
return (function (){
var f__8815__auto__ = (function (){var switch__8749__auto__ = ((function (c__8814__auto___11238){
return (function (state_11206){
var state_val_11207 = (state_11206[(1)]);
if((state_val_11207 === (7))){
var inst_11179 = (state_11206[(7)]);
var inst_11180 = (state_11206[(8)]);
var inst_11179__$1 = (state_11206[(2)]);
var inst_11180__$1 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(inst_11179__$1);
var inst_11181 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"board-clicked","board-clicked",1157654001),inst_11180__$1);
var state_11206__$1 = (function (){var statearr_11208 = state_11206;
(statearr_11208[(7)] = inst_11179__$1);

(statearr_11208[(8)] = inst_11180__$1);

return statearr_11208;
})();
if(inst_11181){
var statearr_11209_11239 = state_11206__$1;
(statearr_11209_11239[(1)] = (8));

} else {
var statearr_11210_11240 = state_11206__$1;
(statearr_11210_11240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11207 === (1))){
var inst_11175 = lg_checkers.board.send_ai_command_register_channel_to_receive_event.call(null,lg_checkers.board.board_api_commands,new cljs.core.Keyword(null,"ai-event-ai-made-movement","ai-event-ai-made-movement",-259615458));
var state_11206__$1 = (function (){var statearr_11211 = state_11206;
(statearr_11211[(9)] = inst_11175);

return statearr_11211;
})();
var statearr_11212_11241 = state_11206__$1;
(statearr_11212_11241[(2)] = null);

(statearr_11212_11241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11207 === (4))){
var state_11206__$1 = state_11206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11206__$1,(7),lg_checkers.board.board_api_commands);
} else {
if((state_val_11207 === (15))){
var state_11206__$1 = state_11206;
var statearr_11213_11242 = state_11206__$1;
(statearr_11213_11242[(2)] = null);

(statearr_11213_11242[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11207 === (13))){
var inst_11180 = (state_11206[(8)]);
var inst_11192 = (state_11206[(2)]);
var inst_11193 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ai-event-ai-made-movement","ai-event-ai-made-movement",-259615458),inst_11180);
var state_11206__$1 = (function (){var statearr_11214 = state_11206;
(statearr_11214[(10)] = inst_11192);

return statearr_11214;
})();
if(inst_11193){
var statearr_11215_11243 = state_11206__$1;
(statearr_11215_11243[(1)] = (14));

} else {
var statearr_11216_11244 = state_11206__$1;
(statearr_11216_11244[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11207 === (6))){
var inst_11202 = (state_11206[(2)]);
var state_11206__$1 = state_11206;
var statearr_11217_11245 = state_11206__$1;
(statearr_11217_11245[(2)] = inst_11202);

(statearr_11217_11245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11207 === (3))){
var inst_11204 = (state_11206[(2)]);
var state_11206__$1 = state_11206;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11206__$1,inst_11204);
} else {
if((state_val_11207 === (12))){
var state_11206__$1 = state_11206;
var statearr_11218_11246 = state_11206__$1;
(statearr_11218_11246[(2)] = null);

(statearr_11218_11246[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11207 === (2))){
var state_11206__$1 = state_11206;
var statearr_11219_11247 = state_11206__$1;
(statearr_11219_11247[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11207 === (11))){
var inst_11179 = (state_11206[(7)]);
var inst_11189 = lg_checkers.board.api_worker_register_channel_to_receive_event.call(null,inst_11179);
var state_11206__$1 = state_11206;
var statearr_11221_11248 = state_11206__$1;
(statearr_11221_11248[(2)] = inst_11189);

(statearr_11221_11248[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11207 === (9))){
var state_11206__$1 = state_11206;
var statearr_11222_11249 = state_11206__$1;
(statearr_11222_11249[(2)] = null);

(statearr_11222_11249[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11207 === (5))){
var state_11206__$1 = state_11206;
var statearr_11223_11250 = state_11206__$1;
(statearr_11223_11250[(2)] = null);

(statearr_11223_11250[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11207 === (14))){
var inst_11179 = (state_11206[(7)]);
var inst_11195 = lg_checkers.board.api_worker_ai_made_movement.call(null,inst_11179);
var state_11206__$1 = state_11206;
var statearr_11224_11251 = state_11206__$1;
(statearr_11224_11251[(2)] = inst_11195);

(statearr_11224_11251[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11207 === (16))){
var inst_11198 = (state_11206[(2)]);
var state_11206__$1 = (function (){var statearr_11225 = state_11206;
(statearr_11225[(11)] = inst_11198);

return statearr_11225;
})();
var statearr_11226_11252 = state_11206__$1;
(statearr_11226_11252[(2)] = null);

(statearr_11226_11252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11207 === (10))){
var inst_11180 = (state_11206[(8)]);
var inst_11186 = (state_11206[(2)]);
var inst_11187 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"register-channel-to-receive-event","register-channel-to-receive-event",322539620),inst_11180);
var state_11206__$1 = (function (){var statearr_11227 = state_11206;
(statearr_11227[(12)] = inst_11186);

return statearr_11227;
})();
if(inst_11187){
var statearr_11228_11253 = state_11206__$1;
(statearr_11228_11253[(1)] = (11));

} else {
var statearr_11229_11254 = state_11206__$1;
(statearr_11229_11254[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11207 === (8))){
var inst_11179 = (state_11206[(7)]);
var inst_11183 = lg_checkers.board.board_worker_board_clicked.call(null,inst_11179);
var state_11206__$1 = state_11206;
var statearr_11230_11255 = state_11206__$1;
(statearr_11230_11255[(2)] = inst_11183);

(statearr_11230_11255[(1)] = (10));


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
});})(c__8814__auto___11238))
;
return ((function (switch__8749__auto__,c__8814__auto___11238){
return (function() {
var lg_checkers$board$state_machine__8750__auto__ = null;
var lg_checkers$board$state_machine__8750__auto____0 = (function (){
var statearr_11234 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11234[(0)] = lg_checkers$board$state_machine__8750__auto__);

(statearr_11234[(1)] = (1));

return statearr_11234;
});
var lg_checkers$board$state_machine__8750__auto____1 = (function (state_11206){
while(true){
var ret_value__8751__auto__ = (function (){try{while(true){
var result__8752__auto__ = switch__8749__auto__.call(null,state_11206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8752__auto__;
}
break;
}
}catch (e11235){if((e11235 instanceof Object)){
var ex__8753__auto__ = e11235;
var statearr_11236_11256 = state_11206;
(statearr_11236_11256[(5)] = ex__8753__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11257 = state_11206;
state_11206 = G__11257;
continue;
} else {
return ret_value__8751__auto__;
}
break;
}
});
lg_checkers$board$state_machine__8750__auto__ = function(state_11206){
switch(arguments.length){
case 0:
return lg_checkers$board$state_machine__8750__auto____0.call(this);
case 1:
return lg_checkers$board$state_machine__8750__auto____1.call(this,state_11206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lg_checkers$board$state_machine__8750__auto__.cljs$core$IFn$_invoke$arity$0 = lg_checkers$board$state_machine__8750__auto____0;
lg_checkers$board$state_machine__8750__auto__.cljs$core$IFn$_invoke$arity$1 = lg_checkers$board$state_machine__8750__auto____1;
return lg_checkers$board$state_machine__8750__auto__;
})()
;})(switch__8749__auto__,c__8814__auto___11238))
})();
var state__8816__auto__ = (function (){var statearr_11237 = f__8815__auto__.call(null);
(statearr_11237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8814__auto___11238);

return statearr_11237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8816__auto__);
});})(c__8814__auto___11238))
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
return lg_checkers.board.update_score_for_ui.call(null,original_piece_color_type,((1) * delta_score));
});
lg_checkers.board.update_score_for_ui = (function lg_checkers$board$update_score_for_ui(original_piece_color_type,delta_score){
cljs.core.println.call(null,"");

cljs.core.println.call(null,":captured-pieces: ",cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.app_state),new cljs.core.Keyword(null,"captured-pieces","captured-pieces",-1406669063)));

cljs.core.swap_BANG_.call(null,lg_checkers.board.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"captured-pieces","captured-pieces",-1406669063),(delta_score + cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.app_state),new cljs.core.Keyword(null,"captured-pieces","captured-pieces",-1406669063))));

return cljs.core.println.call(null,":captured-pieces: ",cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.app_state),new cljs.core.Keyword(null,"captured-pieces","captured-pieces",-1406669063)));
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
return cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__11258_SHARP_){
return lg_checkers.board.is_there_are_victim_QMARK_.call(null,p1__11258_SHARP_,test_pos,actor_piece_type,true);
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
lg_checkers.board.original_piece_color_for_ai = new cljs.core.Keyword(null,"red-piece","red-piece",-398776236);
lg_checkers.board.movable_piece_colors_for_ai = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"red-piece","red-piece",-398776236),lg_checkers.board.original_piece_color_for_ai))?lg_checkers.board.all_red_movable_pieces:lg_checkers.board.all_black_movable_pieces);
var c__8814__auto___11309 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8814__auto___11309){
return (function (){
var f__8815__auto__ = (function (){var switch__8749__auto__ = ((function (c__8814__auto___11309){
return (function (state_11283){
var state_val_11284 = (state_11283[(1)]);
if((state_val_11284 === (7))){
var inst_11263 = (state_11283[(7)]);
var inst_11262 = (state_11283[(8)]);
var inst_11262__$1 = (state_11283[(2)]);
var inst_11263__$1 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(inst_11262__$1);
var inst_11264 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"make-move","make-move",-1146306373),inst_11263__$1);
var state_11283__$1 = (function (){var statearr_11285 = state_11283;
(statearr_11285[(7)] = inst_11263__$1);

(statearr_11285[(8)] = inst_11262__$1);

return statearr_11285;
})();
if(inst_11264){
var statearr_11286_11310 = state_11283__$1;
(statearr_11286_11310[(1)] = (8));

} else {
var statearr_11287_11311 = state_11283__$1;
(statearr_11287_11311[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11284 === (1))){
var state_11283__$1 = state_11283;
var statearr_11288_11312 = state_11283__$1;
(statearr_11288_11312[(2)] = null);

(statearr_11288_11312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11284 === (4))){
var state_11283__$1 = state_11283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11283__$1,(7),lg_checkers.board.ai_commands);
} else {
if((state_val_11284 === (13))){
var inst_11275 = (state_11283[(2)]);
var state_11283__$1 = (function (){var statearr_11289 = state_11283;
(statearr_11289[(9)] = inst_11275);

return statearr_11289;
})();
var statearr_11290_11313 = state_11283__$1;
(statearr_11290_11313[(2)] = null);

(statearr_11290_11313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11284 === (6))){
var inst_11279 = (state_11283[(2)]);
var state_11283__$1 = state_11283;
var statearr_11291_11314 = state_11283__$1;
(statearr_11291_11314[(2)] = inst_11279);

(statearr_11291_11314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11284 === (3))){
var inst_11281 = (state_11283[(2)]);
var state_11283__$1 = state_11283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11283__$1,inst_11281);
} else {
if((state_val_11284 === (12))){
var state_11283__$1 = state_11283;
var statearr_11292_11315 = state_11283__$1;
(statearr_11292_11315[(2)] = null);

(statearr_11292_11315[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11284 === (2))){
var state_11283__$1 = state_11283;
var statearr_11293_11316 = state_11283__$1;
(statearr_11293_11316[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11284 === (11))){
var inst_11262 = (state_11283[(8)]);
var inst_11272 = lg_checkers.board.ai_worker_register_channel_to_receive_event.call(null,inst_11262);
var state_11283__$1 = state_11283;
var statearr_11295_11317 = state_11283__$1;
(statearr_11295_11317[(2)] = inst_11272);

(statearr_11295_11317[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11284 === (9))){
var state_11283__$1 = state_11283;
var statearr_11296_11318 = state_11283__$1;
(statearr_11296_11318[(2)] = null);

(statearr_11296_11318[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11284 === (5))){
var state_11283__$1 = state_11283;
var statearr_11297_11319 = state_11283__$1;
(statearr_11297_11319[(2)] = null);

(statearr_11297_11319[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11284 === (10))){
var inst_11263 = (state_11283[(7)]);
var inst_11269 = (state_11283[(2)]);
var inst_11270 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"register-channel-to-receive-event","register-channel-to-receive-event",322539620),inst_11263);
var state_11283__$1 = (function (){var statearr_11298 = state_11283;
(statearr_11298[(10)] = inst_11269);

return statearr_11298;
})();
if(inst_11270){
var statearr_11299_11320 = state_11283__$1;
(statearr_11299_11320[(1)] = (11));

} else {
var statearr_11300_11321 = state_11283__$1;
(statearr_11300_11321[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11284 === (8))){
var inst_11262 = (state_11283[(8)]);
var inst_11266 = lg_checkers.board.ai_worker_make_move.call(null,inst_11262);
var state_11283__$1 = state_11283;
var statearr_11301_11322 = state_11283__$1;
(statearr_11301_11322[(2)] = inst_11266);

(statearr_11301_11322[(1)] = (10));


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
});})(c__8814__auto___11309))
;
return ((function (switch__8749__auto__,c__8814__auto___11309){
return (function() {
var lg_checkers$board$state_machine__8750__auto__ = null;
var lg_checkers$board$state_machine__8750__auto____0 = (function (){
var statearr_11305 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11305[(0)] = lg_checkers$board$state_machine__8750__auto__);

(statearr_11305[(1)] = (1));

return statearr_11305;
});
var lg_checkers$board$state_machine__8750__auto____1 = (function (state_11283){
while(true){
var ret_value__8751__auto__ = (function (){try{while(true){
var result__8752__auto__ = switch__8749__auto__.call(null,state_11283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8752__auto__;
}
break;
}
}catch (e11306){if((e11306 instanceof Object)){
var ex__8753__auto__ = e11306;
var statearr_11307_11323 = state_11283;
(statearr_11307_11323[(5)] = ex__8753__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11324 = state_11283;
state_11283 = G__11324;
continue;
} else {
return ret_value__8751__auto__;
}
break;
}
});
lg_checkers$board$state_machine__8750__auto__ = function(state_11283){
switch(arguments.length){
case 0:
return lg_checkers$board$state_machine__8750__auto____0.call(this);
case 1:
return lg_checkers$board$state_machine__8750__auto____1.call(this,state_11283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lg_checkers$board$state_machine__8750__auto__.cljs$core$IFn$_invoke$arity$0 = lg_checkers$board$state_machine__8750__auto____0;
lg_checkers$board$state_machine__8750__auto__.cljs$core$IFn$_invoke$arity$1 = lg_checkers$board$state_machine__8750__auto____1;
return lg_checkers$board$state_machine__8750__auto__;
})()
;})(switch__8749__auto__,c__8814__auto___11309))
})();
var state__8816__auto__ = (function (){var statearr_11308 = f__8815__auto__.call(null);
(statearr_11308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8814__auto___11309);

return statearr_11308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8816__auto__);
});})(c__8814__auto___11309))
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
if(cljs.core.contains_QMARK_.call(null,lg_checkers.board.movable_piece_colors_for_ai,our_piece_type)){
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
return (function (p1__11325_SHARP_){
return lg_checkers.board.check_is_neighbor_is_victim.call(null,piece_pos,p1__11325_SHARP_);
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
return (function (p1__11326_SHARP_){
return lg_checkers.board.moves_check_is_neighbor_is_good_place_to_move.call(null,piece_pos,p1__11326_SHARP_);
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

//# sourceMappingURL=board.js.map