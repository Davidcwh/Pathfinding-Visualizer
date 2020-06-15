import '../css/Node.css';
import React from 'react';
import { connect } from 'react-redux';
import { mouseIsNotPressed, onMouseDown } from '../actions'

const Node = ({ row, col, isStart, isFinish, isWall, isHead, isVisited, isFrontier, isPath, isBacktrack, isMousePressed, onMouseDown, mouseIsNotPressed, fCost, selectedAlgorithm, grid }) => {
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

    return <div 
            id={`node-${row}-${col}`}
            className={`node ${nodeType}`}
            onMouseDown={(!isFrontier && !isVisited && !isFinish && !isStart) ? () => onMouseDown(grid) : () => {}}
            onMouseUp={mouseIsNotPressed}
            onMouseEnter={(isMousePressed && !isWall && !isFrontier && !isVisited && !isFinish && !isStart) ? () => onMouseDown(grid) : () => {}}>{value}</div>
}

const mapStateToProps = (state, ownProps) => {
    const node = state.grid[ownProps.row][ownProps.col];

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
        grid: state.grid
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onMouseDown: (grid) => onMouseDown(ownProps.row, ownProps.col, dispatch, grid),
        mouseIsNotPressed: () => dispatch(mouseIsNotPressed()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Node);