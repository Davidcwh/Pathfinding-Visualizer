import { gridDetails } from '../constants';
const { TOTAL_ROW, TOTAL_COL } = gridDetails;

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const getNodeNeighbours = (state, node) => {
    let neighbours = [];

    if(node.row > 0) {
        const upNode = state[node.row - 1][node.col];
        neighbours.push(upNode);
        console.log(`current node: ${upNode.row}, ${upNode.col}`);
    }

    if(node.col < (TOTAL_COL - 1)) {
        const rightNode = state[node.row][node.col + 1];
        neighbours.push(rightNode);
        console.log(`current node: ${rightNode.row}, ${rightNode.col}`);
    }

    if(node.row < (TOTAL_ROW - 1)) {
        const downNode = state[node.row + 1][node.col];
        neighbours.push(downNode);
        console.log(`current node: ${downNode.row}, ${downNode.col}`);
    }

    if(node.col > 0) {
        const leftNode = state[node.row][node.col - 1];
        neighbours.push(leftNode);
        console.log(`current node: ${leftNode.row}, ${leftNode.col}`);
    }

    return neighbours;
}