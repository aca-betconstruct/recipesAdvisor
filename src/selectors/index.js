import { createSelector } from 'reselect';
const jwt = state => state.jwt;
export const selectIsAuth = createSelector(jwt, jwt => jwt !== '');

