import React from 'react';
import { connect } from 'react-redux';
import { caseStudies } from 'data/caseStudies';
import CaseStudy from './index';
import TransitionGroup from 'react-addons-transition-group';
import PropTypes from 'prop-types';

/**
* Container for Case Study Scroller on the Homepage
*
* @extends React.Component
* @param {Object} caseStudyState   the current case study
* @param {Object} caseContent      the content of the current case study
* @returns {React.Component}       Returns a react component
*
*/

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
