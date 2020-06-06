import React from 'react';
import Node from './Node';
import { connect } from 'react-redux';
import '../css/Grid.css';
import { generateNodeKey } from '../util/GridGenerationUtil'

class Grid extends React.Component {

    render() {
        if(this.props === undefined) {
            return <div>hello</div>;
        }

        const grid = this.props.grid;

        return (
            <div className="grid">
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
        grid: state.grid
    }
}

export default connect(mapStateToProps)(Grid);