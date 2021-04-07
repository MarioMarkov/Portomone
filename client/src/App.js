import React, { Fragment, useEffect } from 'react';
import Expenses from './components/expenses/Expenses';
import { Navbar } from './components/layout/Navbar';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';

import { Provider } from 'react-redux';
import store from './store';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar />
          <div className='container'>
            {/* <AllPeopleModal />
            <AddPersonModal />
            <AddExpenseModal />
            <AddBtn />
            <Expenses /> */}
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </Router>
      </Provider>
    </>
  );
};

export default App;
