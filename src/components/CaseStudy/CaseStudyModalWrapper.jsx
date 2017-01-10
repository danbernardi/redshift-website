import React from 'react';
import { connect } from 'react-redux';
import { caseStudies } from 'data/caseStudies';

const CaseStudyModalWrapper = props => {
  const { activeCaseStudy } = props;

  const activeCaseStudies = caseStudies.filter(item => activeCaseStudy.current.indexOf(item.id) !== -1);
  const currentCaseStudy = activeCaseStudies.find(item => item.id === activeCaseStudy.current[0]);
  const nextCaseStudy = activeCaseStudies.find(item => item.id === activeCaseStudy.current[1]);

  // console.log(currentCaseStudy, nextCaseStudy);

  return (
    <div>
      { currentCaseStudy && currentCaseStudy.component }
      { nextCaseStudy && React.cloneElement(nextCaseStudy.component, { animateIn: true }) }
    </div>
  );
};

CaseStudyModalWrapper.propTypes = {
  activeCaseStudy: React.PropTypes.object
};

const injectStateProps = state => ({
  activeCaseStudy: state.activeCaseStudy
});

export default connect(injectStateProps)(CaseStudyModalWrapper);
