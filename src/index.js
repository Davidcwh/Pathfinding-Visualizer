import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './components/App';
import './css/App.css';

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'));
