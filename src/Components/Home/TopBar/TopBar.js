import React from 'react';
import logo from '../../../Illustration/logo.png';
import './TopBar.css';
const TopBar = () => {
  return (
    <div>
      <nav class='container navbar navbar-expand-lg navbar-light'>
        <img className='logo' src={logo} alt='' />
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarNav'>
          <ul class='navbar-nav ml-auto'>
            <li class='nav-item active'>
              <a class='nav-link mr-3' href='/'>
                Home
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link mr-3' href='/'>
                About
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link mr-3' href='/'>
                Services
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link mr-3' href='/'>
                Pricing
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link mr-5' href='/'>
                Our Team
              </a>
            </li>
            <li class='nav-item'>
              <button className='Button'>Contact us</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default TopBar;
