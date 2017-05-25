import React from 'react';

export class AboutHero extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      removeMask: false
    };
  }

  _removeMask () {
    this.setState({ removeMask: true });
    console.log('click');
  }
  render () {
    const { removeMask } = this.state;
    return (
      <section className="layout--flex-col layout--fullheight" style={ { overflow: 'hidden', position: 'relative' } }>
        <div className={ `about--transition ${removeMask ? '' : 'video_mask layout--absolute layout--top'} ` } onClick={ () => this._removeMask() }>
          <div className="video__container">
            <video
              autoPlay={ true }
              loop={ true }
              muted={ true }
              playsInline={ true }
              id="aboutVideo"
              style={ { width: removeMask && '100%' } }
            >
              <source src="https://s3-us-west-1.amazonaws.com/rs-website-cdn/video/redshift_office_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="row" style={ { zIndex: 3, display: removeMask && 'none' } }>
          <div className="col-7">
            <h1 className="typ--bold typ--redshift pb2">About Redshift</h1>
            <h3 className="pb2">
              We are an award-winning agency dedicated to creating simple, meaningful experiences for users and positive results for our clients.
            </h3>
          </div>
          <div className="col-4 col-last" />
        </div>
      </section>
    );
  }
}

export default AboutHero;
