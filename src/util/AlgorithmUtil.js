import { gridDetails } from '../constants';
import { store } from '../index';
import Stack from '@datastructures-js/stack';
import { MinPriorityQueue } from '@datastructures-js/priority-queue';
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

export async function showPath(state, togglePathNode, updateStatistics) {
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
        updateStatistics(state);
        await sleep(20);
    }

    store.dispatch(notShowingPath());
}

export const calculateMahattanDistance = (nodeRow, nodeCol, targetRow, targetCol) => {
    return Math.abs(nodeRow - targetRow) + Math.abs(nodeCol - targetCol);
}

export const updatePqueue = (pqueue, node) => {
    const { row, col, fCost } = node;
    const newPqueue = new MinPriorityQueue({ priority: (node) => node.fCost });
    let inQueue = false;

    while(!pqueue.isEmpty()) {
        const frontierNode = pqueue.dequeue().element;

        if(frontierNode.row === row && frontierNode.col === col) {
            inQueue = true;
            if(frontierNode.fCost <= fCost) {
                newPqueue.enqueue(frontierNode);
            } else {    
                newPqueue.enqueue(node);
            }
        } else {
            newPqueue.enqueue(frontierNode);
        }
    }

    if(!inQueue) {
        newPqueue.enqueue(node);
    }

    return newPqueue;
}