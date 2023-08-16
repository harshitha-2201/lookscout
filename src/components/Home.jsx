import React from 'react'
import git from '../assets/git.png'
import slack1 from '../assets/slck1.png'
import netflix from '../assets/netflix.png'
import paypal1 from '../assets/paypal1.png'
import Graphicelement from '../assets/Graphicelements.png'


const Home = () => {
  return (
    
    <div className='home-container'>
        <div className='home-container1'>
          <h1 className='home-heading-container'>Your Supercharged Design Workflow.</h1>
          <p className='home-para-container'>We’ve been told it is not possible to overachieve our customers’ expectations. We have not reinvented the wheel, we decided to build upon it.</p>
          <button className='home-btn'>Get Started</button>

          <div className='we-support-container'>
            <h3 className='we-support-heading'>We Support Us</h3>
            <div className='home-img-container'>
                <img src = {git} alt = 'git-img' className='git-img'/>
                <img src = {slack1} alt = 'slack-img' className='slack-img'/>
                <img src = {netflix} alt = 'netflx-img' className='netflx-img'/>
                <img src = {paypal1} alt = 'paypal-img' className='paypal-img'/>
              </div>
          </div>
        </div>

        <div className='home-img-containers'>
          <img src = {Graphicelement} alt = 'graphic-img' className='graphic-img'/>
        </div>
    </div>

  )
}

export default Home
