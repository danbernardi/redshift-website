import React from 'react';

export class AboutVillage extends React.Component {

  render () {
    return (
      <section className="row hero layout--relative layout--fullheight" style={ { overflow: 'hidden' } }>
        <div className="layout--absolute layout-abs--bottom about--video-mask about--hybrid-curve" />
        <div className="layout--absolute layout-abs--bottom pb5">
          <div className="col-8">
            <h1 className="typ--bold typ--redshift pb2">Hybrid teams.</h1>
            <h3>We believe the best products are created by hybrid teams. Designers, researchers, and developers work shoulder-to-shoulder in our studio to create experiences that are beautiful and grounded in real user needs.</h3>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutVillage;
