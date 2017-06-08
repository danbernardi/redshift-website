import React from 'react';

export class AboutHero extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      removeMask: false
    };
  }

  // _removeMask () {
  //   const currentState = this.state.removeMask;
  //   this.setState({ removeMask: !currentState });
  // }

  render () {
    const { removeMask } = this.state;
    return (
      <section
        className={ `${ removeMask ? '' : 'layout--flex-col'} layout--fullheight layout--landscape` }
        style={ { overflow: 'hidden', position: 'relative' } }
        // onClick={ () => this._removeMask() }
      >
        <div
          className="about--transition layout--absolute layout--top video_mask"
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

        <div className="row about--header" /* style={ { display: removeMask && 'none' } } */ >
          <div className="col-7 col-12--mlg">
            <h1 className="typ--bold typ--redshift pb2 pb1--mlg">About Redshift.</h1>
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

export default AboutHero;
