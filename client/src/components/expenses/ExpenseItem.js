import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { deleteExpense } from '../../actions/expenseActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const ExpenseItem = ({ person: { persons }, expense, deleteExpense }) => {
  const [person, setPerson] = useState(null);
  const onDelete = () => {
    deleteExpense(expense._id);
    M.toast({ html: 'Expense deleted' });
  };

  useEffect(() => {
    if (persons !== null) {
      persons.map((p) => {
        if (p._id == expense.person) {
          setPerson(p);
        }
      });
    }
  }, [person, persons]);
  if (person === null || persons === null) {
    return <p>Loading...</p>;
  }
  return (
    <li className='collection-item'>
      <div>
        <a className='blue-text'>{expense.title}</a>
        <br />
        <span className='gray-text'>
          <span>Cost : {expense.cost} </span>
          <span>Category : {expense.category} </span>
          <span>Person : {person.name}</span>
        </span>
        <a href='/' onClick={onDelete} className='secondary-content'>
          <i className='material-icons gray-text'>delete</i>
        </a>
      </div>
    </li>
  );
};
const mapStateToProps = (state) => ({
  person: state.person,
});
export default connect(mapStateToProps, { deleteExpense })(ExpenseItem);
