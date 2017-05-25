import React from 'react';
import { Link } from 'react-router';
import PinkHover from 'components/PinkHover';

const AboutTeam = props => {
  const { team } = props;

  return (

    <section className="about--team pt9 pt6--tlg">
      <div className="row hero--scene-text">
        <h1 className="typ--bold py8 py6--tlg">Who we are<span className="typ--redshift">.</span></h1>
      </div>
      { team.map((team, index) => (
        <Link to={ `/about/${team.id}` } key={ index }>
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
      )) }
    </section>
  );
};

const { object } = React.PropTypes;
AboutTeam.propTypes = {
  team: object
};

export default AboutTeam;
