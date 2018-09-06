import {
  REQUEST_COMMENT,
  RECEIVE_COMMENT,
  REQUEST_POST_COMMENT,
  RECEIVE_POST_COMMENT
} from '../constants';

const requestComment = () => {
  return {
    type: REQUEST_COMMENT
  };
};

const receiveComment = json => {
  return {
    type: RECEIVE_COMMENT,
    payload: json.data
  };
};

const requestPostComment = () => {
  return {
    type: REQUEST_POST_COMMENT
  };
};

const receivePostComment = json => {
  return {
    type: RECEIVE_POST_COMMENT,
    payload: json.data
  };
};

export const fetchComment = () => {
  return dispatch => {
    dispatch(requestComment());
    return fetch(`http://localhost:5002/v1/comments`)
      .then(response => response.json())
      .then(response => dispatch(receiveComment(response)));
  };
};


export const fetchpComment = (state, jwt) => {
  return dispatch => {
    dispatch(requestPostComment());
    return fetch(`http://localhost:5002/v1/comments`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
      },
      method: 'POST',
      body: JSON.stringify(state)
    })
      .then(response => response.json())
      .then(response => dispatch(receiveComment(response)))
  };
};