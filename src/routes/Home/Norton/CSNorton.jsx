import React from 'react';
import CaseStudy from '../../../components/CaseStudy/index';
import norton1 from './norton1.jpg';
import norton2 from './norton2.jpg';
import norton4 from './norton4.jpg';

const CSNorton = () => {
  const content = [
    {
      img: norton1,
      items: [
        (<h3 className="casestudy__text">All your protected devices are connected in a single, simple interface.</h3>)
      ]
    },
    {
      img: norton2,
      items: [
        (<h3 className="casestudy__text">One central interface gives users access to Norton’s entire product lineup with one-click installation.</h3>),
        (<h3 className="casestudy__text">Discover and deploy Norton on all your connected devices, from anywhere</h3>)
      ]
    },
    {
      img: norton4,
      items: [
        (<h4 className="casestudy__text">Winner of a 2012 Communicator Award and shortlisted for a 2012 Design Week Award. Norton employees can easily explore patterns in critical data driving the business with one touch.</h4>)
      ]
    }
  ];

  return (
    <CaseStudy
      name="Norton Antivirus"
      heading="We were chosen by Symantec to design a cloud-based solution which allows customers to discover, buy and manage the entire suite of Norton products."
      content={ content }
      next={ { id: 'yumavore', name: 'Yumavore' } }
    />
  );
};

export default CSNorton;
