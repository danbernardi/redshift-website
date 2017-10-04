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
    <section className={ `${job.id} career__section row ${setClass({ default: 'col-6', tabletSm: 'col-12' }, breakpoint)}` }>
      <div className="typ--b1 typ--bold">{ job.position }</div>
      { frontPage }
      <div className="pt4">
        <Link data-animationName="cta-link" className="job__link typ--b2 typ--bold" to={ `/careers/${job.id}` } >
          View position
        </Link>
      </div>
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
