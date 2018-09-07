import {
  RECEIVE_ALL_PREFERENCES,
  REQUEST_PREFERENCES,
  REMOVE_PREFERENCE,
  ADD_PREFERENCE
} from '../constants';

const requestPreference = () => {
  return {
    type: REQUEST_PREFERENCES
  };
};

const allReceivePreference = json => {
  return {
    type: RECEIVE_ALL_PREFERENCES,
    payload: json.data
  };
};
export const deletePreference = (id, jwt) => {
  return dispatch => {
    return fetch(`http://localhost:5002/v1/preference/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
      },
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(json => {
        // dispatch(allReceivePreference());
        dispatch({ type: REMOVE_PREFERENCE, payload: {id} });
       // dispatch(getPreferences(jwt));
      })
      .catch(e => {
        console.log(e);
      });
  };
};
export const getPreferences = jwt => {
  return dispatch => {
    dispatch(requestPreference());
    return fetch(`http://localhost:5002/v1/preferences`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
      }
    })
      .then(response => response.json())
      .then(json => {
        dispatch(allReceivePreference(json));
      })
      .catch(e => {
        console.log(e);
      });
  };
};
export const postPreference = (state, jwt) => {
  return dispatch => {
    return fetch(`http://localhost:5002/v1/preferences`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
      },
      method: 'POST',
      body: JSON.stringify(state)
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        dispatch({ type: ADD_PREFERENCE, payload: response.data });
       // dispatch(getPreferences(jwt));
      });
  };
};
