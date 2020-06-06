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