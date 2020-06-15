import { gridDetails } from '../../constants';
import { getNodeNeighbours, sleep , isAlgorithmRunning, isAlgorithmPaused, isAlgorithmStopped, showPath} from '../AlgorithmUtil';
import Stack from '@datastructures-js/stack';

const  {START_NODE_ROW, START_NODE_COL, FINISH_NODE_ROW, FINISH_NODE_COL } = gridDetails;

export default class DFS {
    constructor(toggleVisitedNode, toggleFrontierNode, togglePathNode, markHeadNode, unmarkHeadNode, markBacktrackNodes, setDataStructure, updateStatistics) {
        this.toggleVisitedNode = toggleVisitedNode;
        this.toggleFrontierNode = toggleFrontierNode;
        this.togglePathNode = togglePathNode;
        this.markHeadNode = markHeadNode;
        this.unmarkHeadNode = unmarkHeadNode;
        this.markBacktrackNodes = markBacktrackNodes;
        this.setDataStructure = setDataStructure;
        this.updateStatistics = updateStatistics;
    }

    async run(grid, stacks) {
        let unvisitedStack = null;
        let visitedStack = null;
        let wasBacktracking = null;

        if(stacks === null) {
            unvisitedStack = new Stack();
            const startNode = grid[START_NODE_ROW][START_NODE_COL];
            unvisitedStack.push(startNode);

            visitedStack = new Stack();
            wasBacktracking = false;
        } else {
            unvisitedStack = stacks.unvisitedStack;
            visitedStack = stacks.visitedStack;
            wasBacktracking = stacks.wasBacktracking;
        }

        while(!unvisitedStack.isEmpty() && isAlgorithmRunning()) {
            if(wasBacktracking) {
                wasBacktracking = await this.backtrack(visitedStack, unvisitedStack, grid);
                await sleep(20);
                continue;
            }


            const currentNode = unvisitedStack.pop();
            unvisitedStack = this.removeFromStack(unvisitedStack, currentNode);

            currentNode.isVisited = true;
            currentNode.isHead = true;
            this.markHeadNode(currentNode.row, currentNode.col);
            this.toggleVisitedNode(currentNode.row, currentNode.col);

            if(currentNode.previousNode !== null) {
                const { row, col } = currentNode.previousNode;
                grid[row][col].isHead = false;
                this.unmarkHeadNode(row, col);
            }

            if(currentNode.row === FINISH_NODE_ROW && currentNode.col === FINISH_NODE_COL) {
                await showPath(grid, this.togglePathNode, this.updateStatistics);
                return;
            }

            const neighbours = getNodeNeighbours(grid, currentNode);
            for(let i = neighbours.length - 1; i >= 0; i--) {
                const neighbour = neighbours[i];
                if(!neighbour.isWall && !neighbour.isVisited && !neighbour.isFrontier) {
                    neighbour.previousNode = { row: currentNode.row, col: currentNode.col};
                    unvisitedStack.push(neighbour);
                }
            }

            visitedStack.push(currentNode);

            const validNeighbours = neighbours.filter(neighbour => !neighbour.isWall && !neighbour.isVisited && !neighbour.isFrontier)

            if(validNeighbours.length === 0) {
                // console.log(`deadend: ${currentNode.row}, ${currentNode.col}`)
                // console.log(`unvisited: ${unvisitedStack.toArray().map(i => `(${i.row}, ${i.col}) `)}`)
                // console.log(`visited: ${visitedStack.toArray().map(i => `(${i.row}, ${i.col}) `)}`)
                currentNode.isHead = false;
                this.unmarkHeadNode(currentNode.row, currentNode.col);
                await sleep(20);
                wasBacktracking = await this.backtrack(visitedStack, unvisitedStack, grid);
               
            }

            this.updateStatistics(grid);
            await sleep(40);
        }

        if(isAlgorithmPaused()) {
            this.setDataStructure({ unvisitedStack: unvisitedStack, visitedStack: visitedStack, wasBacktracking: wasBacktracking });
            return;
        }

        if(isAlgorithmStopped()) {
            return;
        }
    }

    async backtrack(visitedStack, unvisitedStack, grid) {

        let backtrackNodes = [];

        while(!visitedStack.isEmpty() && !unvisitedStack.isEmpty() && isAlgorithmRunning()) {
            const visitedNode = visitedStack.pop();

            let neighbours = getNodeNeighbours(grid, visitedNode);
            neighbours = neighbours.filter(neighbour => !neighbour.isWall && !neighbour.isVisited && !neighbour.isFrontier)
            if(this.contains(neighbours, unvisitedStack.peek())) {
                // console.log(`backtrack ${unvisitedStack.peek().row}, ${unvisitedStack.peek().col}`)
                visitedStack.push(visitedNode);
                this.markBacktrackNodes(backtrackNodes);
                return;
            } else {
                backtrackNodes.push(visitedNode);
            }   
        }

    }

    contains(neighbours, target) {
        for(let i = 0; i < neighbours.length; i++) {
            const neighbour = neighbours[i];
            if(neighbour.row === target.row && neighbour.col === target.col) {
                return true;
            }
        }


        return false;
    }

    removeFromStack(stack, target) {
        const newStack = new Stack();
        const tempStack = new Stack();

        while(!stack.isEmpty()) {
            const current = stack.pop();
            if(current.row === target.row && current.col === target.col) {
                continue;
            }

            tempStack.push(current);
        }

        while(!tempStack.isEmpty()) {
            newStack.push(tempStack.pop());
        }

        return newStack;
    }
}
