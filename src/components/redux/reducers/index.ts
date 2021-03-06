// ROOT REDUCER FILE

import { combineReducers } from 'redux';
import { UserReducer } from './userReducer';

const rootReducer = combineReducers({
  userReducer: UserReducer,
  // other reducers will be placed below
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export { rootReducer };
