import React from 'react'
import Productfeatures from './Productfeatures'
import Modifiedproducts from './Modifiedproducts'
import Blogs from './Blogs';
import Productusedby from './Productusedby'
import Testimonials from './Testimonials';



const Resources = () => {

   // css styles//
 const myStyles = {
   color: 'white',
   background : ' #151B28',
   padding : '10px',
 };
  return (
    <div>

<Productfeatures/>
    <Modifiedproducts style = {myStyles}/>
    <Testimonials/>
    <Blogs/>
    <Productusedby/>
    </div>
  )
}

export default Resources
