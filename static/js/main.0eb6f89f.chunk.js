(this["webpackJsonppathfinder-visualizer"]=this["webpackJsonppathfinder-visualizer"]||[]).push([[0],{141:function(t,e,r){},168:function(t,e,r){t.exports=r(313)},190:function(t,e,r){},191:function(t,e,r){},313:function(t,e,r){"use strict";r.r(e),r.d(e,"store",(function(){return Wt}));var a=r(0),n=r.n(a),i=r(29),s=r.n(i),o=r(22),c=r(45),u=r(21),l=21,d=50,h=10,p=5,f=10,v=45,S={show:!1,wall:0,unvisited:l*d-2,visited:0,backtrack:0,frontier:0,path:0},b=r(13),m=r.n(b),g=r(20),E=r(37),k=r.n(E),w=r(46),O=function(t){return{type:"UPDATE_STATISTICS",payload:t}},N=function(t){return{type:"RESET_STATISTICS",payload:t}},y=l,A=d,T=f,x=v;function _(t){return new Promise((function(e){return setTimeout(e,t)}))}var D=function(t,e){var r=[];if(e.row>0){var a=t[e.row-1][e.col];r.push(a)}if(e.col<A-1){var n=t[e.row][e.col+1];r.push(n)}if(e.row<y-1){var i=t[e.row+1][e.col];r.push(i)}if(e.col>0){var s=t[e.row][e.col-1];r.push(s)}return r},P=function(){return"RUNNING"===Wt.getState().algorithmStatus},R=function(){return"PAUSED"===Wt.getState().algorithmStatus},C=function(){return"STOPPED"===Wt.getState().algorithmStatus},j=function(){return Wt.getState().isShowingPath};function F(t,e,r){return I.apply(this,arguments)}function I(){return(I=Object(g.a)(m.a.mark((function t(e,r,a){var n,i,s,o;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Wt.dispatch({type:"SHOWING_PATH"}),n=e[T][x],i=n,s=new k.a;case 4:if(void 0===i){t.next=11;break}if(s.push(i),i.previousNode){t.next=8;break}return t.abrupt("break",11);case 8:i=e[i.previousNode.row][i.previousNode.col],t.next=4;break;case 11:if(s.isEmpty()){t.next=21;break}if(!C()&&j()){t.next=14;break}return t.abrupt("return");case 14:return o=s.pop(),r(o.row,o.col),a(e),t.next=19,_(20);case 19:t.next=11;break;case 21:Wt.dispatch({type:"NOT_SHOWING_PATH"});case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var H=h,B=p,G=f,L=v,M=l,W=d;function V(t,e){return{row:t,col:e,isStart:t===H&&e===B,isFinish:t===G&&e===L,distance:1/0,isVisited:!1,isWall:!1,isFrontier:!1,isHead:!1,isBacktrack:!1,previousNode:null,isPath:!1,hCost:(r=t,a=e,n=G,i=L,Math.abs(r-n)+Math.abs(a-i)),gCost:null,fCost:null};var r,a,n,i}function U(){for(var t=[],e=0;e<M;e++){for(var r=[],a=0;a<W;a++)r.push(V(e,a));t.push(r)}return t}function q(t,e,r){var a=r.slice(),n=a[t][e],i=Object(u.a)({},n,{isWall:!n.isWall});return a[t][e]=i,a}function K(t,e,r){var a=r.slice(),n=a[t][e],i=Object(u.a)({},n,{isFrontier:!0});return a[t][e]=i,a}function X(t,e,r){var a=r.slice(),n=a[t][e],i=Object(u.a)({},n,{isVisited:!0,isFrontier:!1});return a[t][e]=i,a}function z(t,e,r){var a=r.slice(),n=a[t][e],i=Object(u.a)({},n,{isPath:!0});return a[t][e]=i,a}function J(t){for(var e=U(),r=0;r<M;r++)for(var a=0;a<W;a++){var n=t[r][a];n.isFinish||n.isStart||(e[r][a].isWall=n.isWall)}return e}function Q(t,e,r){var a=r.slice(),n=a[t][e],i=Object(u.a)({},n,{isHead:!0});return a[t][e]=i,a}function Y(t,e,r){var a=r.slice(),n=a[t][e],i=Object(u.a)({},n,{isHead:!1});return a[t][e]=i,a}function Z(t,e){for(var r=e.slice(),a=0;a<t.length;a++){var n=t[a],i=n.row,s=n.col,o=r[i][s],c=Object(u.a)({},o,{isBacktrack:!0});r[i][s]=c}return r}function $(t,e){return(t*M+e).toString()}function tt(t,e){for(var r=Object(u.a)({},S),a=0;a<M;a++)for(var n=0;n<W;n++){var i=t[a][n];i.isWall&&r.wall++,i.isVisited&&r.visited++,i.isBacktrack&&r.backtrack++,i.isFrontier&&r.frontier++,i.isPath&&r.path++}return r.unvisited=M*W-2-r.wall-r.visited-r.backtrack-r.frontier,r.show=e,r}function et(t,e){var r=Object(u.a)({},S);return e||(r.wall=t,r.unvisited=r.unvisited-t),r}var rt=Object(c.b)({statistics:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"UPDATE_STATISTICS":return tt(e.payload,t.show);case"RESET_STATISTICS":return et(t.wall,e.payload);case"SHOW_STATISTICS":return Object(u.a)({},S,{show:!0});case"HIDE_STATISTICS":return Object(u.a)({},S,{show:!1});default:return t}},algorithmStatus:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"STOPPED",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"RUN_ALGORITHM":return"RUNNING";case"STOP_ALGORITHM":return"STOPPED";case"PAUSE_ALGORITHM":return"PAUSED";case"COMPLETE_ALGORITHM":return"COMPLETE";default:return t}},selectedAlgorithm:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"none",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"BFS":return"BFS";case"DFS":return"DFS";case"ASTAR":return"ASTAR";case"GREED":return"GREED";default:return t}},isShowingPath:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SHOWING_PATH":return!0;case"NOT_SHOWING_PATH":return!1;default:return t}},grid:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U(),e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"TOOGLE_WALL_NODE":return q(e.payload.row,e.payload.col,t);case"TOGGLE_FRONTIER_NDOE":return K(e.payload.row,e.payload.col,t);case"TOGGLE_VISITED_NODE":return X(e.payload.row,e.payload.col,t);case"TOGGLE_PATH_NODE":return z(e.payload.row,e.payload.col,t);case"SHOW_INITIAL_BOARD":return U();case"RESET_BOARD_WITH_WALLS":return J(t);case"MARK_HEAD_NODE":return Q(e.payload.row,e.payload.col,t);case"UNMARK_HEAD_NODE":return Y(e.payload.row,e.payload.col,t);case"MARK_BACKTRACK_NODE":return Z(e.payload.array,t);default:return t}},dataStructure:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"RESET_DATA_STRUCTURE":return null;case"SET_DATA_STRUCTURE":return e.payload;default:return t}},isMousePressed:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"PRESSED":return!0;case"NOT_PRESSED":return!1;default:return t}}}),at=r(17),nt=r(18),it=r(24),st=r(25),ot=(r(190),Object(o.b)((function(t,e){var r=t.grid[e.row][e.col];return{isStart:r.isStart,isFinish:r.isFinish,isWall:r.isWall,isFrontier:r.isFrontier,isVisited:r.isVisited,isPath:r.isPath,isHead:r.isHead,isBacktrack:r.isBacktrack,isMousePressed:t.isMousePressed,hCost:r.hCost,gCost:r.gCost,fCost:r.fCost,selectedAlgorithm:t.selectedAlgorithm,grid:t.grid}}),(function(t,e){return{onMouseDown:function(r){return function(t,e,r,a){r(function(t,e){return{type:"TOOGLE_WALL_NODE",payload:{row:t,col:e}}}(t,e)),r({type:"PRESSED"}),r(O(a))}(e.row,e.col,t,r)},mouseIsNotPressed:function(){return t({type:"NOT_PRESSED"})}}}))((function(t){var e=t.row,r=t.col,a=t.isStart,i=t.isFinish,s=t.isWall,o=t.isHead,c=t.isVisited,u=t.isFrontier,l=t.isPath,d=t.isBacktrack,h=t.isMousePressed,p=t.onMouseDown,f=t.mouseIsNotPressed,v=t.fCost,S=t.selectedAlgorithm,b=t.grid,m=i?"node-finish":a?"node-start":l?"node-path":s?"node-wall":o?"node-head":d?"node-backtrack":c?"node-visited":u?"node-frontier":"",g="ASTAR"!==S&&"GREED"!==S||null===v?"":v;return n.a.createElement("div",{id:"node-".concat(e,"-").concat(r),className:"node ".concat(m),onMouseDown:u||c||i||a?function(){}:function(){return p(b)},onMouseUp:f,onMouseEnter:!h||s||u||c||i||a?function(){}:function(){return p(b)}},g)}))),ct=(r(191),function(t){Object(st.a)(r,t);var e=Object(it.a)(r);function r(){return Object(at.a)(this,r),e.apply(this,arguments)}return Object(nt.a)(r,[{key:"render",value:function(){var t=this.props.grid;return n.a.createElement("div",{className:"grid"},t.map((function(t,e){return n.a.createElement("div",{className:"grid-row",key:e},t.map((function(t,r){return n.a.createElement(ot,{key:$(e,r),row:e,col:r})})))})))}}]),r}(n.a.Component)),ut=Object(o.b)((function(t){return{grid:t.grid}}))(ct),lt=r(53),dt=r(143),ht=r.n(dt),pt=h,ft=p,vt=f,St=v,bt=function(){function t(e,r,a,n,i){Object(at.a)(this,t),this.toggleVisitedNode=e,this.toggleFrontierNode=r,this.togglePathNode=a,this.setDataStructure=n,this.updateStatistics=i}return Object(nt.a)(t,[{key:"run",value:function(){var t=Object(g.a)(m.a.mark((function t(e,r){var a,n,i,s,o;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:null===r&&(r=new ht.a,a=e[pt][ft],r.enqueue(a));case 1:if(r.isEmpty()||!P()){t.next=31;break}if((n=r.dequeue()).isFrontier=!1,n.isVisited=!0,this.toggleVisitedNode(n.row,n.col),n.row!==vt||n.col!==St){t.next=10;break}return t.next=9,F(e,this.togglePathNode,this.updateStatistics);case 9:return t.abrupt("return");case 10:i=D(e,n),s=0;case 12:if(!(s<i.length)){t.next=26;break}if((o=i[s]).isWall||o.isVisited||o.isFrontier){t.next=23;break}if(n.row!==vt||n.col!==St){t.next=19;break}return t.next=18,F(e,this.togglePathNode,this.updateStatistics);case 18:return t.abrupt("return");case 19:o.isFrontier=!0,o.previousNode={row:n.row,col:n.col},this.toggleFrontierNode(o.row,o.col),r.enqueue(o);case 23:s++,t.next=12;break;case 26:return this.updateStatistics(e),t.next=29,_(0);case 29:t.next=1;break;case 31:if(!R()){t.next=34;break}return this.setDataStructure(r),t.abrupt("return");case 34:if(!C()){t.next=36;break}return t.abrupt("return");case 36:case"end":return t.stop()}}),t,this)})));return function(e,r){return t.apply(this,arguments)}}()}]),t}(),mt=h,gt=p,Et=f,kt=v,wt=function(){function t(e,r,a,n,i,s,o,c){Object(at.a)(this,t),this.toggleVisitedNode=e,this.toggleFrontierNode=r,this.togglePathNode=a,this.markHeadNode=n,this.unmarkHeadNode=i,this.markBacktrackNodes=s,this.setDataStructure=o,this.updateStatistics=c}return Object(nt.a)(t,[{key:"run",value:function(){var t=Object(g.a)(m.a.mark((function t(e,r){var a,n,i,s,o,c,u,l,d,h,p;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=null,n=null,i=null,null===r?(a=new k.a,s=e[mt][gt],a.push(s),n=new k.a,i=!1):(a=r.unvisitedStack,n=r.visitedStack,i=r.wasBacktracking);case 4:if(a.isEmpty()||!P()){t.next=40;break}if(!i){t.next=12;break}return t.next=8,this.backtrack(n,a,e);case 8:return i=t.sent,t.next=11,_(20);case 11:return t.abrupt("continue",4);case 12:if(o=a.pop(),a=this.removeFromStack(a,o),o.isVisited=!0,o.isHead=!0,this.markHeadNode(o.row,o.col),this.toggleVisitedNode(o.row,o.col),null!==o.previousNode&&(c=o.previousNode,u=c.row,l=c.col,e[u][l].isHead=!1,this.unmarkHeadNode(u,l)),o.row!==Et||o.col!==kt){t.next=23;break}return t.next=22,F(e,this.togglePathNode,this.updateStatistics);case 22:return t.abrupt("return");case 23:for(d=D(e,o),h=d.length-1;h>=0;h--)(p=d[h]).isWall||p.isVisited||p.isFrontier||(p.previousNode={row:o.row,col:o.col},a.push(p));if(n.push(o),0!==d.filter((function(t){return!t.isWall&&!t.isVisited&&!t.isFrontier})).length){t.next=35;break}return o.isHead=!1,this.unmarkHeadNode(o.row,o.col),t.next=32,_(20);case 32:return t.next=34,this.backtrack(n,a,e);case 34:i=t.sent;case 35:return this.updateStatistics(e),t.next=38,_(40);case 38:t.next=4;break;case 40:if(!R()){t.next=43;break}return this.setDataStructure({unvisitedStack:a,visitedStack:n,wasBacktracking:i}),t.abrupt("return");case 43:if(!C()){t.next=45;break}return t.abrupt("return");case 45:case"end":return t.stop()}}),t,this)})));return function(e,r){return t.apply(this,arguments)}}()},{key:"backtrack",value:function(){var t=Object(g.a)(m.a.mark((function t(e,r,a){var n,i,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=[];case 1:if(e.isEmpty()||r.isEmpty()||!P()){t.next=14;break}if(i=e.pop(),s=(s=D(a,i)).filter((function(t){return!t.isWall&&!t.isVisited&&!t.isFrontier})),!this.contains(s,r.peek())){t.next=11;break}return e.push(i),this.markBacktrackNodes(n),t.abrupt("return");case 11:n.push(i);case 12:t.next=1;break;case 14:case"end":return t.stop()}}),t,this)})));return function(e,r,a){return t.apply(this,arguments)}}()},{key:"contains",value:function(t,e){for(var r=0;r<t.length;r++){var a=t[r];if(a.row===e.row&&a.col===e.col)return!0}return!1}},{key:"removeFromStack",value:function(t,e){for(var r=new k.a,a=new k.a;!t.isEmpty();){var n=t.pop();n.row===e.row&&n.col===e.col||a.push(n)}for(;!a.isEmpty();)r.push(a.pop());return r}}]),t}(),Ot=h,Nt=p,yt=f,At=v,Tt=function(){function t(e,r,a,n,i){Object(at.a)(this,t),this.toggleVisitedNode=e,this.toggleFrontierNode=r,this.togglePathNode=a,this.setDataStructure=n,this.updateStatistics=i}return Object(nt.a)(t,[{key:"run",value:function(){var t=Object(g.a)(m.a.mark((function t(e,r){var a,n,i,s,o,c,u;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:null===r&&(r=new w.MinPriorityQueue({priority:function(t){return t.fCost}}),(a=e[Ot][Nt]).gCost=0,a.fCost=a.gCost+a.hCost,r.enqueue(a));case 1:if(r.isEmpty()||!P()){t.next=31;break}if((n=r.dequeue().element).isFrontier=!1,n.isVisited=!0,this.toggleVisitedNode(n.row,n.col),n.row!==yt||n.col!==At){t.next=10;break}return t.next=9,F(e,this.togglePathNode,this.updateStatistics);case 9:return t.abrupt("return");case 10:i=D(e,n),s=0;case 12:if(!(s<i.length)){t.next=26;break}if((o=i[s]).isWall||o.isVisited){t.next=23;break}if(n.row!==yt||n.col!==At){t.next=19;break}return t.next=18,F(e,this.togglePathNode,this.updateStatistics);case 18:return t.abrupt("return");case 19:c=n.gCost+1,u=c+o.hCost,null!==o.gCost?u<o.fCost&&(o.gCost=c,o.fCost=u,o.previousNode={row:n.row,col:n.col}):(o.gCost=c,o.fCost=u,r.enqueue(o),o.isFrontier=!0,o.previousNode={row:n.row,col:n.col}),this.toggleFrontierNode(o.row,o.col);case 23:s++,t.next=12;break;case 26:return this.updateStatistics(e),t.next=29,_(40);case 29:t.next=1;break;case 31:if(!R()){t.next=34;break}return this.setDataStructure(r),t.abrupt("return");case 34:if(!C()){t.next=36;break}return t.abrupt("return");case 36:case"end":return t.stop()}}),t,this)})));return function(e,r){return t.apply(this,arguments)}}()}]),t}(),xt=h,_t=p,Dt=f,Pt=v,Rt=function(){function t(e,r,a,n,i){Object(at.a)(this,t),this.toggleVisitedNode=e,this.toggleFrontierNode=r,this.togglePathNode=a,this.setDataStructure=n,this.updateStatistics=i}return Object(nt.a)(t,[{key:"run",value:function(){var t=Object(g.a)(m.a.mark((function t(e,r){var a,n,i,s,o;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:null===r&&(r=new w.MinPriorityQueue({priority:function(t){return t.fCost}}),(a=e[xt][_t]).fCost=a.hCost,r.enqueue(a));case 1:if(r.isEmpty()||!P()){t.next=32;break}if((n=r.dequeue().element).isFrontier=!1,n.isVisited=!0,this.toggleVisitedNode(n.row,n.col),n.row!==Dt||n.col!==Pt){t.next=10;break}return t.next=9,F(e,this.togglePathNode,this.updateStatistics);case 9:return t.abrupt("return");case 10:i=D(e,n),s=0;case 12:if(!(s<i.length)){t.next=27;break}if((o=i[s]).isWall||o.isVisited){t.next=24;break}if(n.row!==Dt||n.col!==Pt){t.next=19;break}return t.next=18,F(e,this.togglePathNode,this.updateStatistics);case 18:return t.abrupt("return");case 19:o.isFrontier=!0,o.previousNode={row:n.row,col:n.col},this.toggleFrontierNode(o.row,o.col),o.fCost=o.hCost,r.enqueue(o);case 24:s++,t.next=12;break;case 27:return this.updateStatistics(e),t.next=30,_(40);case 30:t.next=1;break;case 32:if(!R()){t.next=35;break}return this.setDataStructure(r),t.abrupt("return");case 35:if(!C()){t.next=37;break}return t.abrupt("return");case 37:case"end":return t.stop()}}),t,this)})));return function(e,r){return t.apply(this,arguments)}}()}]),t}(),Ct=r(320),jt=[{key:1,text:"Breadth First Search (BFS)",value:"BFS"},{key:2,text:"Depth First Search (DFS)",value:"DFS"},{key:3,text:"A* Search",value:"ASTAR"},{key:4,text:"Greedy Best-First Search",value:"GREED"}],Ft=function(t){Object(st.a)(r,t);var e=Object(it.a)(r);function r(){return Object(at.a)(this,r),e.apply(this,arguments)}return Object(nt.a)(r,[{key:"render",value:function(){var t=this,e="none"===this.props.selectedAlgorithm?"Select Algorithm":"BFS"===this.props.selectedAlgorithm?"Breadth First Search (BFS)":"DFS"===this.props.selectedAlgorithm?"Depth First Search (BFS)":"ASTAR"===this.props.selectedAlgorithm?"A* Search":"GREED"===this.props.selectedAlgorithm?"Greedy Best-First Search":"Select Algorithm",r="STOPPED"!==this.props.algorithmStatus;return n.a.createElement(Ct.a,{fluid:!0,text:e,options:jt,simple:!0,item:!0,onChange:function(e,r){t.props.onChange(r.value)},disabled:r})}}]),r}(n.a.Component),It=Object(o.b)((function(t){return{selectedAlgorithm:t.selectedAlgorithm,algorithmStatus:t.algorithmStatus}}),(function(t){return{onChange:function(e){t({type:e})}}}))(Ft),Ht=function(t){Object(st.a)(r,t);var e=Object(it.a)(r);function r(t){var a;return Object(at.a)(this,r),(a=e.call(this,t)).runSelectedAlgorithm=a.runSelectedAlgorithm.bind(Object(lt.a)(a)),a.clearBoard=a.clearBoard.bind(Object(lt.a)(a)),a}return Object(nt.a)(r,[{key:"runSelectedAlgorithm",value:function(){var t=Object(g.a)(m.a.mark((function t(){var e,r,a,n,i,s,o,c,u,l,d,h,p,f,v,S,b,g,E,k,w;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.props,r=e.selectedAlgorithm,a=e.runAlgorithm,n=e.pauseAlgorithm,i=e.completeAlgorithm,s=e.grid,o=e.dataStructure,c=e.toggleVisitedNode,u=e.toggleFrontierNode,l=e.togglePathNode,d=e.setDataStructure,h=e.isShowingPath,p=e.markHeadNode,f=e.unmarkHeadNode,v=e.algorithmStatus,S=e.markBacktrackNodes,b=e.updateStatistics,"none"!==r&&!h&&"COMPLETE"!==v){t.next=3;break}return t.abrupt("return");case 3:if(!P()){t.next=6;break}return n(),t.abrupt("return");case 6:a(),t.t0=r,t.next="BFS"===t.t0?10:"DFS"===t.t0?14:"ASTAR"===t.t0?18:"GREED"===t.t0?22:26;break;case 10:return g=new bt(c,u,l,d,b),t.next=13,g.run(s,o);case 13:return t.abrupt("break",27);case 14:return E=new wt(c,u,l,p,f,S,d,b),t.next=17,E.run(s,o);case 17:return t.abrupt("break",27);case 18:return k=new Tt(c,u,l,d,b),t.next=21,k.run(s,o);case 21:return t.abrupt("break",27);case 22:return w=new Rt(c,u,l,d,b),t.next=25,w.run(s,o);case 25:case 26:return t.abrupt("break",27);case 27:P()&&i();case 28:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"clearBoard",value:function(t){this.props.notShowingPath(),this.props.stopAlgorithm(),this.props.resetDataStructure(),this.props.resetStatistics(t),t?this.props.showInitialBoard():this.props.resetBoardWithWalls()}},{key:"render",value:function(){var t=this,e=this.props,r=e.selectedAlgorithm,a=e.algorithmStatus,i=e.isShowingPath,s="none"===r||i||"COMPLETE"===a?"active item":"item",o="Run";return("RUNNING"===a&&i||"COMPLETE"===a)&&(o="Complete"),"RUNNING"!==a||i||(o="Pause"),n.a.createElement("div",{className:"ui four item menu"},n.a.createElement("a",{onClick:this.runSelectedAlgorithm,className:s},o,"!"),n.a.createElement(It,null),n.a.createElement("a",{onClick:function(){return t.clearBoard(!1)},className:"item"},"Clear Path"),n.a.createElement("a",{onClick:function(){return t.clearBoard(!0)},className:"item"},"Clear Board"))}}]),r}(n.a.Component),Bt=Object(o.b)((function(t){return{grid:t.grid,dataStructure:t.dataStructure,selectedAlgorithm:t.selectedAlgorithm,algorithmStatus:t.algorithmStatus,isShowingPath:t.isShowingPath,statistics:t.statistics}}),(function(t){return{showInitialBoard:function(){return t({type:"SHOW_INITIAL_BOARD"})},runAlgorithm:function(){return t({type:"RUN_ALGORITHM"})},stopAlgorithm:function(){return t({type:"STOP_ALGORITHM"})},pauseAlgorithm:function(){return t({type:"PAUSE_ALGORITHM"})},completeAlgorithm:function(){return t({type:"COMPLETE_ALGORITHM"})},toggleVisitedNode:function(e,r){return t(function(t,e){return{type:"TOGGLE_VISITED_NODE",payload:{row:t,col:e}}}(e,r))},toggleFrontierNode:function(e,r){return t(function(t,e){return{type:"TOGGLE_FRONTIER_NODE",payload:{row:t,col:e}}}(e,r))},togglePathNode:function(e,r){return t(function(t,e){return{type:"TOGGLE_PATH_NODE",payload:{row:t,col:e}}}(e,r))},resetDataStructure:function(){return t({type:"RESET_DATA_STRUCTURE"})},setDataStructure:function(e){return t(function(t){return{type:"SET_DATA_STRUCTURE",payload:t}}(e))},notShowingPath:function(){return t({type:"NOT_SHOWING_PATH"})},markHeadNode:function(e,r){return t(function(t,e){return{type:"MARK_HEAD_NODE",payload:{row:t,col:e}}}(e,r))},unmarkHeadNode:function(e,r){return t(function(t,e){return{type:"UNMARK_HEAD_NODE",payload:{row:t,col:e}}}(e,r))},resetBoardWithWalls:function(){return t({type:"RESET_BOARD_WITH_WALLS"})},markBacktrackNodes:function(e){return t(function(t){return{type:"MARK_BACKTRACK_NODE",payload:{array:t}}}(e))},updateStatistics:function(e){return t(O(e))},resetStatistics:function(e){return t(N(e))},showStatistics:function(){return t(N())},hideStatistics:function(){return t({type:"HIDE_STATISTICS"})}}}))(Ht),Gt=function(t){Object(st.a)(r,t);var e=Object(it.a)(r);function r(){return Object(at.a)(this,r),e.apply(this,arguments)}return Object(nt.a)(r,[{key:"render",value:function(){var t=this.props.statistics,e=(t.show,t.unvisited),r=t.visited,a=t.wall,i=t.backtrack,s=t.frontier,o=t.path,c=function(t){return 0===t?"":"".concat(t," ")};return n.a.createElement("div",{style:{width:"85%",margin:"auto",marginTop:"2vh"}},n.a.createElement("div",{className:"ui small eight statistics"},n.a.createElement("div",{class:"statistic"},n.a.createElement("div",{class:"value"},n.a.createElement("div",{className:"node node-start",style:{border:"2px solid white",borderRadius:"5px"}})),n.a.createElement("div",{class:"label"},"start")),n.a.createElement("div",{class:"statistic"},n.a.createElement("div",{class:"value"},n.a.createElement("div",{className:"node node-finish",style:{border:"2px solid white",borderRadius:"5px"}})),n.a.createElement("div",{class:"label"},"end")),n.a.createElement("div",{class:"statistic"},n.a.createElement("div",{class:"value"},c(e)," ",n.a.createElement("div",{className:"node node-unvisited",style:{border:"2px solid white",borderRadius:"5px"}})),n.a.createElement("div",{class:"label"},n.a.createElement("div",null,"unvisited"))),n.a.createElement("div",{class:"statistic"},n.a.createElement("div",{class:"value"},c(a)," ",n.a.createElement("div",{className:"node node-wall",style:{border:"2px solid white",borderRadius:"5px"}})),n.a.createElement("div",{class:"label"},n.a.createElement("div",null,"wall"))),n.a.createElement("div",{class:"statistic"},n.a.createElement("div",{class:"value"},c(r)," ",n.a.createElement("div",{className:"node node-visited",style:{border:"2px solid white",borderRadius:"5px"}})),n.a.createElement("div",{class:"label"},n.a.createElement("div",null,"visited"))),n.a.createElement("div",{class:"statistic"},n.a.createElement("div",{class:"value"},c(i)," ",n.a.createElement("div",{className:"node node-backtrack",style:{border:"2px solid white",borderRadius:"5px"}})),n.a.createElement("div",{class:"label"},n.a.createElement("div",null,"backtrack"))),n.a.createElement("div",{class:"statistic"},n.a.createElement("div",{class:"value"},c(s)," ",n.a.createElement("div",{className:"node node-frontier",style:{border:"2px solid white",borderRadius:"5px"}})),n.a.createElement("div",{class:"label"},n.a.createElement("div",null,"frontier"))),n.a.createElement("div",{class:"statistic"},n.a.createElement("div",{class:"value"},c(o)," ",n.a.createElement("div",{className:"node node-path",style:{border:"2px solid white",borderRadius:"5px"}})),n.a.createElement("div",{class:"label"},n.a.createElement("div",null,"path")))))}}]),r}(n.a.Component),Lt=Object(o.b)((function(t){return{grid:t.grid,dataStructure:t.dataStructure,selectedAlgorithm:t.selectedAlgorithm,algorithmStatus:t.algorithmStatus,isShowingPath:t.isShowingPath,statistics:t.statistics}}),(function(t){return{updateStatistics:function(e){return t(O(e))},resetStatistics:function(){return t(N())}}}))(Gt),Mt=(r(141),function(t){Object(st.a)(r,t);var e=Object(it.a)(r);function r(){return Object(at.a)(this,r),e.apply(this,arguments)}return Object(nt.a)(r,[{key:"render",value:function(){return n.a.createElement("div",{id:"wrapper",className:"App"},n.a.createElement(Bt,null),n.a.createElement(ut,null),n.a.createElement(Lt,null))}}]),r}(n.a.Component)),Wt=Object(c.c)(rt,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(n.a.createElement(o.a,{store:Wt},n.a.createElement(Mt,null)),document.querySelector("#root"))}},[[168,1,2]]]);
//# sourceMappingURL=main.0eb6f89f.chunk.js.map