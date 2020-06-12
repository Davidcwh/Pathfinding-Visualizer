import { gridDetails } from '../constants';

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
        previousNode: null,
        isPath: false
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
    const newGrid = generateInitalGrid();

    for(let r = 0; r < TOTAL_ROW; r++) {
        for(let c = 0; c < TOTAL_COL; c++) {
            const currentNode = currentGrid[r][c];
            if(!currentNode.isFinish && !currentNode.isStart) {  
                newGrid[r][c].isWall = currentNode.isWall;
            }
            
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

export function generateNodeKey(row, col) {
    return (row * TOTAL_ROW + col).toString();
}