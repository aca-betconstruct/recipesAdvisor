import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from '../reducers';
import { saveState, loadState } from './localStorage';
import throttle from 'lodash/throttle';

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
//store.subscribe(() => console.log(store.getState()));
store.subscribe(
  throttle(() => {
    saveState(
      {
        user: store.getState().user,
        allFetchFavourites: store.getState().allFetchFavourites,
        preferences: store.getState().preferences,
        filter: store.getState().filter,
        jwt: store.getState().jwt
      },
      'store'
    );
  }, 1000)
);

export default store;
