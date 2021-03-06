import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AppRoute from './components/routeexample1'
import NestedRoute from './components/routeexample2';

ReactDOM.render(<AppRoute />, document.getElementById('example1'));
ReactDOM.render(<NestedRoute/>, document.getElementById('example2'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
