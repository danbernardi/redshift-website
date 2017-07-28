import React from 'react';
import Measure from 'react-measure';
import { Link } from 'react-router';
import CaseStudySection from './CaseStudySection';
import { ScrollContainer } from 'scrollmonitor-react';
import mojs from 'mo-js';
import Builder from 'components/Builder';
import CaseStudyHeader from './CaseStudyHeader';
import PropTypes from 'prop-types';

export class CaseStudyScroller extends React.Component {
  componentDidMount () {
    const sidebar = this.sidebar;

    const sidebarAnimation = new mojs.Tween({
      duration: 600,
      delay: 200,
      easing: 'cubic.out',
      onUpdate: (progress) => {
        sidebar.style.opacity = progress;
      }
    });

    sidebarAnimation.play();
  }

  render () {
    const { caseStudyContent, nextCaseStudy, scrollContainer } = this.props;

    return (
      <section ref={ (el) => { this.casestudy = el; } } className={ `modal__with-sidebar ${caseStudyContent.id}` }>
        <div className="job__sidebar" style={ { backgroundColor: caseStudyContent.color } } ref={
          (sidebar) => { this.sidebar = sidebar; }
        } />
        <div className="layout--relative ml8 ml1--mlg bg--white">
          <div className="row"><h4 className="modal__title" ref={ (el) => { this.name = el; } }>{ caseStudyContent.name }</h4></div>

          <div ref={ (el) => { this.blur = el; } }>
            <div className="row">
              <div className="casestudy__heading layout--fullheight">
                <CaseStudyHeader
                  content={ caseStudyContent.heading }
                  color={ caseStudyContent.color }
                />
                <div className="casestudy__scrollarrow">
                  <img src={ require('assets/img/down-arrow.svg') } alt="Scroll down" />
                </div>
              </div>
            </div>
            { caseStudyContent.content && caseStudyContent.content.length &&
              caseStudyContent.content.map((section, index) => (
                <CaseStudySection
                  key={ index }
                  caseStudyContent={ section }
                  scrollContainer={ scrollContainer }
                />
              ))
             }
          </div>

          { nextCaseStudy && typeof nextCaseStudy === 'object' &&
            <div>
              <Link
                to={ `/work/${nextCaseStudy.id}` }
                style={ {
                  display: 'block',
                  bottom: 0,
                  height: 'auto',
                  opacity: 1,
                  borderColor: nextCaseStudy.color
                } }
                className="casestudy__next"
              >
                <div className="layout--relative">
                  <div className="row">
                    <span
                      className="casestudy__next__label typ--light"
                      style={ { overflow: 'hidden', display: 'block' } }
                    >View next case study</span>
                    <h2
                      className="casestudy__next__name"
                      style={ { color: nextCaseStudy.color } }
                    >{ nextCaseStudy.name }</h2>
                  </div>
                </div>
              </Link>
            </div>
          }
        </div>
      </section>
    );
  }
}

CaseStudyScroller.propTypes = {
  caseStudyContent: PropTypes.object,
  nextCaseStudy: PropTypes.object,
  scrollContainer: PropTypes.object
};

export default ScrollContainer(CaseStudyScroller);
