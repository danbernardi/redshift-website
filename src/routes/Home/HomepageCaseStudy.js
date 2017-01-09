import React from 'react';
import ArrowRight from './arrow-right-short.png';
import * as actions from 'store/actions';
import { connect } from 'react-redux';

export function HomepageCaseStudy (props) {
  const { study, dispatch } = props;

  const openModal = (component, openState) => {
    dispatch(actions.setActiveModal(component));
    dispatch(actions.toggleModal(openState));
  };

  return (
    <div>
      {
        <section className={ `home-${study.id} flex theme--dark home-section` }>
          <div className="scene-container layout--absolute">
            <img src={ study.homepageImage } className="homepage-scene--image hide--msm" />
            { study.homepageMLGImage
              ? <img src={ study.homepageMLGImage } className="homepage-scene--image show--tmd hide--msm" />
              : null
            }
            <img src={ study.homepageMobileImage } className="homepage-scene--image show--msm" />
            <div className={ `cs-${study.id} scene-target` } />
            <a name="work" className="scene-target work-anchor" />
            <div className="homepage--scene-text">
              <div className="row">
                <div
                  onClick={ () => openModal(study.component, true) }
                  className="scene"
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

const { object, func } = React.PropTypes;
HomepageCaseStudy.propTypes = {
  study: object,
  dispatch: func
};

export default connect()(HomepageCaseStudy);
