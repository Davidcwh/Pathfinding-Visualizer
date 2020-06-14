import { gridDetails } from '../../constants';
import { getNodeNeighbours, sleep , isAlgorithmRunning, isAlgorithmPaused, isAlgorithmStopped, showPath, updatePqueue } from '../AlgorithmUtil';

import { MinPriorityQueue } from '@datastructures-js/priority-queue';

const  {START_NODE_ROW, START_NODE_COL, FINISH_NODE_ROW, FINISH_NODE_COL } = gridDetails;

export default class AStar {
    constructor(toggleVisitedNode, toggleFrontierNode, togglePathNode, setDataStructure) {
        this.toggleVisitedNode = toggleVisitedNode;
        this.toggleFrontierNode = toggleFrontierNode;
        this.togglePathNode = togglePathNode;
        this.setDataStructure = setDataStructure;
    }

    async run(grid, pqueue) {
        if(pqueue === null) {
            pqueue = new MinPriorityQueue({ priority: (node) => node.fCost });
            const startNode = grid[START_NODE_ROW][START_NODE_COL];
            startNode.gCost = 0;
            startNode.fCost = startNode.gCost + startNode.hCost;
            pqueue.enqueue(startNode);
        }


        while(!pqueue.isEmpty() && isAlgorithmRunning()) {
            const currentNode = pqueue.dequeue().element;
            currentNode.isFrontier = false;
            currentNode.isVisited = true;
            this.toggleVisitedNode(currentNode.row, currentNode.col);

            if(currentNode.row === FINISH_NODE_ROW && currentNode.col === FINISH_NODE_COL) {
                await showPath(grid, this.togglePathNode);
                return;
            }

            const neighbours = getNodeNeighbours(grid, currentNode);
            for(let i = 0; i < neighbours.length; i++) {
                const neighbour = neighbours[i];
                if(!neighbour.isWall && !neighbour.isVisited) {

                    if(currentNode.row === FINISH_NODE_ROW && currentNode.col === FINISH_NODE_COL) {
                        await showPath(grid, this.togglePathNode);
                        return;
                    }

                    neighbour.isFrontier = true;
                    neighbour.previousNode = { row: currentNode.row, col: currentNode.col};
                    this.toggleFrontierNode(neighbour.row, neighbour.col);
                    
                    neighbour.gCost = currentNode.gCost + 1;
                    neighbour.fCost = neighbour.gCost + neighbour.hCost;
                    pqueue = updatePqueue(pqueue, neighbour);
                }
            }
            await sleep(40);
        }

        if(isAlgorithmPaused()) {
            this.setDataStructure(pqueue);
            return;
        }

        if(isAlgorithmStopped()) {
            return;
        }
    }
}