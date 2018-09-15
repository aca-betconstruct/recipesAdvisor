import {
  NOTIFICATION_FETCHING,
  NOTIFICATION_FETCHING_FAILURE,
  NOTIFICATION_FETCHING_SUCCESS,
  BREAKFAST,
  DINNER,
  LUNCH
} from '../constants';

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
  return dispatch => {
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
    return fetch(
      `https://api.edamam.com/search?q=${food}&app_id=3767af3b&app_key=69ee56473afc34c85e1710efe3de4b8d&from=0&to=1`
    )
      .then(recipes => recipes.json())
      .then(recipe => recipe.hits[Math.floor(Math.random()*recipe.hits.length)].recipe)
      .then(recipe => {
        dispatch(notificationFetchingSuccess(recipe));
      })
      .catch(() => dispatch(notificationFetchingFailure()));
  };
};
