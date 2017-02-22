import React from 'react';

export function AboutProcess () {
  return (
    <section className="about__process mb10">

      <picture>
        <source srcSet={ require('assets/img/about/about__hero.jpg') } media="(min-width: 540px)" />
        <img className="about__process__img mb5 mb2--msm" src={ require('assets/img/about/about__hero-mobile.jpg') } alt="Redshift team" />
      </picture>
      
      <div className="row">
        <div className="col-6 col-12--tmd">
          <h1 className="typ--bold mb4">Hello there<span className="typ--redshift">.</span></h1>
          <div className="typ--h4">
            <p>Redshift is a digital experience firm.</p>
            <p>We leverage expertise across multiple disciplines – User experience, Visual design, Engineering, and Research – to create real products and deliver experiences that are usable, beautiful, feasible and grounded in real user needs.</p>
          </div>
        </div>

        <div className="col-6 col-12--tmd col-last mt5--tmd about--process__image typ--center">
          <img
            src={ require('assets/img/about/process.png') }
            alt="research engineering user experience visual design"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutProcess;
