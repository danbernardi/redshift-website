import React from 'react';

export function CareersJobs ({ job }) {
  return (
    <div>
      {
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
          >
            View position
            <span className="icon-arrow-right pl2" />
          </h5>
        </section>
      }
    </div>
  );
}

const { object } = React.PropTypes;
CareersJobs.propTypes = {
  job: object
};

export default CareersJobs;
