import React from 'react';
import Hero from './Hero';
import Norton from './Norton';
import Yumavore from './Yumavore';
import Nexus from './Nexus';
import Five from './Five';
import './style.scss';

export function Home () {
  return (
    <div>
      <Hero />
      <Norton />
      <Yumavore />
      <Nexus />
      <Five />
    </div>
  );
}

export default Home;
