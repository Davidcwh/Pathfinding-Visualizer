import React from 'react';
import Node from './Node';
import { connect } from 'react-redux';
import '../css/Grid.css';
import { generateNodeKey } from '../util/GridGenerationUtil'
import { mouseIsPressed, mouseIsNotPressed } from '../actions';

class Grid extends React.Component {

    render() {
        const {grid, mouseIsPressed, mouseIsNotPressed} = this.props;

        return (
            <div onMouseDown={mouseIsPressed} onMouseUp={mouseIsNotPressed} className="grid">
                {
                    grid.map((row, rowIndex) => {
                        return (
                            <div className="grid-row" key={rowIndex}>
                                {
                                    row.map((col, colIndex) => {
                                        return (<Node key={generateNodeKey(rowIndex, colIndex)}row={rowIndex} col={colIndex} />);
                                    })
                                }
                            </div>
                        )
                        
                    })
                }
            </div>
        );
    }


}

const mapStateToProps = state => {
    return {
        grid: state.grid,
        isMousePressed: state.isMousePressed
    }
}

const mapDispatchToProps = dispatch => {
    return {
        mouseIsPressed: () => dispatch(mouseIsPressed()),
        mouseIsNotPressed: () => dispatch(mouseIsNotPressed())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid);