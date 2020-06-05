import '../css/Node.css';
import React from './node_modules/react';

const Node = ({ row, col, isStart, isFinish, isWall, onMouseDown, onMouseUp, onMouseEnter}) => {
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
            onMouseDown={() => onMouseDown(row, col)}
            onMouseUp={() => onMouseUp()}
            onMouseEnter={() => onMouseEnter(row, col)}></div>
}

export default Node;