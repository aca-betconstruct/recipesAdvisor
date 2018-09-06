import { RECEIVE_COMMENT } from '../constants';

const comments = (state = null, action) => {
  switch (action.type) {
    case  RECEIVE_COMMENT: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default comments;
