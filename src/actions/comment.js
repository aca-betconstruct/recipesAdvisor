import {
  REQUEST_COMMENT,
  RECEIVE_COMMENT,
  REQUEST_POST_COMMENT,
  REQUEST_DELETE_COMMENT,
  RECEIVE_DELETE_COMMENT,
  ADD_COMMENT
} from '../constants';

const requestComment = () => {
  return {
    type: REQUEST_COMMENT
  };
};

const receiveComments = json => {
  return {
    type: RECEIVE_COMMENT,
    payload: json.data
  };
};

const addComment = json => {
  return {
    type: ADD_COMMENT,
    payload: json.data
  };
};

const requestPostComment = () => {
  return {
    type: REQUEST_POST_COMMENT
  };
};

const receiveDeletComments = id => {
  return {
    type: RECEIVE_DELETE_COMMENT,
    payload: id
  };
};

const requestDeleteComment = () => {
  return {
    type: REQUEST_DELETE_COMMENT
  };
};

export const getComments = () => {
  return dispatch => {
    dispatch(requestComment());
    return fetch(`https://acafoodapi.haffollc.com/v1/comments`)
      .then(response => response.json())
      .then(response => dispatch(receiveComments(response)));
  };
};

export const postComment = (state, jwt) => {
  return dispatch => {
    dispatch(requestPostComment());
    return fetch(`https://acafoodapi.haffollc.com/v1/comments`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
      },
      method: 'POST',
      body: JSON.stringify(state)
    })
      .then(response => response.json())
      .then(response => dispatch(addComment(response)));
  };
};

export const deleteComment = (id, jwt) => {
  return dispatch => {
    dispatch(requestDeleteComment());
    return fetch(`https://acafoodapi.haffollc.com/v1/comment/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
      },
      method: 'DELETE',
      body: JSON.stringify({id})
    })
      .then(response => response.json())
      .then(response => dispatch(receiveDeletComments(id)));
  };
};
