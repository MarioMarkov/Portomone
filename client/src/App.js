import React, { Fragment, useEffect } from 'react';
import Expenses from './components/expenses/Expenses';
import { Navbar } from './components/layout/Navbar';
import AddBtn from './components/layout/AddBtn';
import AddExpenseModal from './components/expenses/AddExpenseModal';
import { Provider } from 'react-redux';
import store from './store';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import AddPersonModal from './components/people/AddPersonModal';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <>
      <Provider store={store}>
        <Navbar />
        <div className='container'>
          <AddPersonModal />
          <AddExpenseModal />
          <AddBtn />
          <Expenses />
        </div>
      </Provider>
    </>
  );
};

export default App;
