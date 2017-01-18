import React from 'react';
import CSFive from 'routes/Home/Five/CSFive';
import CSNexus from 'routes/Home/Nexus/CSNexus';
import CSNorton from 'routes/Home/Norton/CSNorton';
import CSYumavore from 'routes/Home/Yumavore/CSYumavore';

export const caseStudies = [
  {
    id: 'norton',
    content: [
      {
        img: norton1,
        copy: [
          { classes: 'casestudy__text typ--h3', text: 'All your protected devices are connected in a single, simple interface.' }
        ]
      },
      {
        img: norton2,
        copy: [
          { classes: 'casestudy__text typ--h3', text: 'One central interface gives users access to Norton’s entire product lineup with one-click installation.' },
          { classes: 'casestudy__text typ--h3', text: 'Discover and deploy Norton on all your connected devices, from anywhere.' }
        ]
      },
      {
        img: norton4,
        copy: [
          { classes: 'casestudy__text typ--h4', text: 'Winner of a 2012 Communicator Award and shortlisted for a 2012 Design Week Award. Norton employees can easily explore patterns in critical data driving the business with one touch.' }
        ]
      }
    ]
  },
  {
    id: 'yumavore',
    component: <CSYumavore />
  },
  {
    id: 'nexus',
    component: <CSNexus />
  },
  {
    id: 'five',
    component: <CSFive />
  }
];

/*
  return (
    <CaseStudy
      id="norton"
      name="Norton Antivirus"
      heading="We were chosen by Symantec to design a cloud-based solution which allows customers to discover, buy and manage the entire suite of Norton products."
      content={ content }
      next={ { id: 'yumavore', name: 'Yumavore', component: <CSYumavore /> } }
      animateIn={ animateIn }
    />
  );
};
 */
