import React from 'react';
import PurchaseCard from '../PurchaseCard/PurchaseCard';
import './Purchase.css';

const Purchase = () => {
  const purchases = [
    {
      price: 199,
      category: 'For Basic',
      home: 'Homepage',
      page: 'No Inner Page',
      file: 'Asset file',
      source: 'Source file',
      photo: 'Free Stock Photos',
      support: '10 Days Free Support',
      duration: '24/7 Support',
    },
    {
      price: 399,
      category: 'For Preferred',
      home: 'Homepage',
      page: '4 Inner Page',
      file: 'Asset file',
      source: 'Source file',
      photo: 'Free Stock Photos',
      support: '20 Days Free Support',
      duration: '24/7 Support',
    },
    {
      price: 599,
      category: 'For Elite',
      home: 'Homepage',
      page: '8 Inner Page',
      file: 'Asset file',
      source: 'Source file',
      photo: 'Free Stock Photos',
      support: '30 Days Free Support',
      duration: '24/7 Support',
    },
  ];
  return (
    <div className='purchase mt-5 pt-5  ml-5'>
      <div>
        <h1 className='purchase-header text-center'>
          Choose Your Dedicated Team
        </h1>
      </div>

      <div className='row d-flex justify-content-center ml-3 mt-5'>
        {purchases.map((purchase) => (
          <PurchaseCard purchase={purchase}></PurchaseCard>
        ))}
      </div>
    </div>
  );
};

export default Purchase;
