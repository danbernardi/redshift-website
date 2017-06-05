import React from 'react';
import ReactDOM from 'react-dom';
import mojs from 'mo-js';
import { mapRange } from 'utils/animation';
import * as actions from 'store/actions';
import { connect } from 'react-redux';
import { disableScroll } from 'utils/scrollJack';
import PropTypes from 'prop-types';

// import MojsCurveEditor from 'mojs-curve-editor';

// const mojsCurve = new MojsCurveEditor({
//   // Name of the Curve you are working on. The name is used to
//   // identify record in `localStorage` to restore the state from
//   // when page gets reloaded, so please specify unique names if
//   // you use more than one editor on the same page.
//   name:  'bounce'
// });

// const easing = mojsCurve.getEasing();

import './Loader.scss';

export class Loader extends React.Component {
  componentDidMount () {
    this.animateIn();
  }

  animateIn () {
    const capsule = ReactDOM.findDOMNode(this.refs.capsule);
    capsule.style.transform = `scale(1)`;

    new mojs.Tween({
      duration: 300,
      delay: 1000,
      easing: 'quint.in',
      onUpdate: progress => {
        const mappedScale = mapRange(progress, 0, 1, 1, 50);
        capsule.style.transform = `scale(${mappedScale})`;
      },
      onPlaybackComplete: () => this.animateOut()
    }).play();
  }

  animateOut () {
    const { dispatch } = this.props;

    const loader = ReactDOM.findDOMNode(this.refs.loader);

    new mojs.Tween({
      duration: 200,
      easing: 'cubic.out',
      onUpdate: progress => {
        const mappedOpacity = mapRange(progress, 0, 1, 1, 0);
        loader.style.opacity = mappedOpacity;
      },
      onComplete: () => {
        loader.style.display = 'none';
        dispatch(actions.setAsLoaded(true));
        // html.classList.remove('disable-scroll');
      }
    }).play();
  }

  render () {
    return (
      <div ref="loader" className="loader">
        <span ref="capsule" className="capsule" />
        <span className="dot" />
      </div>
    );
  }
}

Loader.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(Loader);
