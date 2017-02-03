import React from 'react';
import CaseStudySection from './CaseStudySection';
import { caseStudies } from 'data/caseStudies';
import { connect } from 'react-redux';
import * as actions from 'store/actions';
import ReactDOM from 'react-dom';
import mojs from 'mo-js';
import './styles.scss';

class CaseStudy extends React.Component {
  componentDidMount () {
    const { animateIn } = this.props;
    this.triggerAnimation(animateIn);
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.id !== this.props.id) {
      const { animateIn } = this.props;
      this.triggerAnimation(animateIn);
    }
  }

  componentDidUpdate () {
    const { caseStudyState, id } = this.props;
    if (id === caseStudyState.current[0]) {
      const casestudy = ReactDOM.findDOMNode(this.refs.casestudy);
      casestudy.scrollTop = caseStudyState.currentScrollPos;

      // if (caseStudyState.current[1] && caseStudyState.current[0] === id) {
      //   this.triggerOutAnimation();
      // }
    }
  }

  componentWillUnmount () {
    window.clearInterval(this.timer);
  }

  triggerOutAnimation () {
    // const casestudy = ReactDOM.findDOMNode(this.refs.casestudy);
    // // reset translate position to off canvas
    // casestudy.style.transition = 'transform 0.75s ease-in-out';
    // casestudy.style.transform = 'translateY(-100%)';
  }

  triggerAnimation (animateIn) {
    if (animateIn) {
      const casestudy = ReactDOM.findDOMNode(this.refs.casestudy);
      // reset translate position to off canvas
      casestudy.style.transition = 'none';
      casestudy.style.transform = 'translateY(100%)';
      casestudy.scrollTop = 0;

      new mojs.Tween({
        duration: 750,
        easing: 'ease.inout',
        onUpdate: (progress) => { casestudy.style.transform = `translateY(${progress * 100}%)`; }
      }).playBackward();
    }
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

    const initialStyles = {
      transition: 'transform 0.3s ease-in-out'
    };

    return (
      <div className="casestudy__modal">
        { sidebar && <div className="modal__close job__sidebar" /> }
        <section ref="casestudy" className={ `modal__with-sidebar ${id}` } style={ initialStyles }>
          <div className="row">
            <h4 className="casestudy__name pl4--mlg" ref="name">{ name }</h4>
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
            <div className="casestudy__next py7 py4--msm" onClick={ () => this.triggerNextCaseStudy(nextCaseStudy, nextCaseStudy.id) }>
              <div className="row">
                <h2 className={ `typ--${nextCaseStudy.id}` }>{ nextCaseStudy.name }</h2>
                <span className="typ--default">Next case study</span>
              </div>
            </div>
          }

          {/* !featured || caseStudies.findIndex(item => item.id === id) === featuredCaseStudies.length - 1 &&
            <ArchiveGrid clickCallback={ (id) => this.triggerNextCaseStudy(caseStudies.find(item => item.id === id), id) } />
          */}
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
  featuredCaseStudyState: React.PropTypes.object
};

const injectStateProps = state => ({
  caseStudyState: state.caseStudyState,
  featuredCaseStudyState: state.featuredCaseStudyState
});

export default connect(injectStateProps)(CaseStudy);
