import { RECEIVE_FAVOURITES, REQUEST_FAVOURITES } from '../../constants';
import { isFavouriteRecipesFetching } from '../../reducers/favourites';

describe('isFavouriteRecipesFetching', () => {
  test('REQUEST_FAVOURITES', () => {
    expect(
      isFavouriteRecipesFetching(false, { type: REQUEST_FAVOURITES })
    ).toBe(true);
  });
  test('RECEIVE_ALL_FAVOURITES when it is false', () => {
    expect(
      isFavouriteRecipesFetching(false, { type: RECEIVE_FAVOURITES })
    ).toBe(false);
  });
  test('RECEIVE_ALL_FAVOURITES when it is true', () => {
    expect(
      isFavouriteRecipesFetching(true, { type: RECEIVE_FAVOURITES })
    ).toBe(false);
  });
  test('REQUEST_FAVOURITES  non-action when it is false ', () => {
    expect(isFavouriteRecipesFetching(false, {})).toBe(false);
  });
  test('REQUEST_FAVOURITES  non-action  when it is true', () => {
    expect(isFavouriteRecipesFetching(true, {})).toBe(false);
  });
});
