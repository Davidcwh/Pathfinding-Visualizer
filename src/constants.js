export const gridDetails = {
    TOTAL_ROW: 21,
    TOTAL_COL: 50,
    START_NODE_ROW: 10,
    START_NODE_COL: 5,
    FINISH_NODE_ROW: 10,
    FINISH_NODE_COL: 45 
}

export const defaultStatistics = {
    wall: 0,
    unvisited: gridDetails.TOTAL_ROW * gridDetails.TOTAL_COL - 2,
    visited: 0,
    backtrack: 0,
    frontier: 0,
    path: 0
}

export const wallRatio = 0.3;

export const carouselCards = [
    {
        header: "Breath First Search (BFS)",
        description: "Breath First Search gurantees the shortest path distance",
        src: require("./media/bfs.gif"),
        value: "BFS"
    },
    {
        header: "Depth First Search (DFS)",
        description: "Depth First Search does not gurantees the shortest path distance",
        src: require("./media/dfs.gif"),
        value: "DFS"
    },
    {
        header: "A* Search",
        description: "A Star Search uses the manhattan distance heuristics from each node to the goal node",
        src: require("./media/astar.gif"),
        value: "ASTAR"
    },
    {
        header: "Greedy Best-First Search",
        description: "Greedy Best-First Search only considers nodes closest to the goal node",
        src: require("./media/greedy.gif"),
        value: "GREED"
    },
]

export const algorithmIndexMapping = {
    BFS: 0,
    DFS: 1,
    ASTAR: 2,
    GREED: 3
}