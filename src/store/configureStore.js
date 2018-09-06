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
store.subscribe(() => console.log(store.getState()));
store.subscribe(
  throttle(() => {
    saveState(
      {
        recipes: store.getState().recipes,
        isRecipesFetching: store.getState().isRecipesFetching,
        allFetchFavourites: store.getState().allFetchFavourites,
        isFavouriteRecipesFetching: store.getState().isFavouriteRecipesFetching,
        curPage: store.getState().curPage,
        preferences: store.getState().preferences,
        user: store.getState().user,
        form: store.getState().form,
        filter: store.getState().filter,
        isPreferencesFetching: store.getState().isPreferencesFetching,
        jwt: store.getState().jwt
      },
      'store'
    );
  }, 1000)
);

export default store;
