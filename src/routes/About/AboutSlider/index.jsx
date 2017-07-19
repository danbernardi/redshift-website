import React from 'react';
import { slideShow } from 'data/slideshow';
import Slider from 'react-slick';
import './Slides.scss';

class AboutSlides extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      hover: false,
      moveTitle: false
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
      <div className="about--slideshow">
        <Slider { ...settings }>
          {
            slideShow.map((s, i) => (
              <div key={ i }>
                <picture>
                  <source srcSet={ require(`assets/img/about/slides/tablet/${s.imagePath}.jpg`) } media="(max-width: 1040px)" />
                  <source srcSet={ require(`assets/img/about/slides/mobile/${s.imagePath}.jpg`) } media="(max-width: 767px)" />
                  <img src={ require(`assets/img/about/slides/default/${s.imagePath}.jpg`) } alt="Redshift About" />
                </picture>
                <div className="row about--header" >
                  <div className="row about--title">
                    <h1 className="typ--bold typ--redshift pb2 pb1--mlg">About Redshift.</h1>
                    <h3 className="pb2">
                      We are an award-winning agency dedicated to creating simple, meaningful experiences for users and positive results for our clients.
                    </h3>
                  </div>

                </div>


              </div>
            ))
          }
        </Slider>
        <div className="row about--header" >
          <div className="row about--title">
            <h1 className="typ--bold typ--redshift pb2 pb1--mlg">About Redshift.</h1>
            <h3 className="pb2">
              We are an award-winning agency dedicated to creating simple, meaningful experiences for users and positive results for our clients.
            </h3>
          </div>

        </div>
      </div>
    );
  }
}

export default AboutSlides;
