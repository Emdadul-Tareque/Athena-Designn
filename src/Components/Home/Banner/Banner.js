import React from 'react';
import banner from '../../../Illustration/banner.png';
import './Banner.css';
import AOS from 'aos';
const Banner = () => {
  AOS.init();
  return (
    <div className='container banner mt-5'>
      <div className='row content'>
        <div className='col-12 col-sm-12 col-md-6 content-text data-aos="fade-up" data-aos-duration="1000"'>
          <h1>
            Florence <br /> agency
          </h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, in.
            Non veniam nobis, modi quae sit similique, ratione ea natus eos
            architecto molestias repudiandae est, consequatur nisi. Tenetur,
            accusamus distinctio.
          </p>
          <button className='Button'>See pricing</button>
        </div>
        <div className='col-12 col-sm-12 col-md-6 data-aos="zoom-in-down" data-aos-duration="1000"'>
          <img className='banner-img img-fluid' src={banner} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Banner;
