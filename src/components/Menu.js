import React from 'react';
import { connect } from 'react-redux';
import { showInitialBoard, runAlgorithm, stopAlgorithm, pauseAlgorithm, toggleFrontierNode, toggleVisitedNode, togglePathNode, resetDataStructure, setDataStructure, notShowingPath } from '../actions';
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
                grid,
                dataStructure,
                toggleVisitedNode, 
                toggleFrontierNode, 
                togglePathNode,
                setDataStructure,
                isShowingPath } = this.props;

        if(selectedAlgorithm === 'none' || isShowingPath) {
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
                const dfs = new DFS(toggleVisitedNode, toggleFrontierNode, togglePathNode, setDataStructure);
                await dfs.run(grid, dataStructure);
                break;

            default:
                break;
        }
        
        if(isAlgorithmRunning()) {
            stopAlgorithm();
        }

    }

    clearBoard() {
        this.props.notShowingPath();
        this.props.stopAlgorithm();
        this.props.resetDataStructure();
        this.props.showInitialBoard();
    }

    render() {
        const { selectedAlgorithm, algorithmStatus, isShowingPath } = this.props;

        const runButtonClass = (selectedAlgorithm === 'none' || isShowingPath) ? "active item" : "item";

        const runButtonText = (algorithmStatus === 'RUNNING') ? (isShowingPath ? "Complete" : "Pause") : "Run";

        return (
            <div className="ui three item menu">
                <a  onClick={this.runSelectedAlgorithm} className={runButtonClass}>{runButtonText}!</a>
                <SelectAlgorithmDropdown />
                <a onClick={this.clearBoard} className="item">Clear Board</a>
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
        toggleVisitedNode: (row, col) => dispatch(toggleVisitedNode(row, col)),
        toggleFrontierNode: (row, col) => dispatch(toggleFrontierNode(row, col)),
        togglePathNode: (row, col) => dispatch(togglePathNode(row, col)),
        resetDataStructure: () => dispatch(resetDataStructure()),
        setDataStructure: (dataStructure) => dispatch(setDataStructure(dataStructure)),
        notShowingPath: () => dispatch(notShowingPath())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);