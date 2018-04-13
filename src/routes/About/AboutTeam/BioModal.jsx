import React from 'react';
import ModalCloseBtn from 'components/Modal/ModalCloseBtn';
import { browserHistory } from 'react-router';
import { setClass, breakpointIsGreaterThan } from 'utils/responsiveHelpers';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/**
 * The slide show section of the about page
 *
 * @param {Object} props
 * @param {Object} breakpoint           Checks browser width
 * @return {function}
*/

export function BioTemplate (props) {
  const { bioContent, breakpoint } = props;

  const bio = bioContent.bioStatement.map((paragraph, index) =>
    <div key={ index } className="typ--b2 pb2">{ paragraph }</div>
  );

  return (
    <div className={ `${bioContent.id} team-member__modal` }>
      <ModalCloseBtn closeCallback={ () => browserHistory.push('/about') } />
      <div className="bio--wrap row">
        <div className="team-member-bio">
          <h2 className={ setClass({ default: 'mb2', desktopSm: 'mb2', mobileLg: 'typ--h1 mb2' }, breakpoint) }>{ bioContent.name }</h2>
          <h3 className={ setClass({ default: 'pb4', desktopSm: 'pb4' }, breakpoint) }>{ bioContent.position }</h3>
          { bio }
          { /** bioContent.inspiration &&
            <div>
              <h3>Current inspiration</h3>
              <iframe width="560" height="315" src={ bioContent.inspiration }
                frameborder="0"
              />
            </div> **/}
        </div>
        { breakpointIsGreaterThan('tabletMd', breakpoint.size) &&
          <div className="bio--wrap__img typ--b2">
            <img src={ `https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/about/team/modal/${bioContent.id}.jpg` } alt={ bioContent.name } />
          </div>
        }
      </div>
    </div>
  );
};

BioTemplate.propTypes = {
  bioContent: PropTypes.object,
  breakpoint: PropTypes.object
};

const mapStateToProps = state => ({
  breakpoint: state.breakpoint
});

export default connect(mapStateToProps)(BioTemplate);
