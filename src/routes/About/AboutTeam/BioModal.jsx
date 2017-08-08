import React from 'react';
import ModalCloseBtn from 'components/Modal/ModalCloseBtn';
import { browserHistory } from 'react-router';
import { setClass, breakpointIsGreaterThan } from 'utils/responsiveHelpers';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../style.scss';

export function BioTemplate (props) {
  const { bioContent, breakpoint, modalState } = props;

  const bio = bioContent.bioStatement.map((paragraph, index) =>
    <h5 key={ index } className="pb2">{ paragraph }</h5>
  );

  return (
    <div
      className={ `${bioContent.id} team-member__modal` }
      style={ { height: modalState.windowHeight, width: modalState.windowWidth } }
    >
      <ModalCloseBtn closeCallback={ () => browserHistory.push('/about') } />
      <div className="col-12 bio--wrap row">
        <div className="team-member-bio py5">
          <h2 className="typ--bold">{ bioContent.name }</h2>
          <h2 className={ setClass({ default: 'pb6', desktopSm: 'pb2' }, breakpoint) }>{ bioContent.position }</h2>
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
          <div className="bio--wrap__img">
            <img src={ `https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/about/team/modal/${bioContent.id}.jpg` } alt={ bioContent.name } />
          </div>
        }
      </div>
    </div>
  );
};

BioTemplate.propTypes = {
  bioContent: PropTypes.object,
  breakpoint: PropTypes.object,
  modalState: PropTypes.object
};

const mapStateToProps = state => ({
  breakpoint: state.breakpoint,
  modalState: state.modalState
});

export default connect(mapStateToProps)(BioTemplate);
