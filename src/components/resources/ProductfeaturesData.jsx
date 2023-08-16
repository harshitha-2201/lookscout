import React from 'react';
import { FiArrowRight } from 'react-icons/fi';


const Productscarditems = ({ imageUrl, heading, paragraph, buttonText }) => {
  return (
    
      <div className='features-details'>
        <img src={imageUrl} alt='feature-img1' className='features-img' />
        <h3 className='features-heading'>{heading}</h3>
        <p className='features-para'>{paragraph}</p>
        <button className='features-btn'>
          {buttonText} <FiArrowRight />
        </button>
      </div>
   
  );
};

export default Productscarditems;
