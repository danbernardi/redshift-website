import React from 'react';
import './PinkHover.scss';
import PropTypes from 'prop-types';

export function PinkHover (props) {
  const { children, classes, imageSrc, clickHandler, alt } = props;

  return (
    <div
      className={ `pink-hover__item ${classes}` }
      onClick={ () => clickHandler && clickHandler() }
    >
      <div className="pink-hover">
        <div className="pink-info">{ children }</div>
      </div>
      <picture
        className="pinkhover__img"
        alt={ alt }
      >
        <source srcSet={ `https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/about/team/desktop/${imageSrc}.jpg` } media="(max-width: 1400px)" />
        <source srcSet={ `https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/about/team/tablet/${imageSrc}.jpg` } media="(max-width: 1040px)" />
        <img src={ `https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/about/team/default/${imageSrc}.jpg` } alt="Redshift About" />
      </picture>
    </div>
  );
}

PinkHover.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  classes: PropTypes.string,
  imageSrc: PropTypes.string,
  clickHandler: PropTypes.func,
  alt: PropTypes.string
};

export default PinkHover;
