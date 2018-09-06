import { FIRST_PAGE, LOGOUT_USER, NEXT_PAGE } from '../constants';

const initialState = 0;

const curPage = (state = initialState, action) => {
  switch (action.type) {
    case FIRST_PAGE:
      return initialState;
    case NEXT_PAGE:
      return action.payload;
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
};

export default curPage;
