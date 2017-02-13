import React from 'react';
import Scene from 'components/Scene';
import { connect } from 'react-redux';

export class Hero extends React.Component {
  render () {
    const { onDidMount, clickCallback } = this.props;

    return (
      <section ref={ (el) => onDidMount(el) } className="scene-container">
        <div className="hero index-content row">
          <Scene>
            <div className="layout--relative">
              <h1 className="hero--scene-text typ--bold">We are Redshift. We design digital products and experiences.</h1>
            </div>
          </Scene>
          <div className="scrolltrigger fixed" onClick={ () => clickCallback instanceof Function && clickCallback(1) }>
            <img src={ require('assets/img/down-arrow.png') } alt="Scroll to the next section" />
          </div>
        </div>
      </section>
    );
  }
}

Hero.propTypes = {
  onDidMount: React.PropTypes.func,
  clickCallback: React.PropTypes.func
};

export default connect()(Hero);
