import { RECEIVE_DITAEL } from '../constants';

const ditael = (state = null, action) => {
  switch (action.type) {
    case RECEIVE_DITAEL: {
      return action.payload[0];
    }
    default: {
      return state;
    }
  }
};

export default ditael;
