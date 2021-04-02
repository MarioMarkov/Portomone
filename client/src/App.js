import React, { Fragment, useEffect } from 'react';
import {Expenses} from './components/expenses/Expenses'
import {Navbar} from './components/layout/Navbar'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const  App= () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <>
      <Navbar/>

      <div className="container">
      <Expenses/>
      </div>
    </>
  );
}

export default App;
