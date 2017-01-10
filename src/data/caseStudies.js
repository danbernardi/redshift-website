import React from 'react';
import CSFive from 'routes/Home/Five/CSFive';
import CSNexus from 'routes/Home/Nexus/CSNexus';
import CSNorton from 'routes/Home/Norton/CSNorton';
import CSYumavore from 'routes/Home/Yumavore/CSYumavore';

export const caseStudies = [
  {
    id: 'norton',
    component: <CSNorton />
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
