(this["webpackJsonppathfinder-visualizer"]=this["webpackJsonppathfinder-visualizer"]||[]).push([[0],{131:function(e,t,r){},158:function(e,t,r){e.exports=r(294)},167:function(e,t,r){},168:function(e,t,r){},294:function(e,t,r){"use strict";r.r(t),r.d(t,"store",(function(){return ye}));var n=r(0),a=r.n(n),i=r(25),o=r.n(i),s=r(21),c=r(43),u=r(32),l=21,d=50,h=10,p=5,f=10,m=45,g=h,v=p,E=f,S=m,k=l,O=d;function b(){for(var e,t,r=[],n=0;n<k;n++){for(var a=[],i=0;i<O;i++)a.push({row:e=n,col:t=i,isStart:e===g&&t===v,isFinish:e===E&&t===S,distance:1/0,isVisited:!1,isWall:!1,isFrontier:!1,isHead:!1,isBacktrack:!1,previousNode:null,isPath:!1});r.push(a)}return r}function N(e,t,r){var n=r.slice(),a=n[e][t],i=Object(u.a)({},a,{isWall:!a.isWall});return n[e][t]=i,n}function w(e,t,r){var n=r.slice(),a=n[e][t],i=Object(u.a)({},a,{isFrontier:!0});return n[e][t]=i,n}function y(e,t,r){var n=r.slice(),a=n[e][t],i=Object(u.a)({},a,{isVisited:!0,isFrontier:!1});return n[e][t]=i,n}function T(e,t,r){var n=r.slice(),a=n[e][t],i=Object(u.a)({},a,{isPath:!0});return n[e][t]=i,n}function A(e){for(var t=b(),r=0;r<k;r++)for(var n=0;n<O;n++){var a=e[r][n];a.isFinish||a.isStart||(t[r][n].isWall=a.isWall)}return t}function _(e,t,r){var n=r.slice(),a=n[e][t],i=Object(u.a)({},a,{isHead:!0});return n[e][t]=i,n}function D(e,t,r){var n=r.slice(),a=n[e][t],i=Object(u.a)({},a,{isHead:!1});return n[e][t]=i,n}function P(e,t){for(var r=t.slice(),n=0;n<e.length;n++){var a=e[n],i=a.row,o=a.col,s=r[i][o],c=Object(u.a)({},s,{isBacktrack:!0});r[i][o]=c}return r}function x(e,t){return(e*k+t).toString()}var R=Object(c.b)({algorithmStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"STOPPED",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RUN_ALGORITHM":return"RUNNING";case"STOP_ALGORITHM":return"STOPPED";case"PAUSE_ALGORITHM":return"PAUSED";case"COMPLETE_ALGORITHM":return"COMPLETE";default:return e}},selectedAlgorithm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"none",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BFS":return"BFS";case"DFS":return"DFS";default:return e}},isShowingPath:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOWING_PATH":return!0;case"NOT_SHOWING_PATH":return!1;default:return e}},grid:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b(),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOOGLE_WALL_NODE":return N(t.payload.row,t.payload.col,e);case"TOGGLE_FRONTIER_NDOE":return w(t.payload.row,t.payload.col,e);case"TOGGLE_VISITED_NODE":return y(t.payload.row,t.payload.col,e);case"TOGGLE_PATH_NODE":return T(t.payload.row,t.payload.col,e);case"SHOW_INITIAL_BOARD":return b();case"RESET_BOARD_WITH_WALLS":return A(e);case"MARK_HEAD_NODE":return _(t.payload.row,t.payload.col,e);case"UNMARK_HEAD_NODE":return D(t.payload.row,t.payload.col,e);case"MARK_BACKTRACK_NODE":return P(t.payload.array,e);default:return e}},dataStructure:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RESET_DATA_STRUCTURE":return null;case"SET_DATA_STRUCTURE":return t.payload;default:return e}},isMousePressed:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PRESSED":return!0;case"NOT_PRESSED":return!1;default:return e}}}),H=r(18),F=r(19),j=r(29),B=r(30),I=(r(167),Object(s.b)((function(e,t){var r=e.grid[t.row][t.col];return{isStart:r.isStart,isFinish:r.isFinish,isWall:r.isWall,isFrontier:r.isFrontier,isVisited:r.isVisited,isPath:r.isPath,isHead:r.isHead,isBacktrack:r.isBacktrack,isMousePressed:e.isMousePressed}}),(function(e,t){return{onMouseDown:function(){return function(e,t,r){r(function(e,t){return{type:"TOOGLE_WALL_NODE",payload:{row:e,col:t}}}(e,t)),r({type:"PRESSED"})}(t.row,t.col,e)},mouseIsNotPressed:function(){return e({type:"NOT_PRESSED"})}}}))((function(e){var t=e.row,r=e.col,n=e.isStart,i=e.isFinish,o=e.isWall,s=e.isHead,c=e.isVisited,u=e.isFrontier,l=e.isPath,d=e.isBacktrack,h=e.isMousePressed,p=e.onMouseDown,f=e.mouseIsNotPressed,m=i?"node-finish":n?"node-start":l?"node-path":o?"node-wall":s?"node-head":d?"node-backtrack":c?"node-visited":u?"node-frontier":"";return a.a.createElement("div",{id:"node-".concat(t,"-").concat(r),className:"node ".concat(m),onMouseDown:u||c||i||n?function(){}:p,onMouseUp:f,onMouseEnter:!h||o||u||c||i||n?function(){}:p})}))),L=(r(168),function(e){Object(B.a)(r,e);var t=Object(j.a)(r);function r(){return Object(H.a)(this,r),t.apply(this,arguments)}return Object(F.a)(r,[{key:"render",value:function(){var e=this.props.grid;return a.a.createElement("div",{className:"grid"},e.map((function(e,t){return a.a.createElement("div",{className:"grid-row",key:t},e.map((function(e,r){return a.a.createElement(I,{key:x(t,r),row:t,col:r})})))})))}}]),r}(a.a.Component)),G=Object(s.b)((function(e){return{grid:e.grid}}))(L),M=r(16),W=r.n(M),C=r(27),U=r(50),V=r(36),K=r.n(V),q=l,X=d,z=f,J=m;function Q(e){return new Promise((function(t){return setTimeout(t,e)}))}var Y=function(e,t){var r=[];if(t.row>0){var n=e[t.row-1][t.col];r.push(n)}if(t.col<X-1){var a=e[t.row][t.col+1];r.push(a)}if(t.row<q-1){var i=e[t.row+1][t.col];r.push(i)}if(t.col>0){var o=e[t.row][t.col-1];r.push(o)}return r},Z=function(){return console.log("isAlgorithmRunning:".concat(ye.getState().algorithmStatus," ")),"RUNNING"===ye.getState().algorithmStatus},$=function(){return"PAUSED"===ye.getState().algorithmStatus},ee=function(){return"STOPPED"===ye.getState().algorithmStatus},te=function(){return ye.getState().isShowingPath};function re(e,t){return ne.apply(this,arguments)}function ne(){return(ne=Object(C.a)(W.a.mark((function e(t,r){var n,a,i,o;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ye.dispatch({type:"SHOWING_PATH"}),n=t[z][J],a=n,i=new K.a;case 4:if(void 0===a){e.next=11;break}if(i.push(a),a.previousNode){e.next=8;break}return e.abrupt("break",11);case 8:a=t[a.previousNode.row][a.previousNode.col],e.next=4;break;case 11:if(i.isEmpty()){e.next=20;break}if(!ee()&&te()){e.next=14;break}return e.abrupt("return");case 14:return o=i.pop(),r(o.row,o.col),e.next=18,Q(20);case 18:e.next=11;break;case 20:ye.dispatch({type:"NOT_SHOWING_PATH"});case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ae=r(133),ie=r.n(ae),oe=h,se=p,ce=f,ue=m,le=function(){function e(t,r,n,a){Object(H.a)(this,e),this.toggleVisitedNode=t,this.toggleFrontierNode=r,this.togglePathNode=n,this.setDataStructure=a}return Object(F.a)(e,[{key:"run",value:function(){var e=Object(C.a)(W.a.mark((function e(t,r){var n,a,i,o,s;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===r&&(r=new ie.a,n=t[oe][se],r.enqueue(n));case 1:if(r.isEmpty()||!Z()){e.next=30;break}if((a=r.dequeue()).isFrontier=!1,a.isVisited=!0,this.toggleVisitedNode(a.row,a.col),a.row!==ce||a.col!==ue){e.next=10;break}return e.next=9,re(t,this.togglePathNode);case 9:return e.abrupt("return");case 10:i=Y(t,a),o=0;case 12:if(!(o<i.length)){e.next=26;break}if((s=i[o]).isWall||s.isVisited||s.isFrontier){e.next=23;break}if(a.row!==ce||a.col!==ue){e.next=19;break}return e.next=18,re(t,this.togglePathNode);case 18:return e.abrupt("return");case 19:s.isFrontier=!0,s.previousNode={row:a.row,col:a.col},this.toggleFrontierNode(s.row,s.col),r.enqueue(s);case 23:o++,e.next=12;break;case 26:return e.next=28,Q(0);case 28:e.next=1;break;case 30:if(!$()){e.next=33;break}return this.setDataStructure(r),e.abrupt("return");case 33:if(!ee()){e.next=35;break}return e.abrupt("return");case 35:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()}]),e}(),de=h,he=p,pe=f,fe=m,me=function(){function e(t,r,n,a,i,o,s){Object(H.a)(this,e),this.toggleVisitedNode=t,this.toggleFrontierNode=r,this.togglePathNode=n,this.markHeadNode=a,this.unmarkHeadNode=i,this.markBacktrackNodes=o,this.setDataStructure=s}return Object(F.a)(e,[{key:"run",value:function(){var e=Object(C.a)(W.a.mark((function e(t,r){var n,a,i,o,s,c,u,l,d,h,p;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=null,a=null,i=null,null===r?(n=new K.a,o=t[de][he],n.push(o),a=new K.a,i=!1):(n=r.unvisitedStack,a=r.visitedStack,i=r.wasBacktracking);case 4:if(n.isEmpty()||!Z()){e.next=39;break}if(!i){e.next=12;break}return e.next=8,this.backtrack(a,n,t);case 8:return i=e.sent,e.next=11,Q(20);case 11:return e.abrupt("continue",4);case 12:if(s=n.pop(),n=this.removeFromStack(n,s),s.isVisited=!0,s.isHead=!0,this.markHeadNode(s.row,s.col),this.toggleVisitedNode(s.row,s.col),null!==s.previousNode&&(c=s.previousNode,u=c.row,l=c.col,t[u][l].isHead=!1,this.unmarkHeadNode(u,l)),s.row!==pe||s.col!==fe){e.next=23;break}return e.next=22,re(t,this.togglePathNode);case 22:return e.abrupt("return");case 23:for(d=Y(t,s),h=d.length-1;h>=0;h--)(p=d[h]).isWall||p.isVisited||p.isFrontier||(p.previousNode={row:s.row,col:s.col},n.push(p));if(a.push(s),0!==d.filter((function(e){return!e.isWall&&!e.isVisited&&!e.isFrontier})).length){e.next=35;break}return s.isHead=!1,this.unmarkHeadNode(s.row,s.col),e.next=32,Q(20);case 32:return e.next=34,this.backtrack(a,n,t);case 34:i=e.sent;case 35:return e.next=37,Q(50);case 37:e.next=4;break;case 39:if(!$()){e.next=42;break}return this.setDataStructure({unvisitedStack:n,visitedStack:a,wasBacktracking:i}),e.abrupt("return");case 42:if(!ee()){e.next=44;break}return e.abrupt("return");case 44:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"backtrack",value:function(){var e=Object(C.a)(W.a.mark((function e(t,r,n){var a,i,o;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=[];case 1:if(t.isEmpty()||r.isEmpty()||!Z()){e.next=14;break}if(i=t.pop(),o=(o=Y(n,i)).filter((function(e){return!e.isWall&&!e.isVisited&&!e.isFrontier})),!this.contains(o,r.peek())){e.next=11;break}return t.push(i),this.markBacktrackNodes(a),e.abrupt("return");case 11:a.push(i);case 12:e.next=1;break;case 14:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"contains",value:function(e,t){for(var r=0;r<e.length;r++){var n=e[r];if(n.row===t.row&&n.col===t.col)return!0}return!1}},{key:"removeFromStack",value:function(e,t){for(var r=new K.a,n=new K.a;!e.isEmpty();){var a=e.pop();a.row===t.row&&a.col===t.col||n.push(a)}for(;!n.isEmpty();)r.push(n.pop());return r}}]),e}(),ge=r(301),ve=[{key:1,text:"Breadth First Search (BFS)",value:"BFS"},{key:2,text:"Depth First Search (DFS)",value:"DFS"}],Ee=function(e){Object(B.a)(r,e);var t=Object(j.a)(r);function r(){return Object(H.a)(this,r),t.apply(this,arguments)}return Object(F.a)(r,[{key:"render",value:function(){var e=this,t="none"===this.props.selectedAlgorithm?"Select Algorithm":"BFS"===this.props.selectedAlgorithm?"Breadth First Search (BFS)":"DFS"===this.props.selectedAlgorithm?"Depth First Search (BFS)":"Select Algorithm",r="STOPPED"!==this.props.algorithmStatus;return a.a.createElement(ge.a,{fluid:!0,text:t,options:ve,simple:!0,item:!0,onChange:function(t,r){e.props.onChange(r.value)},disabled:r})}}]),r}(a.a.Component),Se=Object(s.b)((function(e){return{selectedAlgorithm:e.selectedAlgorithm,algorithmStatus:e.algorithmStatus}}),(function(e){return{onChange:function(t){e({type:t})}}}))(Ee),ke=function(e){Object(B.a)(r,e);var t=Object(j.a)(r);function r(e){var n;return Object(H.a)(this,r),(n=t.call(this,e)).runSelectedAlgorithm=n.runSelectedAlgorithm.bind(Object(U.a)(n)),n.clearBoard=n.clearBoard.bind(Object(U.a)(n)),n}return Object(F.a)(r,[{key:"runSelectedAlgorithm",value:function(){var e=Object(C.a)(W.a.mark((function e(){var t,r,n,a,i,o,s,c,u,l,d,h,p,f,m,g,v,E;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,r=t.selectedAlgorithm,n=t.runAlgorithm,a=t.pauseAlgorithm,i=t.completeAlgorithm,o=t.grid,s=t.dataStructure,c=t.toggleVisitedNode,u=t.toggleFrontierNode,l=t.togglePathNode,d=t.setDataStructure,h=t.isShowingPath,p=t.markHeadNode,f=t.unmarkHeadNode,m=t.algorithmStatus,g=t.markBacktrackNodes,"none"!==r&&!h&&"COMPLETE"!==m){e.next=3;break}return e.abrupt("return");case 3:if(!Z()){e.next=6;break}return a(),e.abrupt("return");case 6:n(),e.t0=r,e.next="BFS"===e.t0?10:"DFS"===e.t0?14:18;break;case 10:return v=new le(c,u,l,d),e.next=13,v.run(o,s);case 13:return e.abrupt("break",19);case 14:return E=new me(c,u,l,p,f,g,d),e.next=17,E.run(o,s);case 17:case 18:return e.abrupt("break",19);case 19:Z()&&i();case 20:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"clearBoard",value:function(e){this.props.notShowingPath(),this.props.stopAlgorithm(),this.props.resetDataStructure(),e?this.props.showInitialBoard():this.props.resetBoardWithWalls()}},{key:"render",value:function(){var e=this,t=this.props,r=t.selectedAlgorithm,n=t.algorithmStatus,i=t.isShowingPath,o="none"===r||i||"COMPLETE"===n?"active item":"item",s="Run";return("RUNNING"===n&&i||"COMPLETE"===n)&&(s="Complete"),"RUNNING"!==n||i||(s="Pause"),a.a.createElement("div",{className:"ui four item menu"},a.a.createElement("a",{onClick:this.runSelectedAlgorithm,className:o},s,"!"),a.a.createElement(Se,null),a.a.createElement("a",{onClick:function(){return e.clearBoard(!1)},className:"item"},"Clear Path"),a.a.createElement("a",{onClick:function(){return e.clearBoard(!0)},className:"item"},"Clear Board"))}}]),r}(a.a.Component),Oe=Object(s.b)((function(e){return{grid:e.grid,dataStructure:e.dataStructure,selectedAlgorithm:e.selectedAlgorithm,algorithmStatus:e.algorithmStatus,isShowingPath:e.isShowingPath}}),(function(e){return{showInitialBoard:function(){return e({type:"SHOW_INITIAL_BOARD"})},runAlgorithm:function(){return e({type:"RUN_ALGORITHM"})},stopAlgorithm:function(){return e({type:"STOP_ALGORITHM"})},pauseAlgorithm:function(){return e({type:"PAUSE_ALGORITHM"})},completeAlgorithm:function(){return e({type:"COMPLETE_ALGORITHM"})},toggleVisitedNode:function(t,r){return e(function(e,t){return{type:"TOGGLE_VISITED_NODE",payload:{row:e,col:t}}}(t,r))},toggleFrontierNode:function(t,r){return e(function(e,t){return{type:"TOGGLE_FRONTIER_NODE",payload:{row:e,col:t}}}(t,r))},togglePathNode:function(t,r){return e(function(e,t){return{type:"TOGGLE_PATH_NODE",payload:{row:e,col:t}}}(t,r))},resetDataStructure:function(){return e({type:"RESET_DATA_STRUCTURE"})},setDataStructure:function(t){return e(function(e){return{type:"SET_DATA_STRUCTURE",payload:e}}(t))},notShowingPath:function(){return e({type:"NOT_SHOWING_PATH"})},markHeadNode:function(t,r){return e(function(e,t){return{type:"MARK_HEAD_NODE",payload:{row:e,col:t}}}(t,r))},unmarkHeadNode:function(t,r){return e(function(e,t){return{type:"UNMARK_HEAD_NODE",payload:{row:e,col:t}}}(t,r))},resetBoardWithWalls:function(){return e({type:"RESET_BOARD_WITH_WALLS"})},markBacktrackNodes:function(t){return e(function(e){return{type:"MARK_BACKTRACK_NODE",payload:{array:e}}}(t))}}}))(ke),be=function(e){var t=e.nodeType;return a.a.createElement("div",{className:"column",style:{margin:"0 5vh 5vh 3vh"}},a.a.createElement("div",{className:"node node-".concat(t),style:{border:"2px solid white",borderRadius:"5px"}}),a.a.createElement("div",null,t))},Ne=function(){return a.a.createElement("div",{className:"ui center aligned grid"},a.a.createElement("div",{className:"row ",style:{margin:"2vh 0 0 0"}},a.a.createElement("h2",{className:"ui dividing header"},"Legend")),a.a.createElement(be,{nodeType:"unvisited"}),a.a.createElement(be,{nodeType:"start"}),a.a.createElement(be,{nodeType:"finish"}),a.a.createElement(be,{nodeType:"wall"}),a.a.createElement(be,{nodeType:"visited"}),a.a.createElement(be,{nodeType:"backtrack"}),a.a.createElement(be,{nodeType:"frontier"}),a.a.createElement(be,{nodeType:"path"}))},we=(r(131),function(e){Object(B.a)(r,e);var t=Object(j.a)(r);function r(){return Object(H.a)(this,r),t.apply(this,arguments)}return Object(F.a)(r,[{key:"render",value:function(){return a.a.createElement("div",{id:"wrapper",className:"App"},a.a.createElement(Oe,null),a.a.createElement(G,null),a.a.createElement(Ne,null))}}]),r}(a.a.Component)),ye=Object(c.c)(R,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(a.a.createElement(s.a,{store:ye},a.a.createElement(we,null)),document.querySelector("#root"))}},[[158,1,2]]]);
//# sourceMappingURL=main.35c0a315.chunk.js.map