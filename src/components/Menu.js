import React from 'react';
import { connect } from 'react-redux';
import { clearBoard, runAlgorithm, stopAlgorithm, toggleFrontierNode, toggleVisitedNode, togglePathNode } from '../actions';
import BFS from '../util/algorithms/BFS';
import SelectAlgorithmDropdown from './SelectAlgorithmDropdown';

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.runSelectedAlgorithm = this.runSelectedAlgorithm.bind(this);
    }

    async runSelectedAlgorithm() {
        const { isAlgorithmRunning, selectedAlgorithm, runAlgorithm, stopAlgorithm, grid, toggleVisitedNode, toggleFrontierNode, togglePathNode } = this.props;

        if(selectedAlgorithm === 'none' || isAlgorithmRunning) {
            return;
        }

        runAlgorithm();

        switch(selectedAlgorithm) {
            case "BFS":
                const bfs = new BFS(grid, toggleVisitedNode, toggleFrontierNode, togglePathNode);
                await bfs.run();
                break;

            default:
                break;
        }

        stopAlgorithm();
    }

    render() {
        const { clearBoard, selectedAlgorithm } = this.props;

        const runButtonClass = selectedAlgorithm === 'none' ? "active item" : "item" 

        return (
            <div className="ui three item menu">
                <a onClick={this.runSelectedAlgorithm} className={runButtonClass}>Run!</a>
                <SelectAlgorithmDropdown />
                <a onClick={clearBoard} className="item">Clear Board</a>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        grid: state.grid,
        selectedAlgorithm: state.selectedAlgorithm,
        isAlgorithmRunning: state.isAlgorithmRunning
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearBoard: () => clearBoard(dispatch),
        runAlgorithm: () => dispatch(runAlgorithm()),
        stopAlgorithm: () => dispatch(stopAlgorithm()),
        toggleVisitedNode: (row, col) => dispatch(toggleVisitedNode(row, col)),
        toggleFrontierNode: (row, col) => dispatch(toggleFrontierNode(row, col)),
        togglePathNode: (row, col) => dispatch(togglePathNode(row, col))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);