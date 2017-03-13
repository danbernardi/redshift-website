import React from 'react';
import { Link } from 'react-router';

export function CareersJobs (props) {
  const { job } = props;

  const frontPage = job.frontpage.map((paragraph, index) =>
    <p className="typ--h4 pt3" key={ index }>{ paragraph }</p>
  );

  return (
    <section className={ `${job.id} py9 py6--mlg career-section` }>
      <h2>{ job.position }</h2>
      { frontPage }
      <div className="pt3">
        <Link
          className="typ--h5 btn btn--arrow js-modal-trigger"
          to={ `/careers/${job.id}` }
        >
          <span className="job__view typ--bold">
            View position
          </span>
        </Link>
      </div>
    </section>
  );
}

const { object, func } = React.PropTypes;
CareersJobs.propTypes = {
  job: object,
  dispatch: func
};

export default CareersJobs;
