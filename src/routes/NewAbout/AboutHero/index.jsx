import React from 'react';

export class AboutHero extends React.Component {
  render () {
    return (
      <section className="hero layout--fullheight layout--flex">
        <div className="col-8">
          <h1 className="typ--bold typ--redshift pb2">About Redshift</h1>
          <h3 className="pb2">We are an award-winning agency dedicated to creating simple, meaningful experiences for users and positive results for our clients.</h3>
          <h3 className="typ--bold typ--medium-gray">What is "redshift"?</h3>
        </div>
        <div className="col-4 col-last layout--absolute layout-abs--right">
          <img src={ require('assets/img/about/about__circle.jpg') } alt="About Redshift" />
        </div>
      </section>
    );
  }
}

export default AboutHero;
