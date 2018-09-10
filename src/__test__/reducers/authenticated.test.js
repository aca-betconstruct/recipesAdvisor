import { jwt, user } from '../../reducers/authenticated';
import {
  LOGOUT_USER,
  RECEIVE_AUTHENTICATED,
  RECEIVE_LOGIN
} from '../../constants';

describe('test jwt', () => {
  test('non-action', () => {
    expect(jwt('', {})).toBe('');
  });

  test('RECEIVE_LOGIN', () => {
    expect(jwt('', { type: RECEIVE_LOGIN, payload: 'login' })).toBe(
      'login'
    );
  });

  test('LOGOUT_USER', () => {
    expect(jwt('jwt', { type: LOGOUT_USER })).toBe('');
  });
});

describe('test user', () => {
  const userInfo = {
    id: 3,
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email'
  };

  test('non-action', () => {
    expect(user(null, {})).toBe(null);
  });

  test('RECEIVE_AUTHENTICATED', () => {
    expect(
      user(null, {
        type: RECEIVE_AUTHENTICATED,
        payload: userInfo
      })
    ).toBe(userInfo);
  });

  test('LOGOUT_USER', () => {
    expect(user(userInfo, { type: LOGOUT_USER })).toBe(null);
  });
});
