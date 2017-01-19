import React from 'react';
import AboutProcessImage from '../process.png';
import AboutOfficeImage from '../about-office.jpg';

export function AboutProcess () {
  return (
    <div>
      <section className="flex theme--dark about--process pb9 pb6--tlg py0--mlg">
        <div className="row hero--scene-text">
          <div className="about--process__flex pt6">
            <div className="col-6 col-12--tmd">
              <h1 className="typ--bold">Hello.</h1>
              <h4 className="py9 py6--tlg pr10 pr2--mlg">
                We are Redshift.
                We combine user experience,
                visual design,
                engineering and research to create products that are simple,
                memorable,
                and grounded in real user needs.
                <br /><br />
                We believe in good ideas and working with smart people.
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
