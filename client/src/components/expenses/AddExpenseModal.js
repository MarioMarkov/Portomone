import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { addExpense } from '../../actions/expenseActions';
import PeopleSelectOptions from '../people/PeopleSelectOptions';

const AddExpenseModal = ({ addExpense }) => {
  const [title, setTitle] = useState('');
  const [cost, setCost] = useState(0);
  const [category, setCategory] = useState('');
  const [isMade, setIsMade] = useState(true);
  const [personId, setPersonID] = useState('');

  const onSubmit = () => {
    if (title === '' || cost == '') {
      M.toast({ html: 'Please fill the fields' });
    } else {
      const newExpense = {
        title,
        cost,
        category,
        isMade,
        personId,
      };
      addExpense(newExpense);

      setTitle('');
      setCost('');
      setCategory('');
      setPersonID('');
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
            <select
              name='category'
              value={category}
              className='browser-default'
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value='' disabled>
                Select Category
              </option>
              <option value='food'>Food</option>
              <option value='tech'>Tech</option>
              <option value='gas'>Gas</option>
              <option value='bill'>Bill</option>
            </select>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <select
              name='personId'
              value={personId}
              className='browser-default'
              onChange={(e) => setPersonID(e.target.value)}
            >
              <option value='' disabled>
                Select Person
              </option>
              <PeopleSelectOptions />
            </select>
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
