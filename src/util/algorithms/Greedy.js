import { getNodeNeighbours, sleep , isAlgorithmRunning, isAlgorithmPaused, isAlgorithmStopped, showPath, updatePqueue } from '../AlgorithmUtil';
import { MinPriorityQueue } from '@datastructures-js/priority-queue';

export default class Greedy {
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
            startNode.fCost = startNode.hCost;
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

                    if(!neighbour.isFrontier) {
                        neighbour.isFrontier = true;
                        neighbour.previousNode = { row: currentNode.row, col: currentNode.col};
                        this.toggleFrontierNode(neighbour.row, neighbour.col);

                        neighbour.fCost = neighbour.hCost;
                        pqueue = updatePqueue(pqueue, neighbour);
                    }

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

    rerun(grid) {
        let pqueue = new MinPriorityQueue({ priority: (node) => node.fCost });
        const startNode = grid[this.startNode.row][this.startNode.col];
        startNode.fCost = startNode.hCost;
        pqueue.enqueue(startNode);

        while(!pqueue.isEmpty()) {
            const currentNode = pqueue.dequeue().element;
            currentNode.isFrontier = false;
            currentNode.isVisited = true;

            if(currentNode.isFinish) {
                let node = currentNode;
                while(node !== undefined) {
                    node.isPath = true;
                    if(!node.previousNode) {
                        break;
                    }
                    node = grid[node.previousNode.row][node.previousNode.col]
                }
                return grid;
            }

            const neighbours = getNodeNeighbours(grid, currentNode);
            for(let i = 0; i < neighbours.length; i++) {
                const neighbour = neighbours[i];
                if((!neighbour.isWall && !neighbour.isVisited) || neighbour.isFinish) {

                    if(!neighbour.isFrontier) {
                        neighbour.isFrontier = true;
                        neighbour.previousNode = { row: currentNode.row, col: currentNode.col};

                        neighbour.fCost = neighbour.hCost;
                        pqueue = updatePqueue(pqueue, neighbour);
                    }

                }
            }

        }

       return grid;
    }
}