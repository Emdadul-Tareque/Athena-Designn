import React from 'react';
import './ServiceList.css';
const ServiceList = (props) => {
  const { title, description, img } = props.service;
  return (
    <div className=' col-md-3 col-lg-3 service-card p-4'>
      <div className='service-img text-center'>
        <img src={img} alt='' />
      </div>
      <div className='service-details mt-3 text-center'>
        <h5> {title} </h5>
        <p> {description} </p>
      </div>
    </div>
  );
};

export default ServiceList;
