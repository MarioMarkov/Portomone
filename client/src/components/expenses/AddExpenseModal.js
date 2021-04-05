import React,{useState} from 'react'


 const AddExpenseModal = () => {
    const [title,setTitle] = useState('');


    return (
        <div id='add-expense-modal' className='modal' style={modalStyle}>
            <div className='modal-content'>
        <h4>Enter Expense </h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='title'
            />
            <label htmlFor='title' className='active'>
              Expense Title
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <select
              name='person'
              className='browser-default'
            >
              <option value='' disabled>
                Select Person
              </option>
            
            </select>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  
                />
                <span>Made</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          className='modal-close waves-effect blue waves-light btn'
        >
          Enter
        </a>
      </div>
            
        </div>
    )
}

const modalStyle = {
    width: '75%',
    height: '75%'
  }

export default AddExpenseModal;