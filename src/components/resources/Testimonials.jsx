import React from 'react';
import '../page.css'
import Lookscout1 from '../../assets/Lookscout1.png'
import Avatar1 from '../../assets/Avatar1.png'

const Testimonials = () => {
  return (
    <div className="testimonial">
      <div className=' testimonials1'>
        <img src= {Lookscout1} alt="Company Logo" className='testimonial-logo' />
    
      <div className="testimonial-content">
        <p className="testimonial-paragraph">
        Thank you for making it painless, pleasant and most of all hassle free! I love LookScout. I can't say enough about LookScout. Great job, I will definitely be ordering again!
        </p>
        <div className="testimonial-user">
          <div className="testimonial-avatar">
            <img src={Avatar1} alt="User Avatar" />
          </div>
          <div className="avatar-details">
            <p className="avatar-name">John Doe</p>
            <p className="company-name">Company Inc.</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
