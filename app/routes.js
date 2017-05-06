
import React from 'react'
import ReactDOM from 'react-dom'
// import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { Router, Route, IndexRoute } from 'react-router'

import App from './App';
import Dashboard from './dashboard/index';
import Stats from './stats/Stats';
import Login from './login/Login';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="stats" component={Stats}/>
      <Route path="login" component={Login}/>
    </Route>
  </Router>
);

export default Routes;
