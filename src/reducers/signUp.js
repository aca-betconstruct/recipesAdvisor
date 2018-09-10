import { RECEIVE_SIGNUP } from '../constants';

const signUp = (state = '', action) => {
  switch (action.type) {
    case RECEIVE_SIGNUP: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
};
export default signUp;
