import '../css/Node.css';
import React from 'react';
import { connect } from 'react-redux';
import { toggleWallNode } from '../actions'

const Node = ({ row, col, isStart, isFinish, isWall, onClick}) => {
    const nodeType = isFinish
        ? 'node-finish'
        : isStart
        ? 'node-start'
        : isWall
        ? 'node-wall'
        : '';

    return <div 
            id={`node-${row}-${col}`}
            className={`node ${nodeType}`}
            onClick={onClick}></div>
}

const mapStateToProps = (state, ownProps) => {
    const node = state.grid[ownProps.row][ownProps.col];

    return {
        isStart:  node.isStart,
        isFinish: node.isFinish,
        isWall: node.isWall
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        onClick: () => dispatch(toggleWallNode(ownProps.row, ownProps.col))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Node);