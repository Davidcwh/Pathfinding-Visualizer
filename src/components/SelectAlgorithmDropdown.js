import React from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import { setSelectedAlgorithm } from '../actions';

const options = [
    { key: 1, text: 'Breadth First Search (BFS)', value: 'BFS' },
    { key: 2, text: 'Depth First Search (DFS)', value: 'DFS' },
    { key: 3, text: 'A* Search', value: 'ASTAR' },
    { key: 4, text: 'Greedy Best-First Search', value: 'GREED' }
  ]

class SelectAlgorithmDropdown extends React.Component {
    render() {
        const selectedAlgorithmText = this.props.selectedAlgorithm === 'none' ? 'Select Algorithm' 
                                                                              : this.props.selectedAlgorithm === 'BFS'
                                                                              ? 'Breadth First Search (BFS)'
                                                                              : this.props.selectedAlgorithm === 'DFS'
                                                                              ? 'Depth First Search (BFS)'
                                                                              : this.props.selectedAlgorithm === 'ASTAR'
                                                                              ? 'A* Search'
                                                                              : this.props.selectedAlgorithm === 'GREED'
                                                                              ? 'Greedy Best-First Search'
                                                                              : 'Select Algorithm';

        const disabled = this.props.algorithmStatus !== 'STOPPED';

        return (
            <Dropdown 
                fluid text={selectedAlgorithmText} 
                options={options} 
                simple item onChange={(event, data) => {this.props.onChange(data.value)}}
                disabled={disabled}/>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedAlgorithm: state.selectedAlgorithm,
        algorithmStatus: state.algorithmStatus
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChange: (algorithm) => {dispatch(setSelectedAlgorithm(algorithm))}
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(SelectAlgorithmDropdown)