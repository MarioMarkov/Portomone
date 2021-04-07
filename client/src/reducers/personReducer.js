import { GET_PEOPLE, ADD_PERSON } from '../actions/types';

const inititalState = {
  persons: null,
};

export default (state = inititalState, action) => {
  switch (action.type) {
    case GET_PEOPLE:
      return { ...state, persons: action.payload };
    case ADD_PERSON:
      return { ...state, persons: [...state.persons, action.payload] };

    default:
      return state;
  }
};
