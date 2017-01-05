import React from 'react';

export function Nexus () {
  return (
    <section className='flex theme--dark home-nexus home-section'>
      <div className='scene-container'>
        <img
          src='./assets/img/case-studies/nexus-scene-bg.jpg'
          className='homepage-scene--image hide--mlg'
        />
        <img
          src='./assets/img/case-studies/nexus-scene-bg-mlg.jpg'
          className='homepage-scene--image show--mlg hide--msm'
        />
        <img
          src='./assets/img/case-studies/mobile/nexus-scene-bg.jpg'
          className='homepage-scene--image show--msm'
        />
        <div className='scene-target cs-nexus' />
        <div className='homepage--scene-text'>
          <div className='row'>
            <div data-target='cs-nexus' data-type='case-study' className='scene js-modal-trigger'>
              <h2 className='typ--bold'>A new home<br />for Google Nexus</h2>
              <h5 className='btn btn--arrow pt6 pt5--dlg pt3--mlg pt1--msm'>
                View project
                <img
                  src='./assets/img/arrow-right-short.png'
                  alt='Nexus product website'
                  className='ml5 ml1--msm arrow'
                />
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nexus;
