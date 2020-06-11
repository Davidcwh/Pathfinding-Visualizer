import { gridDetails } from '../../constants';
import { getNodeNeighbours, sleep , isAlgorithmRunning, isAlgorithmPaused, isAlgorithmStopped, showPath} from '../AlgorithmUtil';
import Stack from '@datastructures-js/stack';

const  {START_NODE_ROW, START_NODE_COL, FINISH_NODE_ROW, FINISH_NODE_COL } = gridDetails;

export default class DFS {
    constructor(toggleVisitedNode, toggleFrontierNode, togglePathNode, setDataStructure) {
        this.toggleVisitedNode = toggleVisitedNode;
        this.toggleFrontierNode = toggleFrontierNode;
        this.togglePathNode = togglePathNode;
        this.setDataStructure = setDataStructure;
    }

    async run(grid, stack) {
        if(stack === null) {
            stack = new Stack();
            const startNode = grid[START_NODE_ROW][START_NODE_COL];
            stack.push(startNode);
        }

        while(!stack.isEmpty() && isAlgorithmRunning()) {
            const currentNode = stack.pop();
            currentNode.isVisited = true;
            this.toggleVisitedNode(currentNode.row, currentNode.col);

            if(currentNode.row === FINISH_NODE_ROW && currentNode.col === FINISH_NODE_COL) {
                await showPath(grid, this.togglePathNode);
                return;
            }

            const neighbours = getNodeNeighbours(grid, currentNode);
            for(let i = neighbours.length - 1; i >= 0; i--) {
                const neighbour = neighbours[i];
                if(!neighbour.isWall && !neighbour.isVisited && !neighbour.isFrontier) {
                    neighbour.previousNode = { row: currentNode.row, col: currentNode.col};
                    stack.push(neighbour);
                }
            }
            await sleep(10);

        }

        if(isAlgorithmPaused()) {
            this.setDataStructure(stack);
            return;
        }

        if(isAlgorithmStopped()) {
            return;
        }
    }

}
