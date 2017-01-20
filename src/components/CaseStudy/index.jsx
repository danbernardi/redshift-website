import React from 'react';
import CaseStudySection from './CaseStudySection';
import { caseStudies } from 'data/caseStudies';
import { connect } from 'react-redux';
import * as actions from 'store/actions';
import { scrollToID } from 'utils/scrollTo';
import ReactDOM from 'react-dom';
import './styles.scss';

import ArchiveGrid from 'components/Archive/ArchiveGrid';

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
    if (this.props.id === this.props.caseStudyState.current[0]) {
      const casestudy = ReactDOM.findDOMNode(this.refs.casestudy);
      casestudy.scrollTop = this.props.caseStudyState.currentScrollPos;
    }
  }

  componentWillUnmount () {
    window.clearInterval(this.timer);
  }

  triggerAnimation (animateIn) {
    if (animateIn) {
      const casestudy = ReactDOM.findDOMNode(this.refs.casestudy);
      // reset translate position to off canvas
      casestudy.style.transition = 'none';
      casestudy.style.transform = 'translateY(100%)';

      this.timer = setTimeout(() => {
        // animate in after timeout to solve for race condition
        casestudy.scrollTop = 0;
        casestudy.style.transition = 'transform 0.3s ease-in-out';
        casestudy.style.transform = 'none';
      }, 1);
    }
  }

  triggerNextCaseStudy (nextCaseStudy, nextID) {
    const { dispatch } = this.props;
    const casestudy = ReactDOM.findDOMNode(this.refs.casestudy);
    const currentScrollPos = casestudy.scrollTop;
    dispatch(actions.setNextCaseStudy(nextID, false, currentScrollPos));
    scrollToID(nextID, 500);
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
            <h4 className="casestudy__name typ--caps pl4--mlg">{ name }</h4>
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
            <div className="casestudy__next py7" onClick={ () => this.triggerNextCaseStudy(nextCaseStudy, nextCaseStudy.id) }>
              <div className="row">
                <h2 className={ `typ--${nextCaseStudy.id}` }>{ nextCaseStudy.name }</h2>
                <span className="typ--default">View case study</span>
              </div>
            </div>
          }

          { !featured || caseStudies.findIndex(item => item.id === id) === featuredCaseStudies.length - 1
            ? <ArchiveGrid />
            : null
          }
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
  featured: React.PropTypes.bool
};

const injectStateProps = state => ({
  caseStudyState: state.caseStudyState
});

export default connect(injectStateProps)(CaseStudy);
