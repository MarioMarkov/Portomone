import React from 'react';
import { connect } from 'react-redux';
import { deleteExpense } from '../../actions/expenseActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const ExpenseItem = ({ expense, deleteExpense }) => {
  const onDelete = () => {
    deleteExpense(expense._id);
    M.toast({ html: 'Expense deleted' });
  };

  return (
    <li className='collection-item'>
      <div>
        <a className='blue-text'>{expense.title}</a>
        <br />
        <span className='gray-text'>
          <span>Cost : {expense.cost} </span>
          <span>Category : {expense.category} </span>
          <span>Person : {expense.person}</span>
        </span>
        <a href='/' onClick={onDelete} className='secondary-content'>
          <i className='material-icons gray-text'>delete</i>
        </a>
      </div>
    </li>
  );
};
export default connect(null, { deleteExpense })(ExpenseItem);
