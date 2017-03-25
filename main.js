import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/reducers.js';
import ReactDOM from 'react-dom';
import initialState from './initialState.js';
import App from './components/App.js';

let store = createStore(reducers, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
