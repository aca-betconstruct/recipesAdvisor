import {
  NOTIFICATION_FETCHING,
  NOTIFICATION_FETCHING_FAILURE,
  NOTIFICATION_FETCHING_SUCCESS,
  BREAKFAST,
  DINNER,
  LUNCH,
  EDAMAM_KEYS
} from '../constants';
import {selectExcludes} from '../selectors';

const notificationFetching = () => {
  return {
    type: NOTIFICATION_FETCHING
  };
};
const notificationFetchingSuccess = payload => {
  return {
    type: NOTIFICATION_FETCHING_SUCCESS,
    payload
  };
};
const notificationFetchingFailure = () => {
  return {
    type: NOTIFICATION_FETCHING_FAILURE
  };
};

export const getRecipesForNotification = type => {
  return (dispatch,getState) => {

      const state = getState();
      const excludesArray = selectExcludes(state);
      const excludes = `&excludes=${excludesArray.join('&excludes=')}`;
    dispatch(notificationFetching());
    let food;
    switch (type) {
      case 'breakfast': {
        food = BREAKFAST[Math.floor(Math.random() * BREAKFAST.length)];
        break;
      }
      case 'lunch': {
        food = LUNCH[Math.floor(Math.random() * BREAKFAST.length)];
        break;
      }
      case 'dinner': {
        food = DINNER[Math.floor(Math.random() * BREAKFAST.length)];
        break;
      }
      default:
        break;
    }
    let api = EDAMAM_KEYS[Math.floor(Math.random() * EDAMAM_KEYS.length)];
    let randomInteger=Math.floor(Math.random()*80);
    return fetch(
      `https://api.edamam.com/search?q=${food}&app_id=${api.appId}&app_key=${api.appKey}&from=${randomInteger}&to=${randomInteger+1}${excludes}`
    )
      .then(recipes => recipes.json())
      .then(recipe => recipe.hits[Math.floor(Math.random()*recipe.hits.length)].recipe)
      .then(recipe => {
        dispatch(notificationFetchingSuccess(recipe));
      })
      .catch(() => dispatch(notificationFetchingFailure()));
  };
};
