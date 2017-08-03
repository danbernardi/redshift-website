import React from 'react';
import { setClass } from 'utils/responsiveHelpers';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class AboutHero extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      removeMask: false
    };
  }

  _removeMask () {
    const currentState = this.state.removeMask;
    this.setState({ removeMask: !currentState });
  }

  render () {
    const { removeMask } = this.state;
    const { breakpoint } = this.props;
    return (
      <section
        className="layout--flex-col layout--fullheight layout--landscape"
        style={ { overflow: 'hidden', position: 'relative' } }
        onClick={ () => this._removeMask() }
      >
        <div
          className={ `about--transition layout--absolute layout--top about__video
          ${ removeMask ? 'about__video--removemask' : '' }` }
        >
          <video
            autoPlay={ true }
            loop={ true }
            muted={ true }
            playsInline={ true }
            id="aboutVideo"
          >
            <source src="https://s3-us-west-1.amazonaws.com/rs-website-cdn/video/redshift_office_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="row about--header" >
          <div className={ setClass({ default: 'col-7', tabletLg: 'col-12' }, breakpoint) }>
            <h1 className={ `typ--bold typ--redshift ${ setClass({ default: 'pb2', mobileLg: 'pb1' }, breakpoint) }` }>About Redshift.</h1>
            <h3 className="pb2">
              We are an award-winning agency dedicated to creating simple, meaningful experiences for users and positive results for our clients.
            </h3>
          </div>
          <div className="col-4 col-last" />
        </div>
        <div className="casestudy__scrollarrow row">
          <img src={ require('assets/img/down-arrow.svg') } alt="Scroll down" />
        </div>
      </section>
    );
  }
}

AboutHero.propTypes = {
  breakpoint: PropTypes.object
};

const mapStateToProps = state => ({
  breakpoint: state.breakpoint
});

export default connect(mapStateToProps)(AboutHero);

