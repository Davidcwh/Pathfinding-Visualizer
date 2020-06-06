import { gridDetails } from '../../constants';
import { getNodeNeighbours, sleep } from '../AlgorithmUtil'
import Queue from 'queue-fifo';
import Stack from '@datastructures-js/stack';

const  {START_NODE_ROW, START_NODE_COL, FINISH_NODE_ROW, FINISH_NODE_COL } = gridDetails;
  
export default class BFS {
    constructor(state, toggleVisitedNode, toggleFrontierNode, togglePathNode) {
        this.state = state;
        this.toggleVisitedNode = toggleVisitedNode;
        this.toggleFrontierNode = toggleFrontierNode;
        this.togglePathNode = togglePathNode;
    }

    async run() {
        const queue = new Queue();
        const startNode = this.state[START_NODE_ROW][START_NODE_COL];
        queue.enqueue(startNode);

        while(!queue.isEmpty()) {
            const currentNode = queue.dequeue();
            currentNode.isFrontier = false;
            currentNode.isVisited = true;
            this.toggleVisitedNode(currentNode.row, currentNode.col);

            if(currentNode.row === FINISH_NODE_ROW && currentNode.col === FINISH_NODE_COL) {
                await this.showPath();
                break;
            }

            const neighbours = getNodeNeighbours(this.state, currentNode);
            for(let i = 0; i < neighbours.length; i++) {
                const neighbour = neighbours[i];
                if(!neighbour.isWall && !neighbour.isVisited && !neighbour.isFrontier) {
                    neighbour.isFrontier = true;
                    neighbour.previousNode = { row: currentNode.row, col: currentNode.col};
                    this.toggleFrontierNode(neighbour.row, neighbour.col);
                    queue.enqueue(neighbour);
                }
            }
            await sleep(0);
        }
    }

    async showPath() {
        console.log("showPath")
        const finishNode = this.state[FINISH_NODE_ROW][FINISH_NODE_COL];
        let currentNode = finishNode;
        const stack = new Stack();
        console.log(`finishNode: ${currentNode.row}, ${currentNode.col}`)
        while(currentNode !== undefined) {
            console.log(`path node: ${currentNode.row}, ${currentNode.col}`)
            stack.push(currentNode);

            if(!currentNode.previousNode) {
                break;
            }
            currentNode = this.state[currentNode.previousNode.row][currentNode.previousNode.col];
        }

        console.log(stack.size());

        while(!stack.isEmpty()) {
            let node = stack.pop();
            this.togglePathNode(node.row, node.col);
            await sleep(0);
        }

    }

    test() {
        const startNode = this.state[START_NODE_ROW][START_NODE_COL];
        const neighbours = getNodeNeighbours(this.state, startNode);
        console.log(neighbours);
        for(const neighbour in neighbours) {
            this.toggleFrontierNode(neighbour.row, neighbour.col);
        }

        console.log(neighbours);
    }
}
