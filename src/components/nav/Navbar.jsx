import React, { useState } from 'react';


import Dropdown from './Droupdown';
import '../nav/Navbar.css';
import '../page.css';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import Lookscout from '../../assets/Lookscout.png';

const Navbar = () => {
  const options = ['Resources', 'ProductFeatures', 'Testimonials', 'Contacts'];

  const [Mobile, setMobile] = useState(false);

  return (
    <div className='main-container'>
      <nav className='nabar'>
        <img src={Lookscout} alt='logo' className='lookscout-logo' />
        <ul
          className={Mobile ? 'nav-links-mobile' : 'nav-links'}
          onClick={() => setMobile(false)}
        >
          <li>Home</li>
          <li>Our Products</li>
          <li>
            <Dropdown options={options} />
          </li>
          <li>Contacts</li>
          <button className='log-in'>Log In</button>
          <button className='sign-up'>Sign Up</button>
        </ul>

        <button
          className='mobile-menu-icon'
          onClick={() => setMobile(!Mobile)}
        >
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
