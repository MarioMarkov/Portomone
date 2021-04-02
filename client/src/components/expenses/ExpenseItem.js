import React from 'react'

export const ExpenseItem = ({expense}) => {
    return (
        <li className='collection-item' >
            <div><a  className='blue-text' >
            {expense.title}</a>
            <br/>
            <span className='gray-text'>
              Info
            </span>
            <a href="#!" className='secondary-content'>
                <i className="material-icons gray-text">delete</i>
            </a>
            </div>
        </li>
    )
}
