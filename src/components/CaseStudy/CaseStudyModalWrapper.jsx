import React from 'react';
import { connect } from 'react-redux';
import { caseStudies } from 'data/caseStudies';
import CaseStudy from './index';

import MojsCurveEditor from 'mojs-curve-editor';

const mojsCurve = new MojsCurveEditor({
  // Name of the Curve you are working on. The name is used to
  // identify record in `localStorage` to restore the state from
  // when page gets reloaded, so please specify unique names if
  // you use more than one editor on the same page.
  name:  'bounce curve'
});

const easing = mojsCurve.getEasing();


const CaseStudyModalWrapper = props => {
  const { caseStudyState } = props;

  const activeCaseStudies = caseStudies.filter(item => caseStudyState.current.indexOf(item.id) !== -1);
  const currentCaseStudy = activeCaseStudies.find(item => item.id === caseStudyState.current[0]);
  const nextCaseStudy = activeCaseStudies.find(item => item.id === caseStudyState.current[1]);

  return (
    <div>
      { currentCaseStudy && <CaseStudy { ...currentCaseStudy } easing={ easing } /> }
      { nextCaseStudy && <CaseStudy { ...nextCaseStudy } animateIn={ true } easing={ easing } /> }
    </div>
  );
};

CaseStudyModalWrapper.propTypes = {
  caseStudyState: React.PropTypes.object
};

const injectStateProps = state => ({
  caseStudyState: state.caseStudyState
});

export default connect(injectStateProps)(CaseStudyModalWrapper);
