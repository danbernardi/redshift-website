import React from 'react';
import DownArrow from '../down-arrow.png';
import { scrollToID } from 'utils/scrollTo';

const scrollToWork = () => {
  const homeAnchorElement = document.getElementsByClassName('scroll--target');
  let homeAnchor;
  if (homeAnchorElement && homeAnchorElement[0]) {
    homeAnchor = homeAnchorElement[0].getAttribute('id');
  }
  scrollToID(homeAnchor, 500);
};

export function Hero () {
  return (
    <section className="full-height flex">
      <div className="scene-container">
        <div className="homepage--scene-text">
          <div className="row">
            <div className="hero index-content">
              <div className="scene">
                <div className="scene-container layout--relative">
                  <div className="hero--scene-text">
                    <h1 className="typ--bold">We are Redshift. We design digital products and experiences.</h1>
                  </div>
                </div>
              </div>
            </div>
            <div id="workAnchor" className="case-scroll-icon" onClick={ () => scrollToWork() }>
              <span>
                <img src={ DownArrow } />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
