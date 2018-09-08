import { CHANGE_CALORIES } from '../constants';

export const changeCalories = (calories,wls) => ({
  type: CHANGE_CALORIES,
  calories,
  wls
});