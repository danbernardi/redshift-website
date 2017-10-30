import React from 'react';
import { browserHistory } from 'react-router';
import { setClass } from 'utils/responsiveHelpers';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './AboutTeam.scss';

/**
 * The slide show section of the about page
 *
 * @param {Object} props
 * @param {array} team                  Team data from parent
 * @param {Object} breakpoint           Checks browser width
 * @return {React.Component}
*/

export function AboutTeam (props) {
  const { team, breakpoint } = props;

  const handleRouteChange = (routeTo, event) => {
    event.preventDefault();
    browserHistory.push(routeTo);
  };

  return (
    <section className="about--team cf">
      <div className="row hero--scene-text">
        <h1 className={ setClass({ default: 'py8', tabletLg: 'py6', mobileLg: 'pt0 pb5' }, breakpoint) }>The team.</h1>
      </div>
      { team.map((team, index) => (
        <a
          href={ `/about/${team.id}` }
          key={ index }
          onClick={ (event) => handleRouteChange(`/about/${team.id}`, event) }
          className="pink-hover__item about--team__layout team-member"
        >
          <div className="pink-hover">
            <div className="pink-info">
              <h3 className="member__name typ--bold">{ team.name }</h3>
              <span className="member__position typ--b2">{ team.position }</span>
              <div className="right-arrow">
                <img src="https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/right-arrow.svg" alt={ `${team.name}, ${team.position}` } />
              </div>
            </div>
          </div>
          <picture
            className="pinkhover__img"
            alt={ team.name }
          >
            <source srcSet={ `https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/about/team/desktop/${team.id}.jpg` } media="(max-width: 1400px)" />
            <source srcSet={ `https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/about/team/tablet/${team.id}.jpg` } media="(max-width: 1040px)" />
            <img src={ `https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/about/team/default/${team.id}.jpg` } alt="Redshift About" />
          </picture>
        </a>
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
