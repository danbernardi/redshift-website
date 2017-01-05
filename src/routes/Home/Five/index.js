import React from 'react';

export function Five () {
  return (
    <section className='flex theme--dark home-five home-section'>
      <div className='scene-container'>
        <img
          src='./assets/img/case-studies/five-alt-scene-bg.jpg'
          className='homepage-scene--image hide--msm'
        />
        <img
          src='./assets/img/case-studies/mobile/five-scene-bg.jpg'
          className='homepage-scene--image show--msm'
        />
        <div className='scene-target cs-five' />
        <div className='homepage--scene-text'>
          <div className='row'>
            <div data-target='cs-five' data-type='case-study' className='scene js-modal-trigger'>
              <h2 className='typ--bold'>Share and compare<br />your top 5 of anything</h2>
              <h5 className='btn btn--arrow pt6 pt5--dlg pt3--mlg pt1--msm'>
                View project
                <img
                  src='./assets/img/arrow-right-short.png'
                  alt='Redshift Five App'
                  className='ml5 ml1--msm'
                />
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Five;
