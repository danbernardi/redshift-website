import React from 'react';
import './Archive.scss';
import { caseStudyArchives } from 'data/caseStudyArchives';
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
    const { clickCallback } = props;

    dispatch(actions.setNextCaseStudy(id, true));
    dispatch(actions.setActiveModal(component, 'casestudy'));
    if (!modalState.open) {
      dispatch(actions.toggleModal(true));
    } else if (modalState.modalID === 'casestudy') {
      clickCallback && clickCallback(id);
    }
  };

  return (
    <section className="archive__grid">
      { caseStudyArchives && caseStudyArchives.length
        ? generateCaseStudies(caseStudyArchives)
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
