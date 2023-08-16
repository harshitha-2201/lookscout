

import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const Productscarditems = ({ imageUrl, heading, paragraph, buttonText }) => {
  return (
    
      <div className='products-details'>
        <img src={imageUrl} alt='product-img1' className='product-img' />
        <h3 className='product-heading'>{heading}</h3>
        <p className='product-para'>{paragraph}</p>
        <button className='product-btn'>
          {buttonText} <FiArrowRight />
        </button>
      </div>
   
  );
};

export default Productscarditems;
