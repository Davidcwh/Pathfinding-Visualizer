import React from './node_modules/react';
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