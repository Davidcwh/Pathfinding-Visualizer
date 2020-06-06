import React from 'react';
import Node from './Node';
import { connect } from 'react-redux';
import '../css/Grid.css';

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
                                        return (<Node row={rowIndex} col={colIndex} />);
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