import React from 'react';
import * as actions from 'store/actions';
import { connect } from 'react-redux';
import JobDescription from './roles/JobDescription';

export function CareersJobs (props) {
  const { dispatch, job } = props;

  const openModal = (component, openState) => {
    dispatch(actions.setActiveModal(component, 'job'));
    dispatch(actions.toggleModal(openState));
  };

  const frontPage = job.frontpage.map((paragraph, index) =>
    <p className="typ--h4 pt6 pt3--mlg" key={ index }>{ paragraph }</p>
  );

  return (
    <div>
      <section className={ `${job.id} py9 py6--mlg` }>
        <h1 className="typ--bold">{ job.position }</h1>
        { frontPage }
        <h5
          data-target={ job.id }
          data-type="job-open"
          className="btn btn--arrow js-modal-trigger"
          onClick={ () => openModal(<JobDescription jobDetail={ job } />, true, job.id) }
        >
          View position
          <span className="icon-arrow-right pl2" />
        </h5>
      </section>
    </div>
  );
}

const { object, func } = React.PropTypes;
CareersJobs.propTypes = {
  job: object,
  dispatch: func
};

export default connect()(CareersJobs);
