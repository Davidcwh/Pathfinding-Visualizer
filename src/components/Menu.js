import React from 'react';
import { connect } from 'react-redux';
import { showInitialBoard, runAlgorithm, stopAlgorithm, pauseAlgorithm, completeAlgorithm, toggleFrontierNode, toggleVisitedNode, togglePathNode, resetDataStructure, setDataStructure, notShowingPath, markHeadNode, unmarkHeadNode, resetBoardWithWalls } from '../actions';
import BFS from '../util/algorithms/BFS';
import DFS from '../util/algorithms/DFS';
import { isAlgorithmRunning } from '../util/AlgorithmUtil'
import SelectAlgorithmDropdown from './SelectAlgorithmDropdown';

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.runSelectedAlgorithm = this.runSelectedAlgorithm.bind(this);
        this.clearBoard = this.clearBoard.bind(this);

    }

    async runSelectedAlgorithm() {
        const { selectedAlgorithm, 
                runAlgorithm, 
                stopAlgorithm, 
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
                algorithmStatus } = this.props;

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
                const dfs = new DFS(toggleVisitedNode, toggleFrontierNode, togglePathNode, markHeadNode, unmarkHeadNode, setDataStructure);
                await dfs.run(grid, dataStructure);
                break;

            default:
                break;
        }
        
        if(isAlgorithmRunning()) {
            completeAlgorithm();
        }

    }

    clearBoard(clearWall) {
        this.props.notShowingPath();
        this.props.stopAlgorithm();
        this.props.resetDataStructure();

        if(clearWall) {
            this.props.showInitialBoard();
        } else {
            this.props.resetBoardWithWalls();
        }
        
    }

    render() {
        const { selectedAlgorithm, algorithmStatus, isShowingPath } = this.props;

        const runButtonClass = (selectedAlgorithm === 'none' || isShowingPath || algorithmStatus === 'COMPLETE') ? "active item" : "item";

        let runButtonText = "Run";
        if((algorithmStatus === 'RUNNING' && isShowingPath) || algorithmStatus === 'COMPLETE') {
            runButtonText = "Complete";
        }

        if(algorithmStatus === 'RUNNING' && !isShowingPath) {
            runButtonText = "Pause";
        }

        return (
            <div className="ui four item menu">
                <a  onClick={this.runSelectedAlgorithm} className={runButtonClass}>{runButtonText}!</a>
                <SelectAlgorithmDropdown />
                <a onClick={() => this.clearBoard(false)} className="item">Clear Path</a>
                <a onClick={() => this.clearBoard(true)} className="item">Clear Board</a>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        grid: state.grid,
        dataStructure: state.dataStructure,
        selectedAlgorithm: state.selectedAlgorithm,
        algorithmStatus: state.algorithmStatus,
        isShowingPath: state.isShowingPath
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
        resetBoardWithWalls: () => dispatch(resetBoardWithWalls())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);