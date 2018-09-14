import {
  NOTIFICATION_FETCHING,
  NOTIFICATION_FETCHING_FAILURE,
  NOTIFICATION_FETCHING_SUCCESS
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
export const getRecipesForNotification = (type) => {
  return dispatch => {
    dispatch(notificationFetching());
    let food;
    switch(type){
        case 'breakfast':{food='tea';break;}
        case 'dinner':{food='chicken';break;}
        case 'supper':{food='broccoli ';break;}
        default:break;
  }
    return fetch(
      `https://api.edamam.com/search?q=${food}&app_id=3767af3b&app_key=69ee56473afc34c85e1710efe3de4b8d&from=0&to=1`
    )
      .then(recipes => recipes.json())
      .then(recipe => recipe.hits[0].recipe)
      .then(recipe => {
        dispatch(notificationFetchingSuccess(recipe));
      }).catch(()=>dispatch(notificationFetchingFailure()));
  };
};
