import React from 'react';
import YumavoreImage from './yumavore-scene-bg.jpg';
import YumavoreMobileImage from './yumavore-scene-bg-mobile.jpg';

export function Yumavore () {
  return (
    <section className="flex theme--dark home-yumavore home-section">
      <div className="scene-container">
        <img src={ YumavoreImage } className="homepage-scene--image hide--msm" />
        <img src={ YumavoreMobileImage } className="homepage-scene--image show--msm" />
        <div className="scene-target cs-yumavore" />
        <div className="homepage--scene-text">
          <div className="row">
            <div data-target="cs-yumavore" data-type="case-study" className="scene js-modal-trigger">
              <h2 className="typ--bold">A new way to create<br />and share recipes</h2>
              <h5 className="btn btn--arrow">
                <div className="pt6 pt5--dlg pt3--mlg pt1--msm">
                  View project
                  <img
                    src="./assets/img/arrow-right-short.png"
                    alt="Yumavore app design"
                    className="ml5 ml1--msm arrow"
                  />
                </div>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Yumavore;
