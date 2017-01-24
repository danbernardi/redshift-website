import React from 'react';
import { scrollToID } from 'utils/scrollTo';
import './ScrollTrigger.scss';

const scrollToAnchor = (target) => {
  scrollToID(target, 500);
};

export const ScrollTrigger = props => {
  const { target, classes } = props;

  return (
    <div className={ `scrolltrigger ${classes}` } onClick={ () => scrollToAnchor(target) }>
      <img src={ require:('assets/img/down-arrow.png') } />
    </div>
  );
};

ScrollTrigger.propTypes = {
  target: React.PropTypes.string,
  classes: React.PropTypes.string
};

ScrollTrigger.defaultProps = {
  classes: ''
};

export default ScrollTrigger;
