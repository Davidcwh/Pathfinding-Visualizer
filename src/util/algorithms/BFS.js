import { gridDetails } from '../../constants';
import { getNodeNeighbours, sleep } from '../AlgorithmUtil'
import Queue from 'queue-fifo';

const  {START_NODE_ROW, START_NODE_COL, FINISH_NODE_ROW, FINISH_NODE_COL } = gridDetails;
  
export default class BFS {
    constructor(state, toggleVisitedNode, toggleFrontierNode) {
        this.state = state;
        this.toggleVisitedNode = toggleVisitedNode;
        this.toggleFrontierNode = toggleFrontierNode;
    }

    async run() {
        const queue = new Queue();
        const startNode = this.state[START_NODE_ROW][START_NODE_COL];
        queue.enqueue(startNode);

        while(!queue.isEmpty()) {
            const currentNode = queue.dequeue();
            console.log(`current node: ${currentNode.row}, ${currentNode.col}`);
            currentNode.isFrontier = false;
            currentNode.isVisited = true;
            this.toggleVisitedNode(currentNode.row, currentNode.col);

            if(currentNode.row === FINISH_NODE_ROW && currentNode.col === FINISH_NODE_COL) {
                return;
            }

            const neighbours = getNodeNeighbours(this.state, currentNode);
            console.log(`neighbours: ${neighbours}`);
            for(let i = 0; i < neighbours.length; i++) {
                const neighbour = neighbours[i];
                console.log(neighbour);
                if(!neighbour.isWall && !neighbour.isVisited && !neighbour.isFrontier) {
                    neighbour.isFrontier = true;
                    this.toggleFrontierNode(neighbour.row, neighbour.col);
                    queue.enqueue(neighbour);
                }
            }
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
