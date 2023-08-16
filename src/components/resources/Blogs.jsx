import React from 'react'
import Rectangle1 from '../../assets/Rectangle1.png'
import Rectangle2 from '../../assets/Rectangle2.png'
import Rectangle3 from '../../assets/Rectangle3.png'
import Avatar2 from '../../assets/Avatar2.png'
import Avatar3 from '../../assets/Avatar3.png'
import Avatar4 from '../../assets/Avatar4.png'

const Blogs = () => {
    return (
      <>
        <div className="blogs-header">
          <h2>Latest Blog Posts</h2>
          <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.</p>
        </div>
  

    <div className="blogs-container">
      
          <div className="blog-card">
             <img src={Rectangle1} alt="blog-rectangle1" className='blog-img' />
             <h4 className='blogs-heading'>Organize your digital assets with a new methodology here.</h4>
             <p className='blogs-para'>Podcasting operational management inside of workflows to establish a framework seamless. Convergence collaboratively.</p>
             <div className="author-details">
               <img src={Avatar3} alt="blog-avatar2" />
               <div className='blog-item'>
                 <h6>Name</h6>
                 <p>CEO</p>
                 </div>
                 <p className='blog-date'>Feb 28</p>
               </div>
             </div>
     
      <div className="blog-card">
            <img src={Rectangle3} alt="blog-rectangle1" className='blog-img'/>
            <h4>Organize your digital assets with a new methodology here.</h4>
            <p>Podcasting operational management inside of workflows to establish a framework seamless. Convergence collaboratively.</p>
            <div className="author-details">
              <img src={Avatar4} alt="blog-avatar2" />
              <div className='blog-item'>
                <h6>Name</h6>
                <p>CEO</p>
              </div>
              <p className='blog-date'>Apr 28</p>
            </div>
          </div>

          <div className="blog-card">
            <img src={Rectangle2} alt="blog-rectangle1" className='blog-img' />
            <h4>Organize your digital assets with a new methodology here.</h4>
            <p>Podcasting operational management inside of workflows to establish a framework seamless. Convergence collaboratively.</p>
            <div className="author-details">
              <img src={Avatar2} alt="blog-avatar2" />
              <div className='blog-item'>
                <h6>Name</h6>
                <p>CEO</p>
              </div>
              <p className='blog-date'>Mar 28</p>
            </div>
            </div>
      </div>
      </>
    );
  }
  export default Blogs;  