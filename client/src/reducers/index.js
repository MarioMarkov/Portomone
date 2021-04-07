import { combineReducers } from 'redux';
import expenseReducer from './expenseReducer';
import personReducer from './personReducer';

export default combineReducers({
  expense: expenseReducer,
  person: personReducer,
});
