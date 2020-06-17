import '../css/Node.css';
import React from 'react';
import { connect } from 'react-redux';
import { mouseIsNotPressed, 
         dispatchMultipleActions, 
         toggleWallNode,  
         mouseIsPressed } from '../actions'

class Node extends React.Component {
    constructor(props) {
        super(props);

        this.onMouseDownHandler = this.onMouseDownHandler.bind(this);
        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    }

    onMouseDownHandler() {
        const { 
            row, col, 
            isFrontier,
            isVisited,
            isFinish,
            isStart,
            dispatchMultipleActions,
            toggleWallNode,
            mouseIsPressed 
        } = this.props;

        if(!isFrontier && !isVisited && !isFinish && !isStart) {
            const onMouseDownActions = [() => toggleWallNode(), () => mouseIsPressed()];
            dispatchMultipleActions(onMouseDownActions);
            return;
        }

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
            isMousePressed 
        } = this.props;

        if(isMousePressed && !isWall && !isFrontier && !isVisited && !isFinish && !isStart) {
            const onMouseDownActions = [() => toggleWallNode(), () => mouseIsPressed()];
            dispatchMultipleActions(onMouseDownActions);
            return;
        }
    }

    render() {

        const { 
            row, col, 
            isStart, isFinish, isWall, isHead, isVisited, isFrontier, isPath, isBacktrack, 
            mouseIsNotPressed, 
            fCost, 
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
                onMouseUp={mouseIsNotPressed}
                onMouseEnter={this.onMouseEnterHandler}>
                {value}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const node = state.board.grid[ownProps.row][ownProps.col];

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
        selectedAlgorithm: state.selectedAlgorithm
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggleWallNode: () => toggleWallNode(ownProps.row, ownProps.col),
        mouseIsPressed: () => mouseIsPressed(),
        mouseIsNotPressed: () => dispatch(mouseIsNotPressed()),
        dispatchMultipleActions: (actions) => dispatchMultipleActions(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Node);