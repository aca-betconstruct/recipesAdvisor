import { createSelector } from 'reselect';
const jwt = state => state.jwt;
export const selectIsAuth = createSelector(jwt, jwt => jwt !== '');
const selectPreferences = state => state.preferences;
export const selectExcludes = createSelector(
  selectPreferences,
  selectPreferences => {
    return selectPreferences.filter(el => !el.isLike).map(el => el.text);
  }
);
