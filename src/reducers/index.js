import counterReducer from './counter';
import loggedReducer from './login';
import { combineReducers } from 'redux';

export const rootReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer
});
