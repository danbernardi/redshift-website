import React from 'react';
import { Link } from 'react-router';
import CaseStudySection from './CaseStudySection';
import { ScrollContainer } from 'scrollmonitor-react';
import CaseStudyHeader from './CaseStudyHeader';
import PropTypes from 'prop-types';
import GSAP from 'react-gsap-enhancer';
// import { TimelineLite, Power3 } from 'gsap';
import { connect } from 'react-redux';

export class CaseStudyScroller extends React.Component {
  render () {
    const { caseStudyContent, nextCaseStudy, scrollContainer, modalState } = this.props;

    return (
      <section
        ref={ (el) => { this.casestudy = el; } }
        className={ `modal__with-sidebar ${caseStudyContent.id}` }
        style={ { height: modalState.windowHeight, width: modalState.windowWidth, borderColor: caseStudyContent.color } }
      >
        <div className="modal__content layout--relative">
          <div className="row"><h4 className="modal__title" ref={ (el) => { this.name = el; } }>{ caseStudyContent.name }</h4></div>

          <div ref={ (el) => { this.blur = el; } }>
            <div className="row">
              <div className="casestudy__heading layout--fullheight">
                <CaseStudyHeader
                  content={ caseStudyContent.heading }
                  color={ caseStudyContent.color }
                />
                <div className="casestudy__scrollarrow">
                  <img src={ require('assets/img/scroll-arrow.svg') } alt="Scroll down" />
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
  scrollContainer: PropTypes.object,
  modalState: PropTypes.object
};

const mapStateToProps = state => ({
  modalState: state.modalState
});

export default connect(mapStateToProps)(ScrollContainer(GSAP()(CaseStudyScroller)));
