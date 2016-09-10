// Compiled by ClojureScript 1.9.89 {}
goog.provide('lg_checkers.board');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('datascript.core');
goog.require('datascript.db');
cljs.core.enable_console_print_BANG_.call(null);
lg_checkers.board.register_channel_to_receive_event = (function lg_checkers$board$register_channel_to_receive_event(event_receivers_map,event_id,channel){
return cljs.core.assoc.call(null,event_receivers_map,event_id,cljs.core.conj.call(null,cljs.core.get.call(null,event_receivers_map,event_id),channel));
});
lg_checkers.board.send_event_to_all_receivers = (function lg_checkers$board$send_event_to_all_receivers(event_receivers_map,event_id,event_data){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__127642_SHARP_){
return lg_checkers.board.send_event_to_single_receiver.call(null,p1__127642_SHARP_,event_data);
}),cljs.core.get.call(null,event_receivers_map,event_id)));
});
lg_checkers.board.send_event_to_single_receiver = (function lg_checkers$board$send_event_to_single_receiver(channel,event){
return cljs.core.async.put_BANG_.call(null,channel,event);
});
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
lg_checkers.board.opponent_piece_color = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"black-piece","black-piece",2048390247),new cljs.core.Keyword(null,"red-piece","red-piece",-398776236),new cljs.core.Keyword(null,"red-piece","red-piece",-398776236),new cljs.core.Keyword(null,"black-piece","black-piece",2048390247)], null);
lg_checkers.board.top_row = (1);
lg_checkers.board.bottom_row = (8);
lg_checkers.board.promotion_row_by_original_piece_color = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"black-piece","black-piece",2048390247),lg_checkers.board.top_row,new cljs.core.Keyword(null,"red-piece","red-piece",-398776236),lg_checkers.board.bottom_row], null);
lg_checkers.board.promotion_piece_type_by_original_piece_color = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"black-piece","black-piece",2048390247),new cljs.core.Keyword(null,"prom-black-piece","prom-black-piece",1634014567),new cljs.core.Keyword(null,"red-piece","red-piece",-398776236),new cljs.core.Keyword(null,"prom-red-piece","prom-red-piece",1261126575)], null);
lg_checkers.board.promotion_piece_type_by_piece_color = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"black-piece","black-piece",2048390247),new cljs.core.Keyword(null,"prom-black-piece","prom-black-piece",1634014567),new cljs.core.Keyword(null,"red-piece","red-piece",-398776236),new cljs.core.Keyword(null,"prom-red-piece","prom-red-piece",1261126575),new cljs.core.Keyword(null,"black-piece-marked","black-piece-marked",1865651465),new cljs.core.Keyword(null,"prom-black-piece-marked","prom-black-piece-marked",-895939439),new cljs.core.Keyword(null,"red-piece-marked","red-piece-marked",1660744598),new cljs.core.Keyword(null,"prom-red-piece-marked","prom-red-piece-marked",300839965)], null);
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
return cljs.core.get.call(null,lg_checkers.board.promotion_piece_type_by_piece_color,piece_type);
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
return cljs.core.apply.call(null,cljs.core.sorted_map,cljs.core.flatten.call(null,cljs.core.map_indexed.call(null,(function (i,v){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(i + (1)),v],null));
}),cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.repeat.call(null,(12),new cljs.core.Keyword(null,"red-piece","red-piece",-398776236)),cljs.core.repeat.call(null,(8),new cljs.core.Keyword(null,"empty-piece","empty-piece",515714264)),cljs.core.repeat.call(null,(12),new cljs.core.Keyword(null,"black-piece","black-piece",2048390247))], null)))));
});
lg_checkers.board.board_events = cljs.core.async.chan.call(null);
lg_checkers.board.api_commands = cljs.core.async.chan.call(null);
lg_checkers.board.board_commands = cljs.core.async.chan.call(null);
lg_checkers.board.ai_commands = cljs.core.async.chan.call(null);
lg_checkers.board.game_history_db_commands = cljs.core.async.chan.call(null);
lg_checkers.board.game_history_db_timer_commands = cljs.core.async.chan.call(null);
if(typeof lg_checkers.board.board !== 'undefined'){
} else {
lg_checkers.board.board = reagent.core.atom.call(null,lg_checkers.board.create_board.call(null));
}
if(typeof lg_checkers.board.app_state !== 'undefined'){
} else {
lg_checkers.board.app_state = reagent.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"number-of-mouse-clicks","number-of-mouse-clicks",-225975392),new cljs.core.Keyword(null,"ai-delay-timer-can-be-toggled","ai-delay-timer-can-be-toggled",2016336033),new cljs.core.Keyword(null,"replay-is-in-progress","replay-is-in-progress",-1340850428),new cljs.core.Keyword(null,"ai-timeout-for-work-emulation","ai-timeout-for-work-emulation",549896297),new cljs.core.Keyword(null,"user-can-control-all-pieces","user-can-control-all-pieces",-882077365),new cljs.core.Keyword(null,"replay-movement-timeout","replay-movement-timeout",390378892),new cljs.core.Keyword(null,"delay-timer-in-ai-is-on","delay-timer-in-ai-is-on",-641385360),new cljs.core.Keyword(null,"original-piece-color-for-ai","original-piece-color-for-ai",1141180952),new cljs.core.Keyword(null,"captured-pieces","captured-pieces",-1406669063),new cljs.core.Keyword(null,"user-board-actions-are-allowed","user-board-actions-are-allowed",1642515933),new cljs.core.Keyword(null,"ai-can-be-toggled","ai-can-be-toggled",-889130242),new cljs.core.Keyword(null,"user-is-allowed-to-move","user-is-allowed-to-move",1540192799)],[(0),true,false,(5000),false,(750),false,new cljs.core.Keyword(null,"red-piece","red-piece",-398776236),(0),true,true,true]));
}
lg_checkers.board.update_board_position = (function lg_checkers$board$update_board_position(pos,piece){
return cljs.core.swap_BANG_.call(null,lg_checkers.board.board,cljs.core.assoc,pos,piece);
});
lg_checkers.board.reset_board = (function lg_checkers$board$reset_board(){
return cljs.core.swap_BANG_.call(null,lg_checkers.board.board,cljs.core.merge,lg_checkers.board.create_board.call(null));
});
lg_checkers.board.update_internal_score = (function lg_checkers$board$update_internal_score(piece_type,original_piece_color_type,delta_score){
cljs.core.swap_BANG_.call(null,lg_checkers.board.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"captured-pieces","captured-pieces",-1406669063),(delta_score + cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.app_state),new cljs.core.Keyword(null,"captured-pieces","captured-pieces",-1406669063))));

