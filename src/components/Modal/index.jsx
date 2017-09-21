import React from 'react';
import { connect } from 'react-redux';
import './Modal.scss';
import PropTypes from 'prop-types';
import GSAP from 'react-gsap-enhancer';
import { TimelineLite, Power1 } from 'gsap';
import { setWindowDimensions } from 'store/actions';

/**
  * Header - Modal Component
  *
  * @param {Object} props
  * @param {Object} modalState              returns information about current modal
  * @param {function} dispatch              connects window dimensions
  * @returns {React.Component}              Returns a react component
*/

export class Modal extends React.Component {
  componentDidMount () {
    const { dispatch } = this.props;
    dispatch(setWindowDimensions(window.innerHeight, window.innerWidth));
    this.animation = this.addAnimation(this.animateModal).pause();

    this.resizeFunc = this.resizeSubscription.bind(this);
    window.addEventListener('resize', this.resizeFunc);
  }

  resizeSubscription () {
    const { dispatch } = this.props;
    dispatch(setWindowDimensions(window.innerHeight, window.innerWidth));
  }

  componentDidUpdate (prevProps) {
    const { modalState } = this.props;
    if (modalState.open && !prevProps.modalState.open) {
      // modal opens
      this.animation.play();
    }

    if (!modalState.open && prevProps.modalState.open) {
      // modal closes
      this.animation.reverse();
    }
  }

  animateModal ({ target }) {
    const modal = target[0].querySelector('.modal');
    const tl = new TimelineLite();

    tl.fromTo(modal, 0.2, { x: '100%', ease: Power1.easeInOut }, { x: '0%', ease: Power1.easeInOut });
    return tl;
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.resizeFunc);
  }

  render () {
    const { modalState } = this.props;

    return (
      <div className="modal__wrap">
        <div className="modal">
          { modalState.component }
        </div>
      </div>
    );
  }
};

Modal.propTypes = {
  modalState: PropTypes.object,
  dispatch: PropTypes.func
};

const injectStateProps = state => ({
  modalState: state.modalState
});

export default connect(injectStateProps)(GSAP()(Modal));
