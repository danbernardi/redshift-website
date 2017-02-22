import React from 'react';
import { Link } from 'react-router';
import PinkHover from 'components/PinkHover';

const AboutTeam = props => {
  const { team } = props;

  return (
    <Link to={ `/about/${team.id}` }>
      <PinkHover
        classes="quarter-width team-member"
        imageSrc={ team.photo }
        alt={ team.name }
      >
        <span className="member__name typ--bold">{ team.name }</span>
        <span className="member__position">{ team.position }</span>
        <div className="right-arrow">
          <img src={ require('assets/img/arrow-right-short.png') } alt={ `${team.name}, ${team.position}` } />
        </div>
      </PinkHover>
    </Link>
  );
};

const { object } = React.PropTypes;
AboutTeam.propTypes = {
  team: object
};

export default AboutTeam;
