(this["webpackJsonppathfinder-visualizer"]=this["webpackJsonppathfinder-visualizer"]||[]).push([[0],{131:function(e,t,r){},158:function(e,t,r){e.exports=r(294)},167:function(e,t,r){},168:function(e,t,r){},294:function(e,t,r){"use strict";r.r(t),r.d(t,"store",(function(){return ye}));var n=r(0),a=r.n(n),i=r(25),o=r.n(i),u=r(21),s=r(43),c=r(37),l=21,d=50,h=10,p=5,f=10,m=45,g=h,v=p,S=f,E=m,O=l,b=d;function N(){for(var e,t,r=[],n=0;n<O;n++){for(var a=[],i=0;i<b;i++)a.push({row:e=n,col:t=i,isStart:e===g&&t===v,isFinish:e===S&&t===E,distance:1/0,isVisited:!1,isWall:!1,isFrontier:!1,isHead:!1,previousNode:null,isPath:!1});r.push(a)}return r}function w(e,t,r){var n=r.slice(),a=n[e][t],i=Object(c.a)({},a,{isWall:!a.isWall});return n[e][t]=i,n}function y(e,t,r){var n=r.slice(),a=n[e][t],i=Object(c.a)({},a,{isFrontier:!0});return n[e][t]=i,n}function T(e,t,r){var n=r.slice(),a=n[e][t],i=Object(c.a)({},a,{isVisited:!0,isFrontier:!1});return n[e][t]=i,n}function k(e,t,r){var n=r.slice(),a=n[e][t],i=Object(c.a)({},a,{isPath:!0});return n[e][t]=i,n}function A(e){for(var t=N(),r=0;r<O;r++)for(var n=0;n<b;n++){var a=e[r][n];a.isFinish||a.isStart||(t[r][n].isWall=a.isWall)}return t}function _(e,t,r){var n=r.slice(),a=n[e][t],i=Object(c.a)({},a,{isHead:!0});return n[e][t]=i,n}function P(e,t,r){var n=r.slice(),a=n[e][t],i=Object(c.a)({},a,{isHead:!1});return n[e][t]=i,n}function D(e,t){return(e*O+t).toString()}var x=Object(s.b)({algorithmStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"STOPPED",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RUN_ALGORITHM":return"RUNNING";case"STOP_ALGORITHM":return"STOPPED";case"PAUSE_ALGORITHM":return"PAUSED";case"COMPLETE_ALGORITHM":return"COMPLETE";default:return e}},selectedAlgorithm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"none",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BFS":return"BFS";case"DFS":return"DFS";default:return e}},isShowingPath:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOWING_PATH":return!0;case"NOT_SHOWING_PATH":return!1;default:return e}},grid:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N(),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOOGLE_WALL_NODE":return w(t.payload.row,t.payload.col,e);case"TOGGLE_FRONTIER_NDOE":return y(t.payload.row,t.payload.col,e);case"TOGGLE_VISITED_NODE":return T(t.payload.row,t.payload.col,e);case"TOGGLE_PATH_NODE":return k(t.payload.row,t.payload.col,e);case"SHOW_INITIAL_BOARD":return N();case"RESET_BOARD_WITH_WALLS":return A(e);case"MARK_HEAD_NODE":return _(t.payload.row,t.payload.col,e);case"UNMARK_HEAD_NODE":return P(t.payload.row,t.payload.col,e);default:return e}},dataStructure:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RESET_DATA_STRUCTURE":return null;case"SET_DATA_STRUCTURE":return t.payload;default:return e}},isMousePressed:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PRESSED":return!0;case"NOT_PRESSED":return!1;default:return e}}}),H=r(18),R=r(19),F=r(29),j=r(30),I=(r(167),Object(u.b)((function(e,t){var r=e.grid[t.row][t.col];return{isStart:r.isStart,isFinish:r.isFinish,isWall:r.isWall,isFrontier:r.isFrontier,isVisited:r.isVisited,isPath:r.isPath,isHead:r.isHead,isMousePressed:e.isMousePressed}}),(function(e,t){return{onMouseDown:function(){return function(e,t,r){r(function(e,t){return{type:"TOOGLE_WALL_NODE",payload:{row:e,col:t}}}(e,t)),r({type:"PRESSED"})}(t.row,t.col,e)},mouseIsNotPressed:function(){return e({type:"NOT_PRESSED"})}}}))((function(e){var t=e.row,r=e.col,n=e.isStart,i=e.isFinish,o=e.isWall,u=e.isHead,s=e.isVisited,c=e.isFrontier,l=e.isPath,d=e.isMousePressed,h=e.onMouseDown,p=e.mouseIsNotPressed,f=i?"node-finish":n?"node-start":l?"node-path":o?"node-wall":u?"node-head":s?"node-visited":c?"node-frontier":"";return a.a.createElement("div",{id:"node-".concat(t,"-").concat(r),className:"node ".concat(f),onMouseDown:c||s||i||n?function(){}:h,onMouseUp:p,onMouseEnter:!d||o||c||s||i||n?function(){}:h})}))),L=(r(168),function(e){Object(j.a)(r,e);var t=Object(F.a)(r);function r(){return Object(H.a)(this,r),t.apply(this,arguments)}return Object(R.a)(r,[{key:"render",value:function(){var e=this.props.grid;return a.a.createElement("div",{className:"grid"},e.map((function(e,t){return a.a.createElement("div",{className:"grid-row",key:t},e.map((function(e,r){return a.a.createElement(I,{key:D(t,r),row:t,col:r})})))})))}}]),r}(a.a.Component)),G=Object(u.b)((function(e){return{grid:e.grid}}))(L),W=r(16),M=r.n(W),B=r(27),C=r(50),U=r(35),V=r.n(U),q=l,K=d,X=f,z=m;function J(e){return new Promise((function(t){return setTimeout(t,e)}))}var Q=function(e,t){var r=[];if(t.row>0){var n=e[t.row-1][t.col];r.push(n)}if(t.col<K-1){var a=e[t.row][t.col+1];r.push(a)}if(t.row<q-1){var i=e[t.row+1][t.col];r.push(i)}if(t.col>0){var o=e[t.row][t.col-1];r.push(o)}return r},Y=function(){return console.log("isAlgorithmRunning:".concat(ye.getState().algorithmStatus," ")),"RUNNING"===ye.getState().algorithmStatus},Z=function(){return"PAUSED"===ye.getState().algorithmStatus},$=function(){return"STOPPED"===ye.getState().algorithmStatus},ee=function(){return ye.getState().isShowingPath};function te(e,t){return re.apply(this,arguments)}function re(){return(re=Object(B.a)(M.a.mark((function e(t,r){var n,a,i,o;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ye.dispatch({type:"SHOWING_PATH"}),n=t[X][z],a=n,i=new V.a;case 4:if(void 0===a){e.next=11;break}if(i.push(a),a.previousNode){e.next=8;break}return e.abrupt("break",11);case 8:a=t[a.previousNode.row][a.previousNode.col],e.next=4;break;case 11:if(i.isEmpty()){e.next=20;break}if(!$()&&ee()){e.next=14;break}return e.abrupt("return");case 14:return o=i.pop(),r(o.row,o.col),e.next=18,J(20);case 18:e.next=11;break;case 20:ye.dispatch({type:"NOT_SHOWING_PATH"});case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ne=r(133),ae=r.n(ne),ie=h,oe=p,ue=f,se=m,ce=function(){function e(t,r,n,a){Object(H.a)(this,e),this.toggleVisitedNode=t,this.toggleFrontierNode=r,this.togglePathNode=n,this.setDataStructure=a}return Object(R.a)(e,[{key:"run",value:function(){var e=Object(B.a)(M.a.mark((function e(t,r){var n,a,i,o,u;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===r&&(r=new ae.a,n=t[ie][oe],r.enqueue(n));case 1:if(r.isEmpty()||!Y()){e.next=30;break}if((a=r.dequeue()).isFrontier=!1,a.isVisited=!0,this.toggleVisitedNode(a.row,a.col),a.row!==ue||a.col!==se){e.next=10;break}return e.next=9,te(t,this.togglePathNode);case 9:return e.abrupt("return");case 10:i=Q(t,a),o=0;case 12:if(!(o<i.length)){e.next=26;break}if((u=i[o]).isWall||u.isVisited||u.isFrontier){e.next=23;break}if(a.row!==ue||a.col!==se){e.next=19;break}return e.next=18,te(t,this.togglePathNode);case 18:return e.abrupt("return");case 19:u.isFrontier=!0,u.previousNode={row:a.row,col:a.col},this.toggleFrontierNode(u.row,u.col),r.enqueue(u);case 23:o++,e.next=12;break;case 26:return e.next=28,J(0);case 28:e.next=1;break;case 30:if(!Z()){e.next=33;break}return this.setDataStructure(r),e.abrupt("return");case 33:if(!$()){e.next=35;break}return e.abrupt("return");case 35:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()}]),e}(),le=h,de=p,he=f,pe=m,fe=function(){function e(t,r,n,a,i,o){Object(H.a)(this,e),this.toggleVisitedNode=t,this.toggleFrontierNode=r,this.togglePathNode=n,this.markHeadNode=a,this.unmarkHeadNode=i,this.setDataStructure=o}return Object(R.a)(e,[{key:"run",value:function(){var e=Object(B.a)(M.a.mark((function e(t,r){var n,a,i,o,u,s,c,l,d,h;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=null,a=null,null===r?(n=new V.a,i=t[le][de],n.push(i),a=new V.a):(n=r.unvisitedStack,a=r.visitedStack);case 3:if(n.isEmpty()||!Y()){e.next=32;break}if(o=n.pop(),n=this.removeFromStack(n,o),o.isVisited=!0,o.isHead=!0,this.markHeadNode(o.row,o.col),this.toggleVisitedNode(o.row,o.col),null!==o.previousNode&&(u=o.previousNode,s=u.row,c=u.col,t[s][c].isHead=!1,this.unmarkHeadNode(s,c)),o.row!==he||o.col!==pe){e.next=15;break}return e.next=14,te(t,this.togglePathNode);case 14:return e.abrupt("return");case 15:for(l=Q(t,o),d=l.length-1;d>=0;d--)(h=l[d]).isWall||h.isVisited||h.isFrontier||(h.previousNode={row:o.row,col:o.col},n.push(h));if(0!==l.filter((function(e){return!e.isWall&&!e.isVisited&&!e.isFrontier})).length){e.next=27;break}return o.isHead=!1,this.unmarkHeadNode(o.row,o.col),e.next=23,J(20);case 23:return e.next=25,this.backtrack(a,n,t);case 25:e.next=28;break;case 27:a.push(o);case 28:return e.next=30,J(20);case 30:e.next=3;break;case 32:if(!Z()){e.next=35;break}return this.setDataStructure({unvisitedStack:n,visitedStack:a}),e.abrupt("return");case 35:if(!$()){e.next=37;break}return e.abrupt("return");case 37:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"backtrack",value:function(){var e=Object(B.a)(M.a.mark((function e(t,r,n){var a,i;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.isEmpty()||r.isEmpty()){e.next=13;break}return a=t.pop(),this.markHeadNode(a.row,a.col),e.next=5,J(50);case 5:if(this.unmarkHeadNode(a.row,a.col),i=Q(n,a),!this.contains(i,r.peek())){e.next=9;break}return e.abrupt("return");case 9:return e.next=11,J(50);case 11:e.next=0;break;case 13:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"contains",value:function(e,t){for(var r=0;r<e.length;r++){var n=e[r];if(n.row===t.row&&n.col===t.col)return!0}return!1}},{key:"removeFromStack",value:function(e,t){for(var r=new V.a,n=new V.a;!e.isEmpty();){var a=e.pop();a.row===t.row&&a.col===t.col||n.push(a)}for(;!n.isEmpty();)r.push(n.pop());return r}}]),e}(),me=r(301),ge=[{key:1,text:"Breadth First Search (BFS)",value:"BFS"},{key:2,text:"Depth First Search (DFS)",value:"DFS"}],ve=function(e){Object(j.a)(r,e);var t=Object(F.a)(r);function r(){return Object(H.a)(this,r),t.apply(this,arguments)}return Object(R.a)(r,[{key:"render",value:function(){var e=this,t="none"===this.props.selectedAlgorithm?"Select Algorithm":"BFS"===this.props.selectedAlgorithm?"Breadth First Search (BFS)":"DFS"===this.props.selectedAlgorithm?"Depth First Search (BFS)":"Select Algorithm",r="STOPPED"!==this.props.algorithmStatus;return a.a.createElement(me.a,{fluid:!0,text:t,options:ge,simple:!0,item:!0,onChange:function(t,r){e.props.onChange(r.value)},disabled:r})}}]),r}(a.a.Component),Se=Object(u.b)((function(e){return{selectedAlgorithm:e.selectedAlgorithm,algorithmStatus:e.algorithmStatus}}),(function(e){return{onChange:function(t){e({type:t})}}}))(ve),Ee=function(e){Object(j.a)(r,e);var t=Object(F.a)(r);function r(e){var n;return Object(H.a)(this,r),(n=t.call(this,e)).runSelectedAlgorithm=n.runSelectedAlgorithm.bind(Object(C.a)(n)),n.clearBoard=n.clearBoard.bind(Object(C.a)(n)),n}return Object(R.a)(r,[{key:"runSelectedAlgorithm",value:function(){var e=Object(B.a)(M.a.mark((function e(){var t,r,n,a,i,o,u,s,c,l,d,h,p,f,m,g,v;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,r=t.selectedAlgorithm,n=t.runAlgorithm,t.stopAlgorithm,a=t.pauseAlgorithm,i=t.completeAlgorithm,o=t.grid,u=t.dataStructure,s=t.toggleVisitedNode,c=t.toggleFrontierNode,l=t.togglePathNode,d=t.setDataStructure,h=t.isShowingPath,p=t.markHeadNode,f=t.unmarkHeadNode,m=t.algorithmStatus,"none"!==r&&!h&&"COMPLETE"!==m){e.next=3;break}return e.abrupt("return");case 3:if(!Y()){e.next=6;break}return a(),e.abrupt("return");case 6:n(),e.t0=r,e.next="BFS"===e.t0?10:"DFS"===e.t0?14:18;break;case 10:return g=new ce(s,c,l,d),e.next=13,g.run(o,u);case 13:return e.abrupt("break",19);case 14:return v=new fe(s,c,l,p,f,d),e.next=17,v.run(o,u);case 17:case 18:return e.abrupt("break",19);case 19:Y()&&i();case 20:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"clearBoard",value:function(e){this.props.notShowingPath(),this.props.stopAlgorithm(),this.props.resetDataStructure(),e?this.props.showInitialBoard():this.props.resetBoardWithWalls()}},{key:"render",value:function(){var e=this,t=this.props,r=t.selectedAlgorithm,n=t.algorithmStatus,i=t.isShowingPath,o="none"===r||i||"COMPLETE"===n?"active item":"item",u="Run";return("RUNNING"===n&&i||"COMPLETE"===n)&&(u="Complete"),"RUNNING"!==n||i||(u="Pause"),a.a.createElement("div",{className:"ui four item menu"},a.a.createElement("a",{onClick:this.runSelectedAlgorithm,className:o},u,"!"),a.a.createElement(Se,null),a.a.createElement("a",{onClick:function(){return e.clearBoard(!1)},className:"item"},"Clear Path"),a.a.createElement("a",{onClick:function(){return e.clearBoard(!0)},className:"item"},"Clear Board"))}}]),r}(a.a.Component),Oe=Object(u.b)((function(e){return{grid:e.grid,dataStructure:e.dataStructure,selectedAlgorithm:e.selectedAlgorithm,algorithmStatus:e.algorithmStatus,isShowingPath:e.isShowingPath}}),(function(e){return{showInitialBoard:function(){return e({type:"SHOW_INITIAL_BOARD"})},runAlgorithm:function(){return e({type:"RUN_ALGORITHM"})},stopAlgorithm:function(){return e({type:"STOP_ALGORITHM"})},pauseAlgorithm:function(){return e({type:"PAUSE_ALGORITHM"})},completeAlgorithm:function(){return e({type:"COMPLETE_ALGORITHM"})},toggleVisitedNode:function(t,r){return e(function(e,t){return{type:"TOGGLE_VISITED_NODE",payload:{row:e,col:t}}}(t,r))},toggleFrontierNode:function(t,r){return e(function(e,t){return{type:"TOGGLE_FRONTIER_NODE",payload:{row:e,col:t}}}(t,r))},togglePathNode:function(t,r){return e(function(e,t){return{type:"TOGGLE_PATH_NODE",payload:{row:e,col:t}}}(t,r))},resetDataStructure:function(){return e({type:"RESET_DATA_STRUCTURE"})},setDataStructure:function(t){return e(function(e){return{type:"SET_DATA_STRUCTURE",payload:e}}(t))},notShowingPath:function(){return e({type:"NOT_SHOWING_PATH"})},markHeadNode:function(t,r){return e(function(e,t){return{type:"MARK_HEAD_NODE",payload:{row:e,col:t}}}(t,r))},unmarkHeadNode:function(t,r){return e(function(e,t){return{type:"UNMARK_HEAD_NODE",payload:{row:e,col:t}}}(t,r))},resetBoardWithWalls:function(){return e({type:"RESET_BOARD_WITH_WALLS"})}}}))(Ee),be=function(e){var t=e.nodeType;return a.a.createElement("div",{className:"column",style:{margin:"0 5vh 5vh 3vh"}},a.a.createElement("div",{className:"node node-".concat(t),style:{border:"2px solid white",borderRadius:"5px"}}),a.a.createElement("div",null,t))},Ne=function(){return a.a.createElement("div",{className:"ui center aligned grid"},a.a.createElement("div",{className:"row ",style:{margin:"2vh 0 0 0"}},a.a.createElement("h2",{className:"ui dividing header"},"Legend")),a.a.createElement(be,{nodeType:"unvisited"}),a.a.createElement(be,{nodeType:"start"}),a.a.createElement(be,{nodeType:"finish"}),a.a.createElement(be,{nodeType:"wall"}),a.a.createElement(be,{nodeType:"visited"}),a.a.createElement(be,{nodeType:"frontier"}),a.a.createElement(be,{nodeType:"path"}))},we=(r(131),function(e){Object(j.a)(r,e);var t=Object(F.a)(r);function r(){return Object(H.a)(this,r),t.apply(this,arguments)}return Object(R.a)(r,[{key:"render",value:function(){return a.a.createElement("div",{id:"wrapper",className:"App"},a.a.createElement(Oe,null),a.a.createElement(G,null),a.a.createElement(Ne,null))}}]),r}(a.a.Component)),ye=Object(s.c)(x,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(a.a.createElement(u.a,{store:ye},a.a.createElement(we,null)),document.querySelector("#root"))}},[[158,1,2]]]);
//# sourceMappingURL=main.177b9a47.chunk.js.map