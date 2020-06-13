import '../css/Node.css';
import React from 'react';
import { connect } from 'react-redux';
import { mouseIsNotPressed, onMouseDown } from '../actions'

const Node = ({ row, col, isStart, isFinish, isWall, isHead, isVisited, isFrontier, isPath, isMousePressed, onMouseDown, mouseIsNotPressed}) => {
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
        : isVisited
        ? 'node-visited'
        : isFrontier
        ? 'node-frontier'
        : ''

    return <div 
            id={`node-${row}-${col}`}
            className={`node ${nodeType}`}
            onMouseDown={(!isFrontier && !isVisited && !isFinish && !isStart) ? onMouseDown : () => {}}
            onMouseUp={mouseIsNotPressed}
            onMouseEnter={(isMousePressed && !isWall && !isFrontier && !isVisited && !isFinish && !isStart) ? onMouseDown : () => {}}></div>
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
        isMousePressed: state.isMousePressed
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onMouseDown: () => onMouseDown(ownProps.row, ownProps.col, dispatch),
        mouseIsNotPressed: () => dispatch(mouseIsNotPressed()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Node);