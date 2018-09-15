import {LOGOUT_USER, RECEIVE_DETAIL} from '../constants';

const detail = (state = null, action) => {
  switch (action.type) {
    case RECEIVE_DETAIL: {
      return action.payload[0];
    }
      case LOGOUT_USER: {
          return null;
      }
    default: {
      return state;
    }
  }
};

export default detail;
