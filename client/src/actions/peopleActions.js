import { GET_PERSON, GET_PEOPLE, ADD_PERSON } from './types';

// export const getPerson = (id) => async (dispatch) => {
//   try {
//     const res = await fetch(`/persons/${id}`);
//     const person = await res.json();
//     console.log(person);

//     dispatch({
//       type: GET_PERSON,
//       payload: person,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getPeople = () => async (dispatch) => {
  try {
    const res = await fetch(`/persons`);
    const data = await res.json();
    dispatch({
      type: GET_PEOPLE,
      payload: data.persons,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addPerson = (person) => async (dispatch) => {
  try {
    const res = await fetch('/persons', {
      method: 'post',
      body: JSON.stringify(person),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_PERSON,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

// export const getPersonById = (id) => async (dispatch) => {
//   const res = await fetch(`/persons/${expense.person}`);
//   const data = await res.json();
//   setPerson(data.person);
// };
