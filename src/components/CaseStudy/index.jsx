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
      dimensions: { height: -1, width: -1 }
    };
  }

  componentWillEnter (callback) { callback(); }

  componentDidEnter () {
    const blur = ReactDOM.findDOMNode(this.refs.blur);
    blur.style.opacity = 0;
    blur.style.filter = 'blur(6px)';

    new mojs.Tween({
      duration: 400,
      delay: 600,
      easing: 'cubic.inout',
      onUpdate: (progress) => {
        const mappedBlur = mapRange(progress, 0, 1, 6, 0);
        blur.style.filter = `blur(${mappedBlur}px)`;
        blur.style.opacity = progress;
      }
    }).play();
  }

  componentWillLeave (unmountComponent) {
    const name = ReactDOM.findDOMNode(this.refs.name);
    const next = ReactDOM.findDOMNode(this.refs.next);
    const nextName = ReactDOM.findDOMNode(this.refs['next-name']);
    const nextLabel = ReactDOM.findDOMNode(this.refs['next-label']);
    const { dimensions } = this.state;
    nextName.style.transition = 'color 400ms ease-in-out, background-color 400ms ease-out 100ms';
    nextName.style.color = '#4a4a4a';

    new mojs.Tween({
      duration: 600,
      easing: 'cubic.out',
      onUpdate: (progress) => {
        const startFontSize = Number(window.getComputedStyle(nextName, null).getPropertyValue('font-size').replace('px', ''));
        const endFontSize = Number(window.getComputedStyle(name, null).getPropertyValue('font-size').replace('px', ''));
        const mappedHeight = mapRange(progress, 0, 1, dimensions.height, window.innerHeight);
        const mappedFontSize = mapRange(progress, 0, 1, startFontSize, endFontSize);
        const mappedOpacity = mapRange(progress, 0, 1, 1, 0);
        next.style.height = `${mappedHeight}px`;
        nextName.style.fontSize = `${mappedFontSize}px`;
        nextLabel.style.opacity = mappedOpacity;
        next.style.backgroundColor = '#fff';
      },
      onPlaybackComplete: () => unmountComponent()
    }).play();
  }

  render () {
    const { id, name, content, heading, sidebar, featured } = this.props;

    const featuredCaseStudies = caseStudies.filter((item) => item.featured);
    const archivedCaseStudies = caseStudies.filter((item) => !item.featured);

    let activeCaseStudies;
    if (featured) activeCaseStudies = featuredCaseStudies;
    if (!featured) activeCaseStudies = archivedCaseStudies;

    const caseStudyIndex = activeCaseStudies.findIndex(item => item.id === id);
    const nextCaseStudy = caseStudyIndex === activeCaseStudies.length ? null : activeCaseStudies[caseStudyIndex + 1];

    return (
      <div className="casestudy__modal">
        { sidebar && <div className="modal__close job__sidebar" /> }

        <ModalCloseBtn closeCallback={ () => browserHistory.push('/work') } />
        <section ref="casestudy" className={ `modal__with-sidebar ${id}` }>
          <div className="layout--relative">
            <div className="row"><h4 className="casestudy__name pl4--mlg" ref="name">{ name }</h4></div>

            <div ref="blur">
              <div className="row"><h1 className="casestudy__heading">{ heading }</h1></div>
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
                  <div className="row">
                    <h2 ref="next-name" className={ `typ--${nextCaseStudy.id}` }>{ nextCaseStudy.name }</h2>
                    <span ref="next-label" className="typ--default">Next case study</span>
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