return lg_checkers.board.update_score_for_ui.call(null,original_piece_color_type,((100) * delta_score));
});
lg_checkers.board.update_score_for_ui = (function lg_checkers$board$update_score_for_ui(original_piece_color_type,delta_score){
return null;
});
lg_checkers.board.reset_internal_score_and_srore_for_ui = (function lg_checkers$board$reset_internal_score_and_srore_for_ui(){
return cljs.core.swap_BANG_.call(null,lg_checkers.board.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"captured-pieces","captured-pieces",-1406669063),(0));
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
return cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__127643_SHARP_){
return lg_checkers.board.is_there_are_victim_QMARK_.call(null,p1__127643_SHARP_,test_pos,actor_piece_type,true);
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

lg_checkers.board.promote_piece.call(null,destination_pos);

return true;
} else {
lg_checkers.board.update_internal_score.call(null,current_source_piece_type,current_original_piece_color_type,(1));

lg_checkers.board.update_board_position.call(null,close_neighbor,new cljs.core.Keyword(null,"empty-piece","empty-piece",515714264));

lg_checkers.board.update_board_position.call(null,destination_pos,current_original_piece_type);

lg_checkers.board.promote_piece.call(null,destination_pos);

if(cljs.core.truth_(lg_checkers.board.can_take_victim_enemy_QMARK_.call(null,destination_pos,cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.board),destination_pos)))){
lg_checkers.board.mark_piece_as.call(null,destination_pos,new cljs.core.Keyword(null,"source-piece","source-piece",-1368744576));

return false;
} else {
lg_checkers.board.mark_piece_as.call(null,destination_pos,new cljs.core.Keyword(null,"normal-piece","normal-piece",-456099758));

return true;
}
}
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
lg_checkers.board.movable_piece_colors_for_actor = (function lg_checkers$board$movable_piece_colors_for_actor(current_piece_color){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"red-piece","red-piece",-398776236),current_piece_color)){
return lg_checkers.board.all_red_movable_pieces;
} else {
return lg_checkers.board.all_black_movable_pieces;
}
});
lg_checkers.board.check_board_index_to_color = (function lg_checkers$board$check_board_index_to_color(current_piece_color,index){
var our_board = cljs.core.deref.call(null,lg_checkers.board.board);
var our_piece_type = cljs.core.get.call(null,our_board,index);
if(cljs.core.contains_QMARK_.call(null,lg_checkers.board.movable_piece_colors_for_actor.call(null,current_piece_color),our_piece_type)){
return index;
} else {
return null;
}
});
lg_checkers.board.list_of_current_actors_pieces = (function lg_checkers$board$list_of_current_actors_pieces(current_piece_color){
return cljs.core.set.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__127644_SHARP_){
return lg_checkers.board.check_board_index_to_color.call(null,current_piece_color,p1__127644_SHARP_);
}),cljs.core.range.call(null,(1),(33)))));
});
lg_checkers.board.calculate_neighbors = (function lg_checkers$board$calculate_neighbors(current_piece_color){
var actors_pieces = lg_checkers.board.list_of_current_actors_pieces.call(null,current_piece_color);
return cljs.core.map.call(null,((function (actors_pieces){
return (function (pos){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,cljs.core.remove.call(null,cljs.core.nil_QMARK_,lg_checkers.board.compute_pos_neighbors_memo.call(null,pos))], null);
});})(actors_pieces))
,actors_pieces);
});
lg_checkers.board.calculate_real_opponent_victim_neighbors = (function lg_checkers$board$calculate_real_opponent_victim_neighbors(neighbors){
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
return (function (p1__127645_SHARP_){
return lg_checkers.board.check_is_neighbor_is_victim.call(null,piece_pos,p1__127645_SHARP_);
});})(piece_pos,piece_potential_neighbors))
,cljs.core.seq.call(null,piece_potential_neighbors)));
});
lg_checkers.board.check_is_neighbor_is_victim = (function lg_checkers$board$check_is_neighbor_is_victim(actors_piece_pos,neighbor_pos){
var actors_piece_type = cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.board),actors_piece_pos);
var actors_color = lg_checkers.board.original_piece_color.call(null,actors_piece_type);
var opponent_color = actors_color.call(null,lg_checkers.board.opponent_piece_color);
var neighbor_type = cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.board),neighbor_pos);
var neighbor_original_color = lg_checkers.board.original_piece_color.call(null,neighbor_type);
var direction = lg_checkers.board.neighbor_piece_direction_by_neighbor_pos.call(null,actors_piece_pos,neighbor_pos);
var good_direction_QMARK_ = lg_checkers.board.good_piece_type_direction_QMARK_.call(null,actors_piece_type,direction);
var piece_after_neighbor = lg_checkers.board.neighbor_piece_by_direction.call(null,neighbor_pos,direction);
var piece_after_neighbor_type = ((cljs.core.some_QMARK_.call(null,piece_after_neighbor))?cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.board),piece_after_neighbor):null);
if(cljs.core.truth_(good_direction_QMARK_)){
if(cljs.core._EQ_.call(null,opponent_color,neighbor_original_color)){
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
lg_checkers.board.destination_should_and_have_victims = (function lg_checkers$board$destination_should_and_have_victims(source_pos,destination_pos){
var actors_piece_type = cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.board),source_pos);
var actors_color = lg_checkers.board.original_piece_color.call(null,actors_piece_type);
var opponent_color = actors_color.call(null,lg_checkers.board.opponent_piece_color);
var neighbors = lg_checkers.board.calculate_neighbors.call(null,actors_color);
var list_of_opponent_victims = cljs.core.seq.call(null,lg_checkers.board.calculate_real_opponent_victim_neighbors.call(null,neighbors));
var victims_is_not_empty = ((((0) < cljs.core.count.call(null,list_of_opponent_victims)))?true:false);
var filtered_victims = cljs.core.filter.call(null,((function (actors_piece_type,actors_color,opponent_color,neighbors,list_of_opponent_victims,victims_is_not_empty){
return (function (victim){
if(cljs.core._EQ_.call(null,source_pos,cljs.core.get.call(null,victim,(0)))){
return true;
} else {
return false;
}
});})(actors_piece_type,actors_color,opponent_color,neighbors,list_of_opponent_victims,victims_is_not_empty))
,list_of_opponent_victims);
var filtered_victims_is_not_empty = ((((0) < cljs.core.count.call(null,filtered_victims)))?true:false);
var is_destination_pos_is_in_victims_list_QMARK_ = ((cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.get.call(null,cljs.core.first.call(null,filtered_victims),(1))),destination_pos))?true:false);
if(victims_is_not_empty){
if(filtered_victims_is_not_empty){
if(is_destination_pos_is_in_victims_list_QMARK_){
return true;
} else {
return false;
}
} else {
return false;
}
} else {
return true;
}
});
lg_checkers.board.calculate_actors_pieces_moves = (function lg_checkers$board$calculate_actors_pieces_moves(neighbors){
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
return (function (p1__127646_SHARP_){
return lg_checkers.board.moves_check_is_neighbor_is_good_place_to_move.call(null,piece_pos,p1__127646_SHARP_);
});})(piece_pos,piece_potential_neighbors))
,cljs.core.seq.call(null,piece_potential_neighbors)));
});
lg_checkers.board.moves_check_is_neighbor_is_good_place_to_move = (function lg_checkers$board$moves_check_is_neighbor_is_good_place_to_move(actors_piece_pos,neighbor_pos){
var actors_piece_type = cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.board),actors_piece_pos);
var neighbor_type = cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.board),neighbor_pos);
var direction = lg_checkers.board.neighbor_piece_direction_by_neighbor_pos.call(null,actors_piece_pos,neighbor_pos);
var good_direction_QMARK_ = lg_checkers.board.good_piece_type_direction_QMARK_.call(null,actors_piece_type,direction);
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
var c__11834__auto___127771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11834__auto___127771){
return (function (){
var f__11835__auto__ = (function (){var switch__11722__auto__ = ((function (c__11834__auto___127771){
return (function (state_127714){
var state_val_127715 = (state_127714[(1)]);
if((state_val_127715 === (7))){
var inst_127655 = (state_127714[(7)]);
var inst_127654 = (state_127714[(8)]);
var inst_127654__$1 = (state_127714[(2)]);
var inst_127655__$1 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(inst_127654__$1);
var inst_127656 = cljs.core.println.call(null,"");
var inst_127657 = cljs.core.println.call(null,"<<>> Controller: ",inst_127654__$1);
var inst_127658 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"api-event-unblock-user-board-input","api-event-unblock-user-board-input",1661151846),inst_127655__$1);
var state_127714__$1 = (function (){var statearr_127716 = state_127714;
(statearr_127716[(9)] = inst_127656);

(statearr_127716[(7)] = inst_127655__$1);

(statearr_127716[(8)] = inst_127654__$1);

(statearr_127716[(10)] = inst_127657);

return statearr_127716;
})();
if(inst_127658){
var statearr_127717_127772 = state_127714__$1;
(statearr_127717_127772[(1)] = (8));

} else {
var statearr_127718_127773 = state_127714__$1;
(statearr_127718_127773[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127715 === (20))){
var inst_127654 = (state_127714[(8)]);
var inst_127684 = lg_checkers.board.controller_worker_board_clicked.call(null,inst_127654);
var state_127714__$1 = state_127714;
var statearr_127719_127774 = state_127714__$1;
(statearr_127719_127774[(2)] = inst_127684);

(statearr_127719_127774[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127715 === (27))){
var state_127714__$1 = state_127714;
var statearr_127720_127775 = state_127714__$1;
(statearr_127720_127775[(2)] = null);

(statearr_127720_127775[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127715 === (1))){
var inst_127647 = lg_checkers.board.send_api_command_register_channel_to_receive_event.call(null,lg_checkers.board.board_events,new cljs.core.Keyword(null,"api-event-unblock-user-board-input","api-event-unblock-user-board-input",1661151846));
var inst_127648 = lg_checkers.board.send_api_command_register_channel_to_receive_event.call(null,lg_checkers.board.board_events,new cljs.core.Keyword(null,"api-event-ai-delay-timer-toggled","api-event-ai-delay-timer-toggled",-2048865544));
var inst_127649 = lg_checkers.board.send_api_command_register_channel_to_receive_event.call(null,lg_checkers.board.board_events,new cljs.core.Keyword(null,"api-event-ai-toggled","api-event-ai-toggled",-1242517052));
var inst_127650 = lg_checkers.board.send_api_command_register_channel_to_receive_event.call(null,lg_checkers.board.board_events,new cljs.core.Keyword(null,"api-event-history-replay-stopped","api-event-history-replay-stopped",-1109972185));
var state_127714__$1 = (function (){var statearr_127721 = state_127714;
(statearr_127721[(11)] = inst_127649);

(statearr_127721[(12)] = inst_127647);

(statearr_127721[(13)] = inst_127648);

(statearr_127721[(14)] = inst_127650);

return statearr_127721;
})();
var statearr_127722_127776 = state_127714__$1;
(statearr_127722_127776[(2)] = null);

(statearr_127722_127776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127715 === (24))){
var state_127714__$1 = state_127714;
var statearr_127723_127777 = state_127714__$1;
(statearr_127723_127777[(2)] = null);

(statearr_127723_127777[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127715 === (4))){
var state_127714__$1 = state_127714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_127714__$1,(7),lg_checkers.board.board_events);
} else {
if((state_val_127715 === (15))){
var state_127714__$1 = state_127714;
var statearr_127724_127778 = state_127714__$1;
(statearr_127724_127778[(2)] = null);

(statearr_127724_127778[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127715 === (21))){
var state_127714__$1 = state_127714;
var statearr_127725_127779 = state_127714__$1;
(statearr_127725_127779[(2)] = null);

(statearr_127725_127779[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127715 === (31))){
var inst_127705 = (state_127714[(2)]);
var inst_127706 = cljs.core.println.call(null,"<<>> Controller events done");
var state_127714__$1 = (function (){var statearr_127726 = state_127714;
(statearr_127726[(15)] = inst_127705);

(statearr_127726[(16)] = inst_127706);

return statearr_127726;
})();
var statearr_127727_127780 = state_127714__$1;
(statearr_127727_127780[(2)] = null);

(statearr_127727_127780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127715 === (13))){
var inst_127655 = (state_127714[(7)]);
var inst_127669 = (state_127714[(2)]);
var inst_127670 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"api-event-ai-toggled","api-event-ai-toggled",-1242517052),inst_127655);
var state_127714__$1 = (function (){var statearr_127728 = state_127714;
(statearr_127728[(17)] = inst_127669);

return statearr_127728;
})();
if(inst_127670){
var statearr_127729_127781 = state_127714__$1;
(statearr_127729_127781[(1)] = (14));

} else {
var statearr_127730_127782 = state_127714__$1;
(statearr_127730_127782[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127715 === (22))){
var inst_127655 = (state_127714[(7)]);
var inst_127687 = (state_127714[(2)]);
var inst_127688 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"replay-recorded-game","replay-recorded-game",826564334),inst_127655);
var state_127714__$1 = (function (){var statearr_127731 = state_127714;
(statearr_127731[(18)] = inst_127687);

return statearr_127731;
})();
if(inst_127688){
var statearr_127732_127783 = state_127714__$1;
(statearr_127732_127783[(1)] = (23));

} else {
var statearr_127733_127784 = state_127714__$1;
(statearr_127733_127784[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127715 === (29))){
var inst_127654 = (state_127714[(8)]);
var inst_127702 = lg_checkers.board.controller_worker_toggle_ai.call(null,inst_127654);
var state_127714__$1 = state_127714;
var statearr_127734_127785 = state_127714__$1;
(statearr_127734_127785[(2)] = inst_127702);

(statearr_127734_127785[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127715 === (6))){
var inst_127710 = (state_127714[(2)]);
var state_127714__$1 = state_127714;
var statearr_127735_127786 = state_127714__$1;
(statearr_127735_127786[(2)] = inst_127710);

(statearr_127735_127786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127715 === (28))){
var inst_127655 = (state_127714[(7)]);
var inst_127699 = (state_127714[(2)]);
var inst_127700 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"toggle-ai","toggle-ai",1904508383),inst_127655);
var state_127714__$1 = (function (){var statearr_127736 = state_127714;
(statearr_127736[(19)] = inst_127699);

return statearr_127736;
})();
if(inst_127700){
var statearr_127737_127787 = state_127714__$1;
(statearr_127737_127787[(1)] = (29));

} else {
var statearr_127738_127788 = state_127714__$1;
(statearr_127738_127788[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127715 === (25))){
var inst_127655 = (state_127714[(7)]);
var inst_127693 = (state_127714[(2)]);
var inst_127694 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"toggle-delay-timer-in-ai","toggle-delay-timer-in-ai",1893069099),inst_127655);
var state_127714__$1 = (function (){var statearr_127739 = state_127714;
(statearr_127739[(20)] = inst_127693);

return statearr_127739;
})();
if(inst_127694){
var statearr_127740_127789 = state_127714__$1;
(statearr_127740_127789[(1)] = (26));

} else {
var statearr_127741_127790 = state_127714__$1;
(statearr_127741_127790[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127715 === (17))){
var inst_127654 = (state_127714[(8)]);
var inst_127678 = lg_checkers.board.controller_worker_history_replay_stopped.call(null,inst_127654);
var state_127714__$1 = state_127714;
var statearr_127742_127791 = state_127714__$1;
(statearr_127742_127791[(2)] = inst_127678);

(statearr_127742_127791[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127715 === (3))){
var inst_127712 = (state_127714[(2)]);
var state_127714__$1 = state_127714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_127714__$1,inst_127712);
} else {
if((state_val_127715 === (12))){
var state_127714__$1 = state_127714;
var statearr_127743_127792 = state_127714__$1;
(statearr_127743_127792[(2)] = null);

(statearr_127743_127792[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127715 === (2))){
var state_127714__$1 = state_127714;
var statearr_127744_127793 = state_127714__$1;
(statearr_127744_127793[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127715 === (23))){
var inst_127654 = (state_127714[(8)]);
var inst_127690 = lg_checkers.board.controller_worker_replay_recorded_game.call(null,inst_127654);
var state_127714__$1 = state_127714;
var statearr_127746_127794 = state_127714__$1;
(statearr_127746_127794[(2)] = inst_127690);

(statearr_127746_127794[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127715 === (19))){
var inst_127655 = (state_127714[(7)]);
var inst_127681 = (state_127714[(2)]);
var inst_127682 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"board-clicked","board-clicked",1157654001),inst_127655);
var state_127714__$1 = (function (){var statearr_127747 = state_127714;
(statearr_127747[(21)] = inst_127681);

return statearr_127747;
})();
if(inst_127682){
var statearr_127748_127795 = state_127714__$1;
(statearr_127748_127795[(1)] = (20));

} else {
var statearr_127749_127796 = state_127714__$1;
(statearr_127749_127796[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127715 === (11))){
var inst_127654 = (state_127714[(8)]);
var inst_127666 = lg_checkers.board.controller_worker_ai_delay_timer_toggled.call(null,inst_127654);
var state_127714__$1 = state_127714;
var statearr_127750_127797 = state_127714__$1;
(statearr_127750_127797[(2)] = inst_127666);

(statearr_127750_127797[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127715 === (9))){
var state_127714__$1 = state_127714;
var statearr_127751_127798 = state_127714__$1;
(statearr_127751_127798[(2)] = null);

(statearr_127751_127798[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127715 === (5))){
var state_127714__$1 = state_127714;
var statearr_127752_127799 = state_127714__$1;
(statearr_127752_127799[(2)] = null);

(statearr_127752_127799[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127715 === (14))){
var inst_127654 = (state_127714[(8)]);
var inst_127672 = lg_checkers.board.controller_worker_ai_toggled.call(null,inst_127654);
var state_127714__$1 = state_127714;
var statearr_127753_127800 = state_127714__$1;
(statearr_127753_127800[(2)] = inst_127672);

(statearr_127753_127800[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127715 === (26))){
var inst_127654 = (state_127714[(8)]);
var inst_127696 = lg_checkers.board.controller_worker_toggle_delay_timer_in_ai.call(null,inst_127654);
var state_127714__$1 = state_127714;
var statearr_127754_127801 = state_127714__$1;
(statearr_127754_127801[(2)] = inst_127696);

(statearr_127754_127801[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127715 === (16))){
var inst_127655 = (state_127714[(7)]);
var inst_127675 = (state_127714[(2)]);
var inst_127676 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"api-event-history-replay-stopped","api-event-history-replay-stopped",-1109972185),inst_127655);
var state_127714__$1 = (function (){var statearr_127755 = state_127714;
(statearr_127755[(22)] = inst_127675);

return statearr_127755;
})();
if(inst_127676){
var statearr_127756_127802 = state_127714__$1;
(statearr_127756_127802[(1)] = (17));

} else {
var statearr_127757_127803 = state_127714__$1;
(statearr_127757_127803[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127715 === (30))){
var state_127714__$1 = state_127714;
var statearr_127758_127804 = state_127714__$1;
(statearr_127758_127804[(2)] = null);

(statearr_127758_127804[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127715 === (10))){
var inst_127655 = (state_127714[(7)]);
var inst_127663 = (state_127714[(2)]);
var inst_127664 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"api-event-ai-delay-timer-toggled","api-event-ai-delay-timer-toggled",-2048865544),inst_127655);
var state_127714__$1 = (function (){var statearr_127759 = state_127714;
(statearr_127759[(23)] = inst_127663);

return statearr_127759;
})();
if(inst_127664){
var statearr_127760_127805 = state_127714__$1;
(statearr_127760_127805[(1)] = (11));

} else {
var statearr_127761_127806 = state_127714__$1;
(statearr_127761_127806[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127715 === (18))){
var state_127714__$1 = state_127714;
var statearr_127762_127807 = state_127714__$1;
(statearr_127762_127807[(2)] = null);

(statearr_127762_127807[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127715 === (8))){
var inst_127654 = (state_127714[(8)]);
var inst_127660 = lg_checkers.board.controller_worker_unblock_user_board_input.call(null,inst_127654);
var state_127714__$1 = state_127714;
var statearr_127763_127808 = state_127714__$1;
(statearr_127763_127808[(2)] = inst_127660);

(statearr_127763_127808[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
});})(c__11834__auto___127771))
;
return ((function (switch__11722__auto__,c__11834__auto___127771){
return (function() {
var lg_checkers$board$state_machine__11723__auto__ = null;
var lg_checkers$board$state_machine__11723__auto____0 = (function (){
var statearr_127767 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_127767[(0)] = lg_checkers$board$state_machine__11723__auto__);

(statearr_127767[(1)] = (1));

return statearr_127767;
});
var lg_checkers$board$state_machine__11723__auto____1 = (function (state_127714){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__.call(null,state_127714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e127768){if((e127768 instanceof Object)){
var ex__11726__auto__ = e127768;
var statearr_127769_127809 = state_127714;
(statearr_127769_127809[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_127714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e127768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__127810 = state_127714;
state_127714 = G__127810;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
lg_checkers$board$state_machine__11723__auto__ = function(state_127714){
switch(arguments.length){
case 0:
return lg_checkers$board$state_machine__11723__auto____0.call(this);
case 1:
return lg_checkers$board$state_machine__11723__auto____1.call(this,state_127714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lg_checkers$board$state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = lg_checkers$board$state_machine__11723__auto____0;
lg_checkers$board$state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = lg_checkers$board$state_machine__11723__auto____1;
return lg_checkers$board$state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11834__auto___127771))
})();
var state__11836__auto__ = (function (){var statearr_127770 = f__11835__auto__.call(null);
(statearr_127770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11834__auto___127771);

return statearr_127770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11836__auto__);
});})(c__11834__auto___127771))
);

lg_checkers.board.send_controller_command_board_click = (function lg_checkers$board$send_controller_command_board_click(board_pos){
cljs.core.println.call(null,"");

cljs.core.println.call(null," >> send-controller-command-board-click: ",board_pos);

cljs.core.async.put_BANG_.call(null,lg_checkers.board.board_events,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"board-clicked","board-clicked",1157654001),new cljs.core.Keyword(null,"position","position",-2011731912),board_pos], null));

return cljs.core.println.call(null," << send-controller-command-board-click");
});
lg_checkers.board.send_controller_command_replay_recorded_game = (function lg_checkers$board$send_controller_command_replay_recorded_game(){
cljs.core.println.call(null,"");

cljs.core.println.call(null," >> send-controller-command-replay-recorded-game");

cljs.core.async.put_BANG_.call(null,lg_checkers.board.board_events,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"replay-recorded-game","replay-recorded-game",826564334)], null));

return cljs.core.println.call(null," << send-controller-command-replay-recorded-game");
});
lg_checkers.board.send_controller_command_toggle_delay_timer_in_ai = (function lg_checkers$board$send_controller_command_toggle_delay_timer_in_ai(){
cljs.core.println.call(null,"");

cljs.core.println.call(null," >> send-controller-command-toggle-delay-timer-in-ai");

cljs.core.async.put_BANG_.call(null,lg_checkers.board.board_events,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"toggle-delay-timer-in-ai","toggle-delay-timer-in-ai",1893069099)], null));

return cljs.core.println.call(null," << send-controller-command-toggle-delay-timer-in-ai");
});
lg_checkers.board.send_controller_command_toggle_ai = (function lg_checkers$board$send_controller_command_toggle_ai(){
cljs.core.println.call(null,"");

cljs.core.println.call(null," >> send-controller-command-toggle-ai");

cljs.core.async.put_BANG_.call(null,lg_checkers.board.board_events,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"toggle-ai","toggle-ai",1904508383)], null));

return cljs.core.println.call(null," << send-controller-command-toggle-ai");
});
lg_checkers.board.controller_worker_unblock_user_board_input = (function lg_checkers$board$controller_worker_unblock_user_board_input(event){
cljs.core.swap_BANG_.call(null,lg_checkers.board.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"user-board-actions-are-allowed","user-board-actions-are-allowed",1642515933),true);

cljs.core.swap_BANG_.call(null,lg_checkers.board.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"user-is-allowed-to-move","user-is-allowed-to-move",1540192799),true);

return lg_checkers.board.controller_last_click_board_pos = null;
});
lg_checkers.board.controller_worker_ai_delay_timer_toggled = (function lg_checkers$board$controller_worker_ai_delay_timer_toggled(event){
return cljs.core.swap_BANG_.call(null,lg_checkers.board.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"ai-delay-timer-can-be-toggled","ai-delay-timer-can-be-toggled",2016336033),true);
});
lg_checkers.board.controller_worker_ai_toggled = (function lg_checkers$board$controller_worker_ai_toggled(event){
return cljs.core.swap_BANG_.call(null,lg_checkers.board.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"ai-can-be-toggled","ai-can-be-toggled",-889130242),true);
});
lg_checkers.board.controller_worker_history_replay_stopped = (function lg_checkers$board$controller_worker_history_replay_stopped(event){
cljs.core.swap_BANG_.call(null,lg_checkers.board.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"user-board-actions-are-allowed","user-board-actions-are-allowed",1642515933),true);

return cljs.core.swap_BANG_.call(null,lg_checkers.board.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"replay-is-in-progress","replay-is-in-progress",-1340850428),false);
});
lg_checkers.board.controller_worker_board_clicked = (function lg_checkers$board$controller_worker_board_clicked(event){
var current_event = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(event);
var board_pos = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(event);
var red_piece_QMARK_ = cljs.core.contains_QMARK_.call(null,lg_checkers.board.all_red_movable_pieces,cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.board),board_pos));
var user_can_control_all_pieces = new cljs.core.Keyword(null,"user-can-control-all-pieces","user-can-control-all-pieces",-882077365).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lg_checkers.board.app_state));
var allowed_piece_type_QMARK_ = (function (){var or__6251__auto__ = (!(red_piece_QMARK_)) && (cljs.core.not.call(null,user_can_control_all_pieces));
if(or__6251__auto__){
return or__6251__auto__;
} else {
return user_can_control_all_pieces;
}
})();
var same_board_pos_QMARK_ = (board_pos === lg_checkers.board.controller_last_click_board_pos);
var new_board_pos_QMARK_ = !(same_board_pos_QMARK_);
lg_checkers.board.controller_internal_update_number_of_mouse_clicks_for_ui.call(null);

if(cljs.core.truth_(allowed_piece_type_QMARK_)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"user-board-actions-are-allowed","user-board-actions-are-allowed",1642515933).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lg_checkers.board.app_state)))){
if(new_board_pos_QMARK_){
lg_checkers.board.controller_last_click_board_pos = board_pos;

return lg_checkers.board.controller_internal_send_api_command_mouse_click_to_piece_on_board.call(null,board_pos);
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
lg_checkers.board.controller_worker_replay_recorded_game = (function lg_checkers$board$controller_worker_replay_recorded_game(event){
cljs.core.swap_BANG_.call(null,lg_checkers.board.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"user-board-actions-are-allowed","user-board-actions-are-allowed",1642515933),false);

cljs.core.swap_BANG_.call(null,lg_checkers.board.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"replay-is-in-progress","replay-is-in-progress",-1340850428),true);

return lg_checkers.board.send_api_command_replay_recorded_game.call(null);
});
lg_checkers.board.controller_worker_toggle_delay_timer_in_ai = (function lg_checkers$board$controller_worker_toggle_delay_timer_in_ai(event){
cljs.core.swap_BANG_.call(null,lg_checkers.board.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"ai-delay-timer-can-be-toggled","ai-delay-timer-can-be-toggled",2016336033),false);

return lg_checkers.board.send_api_command_toggle_delay_timer_in_ai.call(null);
});
lg_checkers.board.controller_worker_toggle_ai = (function lg_checkers$board$controller_worker_toggle_ai(event){
cljs.core.swap_BANG_.call(null,lg_checkers.board.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"ai-can-be-toggled","ai-can-be-toggled",-889130242),false);

return lg_checkers.board.send_api_command_toggle_ai.call(null);
});
lg_checkers.board.controller_internal_send_api_command_mouse_click_to_piece_on_board = (function lg_checkers$board$controller_internal_send_api_command_mouse_click_to_piece_on_board(pos){
cljs.core.swap_BANG_.call(null,lg_checkers.board.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"user-board-actions-are-allowed","user-board-actions-are-allowed",1642515933),false);

cljs.core.swap_BANG_.call(null,lg_checkers.board.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"user-is-allowed-to-move","user-is-allowed-to-move",1540192799),false);

return lg_checkers.board.send_api_command_mouse_click_to_piece_on_board.call(null,pos);
});
lg_checkers.board.controller_internal_update_number_of_mouse_clicks_for_ui = (function lg_checkers$board$controller_internal_update_number_of_mouse_clicks_for_ui(){
return cljs.core.swap_BANG_.call(null,lg_checkers.board.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"number-of-mouse-clicks","number-of-mouse-clicks",-225975392),((1) + cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.app_state),new cljs.core.Keyword(null,"number-of-mouse-clicks","number-of-mouse-clicks",-225975392))));
});
var c__11834__auto___127989 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11834__auto___127989){
return (function (){
var f__11835__auto__ = (function (){var switch__11722__auto__ = ((function (c__11834__auto___127989){
return (function (state_127912){
var state_val_127913 = (state_127912[(1)]);
if((state_val_127913 === (7))){
var inst_127821 = (state_127912[(7)]);
var inst_127820 = (state_127912[(8)]);
var inst_127820__$1 = (state_127912[(2)]);
var inst_127821__$1 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(inst_127820__$1);
var inst_127822 = cljs.core.println.call(null,"");
var inst_127823 = cljs.core.println.call(null,"<<>> Model: ",inst_127820__$1);
var inst_127824 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"register-channel-to-receive-event","register-channel-to-receive-event",322539620),inst_127821__$1);
var state_127912__$1 = (function (){var statearr_127914 = state_127912;
(statearr_127914[(7)] = inst_127821__$1);

(statearr_127914[(9)] = inst_127823);

(statearr_127914[(8)] = inst_127820__$1);

(statearr_127914[(10)] = inst_127822);

return statearr_127914;
})();
if(inst_127824){
var statearr_127915_127990 = state_127912__$1;
(statearr_127915_127990[(1)] = (8));

} else {
var statearr_127916_127991 = state_127912__$1;
(statearr_127916_127991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127913 === (20))){
var inst_127820 = (state_127912[(8)]);
var inst_127850 = lg_checkers.board.api_worker_replay_recorded_game.call(null,inst_127820);
var state_127912__$1 = state_127912;
var statearr_127917_127992 = state_127912__$1;
(statearr_127917_127992[(2)] = inst_127850);

(statearr_127917_127992[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127913 === (27))){
var state_127912__$1 = state_127912;
var statearr_127918_127993 = state_127912__$1;
(statearr_127918_127993[(2)] = null);

(statearr_127918_127993[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127913 === (1))){
var inst_127811 = lg_checkers.board.send_ai_command_register_channel_to_receive_event.call(null,lg_checkers.board.api_commands,new cljs.core.Keyword(null,"ai-event-ai-made-movement","ai-event-ai-made-movement",-259615458));
var inst_127812 = lg_checkers.board.send_ai_command_register_channel_to_receive_event.call(null,lg_checkers.board.api_commands,new cljs.core.Keyword(null,"ai-event-delay-timer-toggled","ai-event-delay-timer-toggled",115787152));
var inst_127813 = lg_checkers.board.send_ai_command_register_channel_to_receive_event.call(null,lg_checkers.board.api_commands,new cljs.core.Keyword(null,"ai-event-ai-toggled","ai-event-ai-toggled",873916473));
var inst_127814 = lg_checkers.board.send_game_history_db_command_register_channel_to_receive_event.call(null,lg_checkers.board.api_commands,new cljs.core.Keyword(null,"game-history-db-event-replay-started","game-history-db-event-replay-started",1067265494));
var inst_127815 = lg_checkers.board.send_game_history_db_command_register_channel_to_receive_event.call(null,lg_checkers.board.api_commands,new cljs.core.Keyword(null,"game-history-db-event-replay-stopped","game-history-db-event-replay-stopped",-347787048));
var inst_127816 = lg_checkers.board.send_game_history_db_command_register_channel_to_receive_event.call(null,lg_checkers.board.api_commands,new cljs.core.Keyword(null,"game-history-db-event-movement","game-history-db-event-movement",1760207480));
var state_127912__$1 = (function (){var statearr_127919 = state_127912;
(statearr_127919[(11)] = inst_127816);

(statearr_127919[(12)] = inst_127815);

(statearr_127919[(13)] = inst_127813);

(statearr_127919[(14)] = inst_127812);

(statearr_127919[(15)] = inst_127814);

(statearr_127919[(16)] = inst_127811);

return statearr_127919;
})();
var statearr_127920_127994 = state_127912__$1;
(statearr_127920_127994[(2)] = null);

(statearr_127920_127994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127913 === (24))){
var state_127912__$1 = state_127912;
var statearr_127921_127995 = state_127912__$1;
(statearr_127921_127995[(2)] = null);

(statearr_127921_127995[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127913 === (39))){
var inst_127820 = (state_127912[(8)]);
var inst_127891 = lg_checkers.board.api_worker_game_history_db_event_movement.call(null,inst_127820);
var state_127912__$1 = state_127912;
if(cljs.core.truth_(inst_127891)){
var statearr_127922_127996 = state_127912__$1;
(statearr_127922_127996[(1)] = (42));

} else {
var statearr_127923_127997 = state_127912__$1;
(statearr_127923_127997[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127913 === (4))){
var state_127912__$1 = state_127912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_127912__$1,(7),lg_checkers.board.api_commands);
} else {
if((state_val_127913 === (15))){
var state_127912__$1 = state_127912;
var statearr_127924_127998 = state_127912__$1;
(statearr_127924_127998[(2)] = null);

(statearr_127924_127998[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127913 === (21))){
var state_127912__$1 = state_127912;
var statearr_127925_127999 = state_127912__$1;
(statearr_127925_127999[(2)] = null);

(statearr_127925_127999[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127913 === (31))){
var inst_127821 = (state_127912[(7)]);
var inst_127871 = (state_127912[(2)]);
var inst_127872 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"game-history-db-event-replay-started","game-history-db-event-replay-started",1067265494),inst_127821);
var state_127912__$1 = (function (){var statearr_127926 = state_127912;
(statearr_127926[(17)] = inst_127871);

return statearr_127926;
})();
if(inst_127872){
var statearr_127927_128000 = state_127912__$1;
(statearr_127927_128000[(1)] = (32));

} else {
var statearr_127928_128001 = state_127912__$1;
(statearr_127928_128001[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127913 === (32))){
var inst_127820 = (state_127912[(8)]);
var inst_127874 = lg_checkers.board.api_worker_game_history_db_event_replay_started.call(null,inst_127820);
var inst_127875 = cljs.core.deref.call(null,lg_checkers.board.app_state);
var inst_127876 = cljs.core.get.call(null,inst_127875,new cljs.core.Keyword(null,"replay-movement-timeout","replay-movement-timeout",390378892));
var inst_127877 = cljs.core.async.timeout.call(null,inst_127876);
var state_127912__$1 = (function (){var statearr_127929 = state_127912;
(statearr_127929[(18)] = inst_127874);

return statearr_127929;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_127912__$1,(35),inst_127877);
} else {
if((state_val_127913 === (40))){
var state_127912__$1 = state_127912;
var statearr_127930_128002 = state_127912__$1;
(statearr_127930_128002[(2)] = null);

(statearr_127930_128002[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127913 === (33))){
var state_127912__$1 = state_127912;
var statearr_127931_128003 = state_127912__$1;
(statearr_127931_128003[(2)] = null);

(statearr_127931_128003[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127913 === (13))){
var inst_127821 = (state_127912[(7)]);
var inst_127835 = (state_127912[(2)]);
var inst_127836 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"toggle-delay-timer-in-ai","toggle-delay-timer-in-ai",1893069099),inst_127821);
var state_127912__$1 = (function (){var statearr_127932 = state_127912;
(statearr_127932[(19)] = inst_127835);

return statearr_127932;
})();
if(inst_127836){
var statearr_127933_128004 = state_127912__$1;
(statearr_127933_128004[(1)] = (14));

} else {
var statearr_127934_128005 = state_127912__$1;
(statearr_127934_128005[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127913 === (22))){
var inst_127821 = (state_127912[(7)]);
var inst_127853 = (state_127912[(2)]);
var inst_127854 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ai-event-ai-made-movement","ai-event-ai-made-movement",-259615458),inst_127821);
var state_127912__$1 = (function (){var statearr_127935 = state_127912;
(statearr_127935[(20)] = inst_127853);

return statearr_127935;
})();
if(inst_127854){
var statearr_127936_128006 = state_127912__$1;
(statearr_127936_128006[(1)] = (23));

} else {
var statearr_127937_128007 = state_127912__$1;
(statearr_127937_128007[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127913 === (36))){
var inst_127820 = (state_127912[(8)]);
var inst_127885 = lg_checkers.board.api_worker_game_history_db_event_replay_stopped.call(null,inst_127820);
var state_127912__$1 = state_127912;
var statearr_127938_128008 = state_127912__$1;
(statearr_127938_128008[(2)] = inst_127885);

(statearr_127938_128008[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127913 === (41))){
var inst_127903 = (state_127912[(2)]);
var inst_127904 = cljs.core.println.call(null,"<<>> Model events done");
var state_127912__$1 = (function (){var statearr_127939 = state_127912;
(statearr_127939[(21)] = inst_127903);

(statearr_127939[(22)] = inst_127904);

return statearr_127939;
})();
var statearr_127940_128009 = state_127912__$1;
(statearr_127940_128009[(2)] = null);

(statearr_127940_128009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127913 === (43))){
var state_127912__$1 = state_127912;
var statearr_127941_128010 = state_127912__$1;
(statearr_127941_128010[(2)] = null);

(statearr_127941_128010[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127913 === (29))){
var inst_127820 = (state_127912[(8)]);
var inst_127868 = lg_checkers.board.api_worker_ai_event_ai_toggled.call(null,inst_127820);
var state_127912__$1 = state_127912;
var statearr_127942_128011 = state_127912__$1;
(statearr_127942_128011[(2)] = inst_127868);

(statearr_127942_128011[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127913 === (44))){
var inst_127900 = (state_127912[(2)]);
var state_127912__$1 = state_127912;
var statearr_127943_128012 = state_127912__$1;
(statearr_127943_128012[(2)] = inst_127900);

(statearr_127943_128012[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127913 === (6))){
var inst_127908 = (state_127912[(2)]);
var state_127912__$1 = state_127912;
var statearr_127944_128013 = state_127912__$1;
(statearr_127944_128013[(2)] = inst_127908);

(statearr_127944_128013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127913 === (28))){
var inst_127821 = (state_127912[(7)]);
var inst_127865 = (state_127912[(2)]);
var inst_127866 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ai-event-ai-toggled","ai-event-ai-toggled",873916473),inst_127821);
var state_127912__$1 = (function (){var statearr_127945 = state_127912;
(statearr_127945[(23)] = inst_127865);

return statearr_127945;
})();
if(inst_127866){
var statearr_127946_128014 = state_127912__$1;
(statearr_127946_128014[(1)] = (29));

} else {
var statearr_127947_128015 = state_127912__$1;
(statearr_127947_128015[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127913 === (25))){
var inst_127821 = (state_127912[(7)]);
var inst_127859 = (state_127912[(2)]);
var inst_127860 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ai-event-delay-timer-toggled","ai-event-delay-timer-toggled",115787152),inst_127821);
var state_127912__$1 = (function (){var statearr_127948 = state_127912;
(statearr_127948[(24)] = inst_127859);

return statearr_127948;
})();
if(inst_127860){
var statearr_127949_128016 = state_127912__$1;
(statearr_127949_128016[(1)] = (26));

} else {
var statearr_127950_128017 = state_127912__$1;
(statearr_127950_128017[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127913 === (34))){
var inst_127821 = (state_127912[(7)]);
var inst_127882 = (state_127912[(2)]);
var inst_127883 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"game-history-db-event-replay-stopped","game-history-db-event-replay-stopped",-347787048),inst_127821);
var state_127912__$1 = (function (){var statearr_127951 = state_127912;
(statearr_127951[(25)] = inst_127882);

return statearr_127951;
})();
if(inst_127883){
var statearr_127952_128018 = state_127912__$1;
(statearr_127952_128018[(1)] = (36));

} else {
var statearr_127953_128019 = state_127912__$1;
(statearr_127953_128019[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127913 === (17))){
var inst_127820 = (state_127912[(8)]);
var inst_127844 = lg_checkers.board.api_worker_toggle_ai.call(null,inst_127820);
var state_127912__$1 = state_127912;
var statearr_127954_128020 = state_127912__$1;
(statearr_127954_128020[(2)] = inst_127844);

(statearr_127954_128020[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127913 === (3))){
var inst_127910 = (state_127912[(2)]);
var state_127912__$1 = state_127912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_127912__$1,inst_127910);
} else {
if((state_val_127913 === (12))){
var state_127912__$1 = state_127912;
var statearr_127955_128021 = state_127912__$1;
(statearr_127955_128021[(2)] = null);

(statearr_127955_128021[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127913 === (2))){
var state_127912__$1 = state_127912;
var statearr_127956_128022 = state_127912__$1;
(statearr_127956_128022[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127913 === (23))){
var inst_127820 = (state_127912[(8)]);
var inst_127856 = lg_checkers.board.api_worker_ai_event_ai_made_movement.call(null,inst_127820);
var state_127912__$1 = state_127912;
var statearr_127958_128023 = state_127912__$1;
(statearr_127958_128023[(2)] = inst_127856);

(statearr_127958_128023[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127913 === (35))){
var inst_127879 = (state_127912[(2)]);
var state_127912__$1 = state_127912;
var statearr_127959_128024 = state_127912__$1;
(statearr_127959_128024[(2)] = inst_127879);

(statearr_127959_128024[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127913 === (19))){
var inst_127821 = (state_127912[(7)]);
var inst_127847 = (state_127912[(2)]);
var inst_127848 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"replay-recorded-game","replay-recorded-game",826564334),inst_127821);
var state_127912__$1 = (function (){var statearr_127960 = state_127912;
(statearr_127960[(26)] = inst_127847);

return statearr_127960;
})();
if(inst_127848){
var statearr_127961_128025 = state_127912__$1;
(statearr_127961_128025[(1)] = (20));

} else {
var statearr_127962_128026 = state_127912__$1;
(statearr_127962_128026[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127913 === (11))){
var inst_127820 = (state_127912[(8)]);
var inst_127832 = lg_checkers.board.api_worker_board_worker_board_clicked.call(null,inst_127820);
var state_127912__$1 = state_127912;
var statearr_127963_128027 = state_127912__$1;
(statearr_127963_128027[(2)] = inst_127832);

(statearr_127963_128027[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127913 === (9))){
var state_127912__$1 = state_127912;
var statearr_127964_128028 = state_127912__$1;
(statearr_127964_128028[(2)] = null);

(statearr_127964_128028[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127913 === (5))){
var state_127912__$1 = state_127912;
var statearr_127965_128029 = state_127912__$1;
(statearr_127965_128029[(2)] = null);

(statearr_127965_128029[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127913 === (14))){
var inst_127820 = (state_127912[(8)]);
var inst_127838 = lg_checkers.board.api_worker_toggle_delay_timer_in_ai.call(null,inst_127820);
var state_127912__$1 = state_127912;
var statearr_127966_128030 = state_127912__$1;
(statearr_127966_128030[(2)] = inst_127838);

(statearr_127966_128030[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127913 === (45))){
var inst_127897 = (state_127912[(2)]);
var state_127912__$1 = state_127912;
var statearr_127967_128031 = state_127912__$1;
(statearr_127967_128031[(2)] = inst_127897);

(statearr_127967_128031[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127913 === (26))){
var inst_127820 = (state_127912[(8)]);
var inst_127862 = lg_checkers.board.api_worker_ai_event_delay_timer_toggled.call(null,inst_127820);
var state_127912__$1 = state_127912;
var statearr_127968_128032 = state_127912__$1;
(statearr_127968_128032[(2)] = inst_127862);

(statearr_127968_128032[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127913 === (16))){
var inst_127821 = (state_127912[(7)]);
var inst_127841 = (state_127912[(2)]);
var inst_127842 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"toggle-ai","toggle-ai",1904508383),inst_127821);
var state_127912__$1 = (function (){var statearr_127969 = state_127912;
(statearr_127969[(27)] = inst_127841);

return statearr_127969;
})();
if(inst_127842){
var statearr_127970_128033 = state_127912__$1;
(statearr_127970_128033[(1)] = (17));

} else {
var statearr_127971_128034 = state_127912__$1;
(statearr_127971_128034[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127913 === (38))){
var inst_127821 = (state_127912[(7)]);
var inst_127888 = (state_127912[(2)]);
var inst_127889 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"game-history-db-event-movement","game-history-db-event-movement",1760207480),inst_127821);
var state_127912__$1 = (function (){var statearr_127972 = state_127912;
(statearr_127972[(28)] = inst_127888);

return statearr_127972;
})();
if(inst_127889){
var statearr_127973_128035 = state_127912__$1;
(statearr_127973_128035[(1)] = (39));

} else {
var statearr_127974_128036 = state_127912__$1;
(statearr_127974_128036[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127913 === (30))){
var state_127912__$1 = state_127912;
var statearr_127975_128037 = state_127912__$1;
(statearr_127975_128037[(2)] = null);

(statearr_127975_128037[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127913 === (10))){
var inst_127821 = (state_127912[(7)]);
var inst_127829 = (state_127912[(2)]);
var inst_127830 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mouse-click-to-piece-on-board","mouse-click-to-piece-on-board",1554564591),inst_127821);
var state_127912__$1 = (function (){var statearr_127976 = state_127912;
(statearr_127976[(29)] = inst_127829);

return statearr_127976;
})();
if(inst_127830){
var statearr_127977_128038 = state_127912__$1;
(statearr_127977_128038[(1)] = (11));

} else {
var statearr_127978_128039 = state_127912__$1;
(statearr_127978_128039[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127913 === (18))){
var state_127912__$1 = state_127912;
var statearr_127979_128040 = state_127912__$1;
(statearr_127979_128040[(2)] = null);

(statearr_127979_128040[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127913 === (42))){
var inst_127893 = cljs.core.deref.call(null,lg_checkers.board.app_state);
var inst_127894 = cljs.core.get.call(null,inst_127893,new cljs.core.Keyword(null,"replay-movement-timeout","replay-movement-timeout",390378892));
var inst_127895 = cljs.core.async.timeout.call(null,inst_127894);
var state_127912__$1 = state_127912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_127912__$1,(45),inst_127895);
} else {
if((state_val_127913 === (37))){
var state_127912__$1 = state_127912;
var statearr_127980_128041 = state_127912__$1;
(statearr_127980_128041[(2)] = null);

(statearr_127980_128041[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127913 === (8))){
var inst_127820 = (state_127912[(8)]);
var inst_127826 = lg_checkers.board.api_worker_register_channel_to_receive_event.call(null,inst_127820);
var state_127912__$1 = state_127912;
var statearr_127981_128042 = state_127912__$1;
(statearr_127981_128042[(2)] = inst_127826);

(statearr_127981_128042[(1)] = (10));


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
}
});})(c__11834__auto___127989))
;
return ((function (switch__11722__auto__,c__11834__auto___127989){
return (function() {
var lg_checkers$board$state_machine__11723__auto__ = null;
var lg_checkers$board$state_machine__11723__auto____0 = (function (){
var statearr_127985 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_127985[(0)] = lg_checkers$board$state_machine__11723__auto__);

(statearr_127985[(1)] = (1));

return statearr_127985;
});
var lg_checkers$board$state_machine__11723__auto____1 = (function (state_127912){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__.call(null,state_127912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e127986){if((e127986 instanceof Object)){
var ex__11726__auto__ = e127986;
var statearr_127987_128043 = state_127912;
(statearr_127987_128043[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_127912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e127986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__128044 = state_127912;
state_127912 = G__128044;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
lg_checkers$board$state_machine__11723__auto__ = function(state_127912){
switch(arguments.length){
case 0:
return lg_checkers$board$state_machine__11723__auto____0.call(this);
case 1:
return lg_checkers$board$state_machine__11723__auto____1.call(this,state_127912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lg_checkers$board$state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = lg_checkers$board$state_machine__11723__auto____0;
lg_checkers$board$state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = lg_checkers$board$state_machine__11723__auto____1;
return lg_checkers$board$state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11834__auto___127989))
})();
var state__11836__auto__ = (function (){var statearr_127988 = f__11835__auto__.call(null);
(statearr_127988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11834__auto___127989);

return statearr_127988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11836__auto__);
});})(c__11834__auto___127989))
);

lg_checkers.board.api_event_receivers = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"api-event-unblock-user-board-input","api-event-unblock-user-board-input",1661151846),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"api-event-ai-delay-timer-toggled","api-event-ai-delay-timer-toggled",-2048865544),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"api-event-ai-toggled","api-event-ai-toggled",-1242517052),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"api-event-history-replay-stopped","api-event-history-replay-stopped",-1109972185),cljs.core.PersistentHashSet.EMPTY], null);
lg_checkers.board.send_api_command_register_channel_to_receive_event = (function lg_checkers$board$send_api_command_register_channel_to_receive_event(channel,event){
cljs.core.println.call(null,"");

cljs.core.println.call(null," >> send-api-command-register-channel-to-receive-event: ",channel,event);

cljs.core.async.put_BANG_.call(null,lg_checkers.board.api_commands,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"register-channel-to-receive-event","register-channel-to-receive-event",322539620),new cljs.core.Keyword(null,"channel","channel",734187692),channel,new cljs.core.Keyword(null,"event","event",301435442),event], null));

return cljs.core.println.call(null," << send-api-command-register-channel-to-receive-event");
});
lg_checkers.board.send_api_command_mouse_click_to_piece_on_board = (function lg_checkers$board$send_api_command_mouse_click_to_piece_on_board(pos){
cljs.core.println.call(null,"");

cljs.core.println.call(null," >> send-api-command-mouse-click-to-piece-on-board: ",pos);

cljs.core.async.put_BANG_.call(null,lg_checkers.board.api_commands,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"mouse-click-to-piece-on-board","mouse-click-to-piece-on-board",1554564591),new cljs.core.Keyword(null,"position","position",-2011731912),pos], null));

return cljs.core.println.call(null," << send-api-command-mouse-click-to-piece-on-board");
});
lg_checkers.board.send_api_command_toggle_delay_timer_in_ai = (function lg_checkers$board$send_api_command_toggle_delay_timer_in_ai(){
cljs.core.println.call(null,"");

cljs.core.println.call(null," >> send-api-command-toggle-delay-timer-in-ai");

cljs.core.async.put_BANG_.call(null,lg_checkers.board.api_commands,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"toggle-delay-timer-in-ai","toggle-delay-timer-in-ai",1893069099)], null));

return cljs.core.println.call(null," << send-api-command-toggle-delay-timer-in-ai");
});
lg_checkers.board.send_api_command_toggle_ai = (function lg_checkers$board$send_api_command_toggle_ai(){
cljs.core.println.call(null,"");

cljs.core.println.call(null," >> send-api-command-toggle-ai");

cljs.core.async.put_BANG_.call(null,lg_checkers.board.api_commands,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"toggle-ai","toggle-ai",1904508383)], null));

return cljs.core.println.call(null," << send-api-command-ai");
});
lg_checkers.board.send_api_command_replay_recorded_game = (function lg_checkers$board$send_api_command_replay_recorded_game(){
cljs.core.println.call(null,"");

cljs.core.println.call(null," >> send-api-command-replay-recorded-game");

cljs.core.async.put_BANG_.call(null,lg_checkers.board.api_commands,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"replay-recorded-game","replay-recorded-game",826564334)], null));

return cljs.core.println.call(null," << send-api-command-replay-recorded-game");
});
lg_checkers.board.api_worker_register_channel_to_receive_event = (function lg_checkers$board$api_worker_register_channel_to_receive_event(full_event){
var channel = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(full_event);
var event = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(full_event);
return lg_checkers.board.api_event_receivers = lg_checkers.board.register_channel_to_receive_event.call(null,lg_checkers.board.api_event_receivers,event,channel);
});
lg_checkers.board.api_send_event_to_all_receivers = (function lg_checkers$board$api_send_event_to_all_receivers(event_data){
var event_id = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(event_data);
return lg_checkers.board.send_event_to_all_receivers.call(null,lg_checkers.board.api_event_receivers,event_id,event_data);
});
lg_checkers.board.api_do_send_to_all_receivers_unblock_user_board_input = (function lg_checkers$board$api_do_send_to_all_receivers_unblock_user_board_input(){
return lg_checkers.board.api_send_event_to_all_receivers.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"api-event-unblock-user-board-input","api-event-unblock-user-board-input",1661151846)], null));
});
lg_checkers.board.api_do_send_to_all_receivers_ai_delay_timer_toggled = (function lg_checkers$board$api_do_send_to_all_receivers_ai_delay_timer_toggled(){
return lg_checkers.board.api_send_event_to_all_receivers.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"api-event-ai-delay-timer-toggled","api-event-ai-delay-timer-toggled",-2048865544)], null));
});
lg_checkers.board.api_do_send_to_all_receivers_ai_toggled = (function lg_checkers$board$api_do_send_to_all_receivers_ai_toggled(){
return lg_checkers.board.api_send_event_to_all_receivers.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"api-event-ai-toggled","api-event-ai-toggled",-1242517052)], null));
});
lg_checkers.board.api_do_send_to_all_receivers_history_replay_stopped = (function lg_checkers$board$api_do_send_to_all_receivers_history_replay_stopped(){
return lg_checkers.board.api_send_event_to_all_receivers.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"api-event-history-replay-stopped","api-event-history-replay-stopped",-1109972185)], null));
});
lg_checkers.board.api_worker_board_worker_board_clicked = (function lg_checkers$board$api_worker_board_worker_board_clicked(event){
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

return lg_checkers.board.api_do_send_to_all_receivers_unblock_user_board_input.call(null);
} else {
if(cljs.core._EQ_.call(null,lg_checkers.board.source_piece_position,current_position)){
lg_checkers.board.update_board_position.call(null,lg_checkers.board.source_piece_position,source_original_piece_type);

lg_checkers.board.source_piece_position = null;

return lg_checkers.board.api_do_send_to_all_receivers_unblock_user_board_input.call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"empty-piece","empty-piece",515714264),current_piece_type)){
if(cljs.core.truth_(lg_checkers.board.test_move_piece.call(null,lg_checkers.board.source_piece_position,current_position))){
if(cljs.core.truth_(lg_checkers.board.destination_should_and_have_victims.call(null,lg_checkers.board.source_piece_position,current_position))){
if(cljs.core.truth_(lg_checkers.board.move_piece.call(null,lg_checkers.board.source_piece_position,current_position))){
return lg_checkers.board.api_internal_movement_is_over.call(null,current_position);
} else {
return lg_checkers.board.api_internal_movement_continues.call(null,current_position);
}
} else {
return lg_checkers.board.api_do_send_to_all_receivers_unblock_user_board_input.call(null);
}
} else {
return lg_checkers.board.api_do_send_to_all_receivers_unblock_user_board_input.call(null);
}
} else {
return lg_checkers.board.api_do_send_to_all_receivers_unblock_user_board_input.call(null);
}
}
}
});
lg_checkers.board.api_worker_ai_event_ai_made_movement = (function lg_checkers$board$api_worker_ai_event_ai_made_movement(event){
return lg_checkers.board.api_do_send_to_all_receivers_unblock_user_board_input.call(null);
});
lg_checkers.board.api_worker_ai_event_delay_timer_toggled = (function lg_checkers$board$api_worker_ai_event_delay_timer_toggled(event){
return lg_checkers.board.api_do_send_to_all_receivers_ai_delay_timer_toggled.call(null);
});
lg_checkers.board.api_worker_ai_event_ai_toggled = (function lg_checkers$board$api_worker_ai_event_ai_toggled(event){
return lg_checkers.board.api_do_send_to_all_receivers_ai_toggled.call(null);
});
lg_checkers.board.api_worker_toggle_delay_timer_in_ai = (function lg_checkers$board$api_worker_toggle_delay_timer_in_ai(event){
return lg_checkers.board.send_ai_command_toggle_delay_timer_in_ai.call(null);
});
lg_checkers.board.api_worker_toggle_ai = (function lg_checkers$board$api_worker_toggle_ai(event){
return lg_checkers.board.send_ai_command_toggle_ai.call(null);
});
lg_checkers.board.api_worker_replay_recorded_game = (function lg_checkers$board$api_worker_replay_recorded_game(event){
return lg_checkers.board.send_game_history_db_command_replay_recorded_game.call(null);
});
lg_checkers.board.api_worker_game_history_db_event_replay_started = (function lg_checkers$board$api_worker_game_history_db_event_replay_started(event){
lg_checkers.board.reset_board.call(null);

return lg_checkers.board.reset_internal_score_and_srore_for_ui.call(null);
});
lg_checkers.board.api_worker_game_history_db_event_replay_stopped = (function lg_checkers$board$api_worker_game_history_db_event_replay_stopped(event){
return lg_checkers.board.api_do_send_to_all_receivers_history_replay_stopped.call(null);
});
lg_checkers.board.api_worker_game_history_db_event_movement = (function lg_checkers$board$api_worker_game_history_db_event_movement(event){
var movement_data = new cljs.core.Keyword(null,"movement-data","movement-data",-314283653).cljs$core$IFn$_invoke$arity$1(event);
var actor = new cljs.core.Keyword(null,"actor","actor",-1830560481).cljs$core$IFn$_invoke$arity$1(movement_data);
var movement_continuation = new cljs.core.Keyword(null,"movement-continuation","movement-continuation",-964530045).cljs$core$IFn$_invoke$arity$1(movement_data);
var source_piece_position = new cljs.core.Keyword(null,"source-piece-position","source-piece-position",1301017451).cljs$core$IFn$_invoke$arity$1(movement_data);
var destination_piece_position = new cljs.core.Keyword(null,"destination-piece-position","destination-piece-position",-402502424).cljs$core$IFn$_invoke$arity$1(movement_data);
var piece_type = new cljs.core.Keyword(null,"piece-type","piece-type",382386995).cljs$core$IFn$_invoke$arity$1(movement_data);
lg_checkers.board.move_piece.call(null,source_piece_position,destination_piece_position);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"movement-is-over","movement-is-over",81885100),movement_continuation)){
return true;
} else {
return false;
}
});
lg_checkers.board.api_internal_movement_is_over = (function lg_checkers$board$api_internal_movement_is_over(current_position){
lg_checkers.board.send_game_history_db_command_save_movement.call(null,new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"movement-is-over","movement-is-over",81885100),lg_checkers.board.source_piece_position,current_position,cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.board),current_position));

