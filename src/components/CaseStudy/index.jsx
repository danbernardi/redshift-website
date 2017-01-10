import React from 'react';
import CaseStudySection from './CaseStudySection';
import { connect } from 'react-redux';
import * as actions from 'store/actions';
import { scrollToID } from 'utils/scrollTo';
import ReactDOM from 'react-dom';
import './styles.scss';

class CaseStudy extends React.Component {
  componentDidMount () {
    const { animateIn, activeCaseStudy } = this.props;
    const casestudy = ReactDOM.findDOMNode(this.refs.casestudy);

    if (animateIn) {
      // reset translate position to off canvas
      casestudy.style.transition = 'none';
      casestudy.style.transform = 'translateY(100%)';

      this.timer = setTimeout(() => {
        // animate in after timeout to solve for race condition
        casestudy.style.transition = 'transform 0.3s ease-in-out';
        casestudy.style.transform = 'none';
      }, 1);
    } else {
      // set scroll position of outgoing div
      casestudy.scrollTop = activeCaseStudy.currentScrollPos;
    }
  }

  componentWillUnmount () {
    window.clearInterval(this.timer);
  }

  triggerNextModal (component, nextID) {
    const { dispatch } = this.props;
    const casestudy = ReactDOM.findDOMNode(this.refs.casestudy);
    const currentScrollPos = casestudy.scrollTop;
    dispatch(actions.setNextCaseStudy(nextID, currentScrollPos));
    scrollToID(nextID, 500);
  };

  render () {
    const { id, name, content, heading, next } = this.props;

    const initialStyles = {
      transition: 'transform 0.3s ease-in-out'
    };

    return (
      <section ref="casestudy" className={ `casestudy ${id}` } style={ initialStyles }>
        <div className="row">
          <h4 className="casestudy__name typ--caps">{ name }</h4>
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

        { typeof next === 'object' &&
          <div className="casestudy__next py7" onClick={ () => this.triggerNextModal(next.component, next.id) }>
            <div className="row">
              <h2 className={ `typ--${next.id}` }>{ next.name }</h2>
              <span className="typ--default">View case study</span>
            </div>
          </div>
        }
      </section>
    );
  }
}

CaseStudy.propTypes = {
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  heading: React.PropTypes.string,
  content: React.PropTypes.array,
  next: React.PropTypes.object,
  dispatch: React.PropTypes.func,
  activeCaseStudy: React.PropTypes.object,
  animateIn: React.PropTypes.bool
};

const injectStateProps = state => ({
  activeCaseStudy: state.activeCaseStudy
});

export default connect(injectStateProps)(CaseStudy);
