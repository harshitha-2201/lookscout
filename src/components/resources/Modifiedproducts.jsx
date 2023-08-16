import React from 'react'
import ProductfeaturesData from './ProductfeaturesData'
import Photo from '../../assets/Photo.png'


import Iconplaceholder6 from '../../assets/Icons/Iconplaceholder6.png'
import Iconplaceholder7 from '../../assets/Icons/Iconplaceholder7.png'
import Iconplaceholder8 from '../../assets/Icons/Iconplaceholder8.png'


const cardData = [
    {
      imageUrl: Iconplaceholder6,
      heading: 'Explore ideas together',
      paragraph: 'Engage audience segments and finally create actionable insights. Amplify vertical integration. ',
      buttonText: 'Learn More',
    },
    {
        imageUrl: Iconplaceholder7,
        heading: 'Bring those ideas to life',
        paragraph: 'Engage audience segments and finally create actionable insights. Amplify vertical integration. ',
        buttonText: 'Learn More',
      },
      {
        imageUrl: Iconplaceholder8,
        heading: 'Ship better outcomes',
        paragraph: 'Engage audience segments and finally create actionable insights. Amplify vertical integration. ',
        buttonText: 'Learn More',
      }
]


const  Modifiedproducts = ({ style }) => {
    return (
        <>
       <div className='feature-container' style={style}>

       <div className='feature-col-img'>
           <img src = {Photo} alt ='feature-products'/>
        </div>

           <div className='feature-col'>
           {cardData.map((card, index) => (
             <ProductfeaturesData
               key={index}
               imageUrl={card.imageUrl}
               heading={card.heading}
               paragraph={card.paragraph}
               buttonText={card.buttonText}
             />
           ))}
           </div>
      

      </div>
      </>
    );
  };
  

export default Modifiedproducts
