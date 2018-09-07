import { REQUEST_SIGNUP, RECEIVE_SIGNUP } from '../constants';

const requestSignUp = () => {
  return {
    type: REQUEST_SIGNUP
  };
};

const receiveSignUp = () => {
  return {
    type: RECEIVE_SIGNUP
  };
};

export const postSignUp = state => {
  return dispatch => {
    dispatch(requestSignUp());
    return fetch(`https://acafoodapi.haffollc.com/v1/signup`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(state)
    })
      .then(response => response.json())
      .then(json => {
        dispatch(receiveSignUp());
      });
  };
};
