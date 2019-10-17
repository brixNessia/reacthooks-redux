function ReduxThunk(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = ReduxThunk();
thunk.withExtraArgument = ReduxThunk;

export default thunk;
