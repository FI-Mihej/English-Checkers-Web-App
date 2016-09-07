// Compiled by ClojureScript 1.9.89 {}
goog.provide('lg_checkers.ui');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('lg_checkers.board');
cljs.core.enable_console_print_BANG_.call(null);
lg_checkers.ui.board_click = (function lg_checkers$ui$board_click(board_pos){
return cljs.core.async.put_BANG_.call(null,lg_checkers.board.board_events,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"board-clicked","board-clicked",1157654001),new cljs.core.Keyword(null,"position","position",-2011731912),board_pos], null));
});
lg_checkers.ui.draw_piece = (function lg_checkers$ui$draw_piece(piece_pos,piece_type){
return cljs.core.apply.call(null,om.dom.div,{"className": piece_type},null);
});
lg_checkers.ui.draw_piece_with_pos = (function lg_checkers$ui$draw_piece_with_pos(piece_pos,piece_type){
return cljs.core.apply.call(null,om.dom.div,{"className": piece_type, "dangerouslySetInnerHTML": {"__html": [cljs.core.str(piece_pos)].join('')}},null);
});
lg_checkers.ui.draw_piece_function = lg_checkers.ui.draw_piece;
lg_checkers.ui.draw_tuple = (function lg_checkers$ui$draw_tuple(piece,row_odd_QMARK_){
var piece_type = cljs.core.name.call(null,cljs.core.last.call(null,piece));
var piece_pos = cljs.core.first.call(null,piece);
var white_square = React.DOM.td({"className": "white"});
var green_square = React.DOM.td({"className": "green", "onClick": ((function (piece_type,piece_pos,white_square){
return (function (e){
return lg_checkers.ui.board_click.call(null,piece_pos);
});})(piece_type,piece_pos,white_square))
},om.util.force_children.call(null,lg_checkers.ui.draw_piece_function.call(null,piece_pos,piece_type)));
if(cljs.core.truth_(row_odd_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [white_square,green_square], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [green_square,white_square], null);
}
});
lg_checkers.ui.draw_row = (function lg_checkers$ui$draw_row(row){
var curr_row = (cljs.core.first.call(null,cljs.core.last.call(null,row)) / (4));
var row_odd_QMARK_ = cljs.core.odd_QMARK_.call(null,curr_row);
return cljs.core.apply.call(null,om.dom.tr,null,cljs.core.mapcat.call(null,((function (curr_row,row_odd_QMARK_){
return (function (p1__18810_SHARP_){
return lg_checkers.ui.draw_tuple.call(null,p1__18810_SHARP_,row_odd_QMARK_);
});})(curr_row,row_odd_QMARK_))
,row));
});
lg_checkers.ui.checkerboard = (function lg_checkers$ui$checkerboard(board,owner){
if(typeof lg_checkers.ui.t_lg_checkers$ui18814 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
lg_checkers.ui.t_lg_checkers$ui18814 = (function (checkerboard,board,owner,meta18815){
this.checkerboard = checkerboard;
this.board = board;
this.owner = owner;
this.meta18815 = meta18815;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
lg_checkers.ui.t_lg_checkers$ui18814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18816,meta18815__$1){
var self__ = this;
var _18816__$1 = this;
return (new lg_checkers.ui.t_lg_checkers$ui18814(self__.checkerboard,self__.board,self__.owner,meta18815__$1));
});

lg_checkers.ui.t_lg_checkers$ui18814.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18816){
var self__ = this;
var _18816__$1 = this;
return self__.meta18815;
});

lg_checkers.ui.t_lg_checkers$ui18814.prototype.om$core$IRender$ = true;

lg_checkers.ui.t_lg_checkers$ui18814.prototype.om$core$IRender$render$arity$1 = (function (this__12790__auto__){
var self__ = this;
var this__12790__auto____$1 = this;
return cljs.core.apply.call(null,om.dom.table,null,cljs.core.map.call(null,lg_checkers.ui.draw_row,cljs.core.partition.call(null,(4),self__.board)));
});

lg_checkers.ui.t_lg_checkers$ui18814.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"checkerboard","checkerboard",1858212161,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"board","board",-266486106,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"board","board",-266486106,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta18815","meta18815",1864021359,null)], null);
});

