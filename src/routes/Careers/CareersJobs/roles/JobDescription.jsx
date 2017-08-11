import RoleTemplate from './RoleTemplate';
import React from 'react';
import PropTypes from 'prop-types';

export function JobDescription ({ jobDetail }) {
  return (
    <RoleTemplate name={ jobDetail.position }>
      <section id={ jobDetail.id } className="job-description--container row">
        <h4 className="typ--light modal__title">{ jobDetail.header }</h4>
        <h1 className="job-description__subtitle">{ jobDetail.position }</h1>
        <h3 className="job-description typ--light">{ jobDetail.description }</h3>

        { jobDetail.responsibilities &&
          <div>
            <h2 className="job-description__subtitle">Responsibilities</h2>
            <ul className="job-description pb3 list--block">
              { jobDetail.responsibilities.map((jobResponsibility, index) => (
                <li key={ index }>
                  { jobResponsibility }
                </li>
              )) }
            </ul>
          </div>
        }

        { jobDetail.skills &&
          <div>
            <h2 className="job-description__subtitle">Candidates must have:</h2>
            <ul className="job-description pb3 list--block">
              { jobDetail.skills.map((jobSkill, index) => (
                <li key={ index }>
                  { jobSkill }
                </li>
              )) }
            </ul>
          </div>
        }

        { jobDetail.plusses &&
          <div>
            <h2 className="job-description__subtitle">...Plus at least 2-3 of these:</h2>
            <ul className="job-description pb3 list--block">
              { jobDetail.plusses.map((jobPlus, index) => (
                <li key={ index }>
                  { jobPlus }
                </li>
              )) }
            </ul>
          </div>
        }
      </section>
    </RoleTemplate>
  );
};

JobDescription.propTypes = {
  jobDetail: PropTypes.object
};

export default JobDescription;
