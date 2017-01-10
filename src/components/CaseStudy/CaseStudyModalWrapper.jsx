import React from 'react';
import { connect } from 'react-redux';
import { caseStudies } from 'data/caseStudies';

const CaseStudyModalWrapper = props => {
  const { caseStudyState } = props;

  const activeCaseStudies = caseStudies.filter(item => caseStudyState.current.indexOf(item.id) !== -1);
  const currentCaseStudy = activeCaseStudies.find(item => item.id === caseStudyState.current[0]);
  const nextCaseStudy = activeCaseStudies.find(item => item.id === caseStudyState.current[1]);

  // console.log(currentCaseStudy, nextCaseStudy);

  return (
    <div>
      { currentCaseStudy && currentCaseStudy.component }
      { nextCaseStudy && React.cloneElement(nextCaseStudy.component, { animateIn: true }) }
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
