import React from 'react';
import { setClass } from 'utils/responsiveHelpers';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

/**
 * Job Listing on the careers page
 *
 * @param {Object} props
 * @param {Object} job       jobDetails data from parent
 */

export function CareersJobs (props) {
  const { job, breakpoint } = props;

  const frontPage = job.frontpage.map((paragraph, index) =>
    <p className="typ--b2 pt3" key={ index }>{ paragraph }</p>
  );

  return (
    <section className={ `${job.id} career__section` }>
      <Link to={ `/careers/${job.id}` }>
        <div className="typ--b1 typ--bold">{ job.position }</div>
        { frontPage }
        <div className="pt4">
          <span data-animationName="cta-link" className="job__link typ--b2 typ--bold" >
            View position
          </span>
        </div>
      </Link>
    </section>
  );
}

CareersJobs.propTypes = {
  job: PropTypes.object
};

const mapStateToProps = state => ({
  breakpoint: state.breakpoint
});

export default connect(mapStateToProps)(CareersJobs);
