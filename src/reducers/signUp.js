import {  ERROR_SIGNUP } from '../constants';

const signUpError = (state = null, action) => {
  switch (action.type) {
    case  ERROR_SIGNUP: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
};
export default signUpError;
