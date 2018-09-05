import { createSelector } from 'reselect';
const selectUser = state => state.user;
export const selectIsAuth = createSelector(selectUser, user => user !== null);
