import React from 'react';

export function AboutTeam ({ team }) {
  return (
    <div>
      <div className="quarter-width team-member">
        <div className="team-hover">
          <div className="team-gradient">
            <div className="team-info">
              <h2 className="typ--bold">{ team.name }</h2>
              <h4>{ team.position }</h4>
            </div>
          </div>
        </div>
        <img src={ team.photo } />
      </div>
    </div>
  );
}

const { object } = React.PropTypes;
AboutTeam.propTypes = {
  team: object
};

export default AboutTeam;
