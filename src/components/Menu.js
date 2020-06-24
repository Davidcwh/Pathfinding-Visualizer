import React from 'react';
import { connect } from 'react-redux';
import BFS from '../util/algorithms/BFS';
import DFS from '../util/algorithms/DFS';
import AStar from '../util/algorithms/AStar';
import Greedy from '../util/algorithms/Greedy';
import { isAlgorithmRunning, isAlgorithmStopped } from '../util/AlgorithmUtil'
import SelectAlgorithmModal from './SelectAlgorithmModal/SelectAlgorithmModal';
import '../css/Menu.css';
import { 
    showInitialBoard, 
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
    dispatchMultipleActions,
    calculateHCost
} from '../actions';

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.runSelectedAlgorithm = this.runSelectedAlgorithm.bind(this);
        this.clearBoard = this.clearBoard.bind(this);
    }

    async runSelectedAlgorithm() {
        const { 
            selectedAlgorithm, 
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
            markBacktrackNodes,
            startNode,
            endNode,
            calculateHCost
        } = this.props;

        if(selectedAlgorithm === 'none' || isShowingPath || algorithmStatus === 'COMPLETE') {
            return;
        }

        if(isAlgorithmRunning()) {
            pauseAlgorithm();
            return;
        }

        if(isAlgorithmStopped()) {
            calculateHCost(endNode);
        }

        runAlgorithm();
        window.scrollTo(0,50);

        switch(selectedAlgorithm) {
            case "BFS":
                const bfs = new BFS(startNode, toggleVisitedNode, toggleFrontierNode, togglePathNode, setDataStructure);
                await bfs.run(grid, dataStructure);
                break;

            case "DFS":
                const dfs = new DFS(startNode, toggleVisitedNode, toggleFrontierNode, togglePathNode, markHeadNode, unmarkHeadNode, markBacktrackNodes, setDataStructure);
                await dfs.run(grid, dataStructure);
                break;

            case "ASTAR":
                const aStar = new AStar(startNode, toggleVisitedNode, toggleFrontierNode, togglePathNode, setDataStructure);
                await aStar.run(grid, dataStructure);
                break;

            case "GREED":
                const greedy = new Greedy(startNode, toggleVisitedNode, toggleFrontierNode, togglePathNode, setDataStructure);
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
        const { 
            notShowingPath,
            stopAlgorithm,
            resetDataStructure,
            showInitialBoard,
            resetBoardWithWalls,
            dispatchMultipleActions
        } = this.props;

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

        const runButtonClass = (selectedAlgorithm === 'none' || isShowingPath || algorithmStatus === 'COMPLETE') ? "disabledRun" : "run";

        const canGenerateRandomGrid = algorithmStatus === 'STOPPED';

        const randomGridButtonClass = canGenerateRandomGrid ? "" : "disabled"; 

        let runButtonText = "Run";
        let runButtonColor = "";

        if((algorithmStatus === 'RUNNING' && isShowingPath) || algorithmStatus === 'COMPLETE') {
            runButtonText = "Complete";
            runButtonColor = "complete";
        }

        if(algorithmStatus === 'RUNNING' && !isShowingPath) {
            runButtonText = "Pause";
            runButtonColor = "pause";
        }

        return (
            <div className="bar">
                <div onClick={canGenerateRandomGrid ? generateRandomGrid : () => {}} className ={`item side ${randomGridButtonClass}`}>
                    Generate Random Grid
                </div>
                <SelectAlgorithmModal />
                <div onClick={this.runSelectedAlgorithm} className={`item ${runButtonClass} ${runButtonColor}`}>
                    {runButtonText}!
                </div>
                <div onClick={() => this.clearBoard(false)} className="item side">
                    Clear Path
                </div >
                <div onClick={() => this.clearBoard(true)} className="item side">
                    Clear Board
                </div>
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
        statistics: state.board.statistics,
        startNode: state.moveStartEnd.start,
        endNode: state.moveStartEnd.end
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showInitialBoard: (endNode) => dispatch(showInitialBoard(endNode)),
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
        resetBoardWithWalls: (endNode) => dispatch(resetBoardWithWalls(endNode)),
        markBacktrackNodes: (array) => dispatch(markBacktrackNodes(array)),
        generateRandomGrid: () => dispatch(generateRandomGrid()),
        dispatchMultipleActions: (actions) => dispatchMultipleActions(actions),
        calculateHCost: (endNode) => dispatch(calculateHCost(endNode))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);