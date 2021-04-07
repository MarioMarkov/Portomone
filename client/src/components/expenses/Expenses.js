import React, { useEffect } from 'react';
import ExpenseItem from './ExpenseItem';
import { connect } from 'react-redux';
import { getExpenses } from '../../actions/expenseActions';

const Expenses = ({ expense: { expenses }, getExpenses }) => {
  useEffect(() => {
    getExpenses();
    //eslint-disable-next-line
  }, []);
  if (expenses === null) {
    return <p>Loading...</p>;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>Expenses</h4>
      </li>
      {expenses.length === 0 ? (
        <p className='center'>No Expenses</p>
      ) : (
        expenses.map((ex) => <ExpenseItem expense={ex} key={ex._id} />)
      )}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  expense: state.expense,
});

export default connect(mapStateToProps, { getExpenses })(Expenses);
