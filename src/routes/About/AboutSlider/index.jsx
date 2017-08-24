import React from 'react';
import { slideShow } from 'data/slideshow';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

import './Slides.scss';

/**
 * The slide show section of the about page
 *
 * @param {Object} props
 * @param {object} breakpoint           Checks browser width
 * @return {React.Component}
*/

class AboutSlides extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      hover: false,
      moveTitle: false
    };
  }

  componentWillUnmount () {
    clearTimeout(this.timer);
  }

  startTimeout () {
    // If autoplay is working we reset timeout and it will never end up inside.
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      // This will start play again, important here is to have a timeout that exceeds your "autoplaySpeed".
      this.slider.innerSlider.play();
    }, 3200);
  }

  // App state
  render () {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2300,
      fade: true,
      pauseOnHover: false,
      arrows: false,
      draggable: false,
      lazyLoad: true,
      touchMove: false,
      swipe: false
    };

    return (
      <div>
        <div className="about--slideshow">
          <Slider
            ref={ c => { this.slider = c; } }
            afterChange={ this.startTimeout.bind(this) }
            beforeChange={ this.startTimeout.bind(this) }
            { ...settings }
          >
            {
              slideShow.map((s, i) => (
                <div key={ i }>
                  <picture>
                    <source srcSet={ `https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/about/slides/desktop/${s.imagePath}.jpg` } media="(max-width: 1400px)" />
                    <source srcSet={ `https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/about/slides/tablet/${s.imagePath}.jpg` } media="(max-width: 1040px)" />
                    <source srcSet={ `https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/about/slides/mobile/${s.imagePath}.jpg` } media="(max-width: 767px)" />
                    <img src={ `https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/about/slides/default/${s.imagePath}.jpg` } alt="Redshift About" />
                  </picture>
                </div>
              ))
            }
          </Slider>
        </div>
        <div className="row about--header" >
          <div className="row about--title">
            <h1 className="rs--gradienttext">About Redshift.</h1>
            <div className="pb2 typ--b1">
              We are an award-winning agency dedicated to creating simple, meaningful experiences for users and positive results for our clients.
            </div>
          </div>

        </div>
      </div>
    );
  }
}

AboutSlides.propTypes = {
  breakpoint: PropTypes.object
};

export default AboutSlides;
