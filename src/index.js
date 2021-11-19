import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
} from "react-router-dom";


function rootReducer(state = [], action) {
  if (action.type === 'RECEIVE') {
    return action.payload
  }
  return state
}

const store = createStore(rootReducer)

ReactDOM.render(
  <Router location="auth">
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
  ,
  document.getElementById('root')
);
