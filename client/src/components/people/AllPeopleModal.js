import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getPeople } from '../../actions/peopleActions';

const AllPeopleModal = ({ person: { persons }, getPeople }) => {
  useEffect(() => {
    getPeople();
    //eslint-disable-next-line
  }, []);
  //   if (persons === null) {
  //     return <p>Loading...</p>;
  //   }

  return (
    <div id='people-list-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4 style={{ textAlign: 'center' }}>Family</h4>
        {persons !== null &&
          persons.map((person) => (
            <div key={person._id}>
              {person.name} <span> Income : {person.income} </span>ExpensesCost:{' '}
              {person.expensesCost} <span></span>
            </div>
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  person: state.person,
});

const modalStyle = {
  width: '80%',
  height: '90%',
};

export default connect(mapStateToProps, { getPeople })(AllPeopleModal);
