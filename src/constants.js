export const RECIPES_FETCHING = 'RECIPES_FETCHING';
export const RECIPES_FETCHING_SUCCESS = 'RECIPES_FETCHING_SUCCESS';
export const RECIPES_FETCHING_FAILURE = 'RECIPES_FETCHING_FAILURE';

export const FIRST_PAGE = 'FIRST_PAGE';
export const NEXT_PAGE = 'NEXT_PAGE';


export const REQUEST_SIGNUP = 'REQUEST_SIGNUP';
export const RECEIVE_SIGNUP = 'RECEIVE_SIGNUP';

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const LOGOUT_USER = 'LOGOUT_USER';

export const REQUEST_AUTHENTICATED = 'REQUEST_AUTHENTICATED';
export const RECEIVE_AUTHENTICATED = 'RECEIVE_AUTHENTICATED';
export const ERROR_AUTHENTICATED = 'ERROR_AUTHENTICATED';
export const RECEIVE_FAVORITES = ' RECEIVE_FAVORITES';

export const REQUEST_FAVORITES = 'REQUEST_FAVORITES';
export const RECEIVE_ALL_FAVORITES = ' RECEIVE_ALL_FAVORITES';

export const ADD_HEALTH_LABEL = 'ADD_HEALTH_LABEL';
export const ADD_DIET_LABEL = 'ADD_DIET_LABEL';
export const REMOVE_FILTER_LABEL = 'REMOVE_FILTER_LABEL';
export const minTime = new Date();
minTime.setHours(7, 0, 0);
export const maxTime = new Date();
maxTime.setHours(20, 0, 0);
export const calendarInitialState = {
  events: [],
  recipes: [],
  modal: {
    id: null,
    name: null,
    desc: null,
    start: new Date(2018, 4, 4, 7, 0, 0),
    end: new Date(2018, 4, 4, 8, 0, 0)
  },
  modalOpen: false,
  recipesOpen: false
};
export const RECEIVE_ALL_PREFERENCES='RECEIVE_ALL_PREFERENCES';
export const REQUEST_PREFERENCES='REQUEST_PREFERENCES';


