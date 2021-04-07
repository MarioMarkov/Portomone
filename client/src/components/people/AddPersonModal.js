import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { addPerson } from '../../actions/peopleActions';

const AddPersonModal = ({ addPerson }) => {
  const [name, setName] = useState('');
  const [income, setIncome] = useState('');
  const onSubmit = () => {
    if (name === '' || income == '') {
      M.toast({ html: 'Please fill the fields' });
    } else {
      const newPerson = {
        name,
        income,
      };
      addPerson(newPerson);

      setName('');
      setIncome('');

      M.toast({ html: `Person added` });
    }
  };

  return (
    <div id='add-person-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter Person </h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='name'
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor='name' className='active'>
              Person Name
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='number'
              onChange={(e) => setIncome(e.target.value)}
              name='income'
            />
            <label htmlFor='income' className='active'>
              Person Income
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='/'
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

export default connect(null, { addPerson })(AddPersonModal);