lg_checkers.ui.t_lg_checkers$ui18814.cljs$lang$type = true;

lg_checkers.ui.t_lg_checkers$ui18814.cljs$lang$ctorStr = "lg-checkers.ui/t_lg_checkers$ui18814";

lg_checkers.ui.t_lg_checkers$ui18814.cljs$lang$ctorPrWriter = (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"lg-checkers.ui/t_lg_checkers$ui18814");
});

lg_checkers.ui.__GT_t_lg_checkers$ui18814 = (function lg_checkers$ui$checkerboard_$___GT_t_lg_checkers$ui18814(checkerboard__$1,board__$1,owner__$1,meta18815){
return (new lg_checkers.ui.t_lg_checkers$ui18814(checkerboard__$1,board__$1,owner__$1,meta18815));
});

}

return (new lg_checkers.ui.t_lg_checkers$ui18814(lg_checkers$ui$checkerboard,board,owner,null));
});
lg_checkers.ui.bootstrap_ui = (function lg_checkers$ui$bootstrap_ui(){
om.core.root.call(null,lg_checkers.ui.checkerboard,lg_checkers.board.board,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("checkers")], null));

return om.core.root.call(null,(function (data,owner){
if(typeof lg_checkers.ui.t_lg_checkers$ui18820 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
lg_checkers.ui.t_lg_checkers$ui18820 = (function (bootstrap_ui,data,owner,meta18821){
this.bootstrap_ui = bootstrap_ui;
this.data = data;
this.owner = owner;
this.meta18821 = meta18821;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
lg_checkers.ui.t_lg_checkers$ui18820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18822,meta18821__$1){
var self__ = this;
var _18822__$1 = this;
return (new lg_checkers.ui.t_lg_checkers$ui18820(self__.bootstrap_ui,self__.data,self__.owner,meta18821__$1));
});

lg_checkers.ui.t_lg_checkers$ui18820.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18822){
var self__ = this;
var _18822__$1 = this;
return self__.meta18821;
});

lg_checkers.ui.t_lg_checkers$ui18820.prototype.om$core$IRender$ = true;

lg_checkers.ui.t_lg_checkers$ui18820.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.h2(null,om.util.force_children.call(null,(("Mouse clicks: " + cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.app_state),new cljs.core.Keyword(null,"number-of-mouse-clicks","number-of-mouse-clicks",-225975392))) + ((". Captured pieces: " + cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.app_state),new cljs.core.Keyword(null,"captured-pieces","captured-pieces",-1406669063))) + (cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.app_state),new cljs.core.Keyword(null,"user-is-allowed-to-move","user-is-allowed-to-move",1540192799)))?". Make your move!":". Please wait 2s (AI thinking very hard!) and click around...")))));
});

lg_checkers.ui.t_lg_checkers$ui18820.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"bootstrap-ui","bootstrap-ui",1122157491,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta18821","meta18821",1209019065,null)], null);
});

lg_checkers.ui.t_lg_checkers$ui18820.cljs$lang$type = true;

lg_checkers.ui.t_lg_checkers$ui18820.cljs$lang$ctorStr = "lg-checkers.ui/t_lg_checkers$ui18820";

lg_checkers.ui.t_lg_checkers$ui18820.cljs$lang$ctorPrWriter = (function (this__6857__auto__,writer__6858__auto__,opt__6859__auto__){
return cljs.core._write.call(null,writer__6858__auto__,"lg-checkers.ui/t_lg_checkers$ui18820");
});

lg_checkers.ui.__GT_t_lg_checkers$ui18820 = (function lg_checkers$ui$bootstrap_ui_$___GT_t_lg_checkers$ui18820(bootstrap_ui__$1,data__$1,owner__$1,meta18821){
return (new lg_checkers.ui.t_lg_checkers$ui18820(bootstrap_ui__$1,data__$1,owner__$1,meta18821));
});

}

return (new lg_checkers.ui.t_lg_checkers$ui18820(lg_checkers$ui$bootstrap_ui,data,owner,cljs.core.PersistentArrayMap.EMPTY));
}),lg_checkers.board.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("movement-state")], null));
});
lg_checkers.ui.bootstrap_ui.call(null);

//# sourceMappingURL=ui.js.map