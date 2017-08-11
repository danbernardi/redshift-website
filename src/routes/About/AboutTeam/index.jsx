import React from 'react';
import { Link } from 'react-router';
import PinkHover from 'components/PinkHover';
import { setClass } from 'utils/responsiveHelpers';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './About_Team.scss';

export function AboutTeam (props) {
  const { team, breakpoint } = props;
  return (
    <section className="about--team">
      <div className="row hero--scene-text">
        <h2 className={ setClass({ default: 'py8', tabletLg: 'py6', mobileLg: 'pt0 pb5' }, breakpoint) }>Who we are.</h2>
      </div>
      { team.map((team, index) => (
        <Link to={ `/about/${team.id}` } key={ index }>
          <PinkHover
            classes="about--team__layout team-member"
            imageSrc={ team.id }
            alt={ team.name }
          >
            <span className="member__name typ--bold typ--b1">{ team.name }</span>
            <span className="member__position typ--b2">{ team.position }</span>
            <div className="right-arrow">
              <img src={ require('assets/img/right-arrow.svg') } alt={ `${team.name}, ${team.position}` } />
            </div>
          </PinkHover>
        </Link>
      )) }
    </section>
  );
};

AboutTeam.propTypes = {
  team: PropTypes.array,
  breakpoint: PropTypes.object
};

const mapStateToProps = state => ({
  breakpoint: state.breakpoint
});

export default connect(mapStateToProps)(AboutTeam);
