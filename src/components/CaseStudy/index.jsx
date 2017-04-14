import React from 'react';
import CaseStudySection from './CaseStudySection';
import { caseStudies } from 'data/caseStudies';
import { mapRange } from 'utils/animation';
import { browserHistory, Link } from 'react-router';
import ReactDOM from 'react-dom';
import mojs from 'mo-js';
import ModalCloseBtn from 'components/Modal/ModalCloseBtn';
import Measure from 'react-measure';
import './styles.scss';

class CaseStudy extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      dimensions: { height: -4, width: 0 }
    };
  }

  componentWillEnter (callback) { callback(); }

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

  componentWillLeave (unmountComponent) {
    const name = ReactDOM.findDOMNode(this.refs.name);
    const next = ReactDOM.findDOMNode(this.refs.next);
    const nextName = ReactDOM.findDOMNode(this.refs['next-name']);
    const nextLabel = ReactDOM.findDOMNode(this.refs['next-label']);
    const { dimensions } = this.state;
    nextName.style.transition = 'color 600ms ease-in-out, background-color 400ms ease-out 100ms';
    nextName.style.color = '#a3a3a3';

    new mojs.Tween({
      duration: 600,
      easing: 'cubic.out',
      onUpdate: (progress) => {
        const startFontSize = Number(window.getComputedStyle(nextName, null).getPropertyValue('font-size').replace('px', ''));
        const endFontSize = Number(window.getComputedStyle(name, null).getPropertyValue('font-size').replace('px', ''));
        const mappedHeight = mapRange(progress, 0, 1, dimensions.height, window.innerHeight);
        const mappedFontSize = mapRange(progress, 0, 1, startFontSize, endFontSize);
        const mappedFontWeight = mapRange(progress, 0, 1, 600, 100);
        const mappedOpacity = mapRange(progress, 0, 0.5, 0.5, 0);
        next.style.height = `${mappedHeight}px`;
        nextName.style.fontSize = `${mappedFontSize}px`;
        nextName.style.fontWeight = mappedFontWeight;
        nextLabel.style.opacity = mappedOpacity;
        next.style.backgroundColor = '#fff';
      },
      onPlaybackComplete: () => unmountComponent()
    }).play();
  }

  render () {
    const { id, name, content, heading, featured } = this.props;

    const featuredCaseStudies = caseStudies.filter((item) => item.featured);
    const archivedCaseStudies = caseStudies.filter((item) => !item.featured);

    let activeCaseStudies;
    if (featured) activeCaseStudies = featuredCaseStudies;
    if (!featured) activeCaseStudies = archivedCaseStudies;

    const caseStudyIndex = activeCaseStudies.findIndex(item => item.id === id);
    const nextCaseStudy = caseStudyIndex === activeCaseStudies.length ? null : activeCaseStudies[caseStudyIndex + 1];

    return (
      <div className="casestudy__modal">
        <ModalCloseBtn closeCallback={ () => browserHistory.push('#work') } />
        <section ref="casestudy" className={ `modal__with-sidebar ${id}` }>
          <div className={ `job__sidebar bg--${id}` }  ref={
            (sidebar) => {
              this.sidebar = sidebar;
            }
          } />
          <div className="layout--relative ml8 ml1--mlg bg--white">
            <div className="row"><h4 className="modal__title" ref="name">{ name }</h4></div>

            <div ref="blur">
              <div className="row">
                <div className="casestudy__heading layout--fullheight">
                  <h1 className={ `typ--${id} typ--bold casestudy__title` }>
                    { heading }
                  </h1>
                  <div className="casestudy__scrollarrow">
                    <img src={ require('assets/img/down-arrow.png') } alt="Scroll down" />
                  </div>
                </div>
              </div>
              { content && content.length &&
                content.map((section, index) => (
                  <CaseStudySection
                    key={ index }
                    { ...section }
                  />
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
      </div>
    );
  }
}

CaseStudy.propTypes = {
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  heading: React.PropTypes.string,
  content: React.PropTypes.array,
  dispatch: React.PropTypes.func,
  sidebar: React.PropTypes.bool,
  featured: React.PropTypes.bool,
  easing: React.PropTypes.func
};

export default CaseStudy;
