import React from 'react';
import ReactDOM from 'react-dom';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux'

import createStore from './store'

import Routes from './routes';

const store = createStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Routes history={history} />
    </div>
  </Provider>,
  document.getElementById('root')
);
