import React from 'react';
import { connect } from 'react-redux';
import BFS from '../util/algorithms/BFS';
import DFS from '../util/algorithms/DFS';
import AStar from '../util/algorithms/AStar';
import Greedy from '../util/algorithms/Greedy';
import { isAlgorithmRunning } from '../util/AlgorithmUtil'
import SelectAlgorithmDropdown from './SelectAlgorithmDropdown';
import { showInitialBoard, 
        runAlgorithm, 
        stopAlgorithm, 
        pauseAlgorithm, 
        completeAlgorithm, 
        toggleFrontierNode, 
        toggleVisitedNode, 
        togglePathNode, 
        resetDataStructure, 
        setDataStructure, 
        notShowingPath, 
        markHeadNode, 
        unmarkHeadNode, 
        resetBoardWithWalls, 
        markBacktrackNodes,
        generateRandomGrid,
        dispatchMultipleActions } from '../actions';

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.runSelectedAlgorithm = this.runSelectedAlgorithm.bind(this);
        this.clearBoard = this.clearBoard.bind(this);
    }

    async runSelectedAlgorithm() {
        const { selectedAlgorithm, 
                runAlgorithm, 
                pauseAlgorithm,
                completeAlgorithm, 
                grid,
                dataStructure,
                toggleVisitedNode, 
                toggleFrontierNode, 
                togglePathNode,
                setDataStructure,
                isShowingPath,
                markHeadNode,
                unmarkHeadNode,
                algorithmStatus,
                markBacktrackNodes } = this.props;

        if(selectedAlgorithm === 'none' || isShowingPath || algorithmStatus === 'COMPLETE') {
            return;
        }

        if(isAlgorithmRunning()) {
            pauseAlgorithm();
            return;
        }

        runAlgorithm();

        switch(selectedAlgorithm) {
            case "BFS":
                const bfs = new BFS(toggleVisitedNode, toggleFrontierNode, togglePathNode, setDataStructure);
                await bfs.run(grid, dataStructure);
                break;

            case "DFS":
                const dfs = new DFS(toggleVisitedNode, toggleFrontierNode, togglePathNode, markHeadNode, unmarkHeadNode, markBacktrackNodes, setDataStructure);
                await dfs.run(grid, dataStructure);
                break;

            case "ASTAR":
                const aStar = new AStar(toggleVisitedNode, toggleFrontierNode, togglePathNode, setDataStructure);
                await aStar.run(grid, dataStructure);
                break;

            case "GREED":
                const greedy = new Greedy(toggleVisitedNode, toggleFrontierNode, togglePathNode, setDataStructure);
                await greedy.run(grid, dataStructure);
                break;

            default:
                break;
        }
        
        if(isAlgorithmRunning()) {
            completeAlgorithm();
        }

    }

    clearBoard(clearWall) {
        const { notShowingPath,
                stopAlgorithm,
                resetDataStructure,
                showInitialBoard,
                resetBoardWithWalls,
                dispatchMultipleActions} = this.props;

        const clearBoardActions = [notShowingPath,
                                   stopAlgorithm,
                                   resetDataStructure];

        if(clearWall) {
            clearBoardActions.push(showInitialBoard);
        } else {
            clearBoardActions.push(resetBoardWithWalls);
        }

        dispatchMultipleActions(clearBoardActions);
    }

    render() {
        const { selectedAlgorithm, algorithmStatus, isShowingPath, generateRandomGrid } = this.props;

        const runButtonClass = (selectedAlgorithm === 'none' || isShowingPath || algorithmStatus === 'COMPLETE') ? "active item" : "item";

        const canGenerateRandomGrid = algorithmStatus === 'STOPPED';

        const randomGridButtonClass = canGenerateRandomGrid ? "item" : "active item"; 

        let runButtonText = "Run";

        if((algorithmStatus === 'RUNNING' && isShowingPath) || algorithmStatus === 'COMPLETE') {
            runButtonText = "Complete";
        }

        if(algorithmStatus === 'RUNNING' && !isShowingPath) {
            runButtonText = "Pause";
        }

        return (
            <div className="ui five item menu">
                <a  onClick={canGenerateRandomGrid ? () => generateRandomGrid() : () => {}} className={randomGridButtonClass} >Generate Random Grid</a>
                <SelectAlgorithmDropdown />
                <a onClick={this.runSelectedAlgorithm} className={runButtonClass}>{runButtonText}!</a>
                <a onClick={() => this.clearBoard(false)} className="item">Clear Path</a>
                <a onClick={() => this.clearBoard(true)} className="item">Clear Board</a>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        grid: state.board.grid,
        dataStructure: state.dataStructure,
        selectedAlgorithm: state.selectedAlgorithm,
        algorithmStatus: state.algorithmStatus,
        isShowingPath: state.isShowingPath,
        statistics: state.board.statistics
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showInitialBoard: () => dispatch(showInitialBoard()),
        runAlgorithm: () => dispatch(runAlgorithm()),
        stopAlgorithm: () => dispatch(stopAlgorithm()),
        pauseAlgorithm: () => dispatch(pauseAlgorithm()),
        completeAlgorithm: () => dispatch(completeAlgorithm()),
        toggleVisitedNode: (row, col) => dispatch(toggleVisitedNode(row, col)),
        toggleFrontierNode: (row, col) => dispatch(toggleFrontierNode(row, col)),
        togglePathNode: (row, col) => dispatch(togglePathNode(row, col)),
        resetDataStructure: () => dispatch(resetDataStructure()),
        setDataStructure: (dataStructure) => dispatch(setDataStructure(dataStructure)),
        notShowingPath: () => dispatch(notShowingPath()),
        markHeadNode: (row, col) => dispatch(markHeadNode(row, col)),
        unmarkHeadNode: (row, col) => dispatch(unmarkHeadNode(row, col)),
        resetBoardWithWalls: () => dispatch(resetBoardWithWalls()),
        markBacktrackNodes: (array) => dispatch(markBacktrackNodes(array)),
        generateRandomGrid: () => dispatch(generateRandomGrid()),
        dispatchMultipleActions: (actions) => dispatchMultipleActions(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);