import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from '../reducers';
import {loadState } from './localStorage';

const localStorageStore = loadState('store');
const store =
  process.env.NODE_ENV === 'production'
    ? createStore(rootReducer, localStorageStore, applyMiddleware(thunk))
    : createStore(
        rootReducer,
        localStorageStore,
        compose(
          applyMiddleware(thunk),
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )
      );


export default store;
