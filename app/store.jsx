// import { createStore, applyMiddleware } from 'redux';
// import reducers from './reducers'
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
// import thunk from 'redux-thunk';

// export default function store(initialState) {
//   return createStore(
//     reducers,
//     initialState,
//     applyMiddleware(thunk)
//   );
// }

import { compose, createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import _ from 'lodash'
import { routerReducer } from 'react-router-redux'

import reducers, { initialStates } from './reducers'

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const { userInitialState } = initialStates

export default (props) => {
  const initialState = {
    user: userInitialState
  }

  const composedStore = compose(applyMiddleware(thunkMiddleware))
  const storeCreator = composedStore(createStore)
  const store = storeCreator(reducer, initialState)

  return store
}