lg_checkers.board.send_ai_command_compute_movement.call(null);

return lg_checkers.board.source_piece_position = null;
});
lg_checkers.board.api_internal_movement_continues = (function lg_checkers$board$api_internal_movement_continues(current_position){
lg_checkers.board.send_game_history_db_command_save_movement.call(null,new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"movement-continues","movement-continues",908307741),lg_checkers.board.source_piece_position,current_position,cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.board),current_position));

lg_checkers.board.api_do_send_to_all_receivers_unblock_user_board_input.call(null);

return lg_checkers.board.source_piece_position = current_position;
});
var c__11834__auto___128148 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11834__auto___128148){
return (function (){
var f__11835__auto__ = (function (){var switch__11722__auto__ = ((function (c__11834__auto___128148){
return (function (state_128103){
var state_val_128104 = (state_128103[(1)]);
if((state_val_128104 === (7))){
var inst_128048 = (state_128103[(7)]);
var inst_128049 = (state_128103[(8)]);
var inst_128048__$1 = (state_128103[(2)]);
var inst_128049__$1 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(inst_128048__$1);
var inst_128050 = cljs.core.println.call(null,"");
var inst_128051 = cljs.core.println.call(null,"<<>> AI: ",inst_128048__$1);
var inst_128052 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"register-channel-to-receive-event","register-channel-to-receive-event",322539620),inst_128049__$1);
var state_128103__$1 = (function (){var statearr_128105 = state_128103;
(statearr_128105[(9)] = inst_128050);

(statearr_128105[(7)] = inst_128048__$1);

(statearr_128105[(8)] = inst_128049__$1);

(statearr_128105[(10)] = inst_128051);

return statearr_128105;
})();
if(inst_128052){
var statearr_128106_128149 = state_128103__$1;
(statearr_128106_128149[(1)] = (8));

} else {
var statearr_128107_128150 = state_128103__$1;
(statearr_128107_128150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128104 === (20))){
var inst_128071 = (state_128103[(2)]);
var state_128103__$1 = state_128103;
var statearr_128108_128151 = state_128103__$1;
(statearr_128108_128151[(2)] = inst_128071);

(statearr_128108_128151[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128104 === (1))){
var state_128103__$1 = state_128103;
var statearr_128109_128152 = state_128103__$1;
(statearr_128109_128152[(2)] = null);

(statearr_128109_128152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128104 === (24))){
var inst_128048 = (state_128103[(7)]);
var inst_128091 = lg_checkers.board.ai_worker_toggle_ai.call(null,inst_128048);
var state_128103__$1 = state_128103;
var statearr_128110_128153 = state_128103__$1;
(statearr_128110_128153[(2)] = inst_128091);

(statearr_128110_128153[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128104 === (4))){
var state_128103__$1 = state_128103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_128103__$1,(7),lg_checkers.board.ai_commands);
} else {
if((state_val_128104 === (15))){
var inst_128048 = (state_128103[(7)]);
var inst_128077 = lg_checkers.board.ai_worker_make_no_move.call(null,inst_128048);
var state_128103__$1 = state_128103;
var statearr_128111_128154 = state_128103__$1;
(statearr_128111_128154[(2)] = inst_128077);

(statearr_128111_128154[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128104 === (21))){
var inst_128048 = (state_128103[(7)]);
var inst_128085 = lg_checkers.board.ai_worker_toggle_delay_timer_in_ai.call(null,inst_128048);
var state_128103__$1 = state_128103;
var statearr_128112_128155 = state_128103__$1;
(statearr_128112_128155[(2)] = inst_128085);

(statearr_128112_128155[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128104 === (13))){
var inst_128049 = (state_128103[(8)]);
var inst_128082 = (state_128103[(2)]);
var inst_128083 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"toggle-delay-timer-in-ai","toggle-delay-timer-in-ai",1893069099),inst_128049);
var state_128103__$1 = (function (){var statearr_128113 = state_128103;
(statearr_128113[(11)] = inst_128082);

return statearr_128113;
})();
if(inst_128083){
var statearr_128114_128156 = state_128103__$1;
(statearr_128114_128156[(1)] = (21));

} else {
var statearr_128115_128157 = state_128103__$1;
(statearr_128115_128157[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128104 === (22))){
var state_128103__$1 = state_128103;
var statearr_128116_128158 = state_128103__$1;
(statearr_128116_128158[(2)] = null);

(statearr_128116_128158[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128104 === (6))){
var inst_128099 = (state_128103[(2)]);
var state_128103__$1 = state_128103;
var statearr_128117_128159 = state_128103__$1;
(statearr_128117_128159[(2)] = inst_128099);

(statearr_128117_128159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128104 === (25))){
var state_128103__$1 = state_128103;
var statearr_128118_128160 = state_128103__$1;
(statearr_128118_128160[(2)] = null);

(statearr_128118_128160[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128104 === (17))){
var inst_128067 = cljs.core.deref.call(null,lg_checkers.board.app_state);
var inst_128068 = cljs.core.get.call(null,inst_128067,new cljs.core.Keyword(null,"ai-timeout-for-work-emulation","ai-timeout-for-work-emulation",549896297));
var inst_128069 = cljs.core.async.timeout.call(null,inst_128068);
var state_128103__$1 = state_128103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_128103__$1,(20),inst_128069);
} else {
if((state_val_128104 === (3))){
var inst_128101 = (state_128103[(2)]);
var state_128103__$1 = state_128103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_128103__$1,inst_128101);
} else {
if((state_val_128104 === (12))){
var state_128103__$1 = state_128103;
var statearr_128119_128161 = state_128103__$1;
(statearr_128119_128161[(2)] = null);

(statearr_128119_128161[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128104 === (2))){
var state_128103__$1 = state_128103;
var statearr_128120_128162 = state_128103__$1;
(statearr_128120_128162[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128104 === (23))){
var inst_128049 = (state_128103[(8)]);
var inst_128088 = (state_128103[(2)]);
var inst_128089 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"toggle-ai","toggle-ai",1904508383),inst_128049);
var state_128103__$1 = (function (){var statearr_128122 = state_128103;
(statearr_128122[(12)] = inst_128088);

return statearr_128122;
})();
if(inst_128089){
var statearr_128123_128163 = state_128103__$1;
(statearr_128123_128163[(1)] = (24));

} else {
var statearr_128124_128164 = state_128103__$1;
(statearr_128124_128164[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128104 === (19))){
var inst_128048 = (state_128103[(7)]);
var inst_128074 = (state_128103[(2)]);
var inst_128075 = lg_checkers.board.ai_worker_make_move.call(null,inst_128048);
var state_128103__$1 = (function (){var statearr_128125 = state_128103;
(statearr_128125[(13)] = inst_128074);

return statearr_128125;
})();
var statearr_128126_128165 = state_128103__$1;
(statearr_128126_128165[(2)] = inst_128075);

(statearr_128126_128165[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128104 === (11))){
var inst_128060 = cljs.core.deref.call(null,lg_checkers.board.app_state);
var inst_128061 = new cljs.core.Keyword(null,"user-can-control-all-pieces","user-can-control-all-pieces",-882077365).cljs$core$IFn$_invoke$arity$1(inst_128060);
var inst_128062 = cljs.core.not.call(null,inst_128061);
var state_128103__$1 = state_128103;
if(inst_128062){
var statearr_128127_128166 = state_128103__$1;
(statearr_128127_128166[(1)] = (14));

} else {
var statearr_128128_128167 = state_128103__$1;
(statearr_128128_128167[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128104 === (9))){
var state_128103__$1 = state_128103;
var statearr_128129_128168 = state_128103__$1;
(statearr_128129_128168[(2)] = null);

(statearr_128129_128168[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128104 === (5))){
var state_128103__$1 = state_128103;
var statearr_128130_128169 = state_128103__$1;
(statearr_128130_128169[(2)] = null);

(statearr_128130_128169[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128104 === (14))){
var inst_128064 = cljs.core.deref.call(null,lg_checkers.board.app_state);
var inst_128065 = cljs.core.get.call(null,inst_128064,new cljs.core.Keyword(null,"delay-timer-in-ai-is-on","delay-timer-in-ai-is-on",-641385360));
var state_128103__$1 = state_128103;
if(cljs.core.truth_(inst_128065)){
var statearr_128131_128170 = state_128103__$1;
(statearr_128131_128170[(1)] = (17));

} else {
var statearr_128132_128171 = state_128103__$1;
(statearr_128132_128171[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128104 === (26))){
var inst_128094 = (state_128103[(2)]);
var inst_128095 = cljs.core.println.call(null,"<<>> AI events done");
var state_128103__$1 = (function (){var statearr_128133 = state_128103;
(statearr_128133[(14)] = inst_128095);

(statearr_128133[(15)] = inst_128094);

return statearr_128133;
})();
var statearr_128134_128172 = state_128103__$1;
(statearr_128134_128172[(2)] = null);

(statearr_128134_128172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128104 === (16))){
var inst_128079 = (state_128103[(2)]);
var state_128103__$1 = state_128103;
var statearr_128135_128173 = state_128103__$1;
(statearr_128135_128173[(2)] = inst_128079);

(statearr_128135_128173[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128104 === (10))){
var inst_128049 = (state_128103[(8)]);
var inst_128057 = (state_128103[(2)]);
var inst_128058 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compute-movement","compute-movement",357058960),inst_128049);
var state_128103__$1 = (function (){var statearr_128136 = state_128103;
(statearr_128136[(16)] = inst_128057);

return statearr_128136;
})();
if(inst_128058){
var statearr_128137_128174 = state_128103__$1;
(statearr_128137_128174[(1)] = (11));

} else {
var statearr_128138_128175 = state_128103__$1;
(statearr_128138_128175[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128104 === (18))){
var state_128103__$1 = state_128103;
var statearr_128139_128176 = state_128103__$1;
(statearr_128139_128176[(2)] = null);

(statearr_128139_128176[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128104 === (8))){
var inst_128048 = (state_128103[(7)]);
var inst_128054 = lg_checkers.board.ai_worker_register_channel_to_receive_event.call(null,inst_128048);
var state_128103__$1 = state_128103;
var statearr_128140_128177 = state_128103__$1;
(statearr_128140_128177[(2)] = inst_128054);

(statearr_128140_128177[(1)] = (10));


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
}
}
}
}
});})(c__11834__auto___128148))
;
return ((function (switch__11722__auto__,c__11834__auto___128148){
return (function() {
var lg_checkers$board$state_machine__11723__auto__ = null;
var lg_checkers$board$state_machine__11723__auto____0 = (function (){
var statearr_128144 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_128144[(0)] = lg_checkers$board$state_machine__11723__auto__);

(statearr_128144[(1)] = (1));

return statearr_128144;
});
var lg_checkers$board$state_machine__11723__auto____1 = (function (state_128103){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__.call(null,state_128103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e128145){if((e128145 instanceof Object)){
var ex__11726__auto__ = e128145;
var statearr_128146_128178 = state_128103;
(statearr_128146_128178[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_128103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e128145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__128179 = state_128103;
state_128103 = G__128179;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
lg_checkers$board$state_machine__11723__auto__ = function(state_128103){
switch(arguments.length){
case 0:
return lg_checkers$board$state_machine__11723__auto____0.call(this);
case 1:
return lg_checkers$board$state_machine__11723__auto____1.call(this,state_128103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lg_checkers$board$state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = lg_checkers$board$state_machine__11723__auto____0;
lg_checkers$board$state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = lg_checkers$board$state_machine__11723__auto____1;
return lg_checkers$board$state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11834__auto___128148))
})();
var state__11836__auto__ = (function (){var statearr_128147 = f__11835__auto__.call(null);
(statearr_128147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11834__auto___128148);

return statearr_128147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11836__auto__);
});})(c__11834__auto___128148))
);

lg_checkers.board.ai_event_receivers = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ai-event-ai-made-movement","ai-event-ai-made-movement",-259615458),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ai-event-delay-timer-toggled","ai-event-delay-timer-toggled",115787152),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ai-event-ai-toggled","ai-event-ai-toggled",873916473),cljs.core.PersistentHashSet.EMPTY], null);
lg_checkers.board.send_ai_command_register_channel_to_receive_event = (function lg_checkers$board$send_ai_command_register_channel_to_receive_event(channel,event){
cljs.core.println.call(null,"");

cljs.core.println.call(null," >> send-ai-command-register-channel-to-receive-event: ",channel,event);

cljs.core.async.put_BANG_.call(null,lg_checkers.board.ai_commands,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"register-channel-to-receive-event","register-channel-to-receive-event",322539620),new cljs.core.Keyword(null,"channel","channel",734187692),channel,new cljs.core.Keyword(null,"event","event",301435442),event], null));

return cljs.core.println.call(null," << send-ai-command-register-channel-to-receive-event");
});
lg_checkers.board.send_ai_command_compute_movement = (function lg_checkers$board$send_ai_command_compute_movement(){
cljs.core.println.call(null,"");

cljs.core.println.call(null," >> send-ai-command-compute-movement");

cljs.core.async.put_BANG_.call(null,lg_checkers.board.ai_commands,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"compute-movement","compute-movement",357058960)], null));

return cljs.core.println.call(null," << send-ai-command-compute-movement");
});
lg_checkers.board.send_ai_command_toggle_delay_timer_in_ai = (function lg_checkers$board$send_ai_command_toggle_delay_timer_in_ai(){
cljs.core.println.call(null,"");

cljs.core.println.call(null," >> send-ai-command-toggle-delay-timer-in-ai");

cljs.core.async.put_BANG_.call(null,lg_checkers.board.ai_commands,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"toggle-delay-timer-in-ai","toggle-delay-timer-in-ai",1893069099)], null));

return cljs.core.println.call(null," << send-ai-command-toggle-delay-timer-in-ai");
});
lg_checkers.board.send_ai_command_toggle_ai = (function lg_checkers$board$send_ai_command_toggle_ai(){
cljs.core.println.call(null,"");

cljs.core.println.call(null," >> send-ai-command-toggle-ai");

cljs.core.async.put_BANG_.call(null,lg_checkers.board.ai_commands,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"toggle-ai","toggle-ai",1904508383)], null));

return cljs.core.println.call(null," << send-ai-command-toggle-ai");
});
lg_checkers.board.ai_worker_register_channel_to_receive_event = (function lg_checkers$board$ai_worker_register_channel_to_receive_event(full_event){
var channel = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(full_event);
var event = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(full_event);
return lg_checkers.board.ai_event_receivers = lg_checkers.board.register_channel_to_receive_event.call(null,lg_checkers.board.ai_event_receivers,event,channel);
});
lg_checkers.board.ai_send_event_to_all_receivers = (function lg_checkers$board$ai_send_event_to_all_receivers(event_data){
var event_id = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(event_data);
return lg_checkers.board.send_event_to_all_receivers.call(null,lg_checkers.board.ai_event_receivers,event_id,event_data);
});
lg_checkers.board.ai_do_send_to_all_receivers_ai_made_movement = (function lg_checkers$board$ai_do_send_to_all_receivers_ai_made_movement(){
return lg_checkers.board.ai_send_event_to_all_receivers.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"ai-event-ai-made-movement","ai-event-ai-made-movement",-259615458)], null));
});
lg_checkers.board.ai_do_send_to_all_receivers_delay_timer_toggled = (function lg_checkers$board$ai_do_send_to_all_receivers_delay_timer_toggled(){
return lg_checkers.board.ai_send_event_to_all_receivers.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"ai-event-delay-timer-toggled","ai-event-delay-timer-toggled",115787152)], null));
});
lg_checkers.board.ai_do_send_to_all_receivers_ai_toggled = (function lg_checkers$board$ai_do_send_to_all_receivers_ai_toggled(){
return lg_checkers.board.ai_send_event_to_all_receivers.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"ai-event-ai-toggled","ai-event-ai-toggled",873916473)], null));
});
lg_checkers.board.ai_worker_make_move = (function lg_checkers$board$ai_worker_make_move(event){
lg_checkers.board.ai_internal_make_move.call(null,false,null);

return lg_checkers.board.ai_do_send_to_all_receivers_ai_made_movement.call(null);
});
lg_checkers.board.ai_worker_make_no_move = (function lg_checkers$board$ai_worker_make_no_move(event){
return lg_checkers.board.ai_do_send_to_all_receivers_ai_made_movement.call(null);
});
lg_checkers.board.ai_worker_toggle_delay_timer_in_ai = (function lg_checkers$board$ai_worker_toggle_delay_timer_in_ai(event){
cljs.core.swap_BANG_.call(null,lg_checkers.board.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"delay-timer-in-ai-is-on","delay-timer-in-ai-is-on",-641385360),cljs.core.not.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.app_state),new cljs.core.Keyword(null,"delay-timer-in-ai-is-on","delay-timer-in-ai-is-on",-641385360))));

