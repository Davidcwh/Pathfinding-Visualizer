import { gridDetails } from '../../constants';
import { getNodeNeighbours, sleep , isAlgorithmRunning, isAlgorithmPaused, isAlgorithmStopped, showPath} from '../AlgorithmUtil';

import Queue from 'queue-fifo';

const  {START_NODE_ROW, START_NODE_COL, FINISH_NODE_ROW, FINISH_NODE_COL } = gridDetails;
  
export default class BFS {
    constructor(toggleVisitedNode, toggleFrontierNode, togglePathNode, setDataStructure, updateStatistics) {
        this.toggleVisitedNode = toggleVisitedNode;
        this.toggleFrontierNode = toggleFrontierNode;
        this.togglePathNode = togglePathNode;
        this.setDataStructure = setDataStructure;
        this.updateStatistics = updateStatistics;
    }

    async run(grid, queue) {
        if(queue === null) {
            queue = new Queue();
            const startNode = grid[START_NODE_ROW][START_NODE_COL];
            queue.enqueue(startNode);
        }

        while(!queue.isEmpty() && isAlgorithmRunning()) {
            const currentNode = queue.dequeue();
            currentNode.isFrontier = false;
            currentNode.isVisited = true;
            this.toggleVisitedNode(currentNode.row, currentNode.col);

            if(currentNode.row === FINISH_NODE_ROW && currentNode.col === FINISH_NODE_COL) {
                await showPath(grid, this.togglePathNode, this.updateStatistics);
                return;
            }

            const neighbours = getNodeNeighbours(grid, currentNode);
            for(let i = 0; i < neighbours.length; i++) {
                const neighbour = neighbours[i];
                if(!neighbour.isWall && !neighbour.isVisited && !neighbour.isFrontier) {

                    if(currentNode.row === FINISH_NODE_ROW && currentNode.col === FINISH_NODE_COL) {
                        await showPath(grid, this.togglePathNode, this.updateStatistics);
                        return;
                    }

                    neighbour.isFrontier = true;
                    neighbour.previousNode = { row: currentNode.row, col: currentNode.col};
                    this.toggleFrontierNode(neighbour.row, neighbour.col);
                    queue.enqueue(neighbour);
                }
            }
            this.updateStatistics(grid);
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
}
