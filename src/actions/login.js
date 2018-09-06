import { REQUEST_LOGIN, RECEIVE_LOGIN } from '../constants';

const requestLogin = () => {
  return {
    type: REQUEST_LOGIN
  };
};

const receiveLogin = () => {
  return {
    type: RECEIVE_LOGIN
  };
};

export const fetchLogin = (state, prop) => {
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
        localStorage.setItem('jwt', response.data['authToken']);
        prop;
        dispatch(receiveLogin());
      });
  };
};
