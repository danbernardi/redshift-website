import React from 'react';
import Measure from 'react-measure';
import { Link } from 'react-router';
import CaseStudySection from './CaseStudySection';
import { ScrollContainer } from 'scrollmonitor-react';
import mojs from 'mo-js';
import Builder from 'components/Builder';

export class CaseStudyScroller extends React.Component {
  componentDidMount () {
    const { passRefsToParent } = this.props;
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

    if (passRefsToParent instanceof Function) {
      passRefsToParent({
        name: this.name,
        next: this.next,
        nextname: this.nextname,
        nextlabel: this.nextlabel
      });
    }
  }

  render () {
    const { caseStudyContent, nextCaseStudy, scrollContainer } = this.props;

    return (
      <section ref={ (el) => { this.casestudy = el; } } className={ `modal__with-sidebar ${caseStudyContent.id}` }>
        <div className={ `job__sidebar bg--${caseStudyContent.id}` } ref={
          (sidebar) => { this.sidebar = sidebar; }
        } />
        <div className="layout--relative ml8 ml1--mlg bg--white">
          <div className="row"><h4 className="modal__title" ref={ (el) => { this.name = el; } }>{ caseStudyContent.name }</h4></div>

          <div ref={ (el) => { this.blur = el; } }>
            <div className="row">
              <Builder scrollContainer={ scrollContainer }>
                <div className="casestudy__heading layout--fullheight">
                  <h1 className={ `typ--${caseStudyContent.id} typ--bold casestudy__title` }>
                    { caseStudyContent.heading }
                  </h1>
                  <div className="casestudy__scrollarrow">
                    <img src={ require('assets/img/down-arrow.svg') } alt="Scroll down" />
                  </div>
                </div>
              </Builder>
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
            <Measure onMeasure={ dimensions => { this.setState({ dimensions }); } }>
              <div ref={ (el) => { this.next = el; } }>
                <Link
                  to={ `/work/${nextCaseStudy.id}` }
                  style={ { display: 'block', bottom: 0, height: 'auto', opacity: 1 } }
                  className="casestudy__next"
                >
                  <div className={ `casestudy__next--sidebar bg--${nextCaseStudy.id}` } />
                  <div className="layout--relative ml8 ml1--mlg">
                    <div className="row">
                      <span ref={ (el) => { this.nextlabel = el; } } className="typ--light" style={ { overflow: 'hidden', display: 'block' } }>View next case study</span>
                      <h2 ref={ (el) => { this.nextname = el; } } className={ `typ--${nextCaseStudy.id}` }>{ nextCaseStudy.name }</h2>
                    </div>
                  </div>
                </Link>
              </div>
            </Measure>
          }
        </div>
      </section>
    );
  }
}

export default ScrollContainer(CaseStudyScroller);
