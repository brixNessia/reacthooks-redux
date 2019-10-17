import * as types from './actionType';

export function auth() {
  return {
    type: types.AUTHENTICATED,
  };
}
