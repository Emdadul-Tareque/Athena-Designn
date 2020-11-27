import React from 'react';
import './PurchaseCard.css';

const PurchaseCard = (props) => {
  const {
    price,
    category,
    home,
    page,
    file,
    source,
    photo,
    support,
    duration,
  } = props.purchase;
  return (
    <div className='col-sm-6 col-md-3 col-lg-3 p-3 mr-3'>
      <div className='purchase-card text-center'>
        <h2> ${price} </h2>
        <p> {category} </p>
        <div className='bottom-line'></div>
        <br />
        <p> {home} </p>
        <p> {page} </p>
        <p> {file} </p>
        <p> {source} </p>
        <p> {photo} </p>
        <p> {support} </p>
        <p> {duration} </p>
        <br />
        <button id='order-btn' className='Button'>
          Order Now
        </button>
      </div>
    </div>
  );
};

export default PurchaseCard;