return lg_checkers.board.ai_do_send_to_all_receivers_delay_timer_toggled.call(null);
});
lg_checkers.board.ai_worker_toggle_ai = (function lg_checkers$board$ai_worker_toggle_ai(event){
cljs.core.swap_BANG_.call(null,lg_checkers.board.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"user-can-control-all-pieces","user-can-control-all-pieces",-882077365),cljs.core.not.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.app_state),new cljs.core.Keyword(null,"user-can-control-all-pieces","user-can-control-all-pieces",-882077365))));

return lg_checkers.board.ai_do_send_to_all_receivers_ai_toggled.call(null);
});
lg_checkers.board.ai_internal_calculate_piece_to_move = (function lg_checkers$board$ai_internal_calculate_piece_to_move(captures_only,specific_piece){
var current_piece_color = cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.app_state),new cljs.core.Keyword(null,"original-piece-color-for-ai","original-piece-color-for-ai",1141180952));
var neighbors = lg_checkers.board.calculate_neighbors.call(null,current_piece_color);
var list_of_opponent_victims = cljs.core.seq.call(null,lg_checkers.board.calculate_real_opponent_victim_neighbors.call(null,neighbors));
var list_of_available_moves = cljs.core.seq.call(null,lg_checkers.board.calculate_actors_pieces_moves.call(null,neighbors));
if(((0) < cljs.core.count.call(null,list_of_opponent_victims))){
if(cljs.core.some_QMARK_.call(null,specific_piece)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"capture","capture",-677031143),cljs.core.first.call(null,cljs.core.filter.call(null,((function (current_piece_color,neighbors,list_of_opponent_victims,list_of_available_moves){
return (function (victim){
if(cljs.core._EQ_.call(null,specific_piece,cljs.core.get.call(null,victim,(0)))){
return true;
} else {
return false;
}
});})(current_piece_color,neighbors,list_of_opponent_victims,list_of_available_moves))
,list_of_opponent_victims))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"capture","capture",-677031143),cljs.core.first.call(null,cljs.core.shuffle.call(null,list_of_opponent_victims))], null);
}
} else {
if(cljs.core.not.call(null,captures_only)){
if(((0) < cljs.core.count.call(null,list_of_available_moves))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"movement","movement",1777030977),cljs.core.first.call(null,cljs.core.shuffle.call(null,list_of_available_moves))], null);
} else {
return null;
}
} else {
return null;
}
}
});
lg_checkers.board.ai_internal_calculate_move = (function lg_checkers$board$ai_internal_calculate_move(captures_only,specific_piece){
var move_data = lg_checkers.board.ai_internal_calculate_piece_to_move.call(null,captures_only,specific_piece);
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
lg_checkers.board.ai_internal_make_move = (function lg_checkers$board$ai_internal_make_move(captures_only,specific_piece){
var move = lg_checkers.board.ai_internal_calculate_move.call(null,captures_only,specific_piece);
var source_pos = ((cljs.core.some_QMARK_.call(null,move))?cljs.core.get.call(null,move,(0)):null);
var destination_pos = ((cljs.core.some_QMARK_.call(null,move))?cljs.core.get.call(null,move,(1)):null);
var move_type = ((cljs.core.some_QMARK_.call(null,move))?cljs.core.get.call(null,move,(2)):null);
var current_piece_color = cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.app_state),new cljs.core.Keyword(null,"original-piece-color-for-ai","original-piece-color-for-ai",1141180952));
if(cljs.core.some_QMARK_.call(null,move)){
lg_checkers.board.move_piece.call(null,source_pos,destination_pos);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"capture","capture",-677031143),move_type)){
if(((0) < cljs.core.count.call(null,lg_checkers.board.calculate_real_opponent_victim_neighbors.call(null,lg_checkers.board.calculate_neighbors.call(null,current_piece_color))))){
lg_checkers.board.send_game_history_db_command_save_movement.call(null,new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"movement-continues","movement-continues",908307741),source_pos,destination_pos,cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.board),source_pos));

