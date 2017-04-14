import React from 'react';
import mojs from 'mo-js';
import ReactDOM from 'react-dom';
import * as actions from 'store/actions';
import { connect } from 'react-redux';
import 'components/ScrollTrigger/ScrollTrigger.scss';

export class Hero extends React.Component {

  componentDidMount () {
    this.us = ReactDOM.findDOMNode(this.refs.us);
    this.mission = ReactDOM.findDOMNode(this.refs.mission);
    this.scroller = ReactDOM.findDOMNode(this.refs.scroller);

    if (location.pathname === '/#work' || this.props.loaded ) {
      this.animatePageIn();
    }
  }

  shouldComponentUpdate (nextProps) {
    return this.props.loaded !== nextProps.loaded;
  }

  componentDidUpdate () {
    this.animatePageIn();
  }

  animatePageIn () {
    this.animateElementIn(this.us, 0);
    this.animateElementIn(this.mission, 600);
    this.animateElementIn(this.scroller, 1200);
  }

  animateElementIn (el, delay) {
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

    let styles = {
      opacity: 0
    };

    return (
      <section
        ref={ (el) => onDidMount instanceof Function && onDidMount(el) }
        className="hero layout--fullheight"
      >

        <div className="row" style={ { top: '50%', transform: 'translateY(-50%)' } }>
          <h1 className="typ--bold typ--redshift" style={ { maxWidth: '110rem' } }>
            <span ref="us" style={ styles }>
              We are Redshift.&nbsp;
            </span>
            <br className="show--tsm" />
            <span ref="mission" style={ styles }>
              We design&nbsp;
              <br className="show--tsm" />
              digital products&nbsp;
              <br className="show--tsm" />
              and experiences<span className="typ--redshift">.</span>
            </span>
          </h1>
        </div>

        <div ref="scroller" style={ styles } className="scrolltrigger" onClick={ () => {
          clickCallback(1);
        } }>
          <img src={ require('assets/img/down-arrow.png') } alt="Scroll to the next section" />
        </div>
      </section>
    );
  }
}

Hero.propTypes = {
  onDidMount: React.PropTypes.func,
  clickCallback: React.PropTypes.func,
  loaded: React.PropTypes.bool
};

const injectStateProps = state => ({
  loaded: state.loaded
});

export default connect(injectStateProps)(Hero);
