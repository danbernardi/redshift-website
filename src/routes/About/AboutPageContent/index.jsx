import React from 'react';
import './AboutContent.scss';
import { aboutSections } from 'data/aboutContent';
import Builder from 'components/Builder';
import PropTypes from 'prop-types';

export function AboutPageContent (props) {
  return (
    <div>
      {
        aboutSections.map((s, i) => (
          <Builder scrollContainer={ props.scrollContainer } key={ i }>
            <div className={ `layout--relative about__content about__${s.sectionClass}` }>
              <div className="about__square" />
              {s.image &&
                <picture>
                  <source srcSet={ s.image.imgDef } media="(min-width: 1040px)" />
                  <source srcSet={ s.image.imgTlg } media="(min-width: 767px)" />
                  <img src={ s.imgMlg } className="about__image" alt={ s.imgAlt } />
                </picture>
              }
              { s.text &&
                <div className={ `${s.textClass} about__text` }>
                  { s.title && <h1>{ s.title }</h1> }
                  <div className="typ--b1">{ s.text }</div>
                </div>
              }
            </div>
          </Builder>
        ))
      }
    </div>
  );
}

AboutPageContent.propTypes = {
  scrollContainer: PropTypes.object
};

export default AboutPageContent;
