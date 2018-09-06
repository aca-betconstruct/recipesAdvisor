import { REQUEST_LOGIN, RECEIVE_LOGIN } from '../constants';

const requestLogin = () => {
  return {
    type: REQUEST_LOGIN
  };
};

const receiveLogin = data => {
  return {
    type: RECEIVE_LOGIN,
    payload: data
  };
};

export const fetchLogin = state => {
  return dispatch => {
    dispatch(requestLogin());
    return fetch(`http://localhost:5002/v1/login`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(state)
    })
      .then(response => response.json())
      .then(response => {
        if (response.data) {
          dispatch(receiveLogin(response.data['authToken'] || ''));
        }
      });
  };
};
