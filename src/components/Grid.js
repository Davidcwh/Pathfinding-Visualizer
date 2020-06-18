import React from 'react';
import Node from './Node';
import { connect } from 'react-redux';
import '../css/Grid.css';
import { generateNodeKey } from '../util/GridGenerationUtil';

class Grid extends React.Component {

    render() {
        const { grid } = this.props;

        return (
            <div className="grid">
                {
                    grid.map((row, rowIndex) => {
                        return (
                            <div className="grid-row" key={rowIndex}>
                                {
                                    row.map((col, colIndex) => {
                                        return (<Node 
                                                    key={generateNodeKey(rowIndex, colIndex)}
                                                    row={rowIndex} 
                                                    col={colIndex}/>);
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
        grid: state.board.grid,
    }
}

export default connect(mapStateToProps)(Grid);