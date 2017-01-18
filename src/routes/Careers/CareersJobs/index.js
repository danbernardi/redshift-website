import React from 'react';
import * as actions from 'store/actions';
import { connect } from 'react-redux';
import { jobDetails } from 'data/jobDetails';

export function CareersJobs (props) {
  const { dispatch, jobDetails } = props;

  const openModal = (component, openState) => {
    dispatch(actions.setActiveModal(<jobDescription />, 'job'));
    dispatch(actions.toggleModal(openState));
  };

  return (
    <div>
      <section className={ `${jobDetails.id} py9 py6--mlg` }>
        <h1 className="typ--bold">{ jobDetails.position }</h1>
        <p className="typ--h4 pt6 pt3--mlg">{ jobDetails.p1 }</p>
        { jobDetails.p2
          ? <p className="typ--h4">{ jobDetails.p2 }</p>
          : null
        }
        { jobDetails.p3
          ? <p className="typ--h4 mb6 mb3--mlg">{ jobDetails.p3 }</p>
          : null
        }
        <h5
          data-target={ jobDetails.id }
          data-type="job-open"
          className="btn btn--arrow js-modal-trigger"
          onClick={ () => openModal(<jobDescription job={ jobDetails } />, true, jobDetails.id) }
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
  jobDetails: object,
  dispatch: func
};

export default connect()(CareersJobs);
