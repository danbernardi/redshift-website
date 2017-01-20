import React from 'react';
import AboutProcessImage from '../process.png';
import AboutOfficeImage from '../about-office.jpg';

export function AboutProcess () {
  return (
    <div>
      <section className="flex theme--dark about--process pb9 pb6--tlg">
        <div className="row hero--scene-text">
          <div className="about--process__flex pt6">
            <div className="col-6 col-12--tmd">
              <h1 className="typ--bold">Hello.</h1>
              <h4 className="py9 py6--tlg pt2--mlg pr10 pr2--mlg">
                Redshift is a digital experience firm.<br />
                We leverage expertise across multiple disciplines – User experience, Visual design, Engineering, and Research – to create real products and deliver experiences that are usable, beautiful, feasible and grounded in real user needs.
              </h4>
            </div>
            <div className="col-6 col-12--tmd col-last about--process__image">
              <img src={ AboutProcessImage } />
            </div>
          </div>
        </div>
      </section>
      <section className="about__office-image mb8">
        <div className="scene-container layout--absolute">
          <img
            src={ AboutOfficeImage }
            className="homepage-scene--image"
          />
        </div>
      </section>
    </div>
  );
}

export default AboutProcess;
