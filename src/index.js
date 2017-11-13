import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import './styles/App.css';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';


render(
    <App />,
    document.getElementById('app')
);