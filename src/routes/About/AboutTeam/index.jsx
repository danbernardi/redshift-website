import React from 'react';
import { Link } from 'react-router';
import PinkHover from 'components/PinkHover';
import PropTypes from 'prop-types';

const AboutTeam = props => {
  const { team } = props;

  return (

    <section className="about--team pt9 pt7--tlg mt5 mt0--mlg">
      <div className="row hero--scene-text">
        <h1 className="typ--bold py8 py6--tlg pt0--mlg pb5--mlg typ--redshift">Who we are.</h1>
      </div>
      { team.map((team, index) => (
        <Link to={ `/about/${team.id}` } key={ index }>
          <PinkHover
            classes="quarter-width team-member"
            imageSrc={ team.id }
            alt={ team.name }
          >
            <span className="member__name typ--bold">{ team.name }</span>
            <span className="member__position">{ team.position }</span>
            <div className="right-arrow">
              <img src={ require('assets/img/arrow-right-short.png') } alt={ `${team.name}, ${team.position}` } />
            </div>
          </PinkHover>
        </Link>
      )) }
    </section>
  );
};

AboutTeam.propTypes = {
  team: PropTypes.array
};

export default AboutTeam;
