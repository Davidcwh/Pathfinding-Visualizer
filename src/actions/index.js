const toggleWallNode = (row, col) => {
    return {
        type: 'TOOGLE_WALL_NODE',
        payload: {
            row, col
        }
    }
}

const mouseIsPressed = () => {
    return { type: 'PRESSED'};
}

export const mouseIsNotPressed = () => {
    return { type: 'NOT_PRESSED'};
}

export const onMouseDown = (row, col, dispatch) => {
    dispatch(toggleWallNode(row, col));
    dispatch(mouseIsPressed());
}


export const runAlgorithm = () => {
    return { type: 'RUN_ALGORITHM'};
}

export const stopAlgorithm = () => {
    return { type: 'STOP_ALGORITHM'};
}

export const showInitialBoard = () => {
    return { type: 'SHOW_INITIAL_BOARD'};
}

export const pauseAlgorithm = () => {
    return { type: 'PAUSE_ALGORITHM'};
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
