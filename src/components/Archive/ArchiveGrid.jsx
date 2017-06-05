import React from 'react';
import './Archive.scss';
import { caseStudies } from 'data/caseStudies';
import PinkHover from 'components/PinkHover';
import * as actions from 'store/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
        <h2 className="typ--bold">{ item.name }</h2>
        <div className="right-arrow"><img src={ require('assets/img/arrow-right-short.png') } /></div>
      </PinkHover>
    ))
  );

  const openModal = (component, id) => {
    const { clickCallback } = props;
    if (!modalState.open) {
      dispatch(actions.setActiveModal(component, 'casestudy'));
      dispatch(actions.setNextCaseStudy(id));
      dispatch(actions.toggleModal(true));
    } else if (modalState.modalID === 'casestudy') {
      clickCallback && clickCallback(id);
    }
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
  dispatch: PropTypes.func,
  modalState: PropTypes.object
};

const injectStateProps = state => ({
  modalState: state.modalState
});

export default connect(injectStateProps)(ArchiveGrid);
