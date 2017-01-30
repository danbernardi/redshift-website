import React from 'react';
import ScrollTrigger from 'components/ScrollTrigger';
import { caseStudies } from 'data/caseStudies';
import Scene from 'components/Scene';

export function Hero () {
  const firstCaseStudyID = caseStudies && caseStudies.length && caseStudies[0].id;

  return (
    <section className="scene-container">
      <div className="hero index-content row">
        <Scene>
          <div className="layout--relative">
            <h1 className="hero--scene-text typ--bold">We are Redshift. We design digital products and experiences.</h1>
          </div>
        </Scene>
        <ScrollTrigger target={ firstCaseStudyID || 'homepage-work' } classes="fixed" />
      </div>
    </section>
  );
}

export default Hero;
