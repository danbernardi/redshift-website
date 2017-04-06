import React from 'react';

export class AboutVillage extends React.Component {

  render () {
    return (
      <section className="hero layout--relative layout--fullheight">
        <div className="layout--absolute layout-abs--bottom pb5">
          <div className="col-8">
            <h1 className="typ--bold typ--redshift pb2">It takes a village.</h1>
            <h3>We leverage expertise across multiple disciplines—research, user experience, visual design, and engineering—to create experiences that are usable, beautiful, and grounded in real user needs. We believe the best products are created by hybrid teams, with designers, developers, and researchers working shoulder-to-shoulder.</h3>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutVillage;
