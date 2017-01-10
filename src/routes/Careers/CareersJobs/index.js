import React from 'react';
import * as actions from 'store/actions';
import { connect } from 'react-redux';

export function CareersJobs (props, { job }) {
  const { dispatch } = props;

  const openModal = (component, openState) => {
    dispatch(actions.setActiveModal(component));
    dispatch(actions.toggleModal(openState));
  };

  return (
    <div>
      <section className={ `${job.target} py9 py6--mlg` }>
        <h1 className="typ--bold">{ job.position }</h1>
        <p className="typ--h4 pt6 pt3--mlg">{ job.p1 }</p>
        { job.p2
          ? <p className="typ--h4">{ job.p2 }</p>
          : null
        }
        { job.p3
          ? <p className="typ--h4 mb6 mb3--mlg">{ job.p3 }</p>
          : null
        }
        <h5
          data-target={ job.target }
          data-type="job-open"
          className="btn btn--arrow js-modal-trigger"
          onClick={ () => openModal(job.component, true, job.target) }
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
