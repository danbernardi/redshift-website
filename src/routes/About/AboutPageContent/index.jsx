import React from 'react';
import './AboutContent.scss';
import { aboutSections } from 'data/aboutContent';
import { setClass } from 'utils/responsiveHelpers';
import { connect } from 'react-redux';
import Builder from 'components/Builder';
import PropTypes from 'prop-types';

export function AboutPageContent (props) {
  const { breakpoint } = props;
  return (
    <div>
      {
        aboutSections.map((s, i) => (
          <Builder scrollContainer={ props.scrollContainer } key={ i }>
            <div className={ `layout--relative about__content col-12 about__${s.sectionClass}` }>
              <div className="about__square" />
              {s.image &&
                <div className={s.imageClass && setClass({...s.imageClass}, breakpoint)}>
                  <picture>
                    <source srcSet={ s.image.imgDef } media="(min-width: 1040px)" />
                    <source srcSet={ s.image.imgTlg } media="(min-width: 375px)" />
                    <img
                      src={ s.image.imgMlg }
                      className="about__image"
                      alt={ s.imgAlt }
                    />
                  </picture>
                </div>
              }
              { s.text &&
                <div className={ `${s.textClass && setClass({...s.textClass}, breakpoint)} about__text` }>
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

const mapStateToProps = state => ({
  breakpoint: state.breakpoint
});

export default connect(mapStateToProps)(AboutPageContent);
