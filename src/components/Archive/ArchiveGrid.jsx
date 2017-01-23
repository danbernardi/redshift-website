import React from 'react';
import './Archive.scss';
import { caseStudies } from 'data/caseStudies';
import PinkHover from 'components/PinkHover';
import * as actions from 'store/actions';
import { connect } from 'react-redux';

import CaseStudyModalWrapper from 'components/CaseStudy/CaseStudyModalWrapper';

const ArchiveGrid = props => {
  const { dispatch, modalState } = props;

  const generateCaseStudies = (caseStudyArray) => (
    caseStudyArray.map((item, index) => (
      <PinkHover
        key={ index }
        classes="archive__item"
        clickHandler={ () => openModal(<CaseStudyModalWrapper />, item.id) }
        imageSrc={ item.thumb }
      >
        <p>{ item.id }</p>
      </PinkHover>
    ))
  );

  const openModal = (component, id) => {
    dispatch(actions.setNextCaseStudy(id, true));
    dispatch(actions.setActiveModal(component, 'casestudy'));
    if (!modalState.open) { dispatch(actions.toggleModal(true)); }
  };

  let archivedCaseStudies;
  if (caseStudies && caseStudies instanceof Array) {
    archivedCaseStudies = caseStudies.filter(item => !item.featured);
  }

  return (
    <section className="archive__grid">
      { archivedCaseStudies && archivedCaseStudies.length
        ? generateCaseStudies(archivedCaseStudies)
        : null
      }
    </section>
  );
};

ArchiveGrid.propTypes = {
  dispatch: React.PropTypes.func,
  modalState: React.PropTypes.object
};

const injectStateProps = state => ({
  modalState: state.modalState
});

export default connect(injectStateProps)(ArchiveGrid);
