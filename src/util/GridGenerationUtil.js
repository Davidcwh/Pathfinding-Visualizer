import { gridDetails, defaultStatistics, wallRatio } from '../constants';
import { calculateMahattanDistance } from './AlgorithmUtil';
import BFS from './algorithms/BFS';
import DFS from './algorithms/DFS';
import AStar from './algorithms/AStar';
import Greedy from './algorithms/Greedy';

const  {START_NODE_ROW, START_NODE_COL, FINISH_NODE_ROW, FINISH_NODE_COL, TOTAL_ROW, TOTAL_COL} = gridDetails;

function NodeFactory(row, col) {
    return {
        row,
        col,
        isStart: row === START_NODE_ROW && col === START_NODE_COL,
        isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
        distance: Infinity,
        isVisited: false,
        isWall: false,
        isFrontier: false,
        isHead: false,
        isBacktrack: false,
        previousNode: null,
        isPath: false,
        hCost: null,
        gCost: null,
        fCost: null
      };
}

export function generateInitalGrid() {
    const grid = [];

    for(let r = 0; r < TOTAL_ROW; r++) {
        const currentRow = [];

        for(let c = 0; c < TOTAL_COL; c++) {
            currentRow.push(NodeFactory(r, c));
        }

        grid.push(currentRow);
    }

    return grid;
}

export function generatePlainGrid(currentGrid) {
    const newGrid = currentGrid.slice();

    for(let r = 0; r < TOTAL_ROW; r++) {
        for(let c = 0; c < TOTAL_COL; c++) {
            const node = newGrid[r][c];

            const newNode = NodeFactory(r, c);

            newNode.isStart = node.isStart;
            newNode.isFinish = node.isFinish;

            newGrid[r][c] = newNode;
        }
    }

    return newGrid;
}

export function generateToggleWallGrid(row, col, currentGrid) {
    const newGrid = currentGrid.slice();
    const node = newGrid[row][col];

    const newNode = {
        ...node,
        isWall: !node.isWall
    };
    newGrid[row][col] = newNode;
            
    return newGrid;
}

export function generateToggleFrontierGrid(row, col, currentGrid) {
    const newGrid = currentGrid.slice();
    const node = newGrid[row][col];

    const newNode = {
        ...node,
        isFrontier: true
    };
    newGrid[row][col] = newNode;
            
    return newGrid;
}

export function generateMarkVisitedGrid(row, col, currentGrid) {
    const newGrid = currentGrid.slice();
    const node = newGrid[row][col];

    const newNode = {
        ...node,
        isVisited: true,
        isFrontier: false
    };
    newGrid[row][col] = newNode;
            
    return newGrid;
}

export function generateMarkPathGrid(row, col, currentGrid) {
    const newGrid = currentGrid.slice();
    const node = newGrid[row][col];

    const newNode = {
        ...node,
        isPath: true
    };
    newGrid[row][col] = newNode;
            
    return newGrid;
}

export function generateGridWithWalls(currentGrid) {
    const newGrid = currentGrid.slice();

    for(let r = 0; r < TOTAL_ROW; r++) {
        for(let c = 0; c < TOTAL_COL; c++) {
            const node = newGrid[r][c];

            const newNode = NodeFactory(r, c);

            newNode.isStart = node.isStart;
            newNode.isFinish = node.isFinish;
            newNode.isWall = node.isWall;

            newGrid[r][c] = newNode;
        }
    }

    return newGrid;
}

export function generateMarkHeadGrid(row, col, currentGrid) {
    const newGrid = currentGrid.slice();
    const node = newGrid[row][col];

    const newNode = {
        ...node,
        isHead: true
    };
    newGrid[row][col] = newNode;
            
    return newGrid;
}

export function generateUnmarkHeadGrid(row, col, currentGrid) {
    const newGrid = currentGrid.slice();
    const node = newGrid[row][col];

    const newNode = {
        ...node,
        isHead: false
    };
    newGrid[row][col] = newNode;
            
    return newGrid;
}

export function generateMarkBacktrackGrid(array, currentGrid) {
    const newGrid = currentGrid.slice();

    for(let i = 0; i < array.length; i++) {
        const { row, col } = array[i];
        const node = newGrid[row][col];

        const newNode = {
            ...node,
            isBacktrack: true
        };
        newGrid[row][col] = newNode;
    }
            
    return newGrid;
}

export function generateNewStartGrid(newStart, oldStart, currentGrid) {
    const newGrid = currentGrid.slice();
    newGrid[oldStart.row][oldStart.col].isStart = false;
    newGrid[newStart.row][newStart.col].isStart = true;
    return newGrid;
}

export function generateNewEndGrid(newEnd, oldEnd, currentGrid) {
    const newGrid = currentGrid.slice();
    newGrid[oldEnd.row][oldEnd.col].isFinish = false;
    newGrid[newEnd.row][newEnd.col].isFinish = true;
    return newGrid;
}

export function generateNodeKey(row, col) {
    return (row * TOTAL_ROW + col).toString();
}

export function getStatistics(grid) {
    const stats = { ...defaultStatistics };

    for(let r = 0; r < TOTAL_ROW; r++) {
        for(let c = 0; c < TOTAL_COL; c++) {
            const node = grid[r][c];

            if(node.isWall && !node.isFinish && !node.isStart) {
                stats.wall++;
            }

            if(node.isVisited) {
                stats.visited++;
            }

            if(node.isBacktrack) {
                stats.backtrack++;
            }

            if(node.isFrontier) {
                stats.frontier++;
            }
            
            if(node.isPath) {
                stats.path++;
            }
        }
    }

    const leftover = (TOTAL_ROW * TOTAL_COL - 2) - stats.wall - stats.visited - stats.frontier;
    stats.unvisited = leftover <= 0 ? 0 : leftover;

    return stats;
}

function setAsWall() {
    return Math.random() < wallRatio;
}

export function generateRandomGrid(currentGrid) {
    const newGrid = generatePlainGrid(currentGrid);

    for(let r = 0; r < TOTAL_ROW; r++) {
        for(let c = 0; c < TOTAL_COL; c++) {
            const node = newGrid[r][c];
            node.hCost = null;

            if(!node.isStart && !node.isFinish) {
                node.isWall = setAsWall();
            }
            
        }
    }

    return newGrid;
}

export function calculateGridHCost(currentGrid, endRow, endCol) {
    const newGrid = currentGrid.slice();
    for(let r = 0; r < TOTAL_ROW; r++) {
        for(let c = 0; c < TOTAL_COL; c++) {
            const node = newGrid[r][c];
            node.hCost = calculateMahattanDistance(r, c, endRow, endCol);
        }
    }

    return newGrid;
}

export function generateRerunAlgorithmGrid(currentGrid, selectedAlgorithm, startNode, endNode) {
    switch(selectedAlgorithm) {
        case 'BFS':
            const bfs = new BFS(startNode);
            return bfs.rerun(generateGridWithWalls(currentGrid));

        case 'DFS':
            const dfs = new DFS(startNode);
            return dfs.rerun(generateGridWithWalls(currentGrid));

        case 'ASTAR':
            const aStar = new AStar(startNode);
            const updatedGridWithHCost = calculateGridHCost(generateGridWithWalls(currentGrid), endNode.row, endNode.col)
            return aStar.rerun(updatedGridWithHCost);


        case 'GREED':
            const greedy = new Greedy(startNode);
            const updatedGridWithHCost1 = calculateGridHCost(generateGridWithWalls(currentGrid), endNode.row, endNode.col)
            return greedy.rerun(updatedGridWithHCost1);

        default:
            return currentGrid;
    }
}