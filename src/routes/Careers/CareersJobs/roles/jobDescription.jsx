import RoleTemplate from './RoleTemplate';
import React from 'react';

export function JobDescription ({ jobDetail }) {
  return (
    <RoleTemplate name={ jobDetail.position }>
      <section id={ jobDetail.id } className="job-description">
        <div className="row pb10 row--maxwidth">
          <h4 className="typ--light careers__type">{ jobDetail.header }</h4>
          <h1 className="careers-title">{ jobDetail.position }</h1>
          <h3 className="pb10 pb2--mlg typ--light">{ jobDetail.description }</h3>
          <h2 className="careers-section">Responsibilities</h2>
          <ul className="job-description pb3 list--block">
            {jobDetail.responsibilities
              ? jobDetail.responsibilities.map((jobResponsibility, index) => (
                <li key={ index }>
                  { jobResponsibility }
                </li>
              ))
              : null
            }
          </ul>
          <h2 className="careers-section">Candidates must have:</h2>
          <ul className="job-description pb3 list--block">
            {jobDetail.skills
              ? jobDetail.skills.map((jobSkill, index) => (
                <li key={ index }>
                  { jobSkill }
                </li>
              ))
              : null
            }
          </ul>
          <h2 className="careers-section">...Plus at least 2-3 of these:</h2>
          <ul className="job-description pb3 list--block">
            {jobDetail.plusses
              ? jobDetail.plusses.map((jobPlus, index) => (
                <li key={ index }>
                  { jobPlus }
                </li>
              ))
              : null
            }
          </ul>
        </div>
      </section>
    </RoleTemplate>
  );
};

const { object } = React.PropTypes;
JobDescription.propTypes = {
  jobDetail: object
};

export default JobDescription;
