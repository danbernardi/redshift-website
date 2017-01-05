import React from 'react';

export function Norton () {
  return (
    <section className='flex theme--dark home-norton home-section'>
      <div className='scene-container'>
        <img src='./assets/img/case-studies/norton-scene-bg.jpg' className='homepage-scene--image hide--tmd' />
        <img src='./assets/img/case-studies/norton-scene-bg-mlg.jpg' className='homepage-scene--image show--tmd hide--msm' />
        <img src='./assets/img/case-studies/mobile/norton-scene-bg.jpg' className='homepage-scene--image show--msm' />
        <div className='scene-target cs-norton' />
        <a name='work' className='scene-target work-anchor' />
        <div className='homepage--scene-text'>
          <div className='row'>
            <div data-target='cs-norton' data-type='case-study' className='scene js-modal-trigger'>
              <h2 className='typ--bold'>A single interface<br />for all things Norton</h2>
              <h5 className='btn btn--arrow pt6 pt5--dlg pt3--mlg pt1--msm'>
                View project
                <img
                  src='./assets/img/arrow-right-short.png'
                  alt='Norton creative design'
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

export default Norton;
