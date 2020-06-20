import { getNodeNeighbours, sleep , isAlgorithmRunning, isAlgorithmPaused, isAlgorithmStopped, showPath} from '../AlgorithmUtil';
import Stack from '@datastructures-js/stack';

export default class DFS {
    constructor(startNode, toggleVisitedNode, toggleFrontierNode, togglePathNode, markHeadNode, unmarkHeadNode, markBacktrackNodes, setDataStructure) {
        this.startNode = startNode;
        this.toggleVisitedNode = toggleVisitedNode;
        this.toggleFrontierNode = toggleFrontierNode;
        this.togglePathNode = togglePathNode;
        this.markHeadNode = markHeadNode;
        this.unmarkHeadNode = unmarkHeadNode;
        this.markBacktrackNodes = markBacktrackNodes;
        this.setDataStructure = setDataStructure;
    }

    async run(grid, stacks) {
        let unvisitedStack = null;
        let visitedStack = null;
        let wasBacktracking = null;

        if(stacks === null) {
            unvisitedStack = new Stack();
            const startNode = grid[this.startNode.row][this.startNode.col];
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

            if(currentNode.isFinish) {
                await showPath(grid, this.togglePathNode, currentNode.row, currentNode.col);
                return;
            }

            const neighbours = getNodeNeighbours(grid, currentNode);
            for(let i = neighbours.length - 1; i >= 0; i--) {
                const neighbour = neighbours[i];
                if((!neighbour.isWall && !neighbour.isVisited && !neighbour.isFrontier) || neighbour.isFinish) {
                    neighbour.previousNode = { row: currentNode.row, col: currentNode.col};
                    unvisitedStack.push(neighbour);
                }
            }

            visitedStack.push(currentNode);

            const validNeighbours = neighbours.filter(neighbour => ((!neighbour.isWall && !neighbour.isVisited && !neighbour.isFrontier) || neighbour.isFinish))

            if(validNeighbours.length === 0) {
                currentNode.isHead = false;
                this.unmarkHeadNode(currentNode.row, currentNode.col);
                await sleep(20);
                wasBacktracking = await this.backtrack(visitedStack, unvisitedStack, grid);
               
            }

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

    rerun(currentGrid) {
        const grid = currentGrid.slice();

        let unvisitedStack = new Stack();
        const startNode = grid[this.startNode.row][this.startNode.col];
        unvisitedStack.push(startNode);

        const visitedStack = new Stack();

        while(!unvisitedStack.isEmpty()) {
            const currentNode = unvisitedStack.pop();
            unvisitedStack = this.removeFromStack(unvisitedStack, currentNode);

            currentNode.isVisited = true;
            currentNode.isHead = true;

            if(currentNode.previousNode !== null) {
                const { row, col } = currentNode.previousNode;
                grid[row][col].isHead = false;
            }

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
            for(let i = neighbours.length - 1; i >= 0; i--) {
                const neighbour = neighbours[i];
                if((!neighbour.isWall && !neighbour.isVisited && !neighbour.isFrontier) || neighbour.isFinish) {
                    neighbour.previousNode = { row: currentNode.row, col: currentNode.col};
                    unvisitedStack.push(neighbour);
                }
            }

            visitedStack.push(currentNode);

            const validNeighbours = neighbours.filter(neighbour => ((!neighbour.isWall && !neighbour.isVisited && !neighbour.isFrontier) || neighbour.isFinish))

            if(validNeighbours.length === 0) {
                currentNode.isHead = false;
                this.rerunBacktrack(visitedStack, unvisitedStack, grid);
               
            }

        }

        return grid;
    }

    rerunBacktrack(visitedStack, unvisitedStack, grid) {

        let backtrackNodes = [];

        while(!visitedStack.isEmpty() && !unvisitedStack.isEmpty()) {
            const visitedNode = visitedStack.pop();

            let neighbours = getNodeNeighbours(grid, visitedNode);
            neighbours = neighbours.filter(neighbour => ((!neighbour.isWall && !neighbour.isVisited && !neighbour.isFrontier) || neighbour.isFinish))
            if(this.contains(neighbours, unvisitedStack.peek())) {
                visitedStack.push(visitedNode);
                backtrackNodes.map(node => node.isBacktrack = true);
                return;
            } else {
                backtrackNodes.push(visitedNode);
            }   
        }

    }
}