return lg_checkers$board$ai_internal_make_move.call(null,true,destination_pos);
} else {
return lg_checkers.board.send_game_history_db_command_save_movement.call(null,new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"movement-is-over","movement-is-over",81885100),source_pos,destination_pos,cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.board),source_pos));
}
} else {
return lg_checkers.board.send_game_history_db_command_save_movement.call(null,new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"movement-is-over","movement-is-over",81885100),source_pos,destination_pos,cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.board),source_pos));
}
} else {
return null;
}
});
var c__11834__auto___128212 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11834__auto___128212){
return (function (){
var f__11835__auto__ = (function (){var switch__11722__auto__ = ((function (c__11834__auto___128212){
return (function (state_128196){
var state_val_128197 = (state_128196[(1)]);
if((state_val_128197 === (1))){
var state_128196__$1 = state_128196;
var statearr_128198_128213 = state_128196__$1;
(statearr_128198_128213[(2)] = null);

(statearr_128198_128213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128197 === (2))){
var state_128196__$1 = state_128196;
var statearr_128199_128214 = state_128196__$1;
(statearr_128199_128214[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128197 === (3))){
var inst_128194 = (state_128196[(2)]);
var state_128196__$1 = state_128196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_128196__$1,inst_128194);
} else {
if((state_val_128197 === (4))){
var state_128196__$1 = state_128196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_128196__$1,(7),lg_checkers.board.board_commands);
} else {
if((state_val_128197 === (5))){
var state_128196__$1 = state_128196;
var statearr_128201_128215 = state_128196__$1;
(statearr_128201_128215[(2)] = null);

(statearr_128201_128215[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128197 === (6))){
var inst_128192 = (state_128196[(2)]);
var state_128196__$1 = state_128196;
var statearr_128202_128216 = state_128196__$1;
(statearr_128202_128216[(2)] = inst_128192);

(statearr_128202_128216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128197 === (7))){
var inst_128183 = (state_128196[(2)]);
var inst_128184 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(inst_128183);
var inst_128185 = cljs.core.println.call(null,"");
var inst_128186 = cljs.core.println.call(null,"<<>> Board Updater: ",inst_128183);
var inst_128187 = lg_checkers.board.board_updater_worker_update_board_position.call(null,inst_128183);
var inst_128188 = cljs.core.println.call(null,"<<>> Board Updater events done");
var state_128196__$1 = (function (){var statearr_128203 = state_128196;
(statearr_128203[(7)] = inst_128185);

(statearr_128203[(8)] = inst_128187);

(statearr_128203[(9)] = inst_128186);

(statearr_128203[(10)] = inst_128184);

(statearr_128203[(11)] = inst_128188);

return statearr_128203;
})();
var statearr_128204_128217 = state_128196__$1;
(statearr_128204_128217[(2)] = null);

(statearr_128204_128217[(1)] = (2));


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
});})(c__11834__auto___128212))
;
return ((function (switch__11722__auto__,c__11834__auto___128212){
return (function() {
var lg_checkers$board$state_machine__11723__auto__ = null;
var lg_checkers$board$state_machine__11723__auto____0 = (function (){
var statearr_128208 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_128208[(0)] = lg_checkers$board$state_machine__11723__auto__);

(statearr_128208[(1)] = (1));

return statearr_128208;
});
var lg_checkers$board$state_machine__11723__auto____1 = (function (state_128196){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__.call(null,state_128196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e128209){if((e128209 instanceof Object)){
var ex__11726__auto__ = e128209;
var statearr_128210_128218 = state_128196;
(statearr_128210_128218[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_128196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e128209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__128219 = state_128196;
state_128196 = G__128219;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
lg_checkers$board$state_machine__11723__auto__ = function(state_128196){
switch(arguments.length){
case 0:
return lg_checkers$board$state_machine__11723__auto____0.call(this);
case 1:
return lg_checkers$board$state_machine__11723__auto____1.call(this,state_128196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lg_checkers$board$state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = lg_checkers$board$state_machine__11723__auto____0;
lg_checkers$board$state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = lg_checkers$board$state_machine__11723__auto____1;
return lg_checkers$board$state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11834__auto___128212))
})();
var state__11836__auto__ = (function (){var statearr_128211 = f__11835__auto__.call(null);
(statearr_128211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11834__auto___128212);

return statearr_128211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11836__auto__);
});})(c__11834__auto___128212))
);

lg_checkers.board.send_board_updater_command_update_board_position = (function lg_checkers$board$send_board_updater_command_update_board_position(pos,piece){
cljs.core.println.call(null,"");

cljs.core.println.call(null," >> send-board-updater-command-update-board-position: ",pos,piece);

cljs.core.async.put_BANG_.call(null,lg_checkers.board.board_commands,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"update-board-position","update-board-position",-522194238),new cljs.core.Keyword(null,"position","position",-2011731912),pos,new cljs.core.Keyword(null,"piece","piece",1396691784),piece], null));

return cljs.core.println.call(null," << send-board-updater-command-update-board-position");
});
lg_checkers.board.board_updater_worker_update_board_position = (function lg_checkers$board$board_updater_worker_update_board_position(event){
var position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(event);
var piece_type = new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(event);
return lg_checkers.board.update_board_position.call(null,position,piece_type);
});
var c__11834__auto___128289 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11834__auto___128289){
return (function (){
var f__11835__auto__ = (function (){var switch__11722__auto__ = ((function (c__11834__auto___128289){
return (function (state_128257){
var state_val_128258 = (state_128257[(1)]);
if((state_val_128258 === (7))){
var inst_128223 = (state_128257[(7)]);
var inst_128224 = (state_128257[(8)]);
var inst_128223__$1 = (state_128257[(2)]);
var inst_128224__$1 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(inst_128223__$1);
var inst_128225 = cljs.core.println.call(null,"");
var inst_128226 = cljs.core.println.call(null,"<<>> Game History DB: ",inst_128223__$1);
var inst_128227 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"register-channel-to-receive-event","register-channel-to-receive-event",322539620),inst_128224__$1);
var state_128257__$1 = (function (){var statearr_128259 = state_128257;
(statearr_128259[(7)] = inst_128223__$1);

(statearr_128259[(8)] = inst_128224__$1);

(statearr_128259[(9)] = inst_128226);

(statearr_128259[(10)] = inst_128225);

return statearr_128259;
})();
if(inst_128227){
var statearr_128260_128290 = state_128257__$1;
(statearr_128260_128290[(1)] = (8));

} else {
var statearr_128261_128291 = state_128257__$1;
(statearr_128261_128291[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128258 === (1))){
var state_128257__$1 = state_128257;
var statearr_128262_128292 = state_128257__$1;
(statearr_128262_128292[(2)] = null);

(statearr_128262_128292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128258 === (4))){
var state_128257__$1 = state_128257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_128257__$1,(7),lg_checkers.board.game_history_db_commands);
} else {
if((state_val_128258 === (15))){
var state_128257__$1 = state_128257;
var statearr_128263_128293 = state_128257__$1;
(statearr_128263_128293[(2)] = null);

(statearr_128263_128293[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128258 === (13))){
var inst_128224 = (state_128257[(8)]);
var inst_128238 = (state_128257[(2)]);
var inst_128239 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"replay-recorded-game","replay-recorded-game",826564334),inst_128224);
var state_128257__$1 = (function (){var statearr_128264 = state_128257;
(statearr_128264[(11)] = inst_128238);

return statearr_128264;
})();
if(inst_128239){
var statearr_128265_128294 = state_128257__$1;
(statearr_128265_128294[(1)] = (14));

} else {
var statearr_128266_128295 = state_128257__$1;
(statearr_128266_128295[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128258 === (6))){
var inst_128253 = (state_128257[(2)]);
var state_128257__$1 = state_128257;
var statearr_128267_128296 = state_128257__$1;
(statearr_128267_128296[(2)] = inst_128253);

(statearr_128267_128296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128258 === (3))){
var inst_128255 = (state_128257[(2)]);
var state_128257__$1 = state_128257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_128257__$1,inst_128255);
} else {
if((state_val_128258 === (12))){
var state_128257__$1 = state_128257;
var statearr_128268_128297 = state_128257__$1;
(statearr_128268_128297[(2)] = null);

(statearr_128268_128297[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128258 === (2))){
var state_128257__$1 = state_128257;
var statearr_128269_128298 = state_128257__$1;
(statearr_128269_128298[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128258 === (11))){
var inst_128223 = (state_128257[(7)]);
var inst_128235 = lg_checkers.board.game_history_db_worker_save_movement.call(null,inst_128223);
var state_128257__$1 = state_128257;
var statearr_128271_128299 = state_128257__$1;
(statearr_128271_128299[(2)] = inst_128235);

(statearr_128271_128299[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128258 === (9))){
var state_128257__$1 = state_128257;
var statearr_128272_128300 = state_128257__$1;
(statearr_128272_128300[(2)] = null);

(statearr_128272_128300[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128258 === (5))){
var state_128257__$1 = state_128257;
var statearr_128273_128301 = state_128257__$1;
(statearr_128273_128301[(2)] = null);

(statearr_128273_128301[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128258 === (14))){
var inst_128241 = lg_checkers.board.game_history_db_do_send_to_all_receivers_replay_started.call(null);
var inst_128242 = lg_checkers.board.game_history_db_internal_get_all_moves_from_db.call(null);
var inst_128243 = cljs.core.map.call(null,lg_checkers.board.game_history_db_do_send_to_all_receivers_movement,inst_128242);
var inst_128244 = cljs.core.doall.call(null,inst_128243);
var inst_128245 = lg_checkers.board.game_history_db_do_send_to_all_receivers_replay_stopped.call(null);
var state_128257__$1 = (function (){var statearr_128274 = state_128257;
(statearr_128274[(12)] = inst_128241);

(statearr_128274[(13)] = inst_128244);

return statearr_128274;
})();
var statearr_128275_128302 = state_128257__$1;
(statearr_128275_128302[(2)] = inst_128245);

(statearr_128275_128302[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128258 === (16))){
var inst_128248 = (state_128257[(2)]);
var inst_128249 = cljs.core.println.call(null,"<<>> Game History DB events done");
var state_128257__$1 = (function (){var statearr_128276 = state_128257;
(statearr_128276[(14)] = inst_128249);

(statearr_128276[(15)] = inst_128248);

return statearr_128276;
})();
var statearr_128277_128303 = state_128257__$1;
(statearr_128277_128303[(2)] = null);

(statearr_128277_128303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128258 === (10))){
var inst_128224 = (state_128257[(8)]);
var inst_128232 = (state_128257[(2)]);
var inst_128233 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"save-movement","save-movement",-121265884),inst_128224);
var state_128257__$1 = (function (){var statearr_128278 = state_128257;
(statearr_128278[(16)] = inst_128232);

return statearr_128278;
})();
if(inst_128233){
var statearr_128279_128304 = state_128257__$1;
(statearr_128279_128304[(1)] = (11));

} else {
var statearr_128280_128305 = state_128257__$1;
(statearr_128280_128305[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128258 === (8))){
var inst_128223 = (state_128257[(7)]);
var inst_128229 = lg_checkers.board.game_history_db_worker_register_channel_to_receive_event.call(null,inst_128223);
var state_128257__$1 = state_128257;
var statearr_128281_128306 = state_128257__$1;
(statearr_128281_128306[(2)] = inst_128229);

(statearr_128281_128306[(1)] = (10));


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
});})(c__11834__auto___128289))
;
return ((function (switch__11722__auto__,c__11834__auto___128289){
return (function() {
var lg_checkers$board$state_machine__11723__auto__ = null;
var lg_checkers$board$state_machine__11723__auto____0 = (function (){
var statearr_128285 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_128285[(0)] = lg_checkers$board$state_machine__11723__auto__);

(statearr_128285[(1)] = (1));

return statearr_128285;
});
var lg_checkers$board$state_machine__11723__auto____1 = (function (state_128257){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__.call(null,state_128257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e128286){if((e128286 instanceof Object)){
var ex__11726__auto__ = e128286;
var statearr_128287_128307 = state_128257;
(statearr_128287_128307[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_128257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e128286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__128308 = state_128257;
state_128257 = G__128308;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
lg_checkers$board$state_machine__11723__auto__ = function(state_128257){
switch(arguments.length){
case 0:
return lg_checkers$board$state_machine__11723__auto____0.call(this);
case 1:
return lg_checkers$board$state_machine__11723__auto____1.call(this,state_128257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lg_checkers$board$state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = lg_checkers$board$state_machine__11723__auto____0;
lg_checkers$board$state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = lg_checkers$board$state_machine__11723__auto____1;
return lg_checkers$board$state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11834__auto___128289))
})();
var state__11836__auto__ = (function (){var statearr_128288 = f__11835__auto__.call(null);
(statearr_128288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11834__auto___128289);

return statearr_128288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11836__auto__);
});})(c__11834__auto___128289))
);

lg_checkers.board.game_db_schema = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("game.history.movement","id","game.history.movement/id",-1708172529),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","type","db/type",1174271242),new cljs.core.Keyword("db.type","bigint","db.type/bigint",774640017),new cljs.core.Keyword(null,"db.cardinality","db.cardinality",-1338199186),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190),new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.Keyword("game.history.movement","actor","game.history.movement/actor",1452542946),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db.type","db.type",-1952318725),new cljs.core.Keyword("db.type","keyword","db.type/keyword",205926793),new cljs.core.Keyword(null,"db.cardinality","db.cardinality",-1338199186),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190)], null),new cljs.core.Keyword("game.history.movement","movement-continuation","game.history.movement/movement-continuation",-1288531216),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db.type","db.type",-1952318725),new cljs.core.Keyword("db.type","keyword","db.type/keyword",205926793),new cljs.core.Keyword(null,"db.cardinality","db.cardinality",-1338199186),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190)], null),new cljs.core.Keyword("game.history.movement","source-piece-position","game.history.movement/source-piece-position",823870254),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db.type","db.type",-1952318725),new cljs.core.Keyword("db.type","long","db.type/long",700514073),new cljs.core.Keyword(null,"db.cardinality","db.cardinality",-1338199186),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190)], null),new cljs.core.Keyword("game.history.movement","destination-piece-position","game.history.movement/destination-piece-position",-1131225693),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db.type","db.type",-1952318725),new cljs.core.Keyword("db.type","long","db.type/long",700514073),new cljs.core.Keyword(null,"db.cardinality","db.cardinality",-1338199186),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190)], null),new cljs.core.Keyword("game.history.movement","piece-type","game.history.movement/piece-type",-1554410528),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db.type","db.type",-1952318725),new cljs.core.Keyword("db.type","keyword","db.type/keyword",205926793),new cljs.core.Keyword(null,"db.cardinality","db.cardinality",-1338199186),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190)], null)], null);
lg_checkers.board.game_history_db_state_template = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-movement-id","current-movement-id",-1555183227),(0)], null);
lg_checkers.board.game_history_db_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
lg_checkers.board.game_history_db_initialization_reset_db = (function lg_checkers$board$game_history_db_initialization_reset_db(){
lg_checkers.board.game_db = datascript.core.empty_db.call(null,lg_checkers.board.game_db_schema);

lg_checkers.board.game_db_conn = datascript.core.create_conn.call(null,lg_checkers.board.game_db);

return cljs.core.swap_BANG_.call(null,lg_checkers.board.game_history_db_state,cljs.core.merge,lg_checkers.board.game_history_db_state_template);
});
lg_checkers.board.game_history_db_initialization_reset_db.call(null);
lg_checkers.board.game_history_db_event_receivers = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"game-history-db-event-replay-started","game-history-db-event-replay-started",1067265494),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"game-history-db-event-replay-stopped","game-history-db-event-replay-stopped",-347787048),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"game-history-db-event-movement","game-history-db-event-movement",1760207480),cljs.core.PersistentHashSet.EMPTY], null);
lg_checkers.board.send_game_history_db_command_register_channel_to_receive_event = (function lg_checkers$board$send_game_history_db_command_register_channel_to_receive_event(channel,event){
cljs.core.println.call(null,"");

cljs.core.println.call(null," >> send-game-history-db-command-register-channel-to-receive-event: ",channel,event);

cljs.core.async.put_BANG_.call(null,lg_checkers.board.game_history_db_commands,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"register-channel-to-receive-event","register-channel-to-receive-event",322539620),new cljs.core.Keyword(null,"channel","channel",734187692),channel,new cljs.core.Keyword(null,"event","event",301435442),event], null));

return cljs.core.println.call(null," << send-game-history-db-command-register-channel-to-receive-event");
});
lg_checkers.board.send_game_history_db_command_save_movement = (function lg_checkers$board$send_game_history_db_command_save_movement(actor,movement_continuation,source_piece_position,destination_piece_position,piece_type){
cljs.core.println.call(null,"");

cljs.core.println.call(null," >> send-game-history-db-command-save-movement: ",actor,movement_continuation,source_piece_position,destination_piece_position,piece_type);

cljs.core.async.put_BANG_.call(null,lg_checkers.board.game_history_db_commands,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"save-movement","save-movement",-121265884),new cljs.core.Keyword(null,"movement-data","movement-data",-314283653),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"actor","actor",-1830560481),actor,new cljs.core.Keyword(null,"movement-continuation","movement-continuation",-964530045),movement_continuation,new cljs.core.Keyword(null,"source-piece-position","source-piece-position",1301017451),source_piece_position,new cljs.core.Keyword(null,"destination-piece-position","destination-piece-position",-402502424),destination_piece_position,new cljs.core.Keyword(null,"piece-type","piece-type",382386995),piece_type], null)], null));

