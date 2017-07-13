import React from 'react';
import { slideShow } from 'data/slideshow';
import Slider from 'react-slick';
import './Slides.scss';

class AboutSlides extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      hover: false
    };
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
      draggable: false
    };

    return (
      <div>
        <Slider { ...settings }>
          {
            slideShow.map((s, i) => (
              <div key={ i }>
                <picture>
                  <source srcSet={ require(`assets/img/about/slides/${s.imagePath}-tlg.jpg`) } media="(min-width: 1040px)" />
                  <source srcSet={ require(`assets/img/about/slides/${s.imagePath}-mlg.jpg`) } media="(min-width: 767px)" />
                  <img src={ require(`assets/img/about/slides/${s.imagePath}.jpg`) } alt="Redshift About" />
                </picture>
              </div>
            ))
          }
        </Slider>
      </div>
    );
  }
}

export default AboutSlides;
