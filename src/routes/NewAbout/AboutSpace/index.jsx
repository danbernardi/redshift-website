import React from 'react';

export class AboutSpace extends React.Component {
  render () {
    return (
      <section className="hero layout--relative layout--fullheight">
        <div className="layout--absolute layout-abs--bottom pb5">
          <div className="col-8 col-last">
            <h1 className="typ--bold typ--redshift pb2">Space to think.</h1>
            <h3>Our studio is an environment where passionate, creative people work together to solve hard problems. We are located in a sunny industrial space in downtown San Francisco, a short walk from the Ferry Building.</h3>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutSpace;
