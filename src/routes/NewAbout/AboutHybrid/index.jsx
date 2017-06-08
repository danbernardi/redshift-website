import React from 'react';

export class AboutHybrid extends React.Component {

  render () {
    return (
      <section className="row hero layout--relative layout--fullheight layout--landscape" style={ { overflow: 'hidden' } }>
        <div className="about--curve-container">
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className="layout--absolute layout-abs--bottom pb5 about--header">
          <div className="col-8 col-12--mlg">
            <h1 className="typ--bold typ--redshift pb2">Hybrid teams.</h1>
            <h3>We believe the best products are created by hybrid teams. Designers, researchers, and developers work shoulder-to-shoulder in our studio to create experiences that are beautiful and grounded in real user needs.</h3>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutHybrid;
