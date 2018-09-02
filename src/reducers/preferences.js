import { ADD_PREFERENCE, REMOVE_PREFERENCE,RECEIVE_ALL_PREFERENCES, REQUEST_PREFERENCES  } from '../constants';

// export default (state = [], action) => {
//   switch (action.type) {
//     case ADD_PREFERENCE:
//       state.push({ id: idGen(state), ...action.pref });
//       return [...state];
//     case REMOVE_PREFERENCE:
//       return state.filter(v => v.id !== action.payload.id);
//     default:
//       return state;
//   }
// };
//
// const idGen = state => {
//   let id = 1;
//   state.forEach(v => {
//     if (v.id >= id) id = v.id + 1;
//   });
//   return id;
// };

export const isPreferencesFetching = (state = false, action) => {
    switch (action.type) {
        case REQUEST_PREFERENCES:
            return true;
        case RECEIVE_ALL_PREFERENCES:
            return false;
        default:
            return false;
    }
};

export const preferences = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_ALL_PREFERENCES: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
};