return cljs.core.println.call(null," << send-game-history-db-command-save-movement");
});
lg_checkers.board.send_game_history_db_command_replay_recorded_game = (function lg_checkers$board$send_game_history_db_command_replay_recorded_game(){
cljs.core.println.call(null,"");

cljs.core.println.call(null," >> send-game-history-db-command-replay-recorded-game");

cljs.core.async.put_BANG_.call(null,lg_checkers.board.game_history_db_commands,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"replay-recorded-game","replay-recorded-game",826564334)], null));

return cljs.core.println.call(null," << send-game-history-db-command-replay-recorded-game");
});
lg_checkers.board.game_history_db_worker_register_channel_to_receive_event = (function lg_checkers$board$game_history_db_worker_register_channel_to_receive_event(full_event){
var channel = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(full_event);
var event = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(full_event);
return lg_checkers.board.game_history_db_event_receivers = lg_checkers.board.register_channel_to_receive_event.call(null,lg_checkers.board.game_history_db_event_receivers,event,channel);
});
lg_checkers.board.game_history_db_send_event_to_all_receivers = (function lg_checkers$board$game_history_db_send_event_to_all_receivers(event_data){
var event_id = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(event_data);
return lg_checkers.board.send_event_to_all_receivers.call(null,lg_checkers.board.game_history_db_event_receivers,event_id,event_data);
});
lg_checkers.board.game_history_db_do_send_to_all_receivers_replay_started = (function lg_checkers$board$game_history_db_do_send_to_all_receivers_replay_started(){
return lg_checkers.board.game_history_db_send_event_to_all_receivers.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"game-history-db-event-replay-started","game-history-db-event-replay-started",1067265494)], null));
});
lg_checkers.board.game_history_db_do_send_to_all_receivers_replay_stopped = (function lg_checkers$board$game_history_db_do_send_to_all_receivers_replay_stopped(){
return lg_checkers.board.game_history_db_send_event_to_all_receivers.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"game-history-db-event-replay-stopped","game-history-db-event-replay-stopped",-347787048)], null));
});
lg_checkers.board.game_history_db_do_send_to_all_receivers_movement = (function lg_checkers$board$game_history_db_do_send_to_all_receivers_movement(movement_data){
var id = cljs.core.get.call(null,movement_data,(0));
var actor = cljs.core.get.call(null,movement_data,(1));
var movement_continuation = cljs.core.get.call(null,movement_data,(2));
var source_piece_position = cljs.core.get.call(null,movement_data,(3));
var destination_piece_position = cljs.core.get.call(null,movement_data,(4));
var piece_type = cljs.core.get.call(null,movement_data,(5));
return lg_checkers.board.game_history_db_send_event_to_all_receivers.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"game-history-db-event-movement","game-history-db-event-movement",1760207480),new cljs.core.Keyword(null,"movement-data","movement-data",-314283653),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"actor","actor",-1830560481),actor,new cljs.core.Keyword(null,"movement-continuation","movement-continuation",-964530045),movement_continuation,new cljs.core.Keyword(null,"source-piece-position","source-piece-position",1301017451),source_piece_position,new cljs.core.Keyword(null,"destination-piece-position","destination-piece-position",-402502424),destination_piece_position,new cljs.core.Keyword(null,"piece-type","piece-type",382386995),piece_type], null)], null));
});
lg_checkers.board.game_history_db_worker_save_movement = (function lg_checkers$board$game_history_db_worker_save_movement(event){
var current_movement_id = cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.game_history_db_state),new cljs.core.Keyword(null,"current-movement-id","current-movement-id",-1555183227));
var movement_data = new cljs.core.Keyword(null,"movement-data","movement-data",-314283653).cljs$core$IFn$_invoke$arity$1(event);
var actor = new cljs.core.Keyword(null,"actor","actor",-1830560481).cljs$core$IFn$_invoke$arity$1(movement_data);
var movement_continuation = new cljs.core.Keyword(null,"movement-continuation","movement-continuation",-964530045).cljs$core$IFn$_invoke$arity$1(movement_data);
var source_piece_position = new cljs.core.Keyword(null,"source-piece-position","source-piece-position",1301017451).cljs$core$IFn$_invoke$arity$1(movement_data);
var destination_piece_position = new cljs.core.Keyword(null,"destination-piece-position","destination-piece-position",-402502424).cljs$core$IFn$_invoke$arity$1(movement_data);
var piece_type = new cljs.core.Keyword(null,"piece-type","piece-type",382386995).cljs$core$IFn$_invoke$arity$1(movement_data);
lg_checkers.board.game_history_db_internal_save_movement.call(null,current_movement_id,actor,movement_continuation,source_piece_position,destination_piece_position,piece_type);

