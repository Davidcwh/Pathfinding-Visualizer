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
        description: "Expands the shallowest unvisited nodes.\n\n  BFS guarantees the shortest path to the goal.",
        src: require("./media/bfs.gif"),
        value: "BFS"
    },
    {
        header: "Depth First Search (DFS)",
        description: "Expands the deepest unvisited nodes.\n\n  DFS does not guarantee the shortest path to the goal.",
        src: require("./media/dfs.gif"),
        value: "DFS"
    },
    {
        header: "A* Search",
        description: `Expands unvisited nodes with the lowest estimated cost of the cheapest path from the start to the goal through the node.\n\n   A* guarantees the shortest path to the goal.`,
        src: require("./media/astar.gif"),
        value: "ASTAR"
    },
    {
        header: "Greedy Best-First Search",
        description: `Expands unvisited nodes that are estimated to be closest to the goal.\n\n  Greedy Search does not guarantee the shortest path to the goal.`,
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