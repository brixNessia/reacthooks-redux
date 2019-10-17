import * as types from './actionType';

const initialState = {
  isAuthenticated: false,
};
function reducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case types.AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: true,
      };

    default:
      return { ...state };
  }
}

export default reducer;
