import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

/**
 * Job Listing on the careers page
 *
 * @param {Object} props
 * @param {object} job       jobDetails data from parent
 */

export function CareersJobs (props) {
  const { job } = props;

  const frontPage = job.frontpage.map((paragraph, index) =>
    <p className="typ--b2 pt3" key={ index }>{ paragraph }</p>
  );

  return (
    <section className={ `${job.id} career-section` }>
      <h3>{ job.position }</h3>
      { frontPage }
      <div className="pt4">
        <Link data-animationName="cta-link" className="job__link typ--button" to={ `/careers/${job.id}` } >
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
