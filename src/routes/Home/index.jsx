import React from 'react';
import Showcase from 'components/Showcase';
import { caseStudies } from 'data/caseStudies';
import Hero from './Hero';

export const Home = props => {
  return (
    <div className="home">
      <Showcase leadingScene={ <Hero /> } scenes={ caseStudies.filter(cs => cs.featured) } />
    </div>
  );
};

export default Home;
