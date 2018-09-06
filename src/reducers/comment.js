import { RECEIVE_COMMENT } from '../constants';

const comments = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_COMMENT: {
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
};

export default comments;
