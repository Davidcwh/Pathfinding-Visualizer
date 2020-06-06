import React from 'react';
import { connect } from 'react-redux';
import { clearBoard, toggleFrontierNode, toggleVisitedNode } from '../actions';
import BFS from '../util/algorithms/BFS';

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.runSelectedAlgorithm = this.runSelectedAlgorithm.bind(this);
    }

    runSelectedAlgorithm() {
        switch(this.props.selectedAlgorithm) {
            case "BFS":
                const bfs = new BFS(this.props.grid, this.props.toggleVisitedNode, this.props.toggleFrontierNode);
                bfs.run();
                break;

            default:
                return;
        }
    }

    render() {
        const { clearBoard } = this.props;

        return (
            <div className="ui three item menu">
                <a onClick={this.runSelectedAlgorithm} className="item">Run!</a>
                <a className="item">Select Search Algorithm</a>
                <a onClick={clearBoard} className="item">Clear Board</a>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        grid: state.grid,
        selectedAlgorithm: state.selectedAlgorithm
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearBoard: () => dispatch(clearBoard()),
        toggleVisitedNode: (row, col) => dispatch(toggleVisitedNode(row, col)),
        toggleFrontierNode: (row, col) => dispatch(toggleFrontierNode(row, col))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);