return cljs.core.swap_BANG_.call(null,lg_checkers.board.game_history_db_state,cljs.core.assoc,new cljs.core.Keyword(null,"current-movement-id","current-movement-id",-1555183227),(current_movement_id + (1)));
});
lg_checkers.board.game_history_db_internal_save_movement = (function lg_checkers$board$game_history_db_internal_save_movement(current_movement_id,actor,movement_continuation,source_piece_position,destination_piece_position,piece_type){
return datascript.core.transact_BANG_.call(null,lg_checkers.board.game_db_conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("game.history.movement","id","game.history.movement/id",-1708172529),current_movement_id,new cljs.core.Keyword("game.history.movement","actor","game.history.movement/actor",1452542946),actor,new cljs.core.Keyword("game.history.movement","movement-continuation","game.history.movement/movement-continuation",-1288531216),movement_continuation,new cljs.core.Keyword("game.history.movement","source-piece-position","game.history.movement/source-piece-position",823870254),source_piece_position,new cljs.core.Keyword("game.history.movement","destination-piece-position","game.history.movement/destination-piece-position",-1131225693),destination_piece_position,new cljs.core.Keyword("game.history.movement","piece-type","game.history.movement/piece-type",-1554410528),piece_type], null)], null));
});
lg_checkers.board.game_history_db_internal_get_all_moves_from_db = (function lg_checkers$board$game_history_db_internal_get_all_moves_from_db(){
return cljs.core.sort_by.call(null,cljs.core.first,datascript.core.q.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Symbol(null,"?actor","?actor",-1437307609,null),new cljs.core.Symbol(null,"?movement-continuation","?movement-continuation",-1985700141,null),new cljs.core.Symbol(null,"?source-piece-position","?source-piece-position",-2072786534,null),new cljs.core.Symbol(null,"?destination-piece-position","?destination-piece-position",-1091296252,null),new cljs.core.Symbol(null,"?piece-type","?piece-type",-2056095178,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?en","?en",-1249916083,null),new cljs.core.Keyword("game.history.movement","id","game.history.movement/id",-1708172529),new cljs.core.Symbol(null,"?id","?id",928433279,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?en","?en",-1249916083,null),new cljs.core.Keyword("game.history.movement","actor","game.history.movement/actor",1452542946),new cljs.core.Symbol(null,"?actor","?actor",-1437307609,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?en","?en",-1249916083,null),new cljs.core.Keyword("game.history.movement","movement-continuation","game.history.movement/movement-continuation",-1288531216),new cljs.core.Symbol(null,"?movement-continuation","?movement-continuation",-1985700141,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?en","?en",-1249916083,null),new cljs.core.Keyword("game.history.movement","source-piece-position","game.history.movement/source-piece-position",823870254),new cljs.core.Symbol(null,"?source-piece-position","?source-piece-position",-2072786534,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?en","?en",-1249916083,null),new cljs.core.Keyword("game.history.movement","destination-piece-position","game.history.movement/destination-piece-position",-1131225693),new cljs.core.Symbol(null,"?destination-piece-position","?destination-piece-position",-1091296252,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?en","?en",-1249916083,null),new cljs.core.Keyword("game.history.movement","piece-type","game.history.movement/piece-type",-1554410528),new cljs.core.Symbol(null,"?piece-type","?piece-type",-2056095178,null)], null)], null),cljs.core.deref.call(null,lg_checkers.board.game_db_conn)));
});

//# sourceMappingURL=board.js.map