import { CHANGE_CALORIES } from '../constants';

const initialState = {
  calories: 0,
  wls: 0,
  isReady: false
};
 const  assignResults = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CALORIES:
     state =  Object.assign({}, state, {calories: (parseInt(action.calories, 10) + '')}, {wls: action.calories-500}, {isReady:true});
      return state;
    default:
      return state;
  }
};
 
 export default assignResults;
