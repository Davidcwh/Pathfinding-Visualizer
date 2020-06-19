import { getNodeNeighbours, sleep , isAlgorithmRunning, isAlgorithmPaused, isAlgorithmStopped, showPath} from '../AlgorithmUtil';
import Queue from 'queue-fifo';
  
export default class BFS {
    constructor(startNode, toggleVisitedNode, toggleFrontierNode, togglePathNode, setDataStructure) {
        this.startNode = startNode;
        this.toggleVisitedNode = toggleVisitedNode;
        this.toggleFrontierNode = toggleFrontierNode;
        this.togglePathNode = togglePathNode;
        this.setDataStructure = setDataStructure;
    }

    async run(grid, queue) {
        if(queue === null) {
            queue = new Queue();
            const startNode = grid[this.startNode.row][this.startNode.col];
            queue.enqueue(startNode);
        }

        while(!queue.isEmpty() && isAlgorithmRunning()) {
            const currentNode = queue.dequeue();
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
                // if(neighbour.isFinish) {
                //     await showPath(grid, this.togglePathNode, currentNode.row, currentNode.col);
                //     return;
                // }
                if((!neighbour.isWall && !neighbour.isVisited && !neighbour.isFrontier) || neighbour.isFinish) {
                    neighbour.isFrontier = true;
                    neighbour.previousNode = { row: currentNode.row, col: currentNode.col};
                    this.toggleFrontierNode(neighbour.row, neighbour.col);
                    queue.enqueue(neighbour);
                }
            }
            await sleep(0);
        }

        if(isAlgorithmPaused()) {
            this.setDataStructure(queue);
            return;
        }

        if(isAlgorithmStopped()) {
            return;
        }
        
    }

    rerun(currentGrid) {
        const grid = currentGrid.slice();

        const queue = new Queue();
        const startNode = grid[this.startNode.row][this.startNode.col];
        queue.enqueue(startNode);

        while(!queue.isEmpty()) {
            const currentNode = queue.dequeue();
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
                if((!neighbour.isWall && !neighbour.isVisited && !neighbour.isFrontier) || neighbour.isFinish) {
                    neighbour.isFrontier = true;
                    neighbour.previousNode = { row: currentNode.row, col: currentNode.col};
                    queue.enqueue(neighbour);
                }
            }
        }

        return grid;
    }
}
