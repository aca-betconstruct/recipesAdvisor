import { isRecipesFetching } from '../../reducers/recipes';
import {
  RECIPES_FETCHING,
  RECIPES_FETCHING_FAILURE,
  RECIPES_FETCHING_SUCCESS
} from '../../constants';
describe('test isRecipesFetching', () => {
  test('non-action', () => {
    expect(isRecipesFetching(false, {})).toBe(false);
  });
  test('RECIPES_FETCHING', () => {
    expect(isRecipesFetching(false, { type: RECIPES_FETCHING })).toBe(true);
  });
  test('RECIPES_FETCHING_SUCCESS', () => {
    expect(isRecipesFetching(true, { type: RECIPES_FETCHING_SUCCESS })).toBe(
      false
    );
  });
  test('RECIPES_FETCHING_FAILURE', () => {
    expect(isRecipesFetching(true, { type: RECIPES_FETCHING_FAILURE })).toBe(
      false
    );
  });
});
