import '../css/Node.css';
import React from 'react';
import { connect } from 'react-redux';
import { mouseIsNotPressed, onMouseDown } from '../actions'

const Node = ({ row, col, isStart, isFinish, isWall, isVisited, isFrontier, isMousePressed, onMouseDown, mouseIsNotPressed}) => {
    const nodeType = isFinish
        ? 'node-finish'
        : isStart
        ? 'node-start'
        : isWall
        ? 'node-wall'
        : isVisited
        ? 'node-visited'
        : isFrontier
        ? 'node-frontier'
        : ''

    return <div 
            id={`node-${row}-${col}`}
            className={`node ${nodeType}`}
            onMouseDown={onMouseDown}
            onMouseUp={mouseIsNotPressed}
            onMouseEnter={(isMousePressed && !isWall) ? onMouseDown : () => {}}></div>
}

const mapStateToProps = (state, ownProps) => {
    const node = state.grid[ownProps.row][ownProps.col];

    return {
        isStart:  node.isStart,
        isFinish: node.isFinish,
        isWall: node.isWall,
        isFrontier: node.isFrontier,
        isVisited: node.isVisited,
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