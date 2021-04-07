import { ADD_EXPENSE, DELETE_EXPENSE, GET_EXPENSES } from '../actions/types';

const inititalState = {
  expenses: null,
  current: null,
  error: null,
};

export default (state = inititalState, action) => {
  switch (action.type) {
    case GET_EXPENSES:
      return {
        ...state,
        expenses: action.payload,
      };
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case DELETE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
