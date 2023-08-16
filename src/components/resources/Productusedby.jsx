import React from 'react'
import { FcApproval } from "react-icons/fc";

import verge from '../../assets/verge.png'
import slack from '../../assets/slack.png'
import google from '../../assets/google.png'
import paypal from '../../assets/paypal.png'
import pinterst from '../../assets/pinterst.png'
import mailchimp from '../../assets/mailchimp.png'


const Productusedby = () => {
  return (
    <div>
       <div className='product-used-container'>
           <div className='product-main-headings'>
              <h1>Proud to Be Used By</h1>
              <p>Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
           </div>
            
            <div className='img-containers'>
              <div>
                   <img src = {verge} alt = 'used-company' />
                   <img src = {slack} alt = 'used-company' />
                   <img src = {google} alt = 'used-company'/>
                   <img src = {paypal} alt = 'used-company' />
                   <img src = {pinterst} alt = 'used-company'/>
                   <img src = {mailchimp} alt = 'used-company'/>
              </div>
           </div>
       </div>

         <div className='industry-container'>
           <p className='indusrty1'>1% OF THE INDUSTRY</p>
           <h2 className='industry2'>Welcome to your new digital reality that will rock your world truly at all throughout.</h2>

          <div>
            <input type = 'text'placeholder='Enter Your email' className='input-industry'/><button className='input-btn'>Submit</button>
          </div>

          <div className='industry-approvals'>
            <FcApproval /><>Fully Secure</>
            <FcApproval/><>24/7 support</>
            <FcApproval/><>Done Deal</>
          </div>
         </div>
       </div>
    )
 }

export default Productusedby
