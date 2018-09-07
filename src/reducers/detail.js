import { RECEIVE_DETAIL } from '../constants';

const detail = (state = null, action) => {
  switch (action.type) {
    case RECEIVE_DETAIL: {
      return action.payload[0];
    }
    default: {
      return state;
    }
  }
};

export default detail;
