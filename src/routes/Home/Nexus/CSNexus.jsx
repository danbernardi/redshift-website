import React from 'react';
import CaseStudy from '../../../components/CaseStudy/index';
import nexus1 from './nexus1.jpg';
import nexus2 from './nexus2.jpg';
import nexus3 from './nexus3.jpg';
import nexus4 from './nexus4.jpg';

const CSNexus = () => {
  const content = [
    {
      img: nexus1,
      items: [
        (<h3 className="casestudy__text">Instead of focusing on product specs, we designed rich, interactive moments which let customers experience new features, and understand how the device will help them in their real life.</h3>)
      ]
    },
    {
      img: nexus2,
      items: [
        (<h3 className="casestudy__text">To highlight the Nexus 7’s HDR camera, we let users take before and after photos which show the technology at work. It’s the next best thing to holding the device in your hand.</h3>)
      ]
    },
    {
      img: nexus3,
      classes: 'mb10'
    },
    {
      img: nexus4,
      classes: 'mt5'
    }
  ];

  return (
    <CaseStudy
      name="Google Nexus"
      heading="We partnered with Autofuss and Unit9 to redesign the product site for the Google Nexus family of phones and tablets."
      content={ content }
      next={ { id: 'five', name: 'Five' } }
    />
  );
};

export default CSNexus;
