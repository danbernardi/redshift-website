import React from 'react';
import CaseStudy from '../../../components/CaseStudy/index';
import five1 from './five1.jpg';
import five2 from './five2.jpg';
import five3 from './five3.jpg';

const CSFive = () => {
  const content = [
    {
      img: five1,
      items: [
        (<h3 className="casestudy__text">A fun, interesting twist on the social media platform. Our gesture-driven interface puts the content front and center.</h3>)
      ]
    },
    {
      img: five2,
      items: [
        (<h3 className="casestudy__text">Creating a FIVE is easy too. The app seamlessly integrates with Google Images to bring your lists to life.</h3>),
        (<div className="btn mt5 mb10 typ--five">coming soon</div>),
        (<h3 className="casestudy__text mt10">You can share, comment, or even add suggestions to other lists.</h3>)
      ]
    },
    {
      img: five3,
      items: [
        (<h3 className="casestudy__text pb7">Heavy prototyping and testing was done throughout the process.</h3>),
        (<h3 className="casestudy__text pb8">Look for it in the App Store starting September 2016</h3>)
      ]
    }
  ];

  return (
    <CaseStudy
      name="Five"
      heading="We develop our own products, too. FIVE lets you share your favorite things in a simple and catchy format – the top five list."
      content={ content }
      next={ { id: 'norton', name: 'Norton Antivirus' } }
    />
  );
};

export default CSFive;
