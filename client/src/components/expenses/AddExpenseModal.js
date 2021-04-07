import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { addExpense } from '../../actions/expenseActions';

const AddExpenseModal = ({ addExpense }) => {
  const [title, setTitle] = useState('');
  const [cost, setCost] = useState(0);
  const [category, setCategory] = useState('');
  const [isMade, setIsMade] = useState(true);

  const onSubmit = () => {
    if (title === '' || cost == 0) {
      M.toast({ html: 'Please fill the fields' });
    } else {
      const newExpense = {
        title,
        cost,
        category,
        isMade,
      };
      addExpense(newExpense);

      setTitle('');
      setCost('');
      setCategory('');
      setIsMade(true);

      M.toast({ html: `Expense added` });
    }
  };

  return (
    <div id='add-expense-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter Expense </h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='title'
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor='title' className='active'>
              Expense Title
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              onChange={(e) => setCategory(e.target.value)}
              name='category'
            />
            <label htmlFor='category'>Expense Category</label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='number'
              onChange={(e) => setCost(e.target.value)}
              name='cost'
            />
            <label htmlFor='cost' className='active'>
              Expense Cost
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <label>
              <input
                type='checkbox'
                className='filled-in'
                checked={isMade}
                value={isMade}
                onChange={(e) => setIsMade(!isMade)}
              />
              <span>Made</span>
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '80%',
  height: '90%',
};

export default connect(null, { addExpense })(AddExpenseModal);
