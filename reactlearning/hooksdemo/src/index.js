import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Counter from './components/example1';
import Counter2 from './components/example2';
import DisplayData from './components/example3';
import ProcessData from './components/example4';
import Timer from './components/example5';
import MessagingStatus from './components/example6';
import MyHOC from './components/hoc';

ReactDOM.render(<Counter />, document.getElementById('example1'));
ReactDOM.render(<Counter2/>, document.getElementById('example2'));
ReactDOM.render(<DisplayData/>, document.getElementById('example3'));
ReactDOM.render(<ProcessData/>, document.getElementById('example4'));
ReactDOM.render(<Timer/>, document.getElementById('example5'));
ReactDOM.render(<MessagingStatus/>, document.getElementById('example6'));
ReactDOM.render(<MyHOC/>, document.getElementById('example7'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
