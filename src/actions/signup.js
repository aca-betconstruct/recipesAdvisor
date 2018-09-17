import { REQUEST_SIGNUP, RECEIVE_SIGNUP, ERROR_SIGNUP } from '../constants';

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

const errorSignUp = message => {
  return {
    type: ERROR_SIGNUP,
    payload: message
  };
};

export const postSignUp = (state, toLoginPage) => {
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
      .then(response => {
        if (response.data) {
          dispatch(receiveSignUp());
          toLoginPage();
        } else if (response.error) {
          dispatch(errorSignUp(response.error));
        }
      });
  };
};
