import React from 'react';
import { render } from 'react-dom';
// import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'mobx-react';
// import * as stores from './stores';
import RootStore from './stores/rootStore';
import {BrowserRouter} from 'react-router-dom';
// import createSagaMiddleware from 'redux-saga';

import App from './components/App';
// import App from './components/user/AddUser/AddUser';
import './styles/App.css';

// import rootReducer from './rootReducer';
// import { getUser } from './components/user/user.saga';

// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(
//   rootReducer,
//   applyMiddleware(sagaMiddleware)
// );

// sagaMiddleware.run(getUser);


render(
  <Provider store={new RootStore()}>
   <BrowserRouter><App /></BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
