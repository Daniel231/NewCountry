import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import './styles/App.css';
import rootReducer from './rootReducer';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import createSagaMiddleware from 'redux-saga';
import { getUser } from './components/user/user.saga';

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(getUser);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);