import React from 'react';
import Lookscout from '../assets/Lookscout.png'
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BiLogoGoogle } from 'react-icons/bi';
import { PiAppleLogoBold } from 'react-icons/pi';

const Footer = () => {
  const items1 = ["community", "Events", "Help Center" , "Partners"];
  const items2 = ["Integrations", "Solutions", "Features" , "Enterprise"];
  return (
    <div className='testimonial-full-container'>

    <div className="testimonial-container-footer">
      <div className="logo-row">
        <img src={Lookscout} alt="Logo" />
        <p>Generate outside the box thinking with the possibility to targtet the low.</p>
      </div>
      <div className="testimonial-row">
        <h2>Resourcees</h2>
        <ul className='list-of-items'>
        {items1.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
         
        </ul>
      </div>
      <div className="testimonial-row">
        <h2>Products</h2>
        <ul className='list-of-items'>
        {items2.map((item, index) => (
            <li key={index}>{item}</li>
          ))}

        </ul>
      </div>
      <div className="testimonial-row">
        <h2>Get Email Notification</h2>
        <p>Generate outside the box thinking with the possibility to targtet the low</p>
        <input type="text" placeholder="Your email" className='footer-input' />
        <button className='footer-btn'>Submit</button>
      </div>
      </div>
    <hr/>
      <footer className="footer">
        <div className="social-icons">
        <BsFacebook/>
         <BsInstagram/>
         <BiLogoGoogle/>
         <PiAppleLogoBold/>
        </div>
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
