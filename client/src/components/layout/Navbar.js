import React, { useEffect } from 'react';

export const Navbar = () => {
  return (
    <nav>
      <div className='nav-wrapper purple accent-4'>
        <a href='/' style={{ marginLeft: '10px' }} className='brand-logo left'>
          Portomone <i className='fas fa-wallet'></i>
        </a>
        <ul id='nav-mobile' className='right'>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Dashboards</a>
          </li>
          <li>
            <a>About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
