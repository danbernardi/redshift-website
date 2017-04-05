import React from 'react';

class AboutProcess extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      hover: false
    };
  }

  componentDidMount () {
    setTimeout(() => {
      document.getElementById('aboutVideo').play();
    }, 2000);
  }

  render () {
    const videoImage = require('assets/img/about/office-video-still-arrow.jpg');
    return (
      <section className="about__process mb10">
        <video
          className="mb6"
          autoPlay
          loop
          muted
          playsInline
          id="aboutVideo"
          poster={ videoImage }
        >
          <source src="https://s3-us-west-1.amazonaws.com/rs-website-cdn/video/redshift_office_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="col-12 row pb10">
          <h1 className="typ--bold my4">We are Redshift<span className="typ--redshift">.</span></h1>
          <div className="typ--h4">
            <p className="mb6">
              We create digital products that deliver simple, meaningful experiences for users, and successful results for our clients.
            </p>
            <h3 className="type--medium mb2">Interdisciplinary Approach</h3>
            <p>Our studio is an environment where passionate, creative people thrive and work together to solve hard problems. We leverage expertise across multiple disciplines—research, ux, visual design, and engineering—to create experiences that are usable, beautiful, and grounded in real user needs. We believe the best products are created by hybrid teams, with designers, developers, and researchers working shoulder-to-shoulder.</p>

          </div>
        </div>
      </section>
    );
  }
};

export default AboutProcess;
