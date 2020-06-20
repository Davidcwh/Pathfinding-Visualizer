(this["webpackJsonppathfinder-visualizer"]=this["webpackJsonppathfinder-visualizer"]||[]).push([[0],{142:function(e,t,r){},168:function(e,t,r){e.exports=r(313)},194:function(e,t,r){},195:function(e,t,r){},313:function(e,t,r){"use strict";r.r(t),r.d(t,"store",(function(){return Re}));var n=r(0),i=r.n(n),a=r(30),o=r.n(a),s=r(22),u=r(47),c=r(19),l=21,d=50,h=10,p=5,f=10,v=45,E={wall:0,unvisited:l*d-2,visited:0,backtrack:0,frontier:0,path:0},g=r(15),N=r.n(g),m=r(21),b=r(33),w=r.n(b),S=r(35),O=function(e){for(var t=0;t<e.length;t++)e[t]()},k=function(e){return{type:"CALCULATE_HCOST",payload:{row:e.row,col:e.col}}},y=l,A=d;function T(e){return new Promise((function(t){return setTimeout(t,e)}))}var _=function(e,t){var r=[];if(t.row>0){var n=e[t.row-1][t.col];r.push(n)}if(t.col<A-1){var i=e[t.row][t.col+1];r.push(i)}if(t.row<y-1){var a=e[t.row+1][t.col];r.push(a)}if(t.col>0){var o=e[t.row][t.col-1];r.push(o)}return r},D=function(){return"RUNNING"===Re.getState().algorithmStatus},F=function(){return"PAUSED"===Re.getState().algorithmStatus},C=function(){return"STOPPED"===Re.getState().algorithmStatus},R=function(){return Re.getState().isShowingPath};function M(e,t,r,n){return P.apply(this,arguments)}function P(){return(P=Object(m.a)(N.a.mark((function e(t,r,n,i){var a,o,s,u;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Re.dispatch({type:"SHOWING_PATH"}),a=t[n][i],o=a,s=new w.a;case 4:if(void 0===o){e.next=11;break}if(s.push(o),o.previousNode){e.next=8;break}return e.abrupt("break",11);case 8:o=t[o.previousNode.row][o.previousNode.col],e.next=4;break;case 11:if(s.isEmpty()){e.next=20;break}if(!C()&&R()){e.next=14;break}return e.abrupt("return");case 14:return u=s.pop(),r(u.row,u.col),e.next=18,T(20);case 18:e.next=11;break;case 20:Re.dispatch({type:"NOT_SHOWING_PATH"});case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=function(e,t){for(var r=t.row,n=t.col,i=t.fCost,a=new S.MinPriorityQueue({priority:function(e){return e.fCost}}),o=!1;!e.isEmpty();){var s=e.dequeue().element;s.row===r&&s.col===n?(o=!0,s.fCost<=i?a.enqueue(s):a.enqueue(t)):a.enqueue(s)}return o||a.enqueue(t),a},H=r(13),j=r(14),G=r(100),I=r.n(G),V=function(){function e(t,r,n,i,a){Object(H.a)(this,e),this.startNode=t,this.toggleVisitedNode=r,this.toggleFrontierNode=n,this.togglePathNode=i,this.setDataStructure=a}return Object(j.a)(e,[{key:"run",value:function(){var e=Object(m.a)(N.a.mark((function e(t,r){var n,i,a,o,s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===r&&(r=new I.a,n=t[this.startNode.row][this.startNode.col],r.enqueue(n));case 1:if(r.isEmpty()||!D()){e.next=16;break}if((i=r.dequeue()).isFrontier=!1,i.isVisited=!0,this.toggleVisitedNode(i.row,i.col),!i.isFinish){e.next=10;break}return e.next=9,M(t,this.togglePathNode,i.row,i.col);case 9:return e.abrupt("return");case 10:for(a=_(t,i),o=0;o<a.length;o++)((s=a[o]).isWall||s.isVisited||s.isFrontier)&&!s.isFinish||(s.isFrontier=!0,s.previousNode={row:i.row,col:i.col},this.toggleFrontierNode(s.row,s.col),r.enqueue(s));return e.next=14,T(0);case 14:e.next=1;break;case 16:if(!F()){e.next=19;break}return this.setDataStructure(r),e.abrupt("return");case 19:if(!C()){e.next=21;break}return e.abrupt("return");case 21:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"rerun",value:function(e){var t=e.slice(),r=new I.a,n=t[this.startNode.row][this.startNode.col];for(r.enqueue(n);!r.isEmpty();){var i=r.dequeue();if(i.isFrontier=!1,i.isVisited=!0,i.isFinish){for(var a=i;void 0!==a&&(a.isPath=!0,a.previousNode);)a=t[a.previousNode.row][a.previousNode.col];return t}for(var o=_(t,i),s=0;s<o.length;s++){var u=o[s];(u.isWall||u.isVisited||u.isFrontier)&&!u.isFinish||(u.isFrontier=!0,u.previousNode={row:i.row,col:i.col},r.enqueue(u))}}return t}}]),e}(),L=function(){function e(t,r,n,i,a,o,s,u){Object(H.a)(this,e),this.startNode=t,this.toggleVisitedNode=r,this.toggleFrontierNode=n,this.togglePathNode=i,this.markHeadNode=a,this.unmarkHeadNode=o,this.markBacktrackNodes=s,this.setDataStructure=u}return Object(j.a)(e,[{key:"run",value:function(){var e=Object(m.a)(N.a.mark((function e(t,r){var n,i,a,o,s,u,c,l,d,h,p;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=null,i=null,a=null,null===r?(n=new w.a,o=t[this.startNode.row][this.startNode.col],n.push(o),i=new w.a,a=!1):(n=r.unvisitedStack,i=r.visitedStack,a=r.wasBacktracking);case 4:if(n.isEmpty()||!D()){e.next=39;break}if(!a){e.next=12;break}return e.next=8,this.backtrack(i,n,t);case 8:return a=e.sent,e.next=11,T(20);case 11:return e.abrupt("continue",4);case 12:if(s=n.pop(),n=this.removeFromStack(n,s),s.isVisited=!0,s.isHead=!0,this.markHeadNode(s.row,s.col),this.toggleVisitedNode(s.row,s.col),null!==s.previousNode&&(u=s.previousNode,c=u.row,l=u.col,t[c][l].isHead=!1,this.unmarkHeadNode(c,l)),!s.isFinish){e.next=23;break}return e.next=22,M(t,this.togglePathNode,s.row,s.col);case 22:return e.abrupt("return");case 23:for(d=_(t,s),h=d.length-1;h>=0;h--)((p=d[h]).isWall||p.isVisited||p.isFrontier)&&!p.isFinish||(p.previousNode={row:s.row,col:s.col},n.push(p));if(i.push(s),0!==d.filter((function(e){return!e.isWall&&!e.isVisited&&!e.isFrontier||e.isFinish})).length){e.next=35;break}return s.isHead=!1,this.unmarkHeadNode(s.row,s.col),e.next=32,T(20);case 32:return e.next=34,this.backtrack(i,n,t);case 34:a=e.sent;case 35:return e.next=37,T(40);case 37:e.next=4;break;case 39:if(!F()){e.next=42;break}return this.setDataStructure({unvisitedStack:n,visitedStack:i,wasBacktracking:a}),e.abrupt("return");case 42:if(!C()){e.next=44;break}return e.abrupt("return");case 44:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"backtrack",value:function(){var e=Object(m.a)(N.a.mark((function e(t,r,n){var i,a,o;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=[];case 1:if(t.isEmpty()||r.isEmpty()||!D()){e.next=14;break}if(a=t.pop(),o=(o=_(n,a)).filter((function(e){return!e.isWall&&!e.isVisited&&!e.isFrontier})),!this.contains(o,r.peek())){e.next=11;break}return t.push(a),this.markBacktrackNodes(i),e.abrupt("return");case 11:i.push(a);case 12:e.next=1;break;case 14:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"contains",value:function(e,t){for(var r=0;r<e.length;r++){var n=e[r];if(n.row===t.row&&n.col===t.col)return!0}return!1}},{key:"removeFromStack",value:function(e,t){for(var r=new w.a,n=new w.a;!e.isEmpty();){var i=e.pop();i.row===t.row&&i.col===t.col||n.push(i)}for(;!n.isEmpty();)r.push(n.pop());return r}},{key:"rerun",value:function(e){var t=e.slice(),r=new w.a,n=t[this.startNode.row][this.startNode.col];r.push(n);for(var i=new w.a;!r.isEmpty();){var a=r.pop();if(r=this.removeFromStack(r,a),a.isVisited=!0,a.isHead=!0,null!==a.previousNode){var o=a.previousNode,s=o.row,u=o.col;t[s][u].isHead=!1}if(a.isFinish){for(var c=a;void 0!==c&&(c.isPath=!0,c.previousNode);)c=t[c.previousNode.row][c.previousNode.col];return t}for(var l=_(t,a),d=l.length-1;d>=0;d--){var h=l[d];(h.isWall||h.isVisited||h.isFrontier)&&!h.isFinish||(h.previousNode={row:a.row,col:a.col},r.push(h))}i.push(a),0===l.filter((function(e){return!e.isWall&&!e.isVisited&&!e.isFrontier||e.isFinish})).length&&(a.isHead=!1,this.rerunBacktrack(i,r,t))}return t}},{key:"rerunBacktrack",value:function(e,t,r){for(var n=[];!e.isEmpty()&&!t.isEmpty();){var i=e.pop(),a=_(r,i);if(a=a.filter((function(e){return!e.isWall&&!e.isVisited&&!e.isFrontier||e.isFinish})),this.contains(a,t.peek()))return e.push(i),void n.map((function(e){return e.isBacktrack=!0}));n.push(i)}}}]),e}(),B=function(){function e(t,r,n,i,a){Object(H.a)(this,e),this.startNode=t,this.toggleVisitedNode=r,this.toggleFrontierNode=n,this.togglePathNode=i,this.setDataStructure=a}return Object(j.a)(e,[{key:"run",value:function(){var e=Object(m.a)(N.a.mark((function e(t,r){var n,i,a,o,s,u,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===r&&(r=new S.MinPriorityQueue({priority:function(e){return e.fCost}}),(n=t[this.startNode.row][this.startNode.col]).gCost=0,n.fCost=n.gCost+n.hCost,r.enqueue(n));case 1:if(r.isEmpty()||!D()){e.next=16;break}if((i=r.dequeue().element).isFrontier=!1,i.isVisited=!0,this.toggleVisitedNode(i.row,i.col),!i.isFinish){e.next=10;break}return e.next=9,M(t,this.togglePathNode,i.row,i.col);case 9:return e.abrupt("return");case 10:for(a=_(t,i),o=0;o<a.length;o++)(!(s=a[o]).isWall&&!s.isVisited||s.isFinish)&&(u=i.gCost+1,c=u+s.hCost,null!==s.gCost?c<s.fCost&&(s.gCost=u,s.fCost=c,s.previousNode={row:i.row,col:i.col},r=x(r,s)):(s.gCost=u,s.fCost=c,r.enqueue(s),s.isFrontier=!0,s.previousNode={row:i.row,col:i.col}),this.toggleFrontierNode(s.row,s.col));return e.next=14,T(40);case 14:e.next=1;break;case 16:if(!F()){e.next=19;break}return this.setDataStructure(r),e.abrupt("return");case 19:if(!C()){e.next=21;break}return e.abrupt("return");case 21:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"rerun",value:function(e){var t=e.slice(),r=new S.MinPriorityQueue({priority:function(e){return e.fCost}}),n=t[this.startNode.row][this.startNode.col];for(n.gCost=0,n.fCost=n.gCost+n.hCost,r.enqueue(n);!r.isEmpty();){var i=r.dequeue().element;if(i.isFrontier=!1,i.isVisited=!0,i.isFinish){for(var a=i;void 0!==a&&(a.isPath=!0,a.previousNode);)a=t[a.previousNode.row][a.previousNode.col];return t}for(var o=_(t,i),s=0;s<o.length;s++){var u=o[s];if(!u.isWall&&!u.isVisited||u.isFinish){var c=i.gCost+1,l=c+u.hCost;null!==u.gCost?l<u.fCost&&(u.gCost=c,u.fCost=l,u.previousNode={row:i.row,col:i.col},r=x(r,u)):(u.gCost=c,u.fCost=l,r.enqueue(u),u.isFrontier=!0,u.previousNode={row:i.row,col:i.col})}}}return t}}]),e}(),W=function(){function e(t,r,n,i,a){Object(H.a)(this,e),this.startNode=t,this.toggleVisitedNode=r,this.toggleFrontierNode=n,this.togglePathNode=i,this.setDataStructure=a}return Object(j.a)(e,[{key:"run",value:function(){var e=Object(m.a)(N.a.mark((function e(t,r){var n,i,a,o,s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===r&&(r=new S.MinPriorityQueue({priority:function(e){return e.fCost}}),(n=t[this.startNode.row][this.startNode.col]).fCost=n.hCost,r.enqueue(n));case 1:if(r.isEmpty()||!D()){e.next=16;break}if((i=r.dequeue().element).isFrontier=!1,i.isVisited=!0,this.toggleVisitedNode(i.row,i.col),!i.isFinish){e.next=10;break}return e.next=9,M(t,this.togglePathNode,i.row,i.col);case 9:return e.abrupt("return");case 10:for(a=_(t,i),o=0;o<a.length;o++)(!(s=a[o]).isWall&&!s.isVisited||s.isFinish)&&(s.isFrontier||(s.isFrontier=!0,s.previousNode={row:i.row,col:i.col},this.toggleFrontierNode(s.row,s.col),s.fCost=s.hCost,r=x(r,s)));return e.next=14,T(40);case 14:e.next=1;break;case 16:if(!F()){e.next=19;break}return this.setDataStructure(r),e.abrupt("return");case 19:if(!C()){e.next=21;break}return e.abrupt("return");case 21:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"rerun",value:function(e){var t=new S.MinPriorityQueue({priority:function(e){return e.fCost}}),r=e[this.startNode.row][this.startNode.col];for(r.fCost=r.hCost,t.enqueue(r);!t.isEmpty();){var n=t.dequeue().element;if(n.isFrontier=!1,n.isVisited=!0,n.isFinish){for(var i=n;void 0!==i&&(i.isPath=!0,i.previousNode);)i=e[i.previousNode.row][i.previousNode.col];return e}for(var a=_(e,n),o=0;o<a.length;o++){var s=a[o];(!s.isWall&&!s.isVisited||s.isFinish)&&(s.isFrontier||(s.isFrontier=!0,s.previousNode={row:n.row,col:n.col},s.fCost=s.hCost,t=x(t,s)))}}return e}}]),e}(),U=h,q=p,K=f,Q=v,X=l,z=d;function J(e,t){return{row:e,col:t,isStart:e===U&&t===q,isFinish:e===K&&t===Q,distance:1/0,isVisited:!1,isWall:!1,isFrontier:!1,isHead:!1,isBacktrack:!1,previousNode:null,isPath:!1,hCost:null,gCost:null,fCost:null}}function Y(){for(var e=[],t=0;t<X;t++){for(var r=[],n=0;n<z;n++)r.push(J(t,n));e.push(r)}return e}function Z(e){for(var t=e.slice(),r=0;r<X;r++)for(var n=0;n<z;n++){var i=t[r][n],a=J(r,n);a.isStart=i.isStart,a.isFinish=i.isFinish,t[r][n]=a}return t}function $(e,t,r){var n=r.slice(),i=n[e][t],a=Object(c.a)({},i,{isWall:!i.isWall});return n[e][t]=a,n}function ee(e,t,r){var n=r.slice(),i=n[e][t],a=Object(c.a)({},i,{isFrontier:!0});return n[e][t]=a,n}function te(e,t,r){var n=r.slice(),i=n[e][t],a=Object(c.a)({},i,{isVisited:!0,isFrontier:!1});return n[e][t]=a,n}function re(e,t,r){var n=r.slice(),i=n[e][t],a=Object(c.a)({},i,{isPath:!0});return n[e][t]=a,n}function ne(e){for(var t=e.slice(),r=0;r<X;r++)for(var n=0;n<z;n++){var i=t[r][n],a=J(r,n);a.isStart=i.isStart,a.isFinish=i.isFinish,a.isWall=i.isWall,t[r][n]=a}return t}function ie(e,t,r){var n=r.slice(),i=n[e][t],a=Object(c.a)({},i,{isHead:!0});return n[e][t]=a,n}function ae(e,t,r){var n=r.slice(),i=n[e][t],a=Object(c.a)({},i,{isHead:!1});return n[e][t]=a,n}function oe(e,t){for(var r=t.slice(),n=0;n<e.length;n++){var i=e[n],a=i.row,o=i.col,s=r[a][o],u=Object(c.a)({},s,{isBacktrack:!0});r[a][o]=u}return r}function se(e,t,r){var n=r.slice();return n[e.row][e.col].isStart=!0,n[t.row][t.col].isStart=!1,n}function ue(e,t,r){var n=r.slice();return n[e.row][e.col].isFinish=!0,n[t.row][t.col].isFinish=!1,n}function ce(e,t){return(e*X+t).toString()}function le(e){for(var t=Object(c.a)({},E),r=0;r<X;r++)for(var n=0;n<z;n++){var i=e[r][n];!i.isWall||i.isFinish||i.isStart||t.wall++,i.isVisited&&t.visited++,i.isBacktrack&&t.backtrack++,i.isFrontier&&t.frontier++,i.isPath&&t.path++}var a=X*z-2-t.wall-t.visited-t.frontier;return t.unvisited=a<=0?0:a,t}function de(e){for(var t=Z(e),r=0;r<X;r++)for(var n=0;n<z;n++){var i=t[r][n];i.hCost=null,i.isStart||i.isFinish||(i.isWall=Math.random()<.3)}return t}function he(e,t,r){for(var n,i,a,o,s=e.slice(),u=0;u<X;u++)for(var c=0;c<z;c++){s[u][c].hCost=(n=u,i=c,a=t,o=r,Math.abs(n-a)+Math.abs(i-o))}return s}function pe(e,t,r,n){switch(t){case"BFS":return new V(r).rerun(ne(e));case"DFS":return new L(r).rerun(ne(e));case"ASTAR":var i=new B(r),a=he(ne(e),n.row,n.col);return i.rerun(a);case"GREED":var o=new W(r),s=he(ne(e),n.row,n.col);return o.rerun(s);default:return e}}var fe={start:{row:h,col:p},isStartMoving:!1,end:{row:f,col:v},isEndMoving:!1},ve=Object(u.b)({algorithmStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"STOPPED",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RUN_ALGORITHM":return"RUNNING";case"STOP_ALGORITHM":return"STOPPED";case"PAUSE_ALGORITHM":return"PAUSED";case"COMPLETE_ALGORITHM":return"COMPLETE";default:return e}},selectedAlgorithm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"none",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BFS":return"BFS";case"DFS":return"DFS";case"ASTAR":return"ASTAR";case"GREED":return"GREED";default:return e}},isShowingPath:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOWING_PATH":return!0;case"NOT_SHOWING_PATH":return!1;default:return e}},board:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{grid:Y(),statistics:E},t=arguments.length>1?arguments[1]:void 0,r=e.grid;e.statistics;switch(t.type){case"TOOGLE_WALL_NODE":r=$(t.payload.row,t.payload.col,e.grid);break;case"TOGGLE_FRONTIER_NDOE":r=ee(t.payload.row,t.payload.col,e.grid);break;case"TOGGLE_VISITED_NODE":r=te(t.payload.row,t.payload.col,e.grid);break;case"TOGGLE_PATH_NODE":r=re(t.payload.row,t.payload.col,e.grid);break;case"SHOW_INITIAL_BOARD":r=Z(e.grid);break;case"RESET_BOARD_WITH_WALLS":r=ne(e.grid);break;case"MARK_HEAD_NODE":r=ie(t.payload.row,t.payload.col,e.grid);break;case"UNMARK_HEAD_NODE":r=ae(t.payload.row,t.payload.col,e.grid);break;case"MARK_BACKTRACK_NODE":r=oe(t.payload.array,e.grid);break;case"GENERATE_RANDOM_GRID":r=de(e.grid);break;case"SET_START_NODE":r=se(t.payload.newStart,t.payload.oldStart,e.grid);break;case"SET_END_NODE":r=ue(t.payload.newEnd,t.payload.oldEnd,e.grid);break;case"CALCULATE_HCOST":r=he(e.grid,t.payload.row,t.payload.col);break;case"RERUN_ALGORITHM":r=pe(e.grid,t.payload.selectedAlgorithm,t.payload.startNode,t.payload.endNode)}return{grid:r,statistics:le(r)}},dataStructure:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RESET_DATA_STRUCTURE":return null;case"SET_DATA_STRUCTURE":return t.payload;default:return e}},isMousePressed:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PRESSED":return!0;case"NOT_PRESSED":return!1;default:return e}},moveStartEnd:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_NODE_MOVING":return Object(c.a)({},e,{isStartMoving:!0});case"START_NODE_NOT_MOVING":return Object(c.a)({},e,{isStartMoving:!1});case"END_NODE_MOVING":return Object(c.a)({},e,{isEndMoving:!0});case"END_NODE_NOT_MOVING":return Object(c.a)({},e,{isEndMoving:!1});case"SET_START_NODE":return Object(c.a)({},e,{start:{row:t.payload.newStart.row,col:t.payload.newStart.col}});case"SET_END_NODE":return Object(c.a)({},e,{end:{row:t.payload.newEnd.row,col:t.payload.newEnd.col}});default:return e}}}),Ee=r(23),ge=r(24),Ne=r(26),me=(r(194),function(e){Object(ge.a)(r,e);var t=Object(Ee.a)(r);function r(e){var n;return Object(H.a)(this,r),(n=t.call(this,e)).onMouseDownHandler=n.onMouseDownHandler.bind(Object(Ne.a)(n)),n.onMouseEnterHandler=n.onMouseEnterHandler.bind(Object(Ne.a)(n)),n.onMouseUpHandler=n.onMouseUpHandler.bind(Object(Ne.a)(n)),n.onMouseLeaveHandler=n.onMouseLeaveHandler.bind(Object(Ne.a)(n)),n}return Object(j.a)(r,[{key:"onMouseDownHandler",value:function(){var e=this.props,t=e.isFrontier,r=e.isVisited,n=e.isFinish,i=e.isStart,a=e.dispatchMultipleActions,o=e.toggleWallNode,s=e.mouseIsPressed,u=e.startNodeMoving,c=e.endNodeMoving,l=e.algorithmStatus,d=[];t||r||n||i||d.push((function(){return o()})),!i||"STOPPED"!==l&&"COMPLETE"!==l||d.push((function(){return u(!0)})),!n||"STOPPED"!==l&&"COMPLETE"!==l||d.push((function(){return c(!0)})),d.push((function(){return s()})),a(d)}},{key:"onMouseUpHandler",value:function(){var e=this.props,t=e.mouseIsNotPressed,r=e.startNodeMoving,n=e.endNodeMoving,i=e.dispatchMultipleActions,a=[];a.push((function(){return t()})),a.push((function(){return r(!1)})),a.push((function(){return n(!1)})),i(a)}},{key:"onMouseEnterHandler",value:function(){var e=this.props,t=e.row,r=e.col,n=e.isFrontier,i=e.isVisited,a=e.isFinish,o=e.isStart,s=e.isWall,u=e.dispatchMultipleActions,c=e.toggleWallNode,l=e.isMousePressed,d=e.isStartMoving,h=e.isEndMoving,p=e.setStartNode,f=e.setEndNode,v=e.algorithmStatus,E=e.selectedAlgorithm,g=e.rerunAlgorithm,N=e.startNode,m=e.endNode,b=[];if(l){if(d){if(a)return;b.push((function(){return p({row:t,col:r},N)})),"COMPLETE"===v&&b.push((function(){return g(E,{row:t,col:r},m)}))}if(h){if(o)return;b.push((function(){return f({row:t,col:r},m)})),"COMPLETE"===v&&b.push((function(){return g(E,N,{row:t,col:r})}))}d||h||s||n||i||a||o||b.push((function(){return c()})),u(b)}}},{key:"onMouseLeaveHandler",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.row,r=e.col,n=e.isStart,a=e.isFinish,o=e.isWall,s=e.isHead,u=e.isVisited,c=e.isFrontier,l=e.isPath,d=e.isBacktrack,h=e.fCost,p=e.selectedAlgorithm,f=a?"node-finish":n?"node-start":l?"node-path":o?"node-wall":s?"node-head":d?"node-backtrack":u?"node-visited":c?"node-frontier":"",v="ASTAR"!==p&&"GREED"!==p||null===h?"":h;return i.a.createElement("div",{id:"node-".concat(t,"-").concat(r),className:"node ".concat(f),onMouseDown:this.onMouseDownHandler,onMouseUp:this.onMouseUpHandler,onMouseEnter:this.onMouseEnterHandler,onMouseLeave:this.onMouseLeaveHandler},v)}}]),r}(i.a.Component)),be=Object(s.b)((function(e,t){var r=e.board.grid[t.row][t.col],n=e.moveStartEnd;return{isStart:r.isStart,isFinish:r.isFinish,isWall:r.isWall,isFrontier:r.isFrontier,isVisited:r.isVisited,isPath:r.isPath,isHead:r.isHead,isBacktrack:r.isBacktrack,isMousePressed:e.isMousePressed,hCost:r.hCost,gCost:r.gCost,fCost:r.fCost,selectedAlgorithm:e.selectedAlgorithm,algorithmStatus:e.algorithmStatus,isStartMoving:n.isStartMoving,isEndMoving:n.isEndMoving,startNode:n.start,endNode:n.end}}),(function(e,t){return{toggleWallNode:function(){return e((r=t.row,n=t.col,{type:"TOOGLE_WALL_NODE",payload:{row:r,col:n}}));var r,n},mouseIsPressed:function(){return e({type:"PRESSED"})},mouseIsNotPressed:function(){return e({type:"NOT_PRESSED"})},dispatchMultipleActions:function(e){return O(e)},startNodeMoving:function(t){return e(function(e){return{type:e?"START_NODE_MOVING":"START_NODE_NOT_MOVING"}}(t))},endNodeMoving:function(t){return e(function(e){return{type:e?"END_NODE_MOVING":"END_NODE_NOT_MOVING"}}(t))},setStartNode:function(t,r){return e(function(e,t){return{type:"SET_START_NODE",payload:{newStart:e,oldStart:t}}}(t,r))},setEndNode:function(t,r){return e(function(e,t){return{type:"SET_END_NODE",payload:{newEnd:e,oldEnd:t}}}(t,r))},calculateHCost:function(t){return e(k(t))},rerunAlgorithm:function(t,r,n){return e(function(e,t,r){return{type:"RERUN_ALGORITHM",payload:{selectedAlgorithm:e,startNode:t,endNode:r}}}(t,r,n))}}}))(me),we=(r(195),function(e){Object(ge.a)(r,e);var t=Object(Ee.a)(r);function r(){return Object(H.a)(this,r),t.apply(this,arguments)}return Object(j.a)(r,[{key:"render",value:function(){var e=this.props.grid;return i.a.createElement("div",{className:"grid"},e.map((function(e,t){return i.a.createElement("div",{className:"grid-row",key:t},e.map((function(e,r){return i.a.createElement(be,{key:ce(t,r),row:t,col:r})})))})))}}]),r}(i.a.Component)),Se=Object(s.b)((function(e){return{grid:e.board.grid}}))(we),Oe=r(320),ke=[{key:1,text:"Breadth First Search (BFS)",value:"BFS"},{key:2,text:"Depth First Search (DFS)",value:"DFS"},{key:3,text:"A* Search",value:"ASTAR"},{key:4,text:"Greedy Best-First Search",value:"GREED"}],ye=function(e){Object(ge.a)(r,e);var t=Object(Ee.a)(r);function r(){return Object(H.a)(this,r),t.apply(this,arguments)}return Object(j.a)(r,[{key:"render",value:function(){var e=this,t="none"===this.props.selectedAlgorithm?"Select Algorithm":"BFS"===this.props.selectedAlgorithm?"Breadth First Search (BFS)":"DFS"===this.props.selectedAlgorithm?"Depth First Search (BFS)":"ASTAR"===this.props.selectedAlgorithm?"A* Search":"GREED"===this.props.selectedAlgorithm?"Greedy Best-First Search":"Select Algorithm",r="STOPPED"!==this.props.algorithmStatus;return i.a.createElement(Oe.a,{fluid:!0,text:t,options:ke,simple:!0,item:!0,onChange:function(t,r){e.props.onChange(r.value)},disabled:r})}}]),r}(i.a.Component),Ae=Object(s.b)((function(e){return{selectedAlgorithm:e.selectedAlgorithm,algorithmStatus:e.algorithmStatus}}),(function(e){return{onChange:function(t){e({type:t})}}}))(ye),Te=function(e){Object(ge.a)(r,e);var t=Object(Ee.a)(r);function r(e){var n;return Object(H.a)(this,r),(n=t.call(this,e)).runSelectedAlgorithm=n.runSelectedAlgorithm.bind(Object(Ne.a)(n)),n.clearBoard=n.clearBoard.bind(Object(Ne.a)(n)),n}return Object(j.a)(r,[{key:"runSelectedAlgorithm",value:function(){var e=Object(m.a)(N.a.mark((function e(){var t,r,n,i,a,o,s,u,c,l,d,h,p,f,v,E,g,m,b,w,S,O,k;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,r=t.selectedAlgorithm,n=t.runAlgorithm,i=t.pauseAlgorithm,a=t.completeAlgorithm,o=t.grid,s=t.dataStructure,u=t.toggleVisitedNode,c=t.toggleFrontierNode,l=t.togglePathNode,d=t.setDataStructure,h=t.isShowingPath,p=t.markHeadNode,f=t.unmarkHeadNode,v=t.algorithmStatus,E=t.markBacktrackNodes,g=t.startNode,m=t.endNode,b=t.calculateHCost,"none"!==r&&!h&&"COMPLETE"!==v){e.next=3;break}return e.abrupt("return");case 3:if(!D()){e.next=6;break}return i(),e.abrupt("return");case 6:C()&&b(m),n(),e.t0=r,e.next="BFS"===e.t0?11:"DFS"===e.t0?15:"ASTAR"===e.t0?19:"GREED"===e.t0?23:27;break;case 11:return w=new V(g,u,c,l,d),e.next=14,w.run(o,s);case 14:return e.abrupt("break",28);case 15:return S=new L(g,u,c,l,p,f,E,d),e.next=18,S.run(o,s);case 18:return e.abrupt("break",28);case 19:return O=new B(g,u,c,l,d),e.next=22,O.run(o,s);case 22:return e.abrupt("break",28);case 23:return k=new W(g,u,c,l,d),e.next=26,k.run(o,s);case 26:case 27:return e.abrupt("break",28);case 28:D()&&a();case 29:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"clearBoard",value:function(e){var t=this.props,r=t.notShowingPath,n=t.stopAlgorithm,i=t.resetDataStructure,a=t.showInitialBoard,o=t.resetBoardWithWalls,s=t.dispatchMultipleActions,u=[r,n,i];e?u.push(a):u.push(o),s(u)}},{key:"render",value:function(){var e=this,t=this.props,r=t.selectedAlgorithm,n=t.algorithmStatus,a=t.isShowingPath,o=t.generateRandomGrid,s="none"===r||a||"COMPLETE"===n?"active item":"item",u="STOPPED"===n,c=u?"item":"active item",l="Run";return("RUNNING"===n&&a||"COMPLETE"===n)&&(l="Complete"),"RUNNING"!==n||a||(l="Pause"),i.a.createElement("div",{className:"ui five item menu"},i.a.createElement("a",{onClick:u?o:function(){},className:c},"Generate Random Grid"),i.a.createElement(Ae,null),i.a.createElement("a",{onClick:this.runSelectedAlgorithm,className:s},l,"!"),i.a.createElement("a",{onClick:function(){return e.clearBoard(!1)},className:"item"},"Clear Path"),i.a.createElement("a",{onClick:function(){return e.clearBoard(!0)},className:"item"},"Clear Board"))}}]),r}(i.a.Component),_e=Object(s.b)((function(e){return{grid:e.board.grid,dataStructure:e.dataStructure,selectedAlgorithm:e.selectedAlgorithm,algorithmStatus:e.algorithmStatus,isShowingPath:e.isShowingPath,statistics:e.board.statistics,startNode:e.moveStartEnd.start,endNode:e.moveStartEnd.end}}),(function(e){return{showInitialBoard:function(t){return e({type:"SHOW_INITIAL_BOARD"})},runAlgorithm:function(){return e({type:"RUN_ALGORITHM"})},stopAlgorithm:function(){return e({type:"STOP_ALGORITHM"})},pauseAlgorithm:function(){return e({type:"PAUSE_ALGORITHM"})},completeAlgorithm:function(){return e({type:"COMPLETE_ALGORITHM"})},toggleVisitedNode:function(t,r){return e(function(e,t){return{type:"TOGGLE_VISITED_NODE",payload:{row:e,col:t}}}(t,r))},toggleFrontierNode:function(t,r){return e(function(e,t){return{type:"TOGGLE_FRONTIER_NODE",payload:{row:e,col:t}}}(t,r))},togglePathNode:function(t,r){return e(function(e,t){return{type:"TOGGLE_PATH_NODE",payload:{row:e,col:t}}}(t,r))},resetDataStructure:function(){return e({type:"RESET_DATA_STRUCTURE"})},setDataStructure:function(t){return e(function(e){return{type:"SET_DATA_STRUCTURE",payload:e}}(t))},notShowingPath:function(){return e({type:"NOT_SHOWING_PATH"})},markHeadNode:function(t,r){return e(function(e,t){return{type:"MARK_HEAD_NODE",payload:{row:e,col:t}}}(t,r))},unmarkHeadNode:function(t,r){return e(function(e,t){return{type:"UNMARK_HEAD_NODE",payload:{row:e,col:t}}}(t,r))},resetBoardWithWalls:function(t){return e({type:"RESET_BOARD_WITH_WALLS"})},markBacktrackNodes:function(t){return e(function(e){return{type:"MARK_BACKTRACK_NODE",payload:{array:e}}}(t))},generateRandomGrid:function(){return e({type:"GENERATE_RANDOM_GRID"})},dispatchMultipleActions:function(e){return O(e)},calculateHCost:function(t){return e(k(t))}}}))(Te),De=function(e){Object(ge.a)(r,e);var t=Object(Ee.a)(r);function r(){return Object(H.a)(this,r),t.apply(this,arguments)}return Object(j.a)(r,[{key:"render",value:function(){var e=this.props.statistics,t=e.unvisited,r=e.visited,n=e.wall,a=e.backtrack,o=e.frontier,s=e.path,u=function(e){return 0===e?"":"".concat(e," ")};return i.a.createElement("div",{style:{width:"85%",margin:"auto",marginTop:"2vh"}},i.a.createElement("div",{className:"ui small eight statistics"},i.a.createElement("div",{class:"statistic"},i.a.createElement("div",{class:"value"},i.a.createElement("div",{className:"node node-start",style:{border:"2px solid white",borderRadius:"5px"}})),i.a.createElement("div",{class:"label"},"start")),i.a.createElement("div",{class:"statistic"},i.a.createElement("div",{class:"value"},i.a.createElement("div",{className:"node node-finish",style:{border:"2px solid white",borderRadius:"5px"}})),i.a.createElement("div",{class:"label"},"end")),i.a.createElement("div",{class:"statistic"},i.a.createElement("div",{class:"value"},u(t)," ",i.a.createElement("div",{className:"node node-unvisited",style:{border:"2px solid white",borderRadius:"5px"}})),i.a.createElement("div",{class:"label"},i.a.createElement("div",null,"unvisited"))),i.a.createElement("div",{class:"statistic"},i.a.createElement("div",{class:"value"},u(n)," ",i.a.createElement("div",{className:"node node-wall",style:{border:"2px solid white",borderRadius:"5px"}})),i.a.createElement("div",{class:"label"},i.a.createElement("div",null,"wall"))),i.a.createElement("div",{class:"statistic"},i.a.createElement("div",{class:"value"},u(r)," ",i.a.createElement("div",{className:"node node-visited",style:{border:"2px solid white",borderRadius:"5px"}})),i.a.createElement("div",{class:"label"},i.a.createElement("div",null,"visited"))),i.a.createElement("div",{class:"statistic"},i.a.createElement("div",{class:"value"},u(a)," ",i.a.createElement("div",{className:"node node-backtrack",style:{border:"2px solid white",borderRadius:"5px"}})),i.a.createElement("div",{class:"label"},i.a.createElement("div",null,"backtrack"))),i.a.createElement("div",{class:"statistic"},i.a.createElement("div",{class:"value"},u(o)," ",i.a.createElement("div",{className:"node node-frontier",style:{border:"2px solid white",borderRadius:"5px"}})),i.a.createElement("div",{class:"label"},i.a.createElement("div",null,"frontier"))),i.a.createElement("div",{class:"statistic"},i.a.createElement("div",{class:"value"},u(s)," ",i.a.createElement("div",{className:"node node-path",style:{border:"2px solid white",borderRadius:"5px"}})),i.a.createElement("div",{class:"label"},i.a.createElement("div",null,"path")))))}}]),r}(i.a.Component),Fe=Object(s.b)((function(e){return{grid:e.board.grid,dataStructure:e.dataStructure,selectedAlgorithm:e.selectedAlgorithm,algorithmStatus:e.algorithmStatus,isShowingPath:e.isShowingPath,statistics:e.board.statistics}}))(De),Ce=(r(142),function(e){Object(ge.a)(r,e);var t=Object(Ee.a)(r);function r(){return Object(H.a)(this,r),t.apply(this,arguments)}return Object(j.a)(r,[{key:"render",value:function(){return i.a.createElement("div",{id:"wrapper",className:"App"},i.a.createElement(_e,null),i.a.createElement(Se,null),i.a.createElement(Fe,null))}}]),r}(i.a.Component)),Re=Object(u.c)(ve,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(i.a.createElement(s.a,{store:Re},i.a.createElement(Ce,null)),document.querySelector("#root"))}},[[168,1,2]]]);
//# sourceMappingURL=main.1da4301f.chunk.js.map