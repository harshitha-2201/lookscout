import React from 'react';
import Productscarditems from '../products/Productscarditems'
import Iconplaceholder9 from '../../assets/Icons/Iconplaceholder9.png'
import Iconplaceholder1 from '../../assets/Icons/Iconplaceholder1.png'
import Iconplaceholder2 from '../../assets/Icons/Iconplaceholder2.png'
import Iconplaceholder3 from '../../assets/Icons/Iconplaceholder3.png'
import Iconplaceholder4 from '../../assets/Icons/Iconplaceholder4.png'
import Iconplaceholder5 from '../../assets/Icons/Iconplaceholder5.png'



const cardData = [
  {
    imageUrl: Iconplaceholder9,
    heading: 'Easier Work Organization',
    paragraph: 'Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables for real-time schemas. ',
    buttonText: 'Learn More',
  },
  {
    imageUrl: Iconplaceholder1,
    heading: 'Fast Connection',
    paragraph: 'Completely pursue scalable customer cross- media through potentialities. Holistically quickly installed portals. ',
    buttonText: 'Learn More',
  },{
    imageUrl: Iconplaceholder2,
    heading: 'Streamlined Processes',
    paragraph: 'Objectively innovate empowered scalable manufactured products whereas parallel platforms predominate extensible.',
    buttonText: 'Learn More',
  },
  {
    imageUrl: Iconplaceholder3,
    heading: 'Easier Integrations',
    paragraph: 'Completely pursue scalable customer try through potentialities. Pontificate portals installed. Efficiently unleash information.',
    buttonText: 'Learn More',
  },
  {
    imageUrl: Iconplaceholder4,
    heading: 'Marketing Analytics',
    paragraph: 'Phosfluorescently engage worldwide methodologies with web-enabled  Interactively coordinate.',
    buttonText: 'Learn More',
  },
  {
    imageUrl: Iconplaceholder5,
    heading: 'Workflow Builder',
    paragraph: 'Collaboratively administrate turnkey service channels whereas virtual e-tailers. This  is objectively scalable metrics whereas.',
    buttonText: 'Learn More',
  },
  // Add more card data here
];

const Ourproducts = () => {
  return (
    <div className='products-container'>
      <div className='products-headlines'>
        <h1 className='products-heading'>Messaging for all</h1>
        <p className='products-para'>User generated conent is real-time will have multiple touchpoints for offshorting</p>
      </div>
      <div className='products-col'>
      {cardData.map((card, index) => (
        <Productscarditems
          key={index}
          imageUrl={card.imageUrl}
          heading={card.heading}
          paragraph={card.paragraph}
          buttonText={card.buttonText}
        />
      ))}
    </div>
    </div>
  );
};

export default Ourproducts;












