import { GET_EXPENSES, ADD_EXPENSE, DELETE_EXPENSE } from './types';

export const getExpenses = () => async (dispatch) => {
  try {
    const res = await fetch('/expenses');
    const data = await res.json();
    dispatch({
      type: GET_EXPENSES,
      payload: data.expenses,
    });
  } catch (error) {
    //handle error
  }
};

export const addExpense = (expense) => async (dispatch) => {
  try {
    expense = JSON.stringify(expense);
    expense = JSON.parse(expense);
    const res = await fetch('/expenses', {
      method: 'post',
      body: JSON.stringify(expense),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_EXPENSE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteExpense = (id) => async (dispatch) => {
  console.log('actions');

  try {
    await fetch(`/expenses/${id}`, {
      method: 'DELETE',
    });
    dispatch({
      type: DELETE_EXPENSE,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};
