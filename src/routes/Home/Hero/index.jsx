import React from 'react';
import Scene from 'components/Scene';
import mojs from 'mo-js';
import ReactDOM from 'react-dom';

export class Hero extends React.Component {
  componentDidMount () {
    const us = ReactDOM.findDOMNode(this.refs.us);
    const mission = ReactDOM.findDOMNode(this.refs.mission);
    const scroller = ReactDOM.findDOMNode(this.refs.scroller);

    this.animateIn(us, 500);
    this.animateIn(mission, 1000);
    this.animateIn(scroller, 1300);
  }

  animateIn (el, delay) {
    new mojs.Tween({
      duration: 600,
      delay,
      easing: 'cubic.inout',
      onUpdate: progress => {
        el.style.opacity = progress;
      }
    }).play();
  }

  render () {
    const { onDidMount, clickCallback } = this.props;

    const styles = {
      opacity: 0
    };

    return (
      <section ref={ (el) => onDidMount(el) } className="scene-container">
        <div className="hero index-content row">
          <Scene>
            <div className="layout--relative row">
              <h1 className="hero--scene-text typ--bold">
                <span ref="us" style={ styles }>We are Redshift<span className="typ--redshift">.</span>
                </span> <span ref="mission" style={ styles }>We design digital products and experiences<span className="typ--redshift">.</span></span></h1>
            </div>
          </Scene>
          <div ref="scroller" style={ styles } className="scrolltrigger fixed" onClick={ () => clickCallback instanceof Function && clickCallback(1) }>
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

export default Hero;
