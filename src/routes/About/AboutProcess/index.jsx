import React from 'react';
import ScrollTrigger from 'components/ScrollTrigger';

export function AboutProcess () {
  return (
    <div>
      <section className="flex theme--dark about--process pb9 pb6--tlg">
        <div className="row">
          <div className="about--process__flex pt6">
            <div className="col-6 col-12--tmd">
              <h1 className="typ--bold">Hello.</h1>
              <h4 className="py9 py6--tlg pt2--mlg pr10 pr2--mlg pb3--msm">
                Redshift is a digital experience firm.<br />
                We leverage expertise across multiple disciplines – User experience, Visual design, Engineering, and Research – to create real products and deliver experiences that are usable, beautiful, feasible and grounded in real user needs.
              </h4>

            </div>
            <div className="col-6 col-12--tmd col-last about--process__image">
              <div style={ { bottom: '7rem' } } className="anchor" id="about-process" />
              <img
                src={ require('assets/img/about/process.png') }
                alt="research engineering user experience visual design"
              />
            </div>
          </div>
        </div>
      </section>
      <div style={ { bottom: '0rem' } } className="anchor" id="about-office" />
      <div className="about__office-image hide--mlg">
        <img src={ require('assets/img/about/about-office.jpg') } alt="Redshift office" />
      </div>
    </div>
  );
}

export default AboutProcess;
