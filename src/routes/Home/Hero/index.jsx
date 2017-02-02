import React from 'react';
import Scene from 'components/Scene';
import * as actions from 'store/actions';
import { connect } from 'react-redux';

export function Hero (props) {
  const { dispatch } = props;

  return (
    <section className="scene-container">
      <div className="hero index-content row">
        <Scene>
          <div className="layout--relative">
            <h1 className="hero--scene-text typ--bold">We are Redshift. We design digital products and experiences.</h1>
          </div>
        </Scene>
        <div className="scrolltrigger fixed" onClick={ () => dispatch(actions.goToNextCaseStudy(0)) }>
          <img src={ require('assets/img/down-arrow.png') } alt="Scroll to the next section" />
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = {
  dispatch: React.PropTypes.func
};

export default connect()(Hero);
