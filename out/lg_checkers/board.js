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
lg_checkers.board.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-is-allowed-to-move","user-is-allowed-to-move",1540192799),true,new cljs.core.Keyword(null,"captured-pieces","captured-pieces",-1406669063),(0),new cljs.core.Keyword(null,"number-of-mouse-clicks","number-of-mouse-clicks",-225975392),(0)], null));
}
lg_checkers.board.control_all_pieces = false;
var c__8814__auto___18397 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8814__auto___18397){
return (function (){
var f__8815__auto__ = (function (){var switch__8749__auto__ = ((function (c__8814__auto___18397){
return (function (state_18370){
var state_val_18371 = (state_18370[(1)]);
if((state_val_18371 === (7))){
var inst_18350 = (state_18370[(7)]);
var inst_18349 = (state_18370[(8)]);
var inst_18349__$1 = (state_18370[(2)]);
var inst_18350__$1 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(inst_18349__$1);
var inst_18351 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"board-clicked","board-clicked",1157654001),inst_18350__$1);
var state_18370__$1 = (function (){var statearr_18372 = state_18370;
(statearr_18372[(7)] = inst_18350__$1);

(statearr_18372[(8)] = inst_18349__$1);

return statearr_18372;
})();
if(inst_18351){
var statearr_18373_18398 = state_18370__$1;
(statearr_18373_18398[(1)] = (8));

} else {
var statearr_18374_18399 = state_18370__$1;
(statearr_18374_18399[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18371 === (1))){
var inst_18345 = lg_checkers.board.send_api_command_register_channel_to_receive_event.call(null,lg_checkers.board.board_events,new cljs.core.Keyword(null,"api-event-unblock-user-board-input","api-event-unblock-user-board-input",1661151846));
var state_18370__$1 = (function (){var statearr_18375 = state_18370;
(statearr_18375[(9)] = inst_18345);

return statearr_18375;
})();
var statearr_18376_18400 = state_18370__$1;
(statearr_18376_18400[(2)] = null);

(statearr_18376_18400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18371 === (4))){
var state_18370__$1 = state_18370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18370__$1,(7),lg_checkers.board.board_events);
} else {
if((state_val_18371 === (13))){
var inst_18362 = (state_18370[(2)]);
var state_18370__$1 = (function (){var statearr_18377 = state_18370;
(statearr_18377[(10)] = inst_18362);

return statearr_18377;
})();
var statearr_18378_18401 = state_18370__$1;
(statearr_18378_18401[(2)] = null);

(statearr_18378_18401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18371 === (6))){
var inst_18366 = (state_18370[(2)]);
var state_18370__$1 = state_18370;
var statearr_18379_18402 = state_18370__$1;
(statearr_18379_18402[(2)] = inst_18366);

(statearr_18379_18402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18371 === (3))){
var inst_18368 = (state_18370[(2)]);
var state_18370__$1 = state_18370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18370__$1,inst_18368);
} else {
if((state_val_18371 === (12))){
var state_18370__$1 = state_18370;
var statearr_18380_18403 = state_18370__$1;
(statearr_18380_18403[(2)] = null);

(statearr_18380_18403[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18371 === (2))){
var state_18370__$1 = state_18370;
var statearr_18381_18404 = state_18370__$1;
(statearr_18381_18404[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18371 === (11))){
var inst_18359 = lg_checkers.board.controller_unblock_user_board_input.call(null);
var state_18370__$1 = state_18370;
var statearr_18383_18405 = state_18370__$1;
(statearr_18383_18405[(2)] = inst_18359);

(statearr_18383_18405[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18371 === (9))){
var state_18370__$1 = state_18370;
var statearr_18384_18406 = state_18370__$1;
(statearr_18384_18406[(2)] = null);

(statearr_18384_18406[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18371 === (5))){
var state_18370__$1 = state_18370;
var statearr_18385_18407 = state_18370__$1;
(statearr_18385_18407[(2)] = null);

(statearr_18385_18407[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18371 === (10))){
var inst_18350 = (state_18370[(7)]);
var inst_18356 = (state_18370[(2)]);
var inst_18357 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"api-event-unblock-user-board-input","api-event-unblock-user-board-input",1661151846),inst_18350);
var state_18370__$1 = (function (){var statearr_18386 = state_18370;
(statearr_18386[(11)] = inst_18356);

return statearr_18386;
})();
if(inst_18357){
var statearr_18387_18408 = state_18370__$1;
(statearr_18387_18408[(1)] = (11));

} else {
var statearr_18388_18409 = state_18370__$1;
(statearr_18388_18409[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18371 === (8))){
var inst_18349 = (state_18370[(8)]);
var inst_18353 = lg_checkers.board.controler_worker_board_clicked.call(null,inst_18349);
var state_18370__$1 = state_18370;
var statearr_18389_18410 = state_18370__$1;
(statearr_18389_18410[(2)] = inst_18353);

(statearr_18389_18410[(1)] = (10));


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
});})(c__8814__auto___18397))
;
return ((function (switch__8749__auto__,c__8814__auto___18397){
return (function() {
var lg_checkers$board$state_machine__8750__auto__ = null;
var lg_checkers$board$state_machine__8750__auto____0 = (function (){
var statearr_18393 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18393[(0)] = lg_checkers$board$state_machine__8750__auto__);

(statearr_18393[(1)] = (1));

return statearr_18393;
});
var lg_checkers$board$state_machine__8750__auto____1 = (function (state_18370){
while(true){
var ret_value__8751__auto__ = (function (){try{while(true){
var result__8752__auto__ = switch__8749__auto__.call(null,state_18370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8752__auto__;
}
break;
}
}catch (e18394){if((e18394 instanceof Object)){
var ex__8753__auto__ = e18394;
var statearr_18395_18411 = state_18370;
(statearr_18395_18411[(5)] = ex__8753__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18412 = state_18370;
state_18370 = G__18412;
continue;
} else {
return ret_value__8751__auto__;
}
break;
}
});
lg_checkers$board$state_machine__8750__auto__ = function(state_18370){
switch(arguments.length){
case 0:
return lg_checkers$board$state_machine__8750__auto____0.call(this);
case 1:
return lg_checkers$board$state_machine__8750__auto____1.call(this,state_18370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lg_checkers$board$state_machine__8750__auto__.cljs$core$IFn$_invoke$arity$0 = lg_checkers$board$state_machine__8750__auto____0;
lg_checkers$board$state_machine__8750__auto__.cljs$core$IFn$_invoke$arity$1 = lg_checkers$board$state_machine__8750__auto____1;
return lg_checkers$board$state_machine__8750__auto__;
})()
;})(switch__8749__auto__,c__8814__auto___18397))
})();
var state__8816__auto__ = (function (){var statearr_18396 = f__8815__auto__.call(null);
(statearr_18396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8814__auto___18397);

return statearr_18396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8816__auto__);
});})(c__8814__auto___18397))
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
var c__8814__auto___18476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8814__auto___18476){
return (function (){
var f__8815__auto__ = (function (){var switch__8749__auto__ = ((function (c__8814__auto___18476){
return (function (state_18444){
var state_val_18445 = (state_18444[(1)]);
if((state_val_18445 === (7))){
var inst_18417 = (state_18444[(7)]);
var inst_18418 = (state_18444[(8)]);
var inst_18417__$1 = (state_18444[(2)]);
var inst_18418__$1 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(inst_18417__$1);
var inst_18419 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"board-clicked","board-clicked",1157654001),inst_18418__$1);
var state_18444__$1 = (function (){var statearr_18446 = state_18444;
(statearr_18446[(7)] = inst_18417__$1);

(statearr_18446[(8)] = inst_18418__$1);

return statearr_18446;
})();
if(inst_18419){
var statearr_18447_18477 = state_18444__$1;
(statearr_18447_18477[(1)] = (8));

} else {
var statearr_18448_18478 = state_18444__$1;
(statearr_18448_18478[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18445 === (1))){
var inst_18413 = lg_checkers.board.send_ai_command_register_channel_to_receive_event.call(null,lg_checkers.board.board_api_commands,new cljs.core.Keyword(null,"ai-event-ai-made-movement","ai-event-ai-made-movement",-259615458));
var state_18444__$1 = (function (){var statearr_18449 = state_18444;
(statearr_18449[(9)] = inst_18413);

return statearr_18449;
})();
var statearr_18450_18479 = state_18444__$1;
(statearr_18450_18479[(2)] = null);

(statearr_18450_18479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18445 === (4))){
var state_18444__$1 = state_18444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18444__$1,(7),lg_checkers.board.board_api_commands);
} else {
if((state_val_18445 === (15))){
var state_18444__$1 = state_18444;
var statearr_18451_18480 = state_18444__$1;
(statearr_18451_18480[(2)] = null);

(statearr_18451_18480[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18445 === (13))){
var inst_18418 = (state_18444[(8)]);
var inst_18430 = (state_18444[(2)]);
var inst_18431 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ai-event-ai-made-movement","ai-event-ai-made-movement",-259615458),inst_18418);
var state_18444__$1 = (function (){var statearr_18452 = state_18444;
(statearr_18452[(10)] = inst_18430);

return statearr_18452;
})();
if(inst_18431){
var statearr_18453_18481 = state_18444__$1;
(statearr_18453_18481[(1)] = (14));

} else {
var statearr_18454_18482 = state_18444__$1;
(statearr_18454_18482[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18445 === (6))){
var inst_18440 = (state_18444[(2)]);
var state_18444__$1 = state_18444;
var statearr_18455_18483 = state_18444__$1;
(statearr_18455_18483[(2)] = inst_18440);

(statearr_18455_18483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18445 === (3))){
var inst_18442 = (state_18444[(2)]);
var state_18444__$1 = state_18444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18444__$1,inst_18442);
} else {
if((state_val_18445 === (12))){
var state_18444__$1 = state_18444;
var statearr_18456_18484 = state_18444__$1;
(statearr_18456_18484[(2)] = null);

(statearr_18456_18484[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18445 === (2))){
var state_18444__$1 = state_18444;
var statearr_18457_18485 = state_18444__$1;
(statearr_18457_18485[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18445 === (11))){
var inst_18417 = (state_18444[(7)]);
var inst_18427 = lg_checkers.board.api_worker_register_channel_to_receive_event.call(null,inst_18417);
var state_18444__$1 = state_18444;
var statearr_18459_18486 = state_18444__$1;
(statearr_18459_18486[(2)] = inst_18427);

(statearr_18459_18486[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18445 === (9))){
var state_18444__$1 = state_18444;
var statearr_18460_18487 = state_18444__$1;
(statearr_18460_18487[(2)] = null);

(statearr_18460_18487[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18445 === (5))){
var state_18444__$1 = state_18444;
var statearr_18461_18488 = state_18444__$1;
(statearr_18461_18488[(2)] = null);

(statearr_18461_18488[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18445 === (14))){
var inst_18417 = (state_18444[(7)]);
var inst_18433 = lg_checkers.board.api_worker_ai_made_movement.call(null,inst_18417);
var state_18444__$1 = state_18444;
var statearr_18462_18489 = state_18444__$1;
(statearr_18462_18489[(2)] = inst_18433);

(statearr_18462_18489[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18445 === (16))){
var inst_18436 = (state_18444[(2)]);
var state_18444__$1 = (function (){var statearr_18463 = state_18444;
(statearr_18463[(11)] = inst_18436);

return statearr_18463;
})();
var statearr_18464_18490 = state_18444__$1;
(statearr_18464_18490[(2)] = null);

(statearr_18464_18490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18445 === (10))){
var inst_18418 = (state_18444[(8)]);
var inst_18424 = (state_18444[(2)]);
var inst_18425 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"register-channel-to-receive-event","register-channel-to-receive-event",322539620),inst_18418);
var state_18444__$1 = (function (){var statearr_18465 = state_18444;
(statearr_18465[(12)] = inst_18424);

return statearr_18465;
})();
if(inst_18425){
var statearr_18466_18491 = state_18444__$1;
(statearr_18466_18491[(1)] = (11));

} else {
var statearr_18467_18492 = state_18444__$1;
(statearr_18467_18492[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18445 === (8))){
var inst_18417 = (state_18444[(7)]);
var inst_18421 = lg_checkers.board.board_worker_board_clicked.call(null,inst_18417);
var state_18444__$1 = state_18444;
var statearr_18468_18493 = state_18444__$1;
(statearr_18468_18493[(2)] = inst_18421);

(statearr_18468_18493[(1)] = (10));


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
});})(c__8814__auto___18476))
;
return ((function (switch__8749__auto__,c__8814__auto___18476){
return (function() {
var lg_checkers$board$state_machine__8750__auto__ = null;
var lg_checkers$board$state_machine__8750__auto____0 = (function (){
var statearr_18472 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18472[(0)] = lg_checkers$board$state_machine__8750__auto__);

(statearr_18472[(1)] = (1));

return statearr_18472;
});
var lg_checkers$board$state_machine__8750__auto____1 = (function (state_18444){
while(true){
var ret_value__8751__auto__ = (function (){try{while(true){
var result__8752__auto__ = switch__8749__auto__.call(null,state_18444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8752__auto__;
}
break;
}
}catch (e18473){if((e18473 instanceof Object)){
var ex__8753__auto__ = e18473;
var statearr_18474_18494 = state_18444;
(statearr_18474_18494[(5)] = ex__8753__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18495 = state_18444;
state_18444 = G__18495;
continue;
} else {
return ret_value__8751__auto__;
}
break;
}
});
lg_checkers$board$state_machine__8750__auto__ = function(state_18444){
switch(arguments.length){
case 0:
return lg_checkers$board$state_machine__8750__auto____0.call(this);
case 1:
return lg_checkers$board$state_machine__8750__auto____1.call(this,state_18444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lg_checkers$board$state_machine__8750__auto__.cljs$core$IFn$_invoke$arity$0 = lg_checkers$board$state_machine__8750__auto____0;
lg_checkers$board$state_machine__8750__auto__.cljs$core$IFn$_invoke$arity$1 = lg_checkers$board$state_machine__8750__auto____1;
return lg_checkers$board$state_machine__8750__auto__;
})()
;})(switch__8749__auto__,c__8814__auto___18476))
})();
var state__8816__auto__ = (function (){var statearr_18475 = f__8815__auto__.call(null);
(statearr_18475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8814__auto___18476);

return statearr_18475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8816__auto__);
});})(c__8814__auto___18476))
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
return cljs.core.swap_BANG_.call(null,lg_checkers.board.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"captured-pieces","captured-pieces",-1406669063),(delta_score + cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.app_state),new cljs.core.Keyword(null,"captured-pieces","captured-pieces",-1406669063))));
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
return cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__18496_SHARP_){
return lg_checkers.board.is_there_are_victim_QMARK_.call(null,p1__18496_SHARP_,test_pos,actor_piece_type,true);
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
lg_checkers.board.ai_timeout_for_work_emulation = (2000);
var c__8814__auto___18556 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8814__auto___18556){
return (function (){
var f__8815__auto__ = (function (){var switch__8749__auto__ = ((function (c__8814__auto___18556){
return (function (state_18527){
var state_val_18528 = (state_18527[(1)]);
if((state_val_18528 === (7))){
var inst_18501 = (state_18527[(7)]);
var inst_18500 = (state_18527[(8)]);
var inst_18500__$1 = (state_18527[(2)]);
var inst_18501__$1 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(inst_18500__$1);
var inst_18502 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"make-move","make-move",-1146306373),inst_18501__$1);
var state_18527__$1 = (function (){var statearr_18529 = state_18527;
(statearr_18529[(7)] = inst_18501__$1);

(statearr_18529[(8)] = inst_18500__$1);

return statearr_18529;
})();
if(inst_18502){
var statearr_18530_18557 = state_18527__$1;
(statearr_18530_18557[(1)] = (8));

} else {
var statearr_18531_18558 = state_18527__$1;
(statearr_18531_18558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18528 === (1))){
var state_18527__$1 = state_18527;
var statearr_18532_18559 = state_18527__$1;
(statearr_18532_18559[(2)] = null);

(statearr_18532_18559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18528 === (4))){
var state_18527__$1 = state_18527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18527__$1,(7),lg_checkers.board.ai_commands);
} else {
if((state_val_18528 === (15))){
var state_18527__$1 = state_18527;
var statearr_18533_18560 = state_18527__$1;
(statearr_18533_18560[(2)] = null);

(statearr_18533_18560[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18528 === (13))){
var inst_18507 = (state_18527[(2)]);
var state_18527__$1 = state_18527;
var statearr_18534_18561 = state_18527__$1;
(statearr_18534_18561[(2)] = inst_18507);

(statearr_18534_18561[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18528 === (6))){
var inst_18523 = (state_18527[(2)]);
var state_18527__$1 = state_18527;
var statearr_18535_18562 = state_18527__$1;
(statearr_18535_18562[(2)] = inst_18523);

(statearr_18535_18562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18528 === (3))){
var inst_18525 = (state_18527[(2)]);
var state_18527__$1 = state_18527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18527__$1,inst_18525);
} else {
if((state_val_18528 === (12))){
var inst_18500 = (state_18527[(8)]);
var inst_18509 = (state_18527[(2)]);
var inst_18510 = lg_checkers.board.ai_worker_make_move.call(null,inst_18500);
var state_18527__$1 = (function (){var statearr_18536 = state_18527;
(statearr_18536[(9)] = inst_18509);

return statearr_18536;
})();
var statearr_18537_18563 = state_18527__$1;
(statearr_18537_18563[(2)] = inst_18510);

(statearr_18537_18563[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18528 === (2))){
var state_18527__$1 = state_18527;
var statearr_18538_18564 = state_18527__$1;
(statearr_18538_18564[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18528 === (11))){
var inst_18505 = cljs.core.async.timeout.call(null,lg_checkers.board.ai_timeout_for_work_emulation);
var state_18527__$1 = state_18527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18527__$1,(13),inst_18505);
} else {
if((state_val_18528 === (9))){
var state_18527__$1 = state_18527;
var statearr_18540_18565 = state_18527__$1;
(statearr_18540_18565[(2)] = null);

(statearr_18540_18565[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18528 === (5))){
var state_18527__$1 = state_18527;
var statearr_18541_18566 = state_18527__$1;
(statearr_18541_18566[(2)] = null);

(statearr_18541_18566[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18528 === (14))){
var inst_18500 = (state_18527[(8)]);
var inst_18516 = lg_checkers.board.ai_worker_register_channel_to_receive_event.call(null,inst_18500);
var state_18527__$1 = state_18527;
var statearr_18542_18567 = state_18527__$1;
(statearr_18542_18567[(2)] = inst_18516);

(statearr_18542_18567[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18528 === (16))){
var inst_18519 = (state_18527[(2)]);
var state_18527__$1 = (function (){var statearr_18543 = state_18527;
(statearr_18543[(10)] = inst_18519);

return statearr_18543;
})();
var statearr_18544_18568 = state_18527__$1;
(statearr_18544_18568[(2)] = null);

(statearr_18544_18568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18528 === (10))){
var inst_18501 = (state_18527[(7)]);
var inst_18513 = (state_18527[(2)]);
var inst_18514 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"register-channel-to-receive-event","register-channel-to-receive-event",322539620),inst_18501);
var state_18527__$1 = (function (){var statearr_18545 = state_18527;
(statearr_18545[(11)] = inst_18513);

return statearr_18545;
})();
if(inst_18514){
var statearr_18546_18569 = state_18527__$1;
(statearr_18546_18569[(1)] = (14));

} else {
var statearr_18547_18570 = state_18527__$1;
(statearr_18547_18570[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18528 === (8))){
var state_18527__$1 = state_18527;
var statearr_18548_18571 = state_18527__$1;
(statearr_18548_18571[(2)] = null);

(statearr_18548_18571[(1)] = (11));


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
});})(c__8814__auto___18556))
;
return ((function (switch__8749__auto__,c__8814__auto___18556){
return (function() {
var lg_checkers$board$state_machine__8750__auto__ = null;
var lg_checkers$board$state_machine__8750__auto____0 = (function (){
var statearr_18552 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18552[(0)] = lg_checkers$board$state_machine__8750__auto__);

(statearr_18552[(1)] = (1));

return statearr_18552;
});
var lg_checkers$board$state_machine__8750__auto____1 = (function (state_18527){
while(true){
var ret_value__8751__auto__ = (function (){try{while(true){
var result__8752__auto__ = switch__8749__auto__.call(null,state_18527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8752__auto__;
}
break;
}
}catch (e18553){if((e18553 instanceof Object)){
var ex__8753__auto__ = e18553;
var statearr_18554_18572 = state_18527;
(statearr_18554_18572[(5)] = ex__8753__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18573 = state_18527;
state_18527 = G__18573;
continue;
} else {
return ret_value__8751__auto__;
}
break;
}
});
lg_checkers$board$state_machine__8750__auto__ = function(state_18527){
switch(arguments.length){
case 0:
return lg_checkers$board$state_machine__8750__auto____0.call(this);
case 1:
return lg_checkers$board$state_machine__8750__auto____1.call(this,state_18527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lg_checkers$board$state_machine__8750__auto__.cljs$core$IFn$_invoke$arity$0 = lg_checkers$board$state_machine__8750__auto____0;
lg_checkers$board$state_machine__8750__auto__.cljs$core$IFn$_invoke$arity$1 = lg_checkers$board$state_machine__8750__auto____1;
return lg_checkers$board$state_machine__8750__auto__;
})()
;})(switch__8749__auto__,c__8814__auto___18556))
})();
var state__8816__auto__ = (function (){var statearr_18555 = f__8815__auto__.call(null);
(statearr_18555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8814__auto___18556);

return statearr_18555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8816__auto__);
});})(c__8814__auto___18556))
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
lg_checkers.board.cljs_cannot_recur_BANG_ = (function lg_checkers$board$cljs_cannot_recur_BANG_(){
var c__8814__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8814__auto__){
return (function (){
var f__8815__auto__ = (function (){var switch__8749__auto__ = ((function (c__8814__auto__){
return (function (state_18618){
var state_val_18619 = (state_18618[(1)]);
if((state_val_18619 === (1))){
var inst_18605 = null;
var state_18618__$1 = (function (){var statearr_18620 = state_18618;
(statearr_18620[(7)] = inst_18605);

return statearr_18620;
})();
var statearr_18621_18636 = state_18618__$1;
(statearr_18621_18636[(2)] = null);

(statearr_18621_18636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18619 === (2))){
var inst_18607 = cljs.core.async.timeout.call(null,(300));
var state_18618__$1 = state_18618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18618__$1,(4),inst_18607);
} else {
if((state_val_18619 === (3))){
var inst_18616 = (state_18618[(2)]);
var state_18618__$1 = state_18618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18618__$1,inst_18616);
} else {
if((state_val_18619 === (4))){
var inst_18609 = (state_18618[(8)]);
var inst_18609__$1 = (state_18618[(2)]);
var state_18618__$1 = (function (){var statearr_18622 = state_18618;
(statearr_18622[(8)] = inst_18609__$1);

return statearr_18622;
})();
if(cljs.core.truth_(inst_18609__$1)){
var statearr_18623_18637 = state_18618__$1;
(statearr_18623_18637[(1)] = (5));

} else {
var statearr_18624_18638 = state_18618__$1;
(statearr_18624_18638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18619 === (5))){
var inst_18609 = (state_18618[(8)]);
var inst_18605 = inst_18609;
var state_18618__$1 = (function (){var statearr_18625 = state_18618;
(statearr_18625[(7)] = inst_18605);

return statearr_18625;
})();
var statearr_18626_18639 = state_18618__$1;
(statearr_18626_18639[(2)] = null);

(statearr_18626_18639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18619 === (6))){
var state_18618__$1 = state_18618;
var statearr_18627_18640 = state_18618__$1;
(statearr_18627_18640[(2)] = null);

(statearr_18627_18640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18619 === (7))){
var inst_18614 = (state_18618[(2)]);
var state_18618__$1 = state_18618;
var statearr_18628_18641 = state_18618__$1;
(statearr_18628_18641[(2)] = inst_18614);

(statearr_18628_18641[(1)] = (3));


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
});})(c__8814__auto__))
;
return ((function (switch__8749__auto__,c__8814__auto__){
return (function() {
var lg_checkers$board$cljs_cannot_recur_BANG__$_state_machine__8750__auto__ = null;
var lg_checkers$board$cljs_cannot_recur_BANG__$_state_machine__8750__auto____0 = (function (){
var statearr_18632 = [null,null,null,null,null,null,null,null,null];
(statearr_18632[(0)] = lg_checkers$board$cljs_cannot_recur_BANG__$_state_machine__8750__auto__);

(statearr_18632[(1)] = (1));

return statearr_18632;
});
var lg_checkers$board$cljs_cannot_recur_BANG__$_state_machine__8750__auto____1 = (function (state_18618){
while(true){
var ret_value__8751__auto__ = (function (){try{while(true){
var result__8752__auto__ = switch__8749__auto__.call(null,state_18618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8752__auto__;
}
break;
}
}catch (e18633){if((e18633 instanceof Object)){
var ex__8753__auto__ = e18633;
var statearr_18634_18642 = state_18618;
(statearr_18634_18642[(5)] = ex__8753__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18643 = state_18618;
state_18618 = G__18643;
continue;
} else {
return ret_value__8751__auto__;
}
break;
}
});
lg_checkers$board$cljs_cannot_recur_BANG__$_state_machine__8750__auto__ = function(state_18618){
switch(arguments.length){
case 0:
return lg_checkers$board$cljs_cannot_recur_BANG__$_state_machine__8750__auto____0.call(this);
case 1:
return lg_checkers$board$cljs_cannot_recur_BANG__$_state_machine__8750__auto____1.call(this,state_18618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lg_checkers$board$cljs_cannot_recur_BANG__$_state_machine__8750__auto__.cljs$core$IFn$_invoke$arity$0 = lg_checkers$board$cljs_cannot_recur_BANG__$_state_machine__8750__auto____0;
lg_checkers$board$cljs_cannot_recur_BANG__$_state_machine__8750__auto__.cljs$core$IFn$_invoke$arity$1 = lg_checkers$board$cljs_cannot_recur_BANG__$_state_machine__8750__auto____1;
return lg_checkers$board$cljs_cannot_recur_BANG__$_state_machine__8750__auto__;
})()
;})(switch__8749__auto__,c__8814__auto__))
})();
var state__8816__auto__ = (function (){var statearr_18635 = f__8815__auto__.call(null);
(statearr_18635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8814__auto__);

return statearr_18635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8816__auto__);
});})(c__8814__auto__))
);

return c__8814__auto__;
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
return (function (p1__18644_SHARP_){
return lg_checkers.board.check_is_neighbor_is_victim.call(null,piece_pos,p1__18644_SHARP_);
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
return (function (p1__18645_SHARP_){
return lg_checkers.board.moves_check_is_neighbor_is_good_place_to_move.call(null,piece_pos,p1__18645_SHARP_);
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