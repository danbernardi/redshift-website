import React from 'react';
import Measure from 'react-measure';
import { Link } from 'react-router';
import CaseStudySection from './CaseStudySection';
import { ScrollContainer } from 'scrollmonitor-react';
import mojs from 'mo-js';
import Builder from 'components/Builder';

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
      <section ref="casestudy" className={ `modal__with-sidebar ${caseStudyContent.id}` }>
        <div className={ `job__sidebar bg--${caseStudyContent.id}` } ref={
          (sidebar) => { this.sidebar = sidebar; }
        } />
        <div className="layout--relative ml8 ml1--mlg bg--white">
          <div className="row"><h4 className="modal__title" ref="name">{ caseStudyContent.name }</h4></div>

          <div ref="blur">
            <div className="row">
              <div className="casestudy__heading layout--fullheight">
                <h1 className={ `typ--${caseStudyContent.id} typ--bold casestudy__title` }>
                  { caseStudyContent.heading }
                </h1>
                <div className="casestudy__scrollarrow">
                  <img src={ require('assets/img/down-arrow.svg') } alt="Scroll down" />
                </div>
              </div>
            </div>
            { caseStudyContent.content && caseStudyContent.content.length &&
              caseStudyContent.content.map((section, index) => (
                <Builder key={ index } scrollContainer={ scrollContainer }>
                  <CaseStudySection
                    key={ index }
                    caseStudyContent={ section }
                  />
                </Builder>
              ))
             }
          </div>

          { nextCaseStudy && typeof nextCaseStudy === 'object' &&
            <Measure onMeasure={ dimensions => { this.setState({ dimensions }); } }>
              <Link
                ref="next"
                to={ `/work/${nextCaseStudy.id}` }
                style={ { display: 'block', bottom: 0, height: 'auto', opacity: 1 } }
                className="casestudy__next"
              >
                <div className={ `casestudy__next--sidebar bg--${nextCaseStudy.id}` } />
                <div className="layout--relative ml8 ml1--mlg">
                  <div className="row">
                    <span ref="next-label" className="typ--light">View next case study</span>
                    <h2 ref="next-name" className={ `typ--${nextCaseStudy.id}` }>{ nextCaseStudy.name }</h2>
                  </div>
                </div>
              </Link>
            </Measure>
          }
        </div>
      </section>
    );
  }
}

export default ScrollContainer(CaseStudyScroller);
