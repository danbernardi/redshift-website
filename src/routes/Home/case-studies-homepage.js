import React from 'react';
import NortonImage from './Norton/norton-scene-bg.jpg';
import NortonMLGImage from './Norton/norton-scene-bg-mlg.jpg';
import NortonMobileImage from './Norton/norton-scene-bg-mobile.jpg';
import ArrowRight from './arrow-right-short.png';
import YumavoreImage from './Yumavore/yumavore-scene-bg.jpg';
import YumavoreMobileImage from './Yumavore/yumavore-scene-bg-mobile.jpg';

const caseStudies = [
  {
    name: 'norton',
    homepageImage: 'NortonImage',
    homepageMLGImage: 'NortonMLGImage',
    homepageMobileImage: 'NortonMobileImage',
    imageAlt: 'Yumavore app design',
    caption1: 'A new way to create',
    caption2: 'and share recipes',
    anchor: true
  }
];

export function CaseStudy () {
  return (
    <div>
      {
        caseStudies.map((caseStudies, i) => (
          <section className={ `home-${caseStudies.name} flex theme--dark home-section` } key={ i }>
            <div className="scene-container">
              <img src={ caseStudies.homepageImage } className="homepage-scene--image hide--msm" />
              { caseStudies.homepageMLGImage
                ? <img src={ caseStudies.homepageMLGImage } className="homepage-scene--image show--tmd hide--msm" />
                : null
              }
              <img src={ caseStudies.homepageMobileImage } className="homepage-scene--image show--msm" />
              <div className={ `cs-${caseStudies.name} scene-target` } />
              <a name="work" className="scene-target work-anchor" />
              <div className="homepage--scene-text">
                <div className="row">
                  <div
                    data-target={ `cs-${caseStudies.name}` }
                    data-type="case-study"
                    className="scene js-modal-trigger"
                  >
                    <h2 className="typ--bold">{ caseStudies.caption1 }<br />{ caseStudies.caption2 }</h2>
                    <h5 className="btn btn--arrow">
                      <div className="pt6 pt5--dlg pt3--mlg pt1--msm">
                        View project
                        <img
                          src={ ArrowRight }
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
        ))
      }
    </div>
  );
}

export default CaseStudy;
