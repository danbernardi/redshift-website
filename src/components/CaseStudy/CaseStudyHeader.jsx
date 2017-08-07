import React from 'react';
import { TimelineLite, Power3 } from 'gsap';
import SplitText from 'vendor/gsap-plugins/SplitText';
import GSAP from 'react-gsap-enhancer';
import PropTypes from 'prop-types';

export class CaseStudyHeader extends React.Component {
  componentDidMount () {
    const textChars = new SplitText('.casestudy__title', { type: 'chars, words' });

    setTimeout(() => {
      this.animation = this.addAnimation(this.animateInHeader.bind(this), { text: textChars }).play();
    }, 600);
  }

  animateInHeader ({ target, options }) {
    return new TimelineLite({ target, options })
      .set('.casestudy__title', { perspective: 400 })
      .staggerTo(options.text.chars, 0.2, {
        opacity: 1,
        ease: Power3.easeOut
      }, 0.008);
  }

  render () {
    const { content, color } = this.props;

    return (
      <h1 className="typ--bold casestudy__title" style={ { color } }>
        { content }
      </h1>
    );
  }
}

CaseStudyHeader.propTypes = {
  content: PropTypes.string,
  color: PropTypes.string
};

export default (GSAP()(CaseStudyHeader));
