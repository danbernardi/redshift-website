import React from 'react';
import { Link } from 'react-router';

export function CareersJobs (props) {
  const { job } = props;

  const frontPage = job.frontpage.map((paragraph, index) =>
    <p className="typ--h4 pt6 pt3--mlg" key={ index }>{ paragraph }</p>
  );

  return (
    <section className={ `${job.id} py9 py6--mlg` }>
      <h1 className="typ--bold">{ job.position }</h1>
      { frontPage }
      <Link
        className="typ--h5 btn btn--arrow js-modal-trigger"
        to={ `/careers/${job.id}` }
      >
        View position
        <span className="icon-arrow-right pl2" />
      </Link>
    </section>
  );
}

const { object, func } = React.PropTypes;
CareersJobs.propTypes = {
  job: object,
  dispatch: func
};

export default CareersJobs;
