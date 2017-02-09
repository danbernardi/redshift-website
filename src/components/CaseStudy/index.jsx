import React from 'react';
import CaseStudySection from './CaseStudySection';
import { caseStudies } from 'data/caseStudies';
import { connect } from 'react-redux';
import { mapRange } from 'utils/animation';
import * as actions from 'store/actions';
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

  componentDidMount () {
    const { animateIn } = this.props;

    this.triggerInAnimation(animateIn);
    // const next = ReactDOM.findDOMNode(this.refs.next);
    // next.style.height = 'auto';
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.id !== this.props.id) {
      // if id has changed
      const { animateIn } = this.props;
      this.triggerInAnimation(animateIn);
    }
  }

  componentDidUpdate () {
    const { caseStudyState, id } = this.props;

    if (id === caseStudyState.current[0]) {
      // if current id is active
      const casestudy = ReactDOM.findDOMNode(this.refs.casestudy);
      casestudy.scrollTop = caseStudyState.currentScrollPos;

      if (caseStudyState.current[1] && caseStudyState.current[0] === id) {
        // if there are two case studies loaded and this one is currently active, animate out
        this.triggerOutAnimation();
      }
    }
  }

  componentWillUnmount () {
    window.clearInterval(this.timer);
  }

  triggerInAnimation (animateIn) {
    const casestudy = ReactDOM.findDOMNode(this.refs.casestudy);

    if (animateIn) {
      new mojs.Tween({
        duration: 400,
        easing: 'quint.out',
        onUpdate: (progress) => { casestudy.style.opacity = progress; }
      }).play();
    } else {
      casestudy.style.opacity = 1;
    }
  }

  triggerOutAnimation () {
    const next = ReactDOM.findDOMNode(this.refs.next);
    const nextName = ReactDOM.findDOMNode(this.refs['next-name']);
    const nextLabel = ReactDOM.findDOMNode(this.refs['next-label']);
    const { dimensions } = this.state;
    nextName.style.transition = 'color 1000ms ease-in-out';
    nextName.style.color = '#4a4a4a';

    new mojs.Tween({
      duration: 1000,
      easing: 'quint.inout',
      onUpdate: (progress) => {
        const mappedHeight = mapRange(progress, 0, 1, dimensions.height, window.innerHeight);
        const mappedFontSize = mapRange(progress, 0, 1, 36, 21);
        const mappedOpacity = mapRange(progress, 0, 1, 1, 0);
        next.style.height = `${mappedHeight}px`;
        nextName.style.fontSize = `${mappedFontSize}px`;
        nextLabel.style.opacity = mappedOpacity;
      },
      onPlaybackComplete: () => this.fadeOut(next, 400, 'quint.inout')
    }).play();
  }

  fadeOut (el, duration, easing) {
    new mojs.Tween({
      duration,
      easing,
      onUpdate: (progress) => {
        el.style.opacity = progress;
      }
    }).playBackward();
  }

  triggerNextCaseStudy (nextCaseStudy, nextID) {
    const { dispatch, featuredCaseStudyState } = this.props;
    const casestudy = ReactDOM.findDOMNode(this.refs.casestudy);
    const currentScrollPos = casestudy.scrollTop;
    dispatch(actions.setNextCaseStudy(nextID, false, currentScrollPos));

    if (caseStudies.filter(item => item.featured).length - 1 === featuredCaseStudyState.activeID) {
      dispatch(actions.goToNextCaseStudy(0, true, [-1]));
    } else {
      dispatch(actions.goToNextCaseStudy(featuredCaseStudyState.activeID + 1, true));
    }
  };

  render () {
    const { id, name, content, heading, sidebar, featured } = this.props;

    const featuredCaseStudies = caseStudies.filter((item) => item.featured);
    const archivedCaseStudies = caseStudies.filter((item) => !item.featured);
    let activeCaseStudies;

    if (featured) {
      activeCaseStudies = featuredCaseStudies;
    } else {
      activeCaseStudies = archivedCaseStudies;
    }

    const caseStudyIndex = activeCaseStudies.findIndex(item => item.id === id);
    const nextCaseStudy = caseStudyIndex === activeCaseStudies.length - 1 ? activeCaseStudies[0] : activeCaseStudies[caseStudyIndex + 1];

    return (
      <div className="casestudy__modal">
        { sidebar && <div className="modal__close job__sidebar" /> }

        <ModalCloseBtn />
        <section ref="casestudy" className={ `modal__with-sidebar ${id}` } style={ { opacity: 0 } }>
          <div className="layout--relative">
            <div className="row">
              <h4 className="casestudy__name" ref="name">{ name }</h4>
              <h1 className="casestudy__heading">{ heading }</h1>
            </div>

            { content && content.length &&
              content.map((section, index) => (
                <CaseStudySection
                  key={ index }
                  { ...section }
                />
              ))
             }

            { typeof nextCaseStudy === 'object' &&
              <div>
                <div
                  style={ { height: 'auto', opacity: 1 } }
                  className="casestudy__next"
                  onClick={ () => this.triggerNextCaseStudy(nextCaseStudy, nextCaseStudy.id) }
                >
                  <div className="row">
                    <h2 className={ `typ--${nextCaseStudy.id}` }>{ nextCaseStudy.name }</h2>
                    <span className="typ--default">Next case study</span>
                  </div>
                </div>

                <Measure onMeasure={ dimensions => { this.setState({ dimensions }); } }>
                  <div
                    ref="next"
                    className="casestudy__next casestudy__nextshadow"
                    style={ { bottom: 0, height: 'auto' } }
                  >
                    <div className="row">
                      <h2 ref="next-name" className={ `typ--${nextCaseStudy.id}` }>{ nextCaseStudy.name }</h2>
                      <span ref="next-label" className="typ--default">Next case study</span>
                    </div>
                  </div>
                </Measure>
              </div>
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
  caseStudyState: React.PropTypes.object,
  animateIn: React.PropTypes.bool,
  sidebar: React.PropTypes.bool,
  featured: React.PropTypes.bool,
  featuredCaseStudyState: React.PropTypes.object,
  easing: React.PropTypes.func
};

const injectStateProps = state => ({
  caseStudyState: state.caseStudyState,
  featuredCaseStudyState: state.featuredCaseStudyState
});

export default connect(injectStateProps)(CaseStudy);
