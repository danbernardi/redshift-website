import React from 'react';
import ArrowRight from './arrow-right-short.png';

export function HomepageCaseStudy ({ study }) {
  return (
    <div>
      {
        <section className={ `home-${study.name} flex theme--dark home-section` }>
          <div className="scene-container">
            <img src={ study.homepageImage } className="homepage-scene--image hide--msm" />
            { study.homepageMLGImage
              ? <img src={ study.homepageMLGImage } className="homepage-scene--image show--tmd hide--msm" />
              : null
            }
            <img src={ study.homepageMobileImage } className="homepage-scene--image show--msm" />
            <div className={ `cs-${study.name} scene-target` } />
            <a name="work" className="scene-target work-anchor" />
            <div className="homepage--scene-text">
              <div className="row">
                <div
                  data-target={ `cs-${study.name}` }
                  data-type="case-study"
                  className="scene js-modal-trigger"
                >
                  <h2 className="typ--bold">{ study.caption1 }<br />{ study.caption2 }</h2>
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
      }
    </div>
  );
}

const { object } = React.PropTypes;
HomepageCaseStudy.propTypes = {
  study: object
};

export default HomepageCaseStudy;
