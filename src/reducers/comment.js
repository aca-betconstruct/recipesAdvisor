import {
  RECEIVE_COMMENT,
  ADD_COMMENT,
  LOGOUT_USER,
  RECEIVE_DELETE_COMMENT
} from '../constants';

const comments = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_COMMENT:
      return action.payload;
    case ADD_COMMENT:
      return [...state, action.payload];
    case RECEIVE_DELETE_COMMENT:
      return state.filter(item => item.id !== action.payload);
    case LOGOUT_USER: {
      return [];
    }
    default: {
      return state;
    }
  }
};

export default comments;
