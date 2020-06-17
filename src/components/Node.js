import '../css/Node.css';
import React from 'react';
import { connect } from 'react-redux';
import { mouseIsNotPressed, 
         dispatchMultipleActions, 
         toggleWallNode,  
         mouseIsPressed,
         startNodeMoving,
         endNodeMoving,
         setStartNode,
         setEndNode } from '../actions'

class Node extends React.Component {
    constructor(props) {
        super(props);

        this.onMouseDownHandler = this.onMouseDownHandler.bind(this);
        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
        this.onMouseUpHandler = this.onMouseUpHandler.bind(this);
    }

    onMouseDownHandler() {
        const { 
            isFrontier,
            isVisited,
            isFinish,
            isStart,
            dispatchMultipleActions,
            toggleWallNode,
            mouseIsPressed,
            startNodeMoving,
            endNodeMoving,
            algorithmStatus
        } = this.props;

        const onMouseDownActions = [];

        if(!isFrontier && !isVisited && !isFinish && !isStart) {
            onMouseDownActions.push(() => toggleWallNode());
        }

        if(isStart && algorithmStatus === 'STOPPED') {
            onMouseDownActions.push(() => startNodeMoving(true));
        }

        if(isFinish && algorithmStatus === 'STOPPED') {
            onMouseDownActions.push(() => endNodeMoving(true));
        }

        onMouseDownActions.push(() => mouseIsPressed());
        dispatchMultipleActions(onMouseDownActions);
    }

    onMouseUpHandler() {
       const {
           mouseIsNotPressed,
           startNodeMoving,
           endNodeMoving,
           dispatchMultipleActions
       } = this.props;

       const onMouseDownActions = [];

       onMouseDownActions.push(() => mouseIsNotPressed());
       onMouseDownActions.push(() => startNodeMoving(false));
       onMouseDownActions.push(() => endNodeMoving(false));
       dispatchMultipleActions(onMouseDownActions);
    }

    onMouseEnterHandler() {
        const { 
            row, col, 
            isFrontier,
            isVisited,
            isFinish,
            isStart,
            isWall,
            dispatchMultipleActions,
            toggleWallNode,
            isMousePressed,
            isStartMoving,
            isEndMoving,
            setStartNode,
            setEndNode,
        } = this.props;

        const onMouseDownActions = []

        if(!isMousePressed) {
            return;
        }

        if(isStartMoving) {
            if(isFinish) {
                return;
            }
            onMouseDownActions.push(() => setStartNode(row, col));
        }

        if(isEndMoving) {
            if(isStart) {
                return;
            }
            onMouseDownActions.push(() => setEndNode(row, col));
        }

        if(!isStartMoving && !isEndMoving && !isWall && !isFrontier && !isVisited && !isFinish && !isStart) {
            onMouseDownActions.push(() => toggleWallNode());
        }

        dispatchMultipleActions(onMouseDownActions);
    }

    render() {

        const { 
            row, col, 
            isStart, isFinish, isWall, isHead, isVisited, isFrontier, isPath, isBacktrack, fCost, 
            selectedAlgorithm, 
         } = this.props;


        const nodeType = isFinish
                        ? 'node-finish'
                        : isStart
                        ? 'node-start'
                        : isPath
                        ? 'node-path'
                        : isWall
                        ? 'node-wall'
                        : isHead
                        ? 'node-head'
                        : isBacktrack
                        ? 'node-backtrack'
                        : isVisited
                        ? 'node-visited'
                        : isFrontier
                        ? 'node-frontier'
                        : ''

        const value = ((selectedAlgorithm === 'ASTAR' || selectedAlgorithm === 'GREED') && (fCost !== null)) ? fCost : ''

        return (
            <div 
                id={`node-${row}-${col}`}
                className={`node ${nodeType}`}
                onMouseDown={this.onMouseDownHandler}
                onMouseUp={this.onMouseUpHandler}
                onMouseEnter={this.onMouseEnterHandler}>
                {value}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const node = state.board.grid[ownProps.row][ownProps.col];
    const { moveStartEnd } = state;

    return {
        isStart:  node.isStart,
        isFinish: node.isFinish,
        isWall: node.isWall,
        isFrontier: node.isFrontier,
        isVisited: node.isVisited,
        isPath: node.isPath,
        isHead: node.isHead,
        isBacktrack: node.isBacktrack,
        isMousePressed: state.isMousePressed,
        hCost: node.hCost,
        gCost: node.gCost,
        fCost: node.fCost,
        selectedAlgorithm: state.selectedAlgorithm,
        algorithmStatus: state.algorithmStatus,
        isStartMoving: moveStartEnd.isStartMoving,
        isEndMoving: moveStartEnd.isEndMoving
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggleWallNode: () => dispatch(toggleWallNode(ownProps.row, ownProps.col)),
        mouseIsPressed: () => dispatch(mouseIsPressed()),
        mouseIsNotPressed: () => dispatch(mouseIsNotPressed()),
        dispatchMultipleActions: (actions) => dispatchMultipleActions(actions),
        startNodeMoving: (isMoving) => dispatch(startNodeMoving(isMoving)),
        endNodeMoving: (isMoving) => dispatch(endNodeMoving(isMoving)),
        setStartNode: (row, col) => dispatch(setStartNode(row, col)),
        setEndNode: (row, col) => dispatch(setEndNode(row, col))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Node);