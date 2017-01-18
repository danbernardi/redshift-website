import React from 'react';
import './Archive.scss';
import { caseStudyArchives } from 'data/caseStudyArchives';
import { connect } from 'react-redux';
import * as actions from 'store/actions';

const ArchiveGrid = props => {
  const { dispatch } = props;

  const openCaseStudyModal = (component, id) => {
    dispatch(actions.setNextCaseStudy(id, true));
    dispatch(actions.setActiveModal(component, id));
    dispatch(actions.toggleModal(true));
  };

  const generateCaseStudies = (caseStudyArray) => (
    caseStudyArray.map((item, index) => (
      <div
        onClick={ () => openCaseStudyModal(item.component, item.id) }
        key={ index }
        className="archive__item"
        style={ { backgroundImage: `url(${item.thumb})` } }
      />
    ))
  );

  console.log(caseStudyArchives);

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
  dispatch: React.PropTypes.func
};

export default connect()(ArchiveGrid);
