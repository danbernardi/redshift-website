import React from 'react';
/* eslint react/jsx-boolean-value: 0 */

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
    // const icons = [
    //   {
    //     img: require('assets/img/about/telescope.png'),
    //     alt: 'telescope',
    //     label: 'Research',
    //     text: 'lorem ipsum'
    //   },
    //   {
    //     img: require('assets/img/about/constellation.png'),
    //     alt: 'constellation',
    //     label: 'UX',
    //     text: 'lorem ipsum'
    //   },
    //   {
    //     img: require('assets/img/about/comet.png'),
    //     alt: 'comet',
    //     label: 'Visual Design',
    //     text: 'lorem ipsum'
    //   },
    //   {
    //     img: require('assets/img/about/rocket.png'),
    //     alt: 'rocket',
    //     label: 'Engineering',
    //     text: 'lorem ipsum'
    //   }
    // ];

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
        <div className="row row--maxwidth mb10 mb6--msm">
          <h1 className="typ--bold my4 mt0--tlg">We are Redshift<span className="typ--redshift">.</span></h1>
          <div className="typ--h4">
            <p className="mb6">We create digital products that deliver simple, meaningful experiences for users, and successful results for our clients.</p>

            <h3 className="type--medium mb2">Interdisciplinary Approach</h3>
            <p>Our studio is an environment where passionate, creative people thrive and work together to solve hard problems.
            We leverage expertise across multiple disciplines—research, ux, visual design, and engineering—to create experiences that are usable, beautiful, and
            grounded in real user needs. We believe the best products are created by hybrid teams, with designers, developers, and researchers working shoulder-to-shoulder.
            </p>
          </div>
        </div>

        <div className="row row--maxwidth">
          <h1 className="typ--bold mb4 mb3--tlg">How we work<span className="typ--redshift">.</span></h1>

          <div className="col-5 about--process__image typ--center col-last pl5 pt10 hide--tlg">
            <img
              src={ require('assets/img/about/process.png') }
              alt="research engineering user experience visual design"
            />
          </div>
          <div className="col-7 col-12--tlg">
            <div className="typ--h4">
              <h3 className="mb2">Exploration</h3>
              <p className="mb4">We find great solutions by starting with the broadest range of possibilities. We uncover these possibilities using a blend of research techniques and vigorous ideation. We go through a lot of paper and Post-Its.</p>

              <h3 className="mb2">Experimentation</h3>
              <p className="mb4">Our practice is inquisitive and hands-on. We prototype everything, and these prototypes are the focal point of our process. We think “try it and see” is better than “let’s talk about it.”</p>

              <h3 className="mb2">Collaboration</h3>
              <p className="mb4">Tough problems need multiple points of view and a diverse set of minds. By challenging and motivating one another, we create far better work than any of us could alone.</p>

              <h3 className="mb2">Iteration</h3>
              <p className="mb4 mb0--msm">We work in rapid cycles with frequent input from both clients and users, continually asking ourselves, “How can we make it better? How can we make it simpler?” We set extraordinarily high standards, and achieve them through incremental refinement.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default AboutProcess;
