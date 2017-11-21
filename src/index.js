import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import './styles/App.css';

import {createStore} from 'redux';
import {Provider} from 'react-redux';


function dummyReducer(state=[], action) {
    return state;
}

let store = createStore(dummyReducer, {name:"miguel rodrigez"});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);