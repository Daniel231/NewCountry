import React from 'react';
import { render } from 'react-dom';
// import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'mobx-react';
import { UsersStore } from './stores/usersStore';
// import createSagaMiddleware from 'redux-saga';

import App from './components/App';
import './styles/App.css';
// import rootReducer from './rootReducer';
// import { getUser } from './components/user/user.saga';

// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(
//   rootReducer,
//   applyMiddleware(sagaMiddleware)
// );

// sagaMiddleware.run(getUser);

const store = new UsersStore();

render(
  <Provider rootStore={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
