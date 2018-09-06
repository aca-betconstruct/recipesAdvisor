import { jwt, user } from '../../reducers/authenticated';
import {
  LOGOUT_USER,
  RECEIVE_AUTHENTICATED,
  RECEIVE_LOGIN
} from '../../constants';

describe('test jwt', () => {
  test('test jwt with non-action', () => {
    expect(jwt('', {})).toBe('');
  });

  test('test jwt with RECEIVE_LOGIN', () => {
    expect(jwt('', { type: RECEIVE_LOGIN, payload: 'sdfgdsadsg' })).toBe(
      'sdfgdsadsg'
    );
  });

  test('test jwt with LOGOUT_USER', () => {
    expect(jwt('sdfsadfa', { type: LOGOUT_USER })).toBe('');
  });
});

describe('test user', () => {
  const userInfo = {
    id: 3,
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email'
  };

  test('test user with non-action', () => {
    expect(user(null, {})).toBe(null);
  });

  test('test user with RECEIVE_AUTHENTICATED', () => {
    expect(
      user(null, {
        type: RECEIVE_AUTHENTICATED,
        payload: userInfo
      })
    ).toBe(userInfo);
  });

  test('test user with LOGOUT_USER', () => {
    expect(user(userInfo, { type: LOGOUT_USER })).toBe(null);
  });
});
