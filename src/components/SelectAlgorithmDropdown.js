import React from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import { setSelectedAlgorithm } from '../actions';

const options = [
    { key: 1, text: 'Breadth First Search (BFS)', value: 'BFS' }
  ]

class SelectAlgorithmDropdown extends React.Component {
    render() {
        return (
            <Dropdown fluid text='Select Algorithm' options={options} simple item onChange={(event, data) => {this.props.onChange(data.value)}}/>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChange: (algorithm) => {dispatch(setSelectedAlgorithm(algorithm))}
    }
}
  
export default connect(null, mapDispatchToProps)(SelectAlgorithmDropdown)