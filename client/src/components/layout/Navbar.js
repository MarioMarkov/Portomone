import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <div className='nav-wrapper purple accent-4'>
        <a href='/' style={{ marginLeft: '10px' }} className='brand-logo left'>
          Portomone <i className='fas fa-wallet'></i>
        </a>
        <ul id='nav-mobile' className='right'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <a>Dashboards</a>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
