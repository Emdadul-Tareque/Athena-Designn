import React from 'react';
import './Achievement.css';
import happy from '../../Illustration/happy.png';
import trophy from '../../Illustration/trophy.png';
import crazy from '../../Illustration/celebrate.png';
import running from '../../Illustration/running.png';

const Achievement = () => {
  const achievement = [
    {
      img: happy,
      number: '700+',
      text: 'Happy Clients',
    },
    {
      img: trophy,
      number: '140+',
      text: 'Projects Completed',
    },
    {
      img: crazy,
      number: '25+',
      text: 'Crazy Minds',
    },
    {
      img: running,
      number: '75+',
      text: 'Running Projects',
    },
  ];

  return (
    <div
      style={{ height: '500px' }}
      className='container d-flex align-items-center mt-5 pt-5'
    >
      <div className='row'>
        <div className='col-md-5 col-12'>
          <div className='achievement-details'>
            <h1>Our Achievements</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letter.
            </p>
          </div>
        </div>

        <div className='col-md-7 col-12 row d-flex justify-content-center'>
          {achievement.map((achieve) => (
            <div className='col-md-5 col-12 achievement-card'>
              <div className='ml-3 text-center'>
                <div className='achievement-card-icon'>
                  <img src={achieve.img} alt='' />
                </div>
                <div className='achievement-info'>
                  <h3>{achieve.number}</h3>
                  <p>{achieve.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievement;
