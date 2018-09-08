import {
  REQUEST_AUTHENTICATED,
  RECEIVE_AUTHENTICATED,
  LOGOUT_USER
} from '../constants';

const requestAuthenticated = () => {
  return {
    type: REQUEST_AUTHENTICATED
  };
};

const receiveAuthenticated = json => {
  return {
    type: RECEIVE_AUTHENTICATED,
    payload: json.data
  };
};


const logout = () => {
  localStorage.clear();
  return {
    type: LOGOUT_USER
  };
};

export const logoutUser = () => {
  return dispatch => {
    dispatch(logout());
  };
};

export const getAuthenticated = jwt => {
  return dispatch => {
    dispatch(requestAuthenticated());
    return fetch(`http://localhost:5002/v1/users`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
      }
    })
      .then(response => response.json())
      .then(json => {
        dispatch(receiveAuthenticated(json));
      })
      .catch(e => {
        console.log(e);
      });
  };
};
