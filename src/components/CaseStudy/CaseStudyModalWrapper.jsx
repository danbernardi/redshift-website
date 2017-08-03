import React from 'react';
import { connect } from 'react-redux';
import { caseStudies } from 'data/caseStudies';
import CaseStudy from './index';
import TransitionGroup from 'react-addons-transition-group';
import PropTypes from 'prop-types';

const CaseStudyModalWrapper = props => {
  const { caseStudyState, caseContent } = props;
  const caseStudyComponents = caseStudies.map((cs, index) => ({
    id: cs.id,
    component: (
      <CaseStudy
        { ...cs }
        key={ index }
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
