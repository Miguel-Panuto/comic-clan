import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/index';
/*
* Redux inside all application
*/
ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
