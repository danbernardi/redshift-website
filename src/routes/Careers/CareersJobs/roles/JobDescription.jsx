import RoleTemplate from './RoleTemplate';
import React from 'react';
import PropTypes from 'prop-types';

export function JobDescription ({ jobDetail }) {
  return (
    <RoleTemplate name={ jobDetail.position }>
      <section id={ jobDetail.id } className="job-description--container row">
        <h4 className="typ--light modal__title typ--b2">{ jobDetail.header }</h4>
        <h1 className="job-description__title rs--gradienttext">{ jobDetail.position }</h1>
        <div className="job-description typ--b1">{ jobDetail.description }</div>
        <hr />
        {jobDetail.responsibilities &&
        <div>
          <h3 className="job-description__subtitle">Responsibilities</h3>
          <ul className="job-list pb3">
            { jobDetail.responsibilities.map((jobResponsibility, index) => (
              <li key={ index } className="typ--b2">
                <span>{ jobResponsibility }</span>
              </li>))
            }
          </ul>
        </div>
        }
        {jobDetail.skills &&
          <div>
            <h3 className="job-description__subtitle">Candidates must have:</h3>
            <ul className="job-list pb3">
              { jobDetail.skills.map((jobSkill, index) => (
                <li key={ index } className="typ--b2">
                  <span>{ jobSkill }</span>
                </li>))
              }
            </ul>
          </div>
        }
        {jobDetail.plusses &&
          <div>
            <h3 className="job-description__subtitle">Plus at least 2-3 of these:</h3>
            <ul className="job-list pb3">
              { jobDetail.plusses.map((jobPlus, index) => (
                <li key={ index } className="typ--b2">
                  <span>{ jobPlus }</span>
                </li>))
              }
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
