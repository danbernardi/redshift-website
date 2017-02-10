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
        <h2 className="typ--bold">{ team.name }</h2>
        <h4>{ team.position }</h4>
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
