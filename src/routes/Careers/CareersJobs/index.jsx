import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

export function CareersJobs (props) {
  const { job } = props;

  const frontPage = job.frontpage.map((paragraph, index) =>
    <p className="typ--h4 pt3" key={ index }>{ paragraph }</p>
  );

  return (
    <section className={ `${job.id} career-section` }>
      <h2 className="typ--bold">{ job.position }</h2>
      { frontPage }
      <div className="pt3">
        <Link data-animationName="cta-link" className="job__link typ--bold typ--h6" to={ `/careers/${job.id}` } >
          View position
        </Link>
      </div>
    </section>
  );
}

CareersJobs.propTypes = {
  job: PropTypes.object
};

export default CareersJobs;
