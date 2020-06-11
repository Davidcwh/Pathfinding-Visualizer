import { gridDetails } from '../constants';
import { store } from '../index';
import Stack from '@datastructures-js/stack';
import { showingPath, notShowingPath } from '../actions';

const { TOTAL_ROW, TOTAL_COL, FINISH_NODE_ROW, FINISH_NODE_COL } = gridDetails;

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const getNodeNeighbours = (state, node) => {
    let neighbours = [];

    if(node.row > 0) {
        const upNode = state[node.row - 1][node.col];
        neighbours.push(upNode);
    }

    if(node.col < (TOTAL_COL - 1)) {
        const rightNode = state[node.row][node.col + 1];
        neighbours.push(rightNode);
    }

    if(node.row < (TOTAL_ROW - 1)) {
        const downNode = state[node.row + 1][node.col];
        neighbours.push(downNode);
    }

    if(node.col > 0) {
        const leftNode = state[node.row][node.col - 1];
        neighbours.push(leftNode);
    }

    return neighbours;
}

export const isAlgorithmRunning = () => {
    console.log(`isAlgorithmRunning:${store.getState().algorithmStatus} `)
    return (store.getState().algorithmStatus === 'RUNNING');
}

export const isAlgorithmPaused = () => {
    return (store.getState().algorithmStatus === 'PAUSED');
}

export const isAlgorithmStopped = () => {
    return (store.getState().algorithmStatus === 'STOPPED');
}

const isShowingPath = () => {
    return store.getState().isShowingPath;
}

export async function showPath(state, togglePathNode) {
    store.dispatch(showingPath());

    const finishNode = state[FINISH_NODE_ROW][FINISH_NODE_COL];
    let currentNode = finishNode;
    const stack = new Stack();
    while(currentNode !== undefined) {
        stack.push(currentNode);

        if(!currentNode.previousNode) {
            break;
        }
        currentNode = state[currentNode.previousNode.row][currentNode.previousNode.col];
    }

    while(!stack.isEmpty()) {
        if(isAlgorithmStopped() || !isShowingPath()) {
            return;
        }

        let node = stack.pop();
        togglePathNode(node.row, node.col);
        await sleep(0);
    }

    store.dispatch(notShowingPath());
}