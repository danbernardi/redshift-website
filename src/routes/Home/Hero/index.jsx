import React from 'react';

export function Hero () {
  return (
    <section className='full-height flex'>
      <div className='scene-container'>
        <div className='homepage--scene-text'>
          <div className='row'>
            <div className='hero index-content'>
              <div className='scene'>
                <div className='scene-container layout--relative'>
                  <div className='hero--scene-text'>
                    <h1 className='typ--bold'>We are Redshift. We design digital products and experiences.</h1>
                  </div>
                </div>
              </div>
            </div>
            <div id='workAnchor' className='case-scroll-icon'>
              <span>
                <img src='./assets/img/down-arrow.png' />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
