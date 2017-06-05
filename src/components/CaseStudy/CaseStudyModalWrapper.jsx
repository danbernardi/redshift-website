import React from 'react';
import { connect } from 'react-redux';
import { caseStudies } from 'data/caseStudies';
import CaseStudy from './index';
import TransitionGroup from 'react-addons-transition-group';
import PropTypes from 'prop-types';

// import MojsCurveEditor from 'mojs-curve-editor';

// const mojsCurve = new MojsCurveEditor({
//   // Name of the Curve you are working on. The name is used to
//   // identify record in `localStorage` to restore the state from
//   // when page gets reloaded, so please specify unique names if
//   // you use more than one editor on the same page.
//   name:  'bounce curve'
// });

const easing = null; // mojsCurve.getEasing();

const CaseStudyModalWrapper = props => {
  const { caseStudyState, caseContent } = props;
  const caseStudyComponents = caseStudies.map((cs, index) => ({
    id: cs.id,
    component: (
      <CaseStudy
        { ...cs }
        key={ index }
        easing={ easing }
        caseStudyState={ caseStudyState }
        caseStudyContent={ caseContent }
      />
    )
  }));

  const currentCaseStudy = caseStudyComponents.find(item => item.id === caseStudyState.current);

  return (
    <TransitionGroup>
      { currentCaseStudy && currentCaseStudy.component }
    </TransitionGroup>
  );
};

CaseStudyModalWrapper.propTypes = {
  caseStudyState: PropTypes.object,
  caseContent: PropTypes.object
};

const injectStateProps = state => ({
  caseStudyState: state.caseStudyState,
  featuredCaseStudyState: state.featuredCaseStudyState
});

export default connect(injectStateProps)(CaseStudyModalWrapper);
