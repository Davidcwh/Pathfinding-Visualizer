export const toggleWallNode = (row, col) => {
    return {
        type: 'TOOGLE_WALL_NODE',
        payload: {
            row, col
        }
    }
}

export const mouseIsPressed = () => {
    return { type: 'PRESSED'};
}

export const mouseIsNotPressed = () => {
    return { type: 'NOT_PRESSED'};
}

export const dispatchMultipleActions = (actions) => {
    for(let i = 0; i < actions.length; i++) {
        actions[i]();
    }
}

export const runAlgorithm = () => {
    return { type: 'RUN_ALGORITHM'};
}

export const stopAlgorithm = () => {
    return { type: 'STOP_ALGORITHM'};
}

export const showInitialBoard = () => {
    return { type: 'SHOW_INITIAL_BOARD' };
}

export const resetBoardWithWalls = () => {
    return { type: 'RESET_BOARD_WITH_WALLS' };
}

export const generateRandomGrid = (endNde) => {
    return { type: 'GENERATE_RANDOM_GRID' };
}

export const pauseAlgorithm = () => {
    return { type: 'PAUSE_ALGORITHM'};
}

export const completeAlgorithm = () => {
    return { type: 'COMPLETE_ALGORITHM'};
}

export const toggleFrontierNode = (row, col) => {
    return {
        type: 'TOGGLE_FRONTIER_NODE',
        payload: {
            row, col
        }
    }
}

export const toggleVisitedNode = (row, col) => {
    return {
        type: 'TOGGLE_VISITED_NODE',
        payload: {
            row, col
        }
    }
}

export const togglePathNode = (row, col) => {
    return {
        type: 'TOGGLE_PATH_NODE',
        payload: {
            row, col
        }
    }
}

export const setSelectedAlgorithm = (algorithmName) => {
    return {
        type: algorithmName
    }
}

export const resetDataStructure = () => {
    return { type: 'RESET_DATA_STRUCTURE' }
}

export const setDataStructure = (dataStructure) => {
    return {
        type: 'SET_DATA_STRUCTURE',
        payload: dataStructure
    }
}

export const showingPath = () => {
    return { type: 'SHOWING_PATH' };
}

export const notShowingPath = () => {
    return { type: 'NOT_SHOWING_PATH' };
}

export const markHeadNode = (row, col) => {
    return {
        type: 'MARK_HEAD_NODE',
        payload: {
            row, col
        }
    }
}

export const unmarkHeadNode = (row, col) => {
    return {
        type: 'UNMARK_HEAD_NODE',
        payload: {
            row, col
        }
    }
}

export const markBacktrackNodes = (array) => {
    return  {
        type: 'MARK_BACKTRACK_NODE',
        payload: { array }
    }
}

export const startNodeMoving = (isMoving) => {
    return { type: (isMoving ? 'START_NODE_MOVING' : 'START_NODE_NOT_MOVING') };
}

export const startNodeNotMoving = () => {
    return { type: 'START_NODE_NOT_MOVING' };
}

export const endNodeMoving = (isMoving) => {
    return { type: (isMoving? 'END_NODE_MOVING' : 'END_NODE_NOT_MOVING') };
}

export const endNodeNotMoving = () => {
    return { type: 'END_NODE_NOT_MOVING' };
}

export const setStartNode = (newStart, oldStart) => {
    return {
        type: 'SET_START_NODE',
        payload: { newStart, oldStart }
    }
}

export const setEndNode = (newEnd, oldEnd) => {
    return {
        type: 'SET_END_NODE',
        payload: { newEnd, oldEnd }
    }
}

export const calculateHCost = (endNode) => {
    return { 
        type: 'CALCULATE_HCOST',
        payload: {
            row: endNode.row,
            col: endNode.col
        }
    };
}

export const rerunAlgorithm = (selectedAlgorithm, startNode, endNode) => {
    return {
        type: 'RERUN_ALGORITHM',
        payload: { selectedAlgorithm, startNode, endNode }
    }
}