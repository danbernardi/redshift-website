import React from 'react';
import { caseStudies } from 'data/caseStudies';
import { browserHistory } from 'react-router';
import ModalCloseBtn from 'components/Modal/ModalCloseBtn';
import PropTypes from 'prop-types';
import CaseStudyScroller from './CaseStudyScroller';
import { TimelineLite, Power1 } from 'gsap';
import GSAP from 'react-gsap-enhancer';
import './CaseStudy.scss';

class CaseStudy extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      dimensions: { height: -1, width: -1 },
      childRefs: {}
    };
  }

  componentWillEnter (callback) { callback(); }

  animateOut ({ target, options }) {
    const duration = 0.6;
    const fadeDuration = 0.4;
    const next = target[0].querySelector('.casestudy__next');
    const name = target[0].querySelector('.casestudy__next__name');
    const label = target[0].querySelector('.casestudy__next__label');
    const title = document.querySelector('.casestudy__modal .modal__title');
    const endFontSize = window.getComputedStyle(title, null).getPropertyValue('font-size');
    const tl = new TimelineLite();

    tl.to(next, duration, { height: window.innerHeight, backgroundColor: '#FFF', ease: Power1.easeInOut }, 'anim');
    tl.to(name, duration, { fontSize: endFontSize, color: '#a3a3a3', ease: Power1.easeInOut }, 'anim');
    tl.to(label, duration, { opacity: 0, height: 0, ease: Power1.easeInOut }, 'anim');
    tl.to(target[0], fadeDuration, { opacity: 0, ease: Power1.easeInOut, onComplete: () => options.unmountComponent() }, `anim+=${duration}`);

    return tl;
  }

  componentWillLeave (unmountComponent) {
    this.animation = this.addAnimation(this.animateOut.bind(this), { unmountComponent }).play();
  }

  render () {
    const { caseStudyContent } = this.props;

    const caseStudyIndex = caseStudies.findIndex(item => item.id === caseStudyContent.id);
    const nextCaseStudy = caseStudyIndex === caseStudies.length ? null : caseStudies[caseStudyIndex + 1];

    return (
      <div ref={ (el) => { this.caseStudy = el; } } className="casestudy__modal">
        <ModalCloseBtn closeCallback={ () => browserHistory.push('/') } />
        <div
          className="modal__sidebar"
          style={ { backgroundColor: caseStudyContent.color } }
        />
        <CaseStudyScroller
          passRefsToParent={ (childRefs) => this.setState({ childRefs }) }
          caseStudyContent={ caseStudyContent }
          nextCaseStudy={ nextCaseStudy }
        />
      </div>
    );
  }
}

CaseStudy.propTypes = {
  caseStudyContent: PropTypes.object
};

export default GSAP()(CaseStudy);
