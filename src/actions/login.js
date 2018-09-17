import { REQUEST_LOGIN, RECEIVE_LOGIN, ERROR_LOGIN } from '../constants';
import {saveState} from '../store/localStorage'

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

const errorLogin = data => {
  return {
    type: ERROR_LOGIN,
    payload: data
  };
};

export const postLogin = state => {
  return dispatch => {
    dispatch(requestLogin());
    return fetch(`https://acafoodapi.haffollc.com/v1/login`, {
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
          saveState({jwt:response.data['authToken']},'store');
        }else if (response.error) {
          dispatch(errorLogin(response.error))
        }
      });
  };
};
