import { getNodeNeighbours, sleep , isAlgorithmRunning, isAlgorithmPaused, isAlgorithmStopped, showPath, updatePqueue } from '../AlgorithmUtil';
import { MinPriorityQueue } from '@datastructures-js/priority-queue';

export default class AStar {
    constructor(startNode, toggleVisitedNode, toggleFrontierNode, togglePathNode, setDataStructure) {
        this.startNode = startNode;
        this.toggleVisitedNode = toggleVisitedNode;
        this.toggleFrontierNode = toggleFrontierNode;
        this.togglePathNode = togglePathNode;
        this.setDataStructure = setDataStructure;
    }

    async run(grid, pqueue) {
        if(pqueue === null) {
            pqueue = new MinPriorityQueue({ priority: (node) => node.fCost });
            const startNode = grid[this.startNode.row][this.startNode.col];
            startNode.gCost = 0;
            startNode.fCost = startNode.gCost + startNode.hCost;
            pqueue.enqueue(startNode);
        }


        while(!pqueue.isEmpty() && isAlgorithmRunning()) {
            const currentNode = pqueue.dequeue().element;
            currentNode.isFrontier = false;
            currentNode.isVisited = true;
            this.toggleVisitedNode(currentNode.row, currentNode.col);

            if(currentNode.isFinish) {
                await showPath(grid, this.togglePathNode, currentNode.row, currentNode.col);
                return;
            }

            const neighbours = getNodeNeighbours(grid, currentNode);
            for(let i = 0; i < neighbours.length; i++) {
                const neighbour = neighbours[i];
                
                if((!neighbour.isWall && !neighbour.isVisited) || neighbour.isFinish) {
                    const tempG = currentNode.gCost + 1;
                    const tempF = tempG + neighbour.hCost;
                    if(neighbour.gCost !== null) {
                        if(tempF < neighbour.fCost) {
                            neighbour.gCost = tempG;
                            neighbour.fCost = tempF;
                            neighbour.previousNode = { row: currentNode.row, col: currentNode.col};
                            pqueue = updatePqueue(pqueue, neighbour);
                        } 
                    } else {
                        neighbour.gCost = tempG;
                        neighbour.fCost = tempF;
                        pqueue.enqueue(neighbour);
                        neighbour.isFrontier = true;
                        neighbour.previousNode = { row: currentNode.row, col: currentNode.col};
                    }

                    this.toggleFrontierNode(neighbour.row, neighbour.col);
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