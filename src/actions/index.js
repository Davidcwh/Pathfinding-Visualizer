export const toggleWallNode = (row, col) => {
    return {
        action: 'TOOGLE_WALL_NODE',
        payload: {
            row, col
        }
    }
}