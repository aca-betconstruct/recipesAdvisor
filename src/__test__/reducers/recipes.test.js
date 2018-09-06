import { isRecipesFetching } from '../../reducers/recipes';
import {
  RECIPES_FETCHING,
  RECIPES_FETCHING_FAILURE,
  RECIPES_FETCHING_SUCCESS
} from '../../constants';
describe('test isRecipesFetching', () => {
  test('return state on non-action', () => {
    expect(isRecipesFetching(false, {})).toBe(false);
  });
  test('return state on RECIPES_FETCHING', () => {
    expect(isRecipesFetching(false, { type: RECIPES_FETCHING })).toBe(true);
  });
  test('return state on RECIPES_FETCHING_SUCCESS', () => {
    expect(isRecipesFetching(true, { type: RECIPES_FETCHING_SUCCESS })).toBe(
      false
    );
  });
  test('return state on RECIPES_FETCHING_FAILURE', () => {
    expect(isRecipesFetching(true, { type: RECIPES_FETCHING_FAILURE })).toBe(
      false
    );
  });
});
discribe('test recipes',()=>{
  // test('RECIPES_FETCHING_SUCCESS',()=>{
  //   recipes([],)
  // })
})

