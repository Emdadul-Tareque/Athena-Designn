import React from 'react';
import './Footer.css';
import facebook from '../../Illustration/facebook-logo-in-circular-shape@2x.png';
import linkedIn from '../../Illustration/linkedin (2)@2x.png';
import twitter from '../../Illustration/twitter (4)@2x.png';
import dribble from '../../Illustration/dribbble (1)@2x.png';
// import logo from '../../Illustration/logo.png;';

const Footer = () => {
  return (
    <div className='footer mt-5 pt-5 pb-5 text-center'>
      <h1>
        <b>Get your design right, right now</b>
      </h1>
      <p>Be the ﬁrst know our latest offers and updates</p>
      <div class='search-box col-md-6 my-5 mx-auto'>
        <input
          type='eamil'
          class='form-control p-3'
          placeholder='Write your email address'
        />
        <button class='btn btn-danger search-btn btn-rounded'>
          Get Started
        </button>
      </div>
      <div className='row'>
        <div className='col-md-5 icon'>
          <img
            style={{ height: '100px', marginBottom: '30px' }}
            src=''
            alt=''
          />{' '}
          <br />
          <span>
            <img src={facebook} alt='' />
            <img src={linkedIn} alt='' />
            <img src={twitter} alt='' />
            <img src={dribble} alt='' />
          </span>
        </div>
        <div className='col-md-2 pt-3'>
          <p>Features</p>
          <p>Enterprise</p>
          <p>Pricing</p>
        </div>
        <div className='col-md-2 pt-3'>
          <p>Blog</p>
          <p>Help Center</p>
          <p>Contact Us</p>
          <p>Status</p>
        </div>
        <div className='col-md-2 pt-3'>
          <p>About Us</p>
          <p>Terms of Service</p>
          <p> Security </p>
          <p>Login</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
