import '../css/Node.css';
import React from 'react';
import { connect } from 'react-redux';
import { mouseIsNotPressed, 
         dispatchMultipleActions, 
         toggleWallNode,  
         mouseIsPressed } from '../actions'

const Node = ({ row, col, 
                isStart, isFinish, isWall, isHead, isVisited, isFrontier, isPath, isBacktrack, 
                isMousePressed, onMouseDown, mouseIsNotPressed, 
                fCost, 
                selectedAlgorithm, 
                grid,
                dispatchMultipleActions }) => {
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

    const onMouseDownActions = [() => toggleWallNode(row, col), 
                                () => mouseIsPressed()]

    return <div 
            id={`node-${row}-${col}`}
            className={`node ${nodeType}`}
            onMouseDown={(!isFrontier && !isVisited && !isFinish && !isStart) ? () => dispatchMultipleActions(onMouseDownActions) : () => {}}
            onMouseUp={mouseIsNotPressed}
            onMouseEnter={(isMousePressed && !isWall && !isFrontier && !isVisited && !isFinish && !isStart) ? () => dispatchMultipleActions(onMouseDownActions) : () => {}}>{value}</div>
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
        selectedAlgorithm: state.selectedAlgorithm,
        grid: state.board.grid
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        mouseIsNotPressed: () => dispatch(mouseIsNotPressed()),
        dispatchMultipleActions: (actions) => dispatchMultipleActions(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Node);