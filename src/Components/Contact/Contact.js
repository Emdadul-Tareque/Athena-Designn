import React from 'react';
import './Contact.css';
import image from '../../Illustration/contact.png';

const Contact = () => {
  return (
    <div className='container contact d-flex align-items-center mt-5 pt-5'>
      <div className='contact-content row'>
        <div className='col-md-6 contact-img'>
          <img className='img-fluid' src={image} alt='' />
        </div>
        <div className='col-md-6 d-flex align-items-center '>
          <div className='contact-details p-3'>
            <h1>Stay Running & Project</h1>
            <br />
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letter.
            </p>
            <br />
            <button className='Button'>Contact us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
