import React from 'react';
import './AboutContent.scss';
import { aboutSections } from 'data/aboutContent';
import { setClass } from 'utils/responsiveHelpers';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export function AboutPageContent (props) {
  const { breakpoint } = props;

  const vimeoEmbed = (url) => {
    const width = window.innerWidth / 2;
    return (
      <center>
        <div>
          <iframe src={ url } width={ width } height="360" frameBorder="0" webkitallowfullscreen={ true } mozallowfullscreen={ true } allowFullScreen={ true } />
        </div>
      </center>
    );
  };

  return (
    <div className="about__content">
      <div className="about__square--container">
        {
          aboutSections.filter((s, i) => aboutSections.length - 1 !== i).map((s, i) => (
            <div className={ `parallax__group about__group about__${s.sectionClass}` } key={ i }>
              <div className="about__square parallax__layer parallax__layer--back" />
            </div>
          ))
        }
      </div>
      <div className="about__content--container">
        {
          aboutSections.map((s, i) => (
            <div className={ `parallax__group row--maxwidth about__group about__${s.sectionClass}` } key={ i }>
              <div className="parallax__layer">
                <div className={ `parallax__layer--fore ${ s.imageClass && setClass({ ...s.imageClass }, breakpoint) }` }>
                  {s.image &&
                    <picture>
                      <source srcSet={ s.image.imgDef } media="(min-width: 1040px)" />
                      <source srcSet={ s.image.imgTlg } media="(min-width: 767px)" />
                      <img
                        src={ s.image.imgMlg }
                        className="about__image"
                        alt={ s.imgAlt }
                      />
                    </picture>
                  }

                  { s.video && vimeoEmbed(s.video.url) }
                </div>
                <div className="parallax__layer--base">
                  <div className={ `${s.textClass && setClass({ ...s.textClass }, breakpoint)}` }>

                    { s.text &&
                      <div className="about__text">
                        { s.title && <h1>{ s.title }</h1> }
                        <div className="typ--b2">{ s.text }</div>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

AboutPageContent.propTypes = {
  breakpoint: PropTypes.object
};

const mapStateToProps = state => ({
  breakpoint: state.breakpoint
});

export default connect(mapStateToProps)(AboutPageContent);
