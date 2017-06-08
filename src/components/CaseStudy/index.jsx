import React from 'react';
import { caseStudies } from 'data/caseStudies';
import { mapRange } from 'utils/animation';
import { browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import mojs from 'mo-js';
import ModalCloseBtn from 'components/Modal/ModalCloseBtn';
import PropTypes from 'prop-types';
import CaseStudyScroller from './CaseStudyScroller';

import './styles.scss';

class CaseStudy extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      dimensions: { height: -1, width: -1 }
    };
  }

  componentWillEnter (callback) { callback(); }

  componentWillLeave (unmountComponent) {
    const name = ReactDOM.findDOMNode(this.refs.name);
    const next = ReactDOM.findDOMNode(this.refs.next);
    const nextName = ReactDOM.findDOMNode(this.refs['next-name']);
    const nextLabel = ReactDOM.findDOMNode(this.refs['next-label']);
    const { dimensions } = this.state;
    nextName.style.transition = 'color 400ms ease-in-out, background-color 400ms ease-out 100ms';
    nextName.style.color = '#a3a3a3';

    new mojs.Tween({
      duration: 600,
      easing: 'cubic.out',
      onUpdate: (progress) => {
        const startFontSize = Number(window.getComputedStyle(nextName, null).getPropertyValue('font-size').replace('px', ''));
        const endFontSize = Number(window.getComputedStyle(name, null).getPropertyValue('font-size').replace('px', ''));
        const mappedHeight = mapRange(progress, 0, 1, dimensions.height, window.innerHeight);
        const mappedFontSize = mapRange(progress, 0, 1, startFontSize, endFontSize);
        const mappedFontWeight = mapRange(progress, 0, 1, 600, 100);
        const mappedOpacity = mapRange(progress, 0, 1, 1, 0);
        next.style.height = `${mappedHeight}px`;
        nextName.style.fontSize = `${mappedFontSize}px`;
        nextName.style.fontWeight = mappedFontWeight;
        nextLabel.style.opacity = mappedOpacity;
        next.style.backgroundColor = '#fff';
      },
      onPlaybackComplete: () => unmountComponent()
    }).play();
  }

  render () {
    const { caseStudyContent } = this.props;
    const featuredCaseStudies = caseStudies.filter((item) => item.featured);
    const archivedCaseStudies = caseStudies.filter((item) => !item.featured);

    let activeCaseStudies;
    if (caseStudyContent.featured) activeCaseStudies = featuredCaseStudies;
    if (!caseStudyContent.featured) activeCaseStudies = archivedCaseStudies;

    const caseStudyIndex = activeCaseStudies.findIndex(item => item.id === caseStudyContent.id);
    const nextCaseStudy = caseStudyIndex === activeCaseStudies.length ? null : activeCaseStudies[caseStudyIndex + 1];

    return (
      <div className="casestudy__modal">
        <ModalCloseBtn closeCallback={ () => browserHistory.push('/work') } />
        <CaseStudyScroller caseStudyContent={ caseStudyContent } nextCaseStudy={ nextCaseStudy } />
      </div>
    );
  }
}

CaseStudy.propTypes = {
  caseStudyContent: PropTypes.object
};

export default CaseStudy;
