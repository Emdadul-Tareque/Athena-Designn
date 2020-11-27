import React from 'react';
import './Service.css';
import service1 from '../../Illustration/Group 65@2x.png';
import service2 from '../../Illustration/Group 66@2x.png';
import service3 from '../../Illustration/Group 69@2x.png';
import service4 from '../../Illustration/Group 72@2x.png';
import ServiceList from '../ServiceList/ServiceList';
const Service = () => {
  const services = [
    {
      title: 'Experience Design',
      description:
        'The point of using Lorem ipsum is that it has a more-or-less normal',
      img: service1,
    },
    {
      title: 'Interface Design',
      description:
        'The point of using Lorem ipsum is that it has a more-or-less normal',
      img: service2,
    },
    {
      title: 'Prototyping',
      description:
        'The point of using Lorem ipsum is that it has a more-or-less normal',
      img: service3,
    },
    {
      title: 'Illustration',
      description:
        'The point of using Lorem ipsum is that it has a more-or-less normal',
      img: service4,
    },
  ];
  return (
    <div className='service d-flex align-items-center justify-content-center mt-5 pt-5'>
      <div>
        <div className='service-header text-center'>
          <h2>What we do</h2>
          <p>
            Our main focus is to make the User Experience very <br /> simple and
            easy. Simplicity is our Strength.
          </p>
        </div>
        <div className='container'>
          <div className='mt-5 row d-flex justify-content-center'>
            {services.map((service) => (
              <ServiceList service={service}></ServiceList>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
