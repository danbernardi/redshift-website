import React from 'react';
import Hero from './Hero';
import CaseStudy from './case-studies-homepage';
// import Norton from './Norton';
// import Yumavore from './Yumavore';
// import Nexus from './Nexus';
// import Five from './Five';
import './style.scss';

export function Home () {
  return (
    <div>
      <Hero />
      <CaseStudy />
    </div>
  );
}

export default Home;
