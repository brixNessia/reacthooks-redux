import { combineReducers } from 'redux';

import auth from 'modules/auth/SignIn/store/reducer';

const reducers = combineReducers({
  auth,
});
export default reducers;
