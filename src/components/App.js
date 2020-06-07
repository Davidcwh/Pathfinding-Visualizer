import React from 'react';
import Grid from './Grid';
import Menu from './Menu';
import InfoPanel from './InfoPanel';
import '../css/App.css';

class App extends React.Component {

    render() {
        return (
            <div id="wrapper" className="App">
                <Menu/>
                <Grid />
                <InfoPanel/>
            </div>
        );
    }
}

export default App;