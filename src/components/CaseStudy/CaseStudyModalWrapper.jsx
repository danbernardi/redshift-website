import React from 'react';
import { connect } from 'react-redux';
import { caseStudies } from 'data/caseStudies';
import CaseStudy from './index';

const CaseStudyModalWrapper = props => {
  const { caseStudyState } = props;

  const activeCaseStudies = caseStudies.filter(item => caseStudyState.current.indexOf(item.id) !== -1);
  const currentCaseStudy = activeCaseStudies.find(item => item.id === caseStudyState.current[0]);
  const nextCaseStudy = activeCaseStudies.find(item => item.id === caseStudyState.current[1]);

  return (
    <div>
      { currentCaseStudy && <CaseStudy { ...currentCaseStudy } /> }
      { nextCaseStudy && <CaseStudy { ...nextCaseStudy } animateIn={ true } /> }
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
