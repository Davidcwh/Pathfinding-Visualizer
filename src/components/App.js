import React from 'react';
import Grid from './Grid';
import '../css/App.css';

class App extends React.Component {

    render() {
        return (
            <div id="wrapper" className="App">
                <Grid />
            </div>
        );
    }
}

export default App;