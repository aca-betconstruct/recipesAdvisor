import {
  ADD_PREFERENCE,
  REMOVE_PREFERENCE,
  RECEIVE_ALL_PREFERENCES,
  REQUEST_PREFERENCES
} from '../../constants';
import { isPreferencesFetching, preferences } from '../../reducers/preferences';

describe('test isPreferencesFetching', () => {
  test('isPreferencesFetching on non-action', () => {
    expect(isPreferencesFetching(false, {})).toBe(false);
  });
  test('isPreferencesFetching on REQUEST_PREFERENCES', () => {
    expect(isPreferencesFetching(false, { type: REQUEST_PREFERENCES })).toBe(
      true
    );
  });
  test('isPreferencesFetching on RECEIVE_ALL_PREFERENCES', () => {
    expect(isPreferencesFetching(true, { type: RECEIVE_ALL_PREFERENCES })).toBe(
      false
    );
  });
  describe('test preferences', () => {
    test('test preferennces with non -action', () => {
      expect(preferences([], {})).toEqual([]);
    });
    test('test preferences with ADD_PREFERENCE if it is empty', () => {
      const preference = { id: 500, isLike: true, text: 'egg' };
      expect(
        preferences([], {
          type: ADD_PREFERENCE,
          payload: preference
        })
      ).toEqual([preference]);
    });
    test('test preferences with ADD_PREFERENCE if it is not empty', () => {
      const first = { id: 499, isLike: true, text: 'fish' };
      const second = { id: 500, isLike: true, text: 'egg' };
      expect(
        preferences([first], {
          type: ADD_PREFERENCE,
          payload: second
        })
      ).toEqual([first, second]);
    });
    test('test preferences with REMOVE_PREFERENCE', () => {
      const first = { id: 499, isLike: true, text: 'fish' };
      const second = { id: 500, isLike: true, text: 'egg' };
      expect(
        preferences([first, second], {
          type: REMOVE_PREFERENCE,
          payload: second
        })
      ).toEqual([first]);
    });
  });
});
