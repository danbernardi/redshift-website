import React from 'react';
import { connect } from 'react-redux';
import './styles.scss';
import PropTypes from 'prop-types';
import GSAP from 'react-gsap-enhancer';
import { TimelineLite, Power1 } from 'gsap';
import { setWindowDimensions } from 'store/actions';
import { breakpointIsLessThan } from 'utils/responsiveHelpers';

export class Modal extends React.Component {
  componentDidMount () {
    const { dispatch, breakpoint } = this.props;
    if (breakpointIsLessThan('mobileLg', breakpoint.size)) dispatch(setWindowDimensions(window.innerHeight, window.innerWidth));
    this.animation = this.addAnimation(this.animateModal).pause();

    this.resizeFunc = this.resizeSubscription.bind(this);
    window.addEventListener('resize', this.resizeFunc);
  }

  resizeSubscription () {
    const { dispatch, breakpoint } = this.props;
    console.log(window.innerHeight, window.innerWidth);
    if (breakpointIsLessThan('mobileLg', breakpoint.size)) dispatch(setWindowDimensions(window.innerHeight, window.innerWidth));
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
  dispatch: PropTypes.func,
  breakpoint: PropTypes.object
};

const injectStateProps = state => ({
  modalState: state.modalState,
  breakpoint: state.breakpoint
});

export default connect(injectStateProps)(GSAP()(Modal));
