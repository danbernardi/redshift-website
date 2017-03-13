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
          <h3>We believe in improving people’s lives with simple, meaningful design.</h3>
        </div>
        <div className="col-12 theme--gray py10">
          <div className="row">
            <h2 className="typ--bold">Redshift is a digital experience firm that’s out of this world.</h2>
            <h5>We leverage expertise across multiple disciplines – User experience, Visual design, Engineering, and Research – to create real products and deliver out-of-this-world experiences that are usable, beautiful, feasible and grounded in real user needs.</h5>
          </div>
          {/* <div className="col-12">
            <img style={ { width: '100%', position: 'absolute' } } src={ require('assets/img/about/about_curve.png') } />
            { icons.map((icon, i) => (
              <div className="col-3 typ--center" key={ i } style={ { padding: '11% 0' } }>
                <h3 className="typ--bold">{ icon.label }</h3>
                <h5>{ icon.text }</h5>
              </div>
            )) }
          </div> */}
        </div>
      </section>
    );
  }
};

export default AboutProcess;
