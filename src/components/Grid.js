import React from './node_modules/react';
import Node from './Node';
import '../css/Grid.css';

const TOTAL_ROW = 20;
const TOTAL_COL = 50;
const START_NODE_ROW = 10;
const START_NODE_COL = 5;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 45; 


class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = { grid: [], isMousePressed: false};

        this.generateGrid = this.generateGrid.bind(this);
        this.NodeFactory = this.NodeFactory.bind(this);
    }

    componentDidMount() {
        const grid = this.generateGrid(TOTAL_ROW, TOTAL_COL);
        this.setState({grid});
    }

    handleMouseDown(row, col) {
        const newGrid = this.generateGrid(row, col, this.state.grid);
        this.setState({grid: newGrid, isMousePressed: true});
    }

    handleMouseUp() {
        this.setState({isMousePressed: false});
    }

    handleMouseEnter(row, col) {
        if(!this.state.isMousePressed || this.state.grid[row][col].isWall) return;
        const newGrid = this.generateGrid(row, col, this.state.grid);
        this.setState({grid: newGrid});
    }

    generateGrid(row, col, currentGrid) {

        if(currentGrid === undefined) {
            const grid = [];

            for(let r = 0; r < row; r++) {
                const currentRow = [];

                for(let c = 0; c < col; c++) {
                    currentRow.push(this.NodeFactory(r, c));
                }

                grid.push(currentRow);
            }

            return grid;
        } else {
            const newGrid = currentGrid.slice();
            const node = newGrid[row][col];

            const newNode = {
                ...node,
                isWall: !node.isWall
            };
            newGrid[row][col] = newNode;
            
            return newGrid;
        }
        
    }

    NodeFactory(row, col) {
        return {
            row,
            col,
            isStart: row === START_NODE_ROW && col === START_NODE_COL,
            isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
          };
    }

    render() {
        const { grid } = this.state;

        return (
            <>
            <div className="grid">
                {
                    grid.map((row, rowIndex) => {
                        return (
                            <div className={rowIndex}>
                                {
                                    row.map((node, nodeIndex) => {
                                        const {row, col, isFinish, isStart, isWall } = node;
                                        return (
                                            <Node
                                                key={nodeIndex}
                                                row={row}
                                                col={col}
                                                isFinish={isFinish}
                                                isStart={isStart}
                                                isWall={isWall}
                                                onMouseDown={(row, col) => this.handleMouseDown(row, col)}
                                                onMouseUp={() => this.handleMouseUp()}
                                                onMouseEnter={(row, col) => this.handleMouseEnter(row, col)}
                                                ></Node>
                                        );
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
            </>
        );
    }


}

export default Grid;