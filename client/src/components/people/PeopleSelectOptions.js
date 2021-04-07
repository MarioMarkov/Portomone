import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getPeople } from '../../actions/peopleActions';

const PeopleSelectOptions = ({ person: { persons }, getPeople }) => {
  useEffect(() => {
    getPeople();
    //eslint-disable-next-line
  }, []);
  //   if (persons === null) {
  //     return <p>Loading...</p>;
  //   }

  return (
    persons !== null &&
    persons.map((person) => (
      <option key={person._id} value={person._id}>
        {person.name}
      </option>
    ))
  );
};

const mapStateToProps = (state) => ({
  person: state.person,
});
export default connect(mapStateToProps, { getPeople })(PeopleSelectOptions);
