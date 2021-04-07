import React from 'react';
import AddPersonModal from '../../components/people/AddPersonModal';
import AllPeopleModal from '../../components/people/AllPeopleModal';
import AddBtn from '../layout/AddBtn';
import AddExpenseModal from '../expenses/AddExpenseModal';
import Expenses from '../expenses/Expenses';

export const Home = () => {
  return (
    <>
      <AllPeopleModal />
      <AddPersonModal />
      <AddExpenseModal />
      <AddBtn />
      <Expenses />
    </>
  );
};
