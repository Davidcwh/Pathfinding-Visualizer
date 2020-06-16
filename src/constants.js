export const gridDetails = {
    TOTAL_ROW: 21,
    TOTAL_COL: 50,
    START_NODE_ROW: 10,
    START_NODE_COL: 5,
    FINISH_NODE_ROW: 10,
    FINISH_NODE_COL: 45 
}

export const defaultStatistics = {
    show: false,
    wall: 0,
    unvisited: gridDetails.TOTAL_ROW * gridDetails.TOTAL_COL - 2,
    visited: 0,
    backtrack: 0,
    frontier: 0,
    path: 0
}

export const wallRatio = 0.3;