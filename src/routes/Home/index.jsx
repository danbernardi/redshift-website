import React from 'react';
import Showcase from 'components/Showcase';
import { caseStudies } from 'data/caseStudies';
import Hero from './Hero';
import { connect } from 'react-redux';
import * as actions from 'store/actions';
import CaseStudyModalWrapper from 'components/CaseStudy/CaseStudyModalWrapper';
import { disableScroll } from 'utils/scrollJack';

export class Home extends React.Component {
  componentDidMount () {
    const { modal } = this.props;
    if (modal) this.openModal(modal);
    disableScroll();
  }

  // opens a case study modal depending on id
  openModal (id) {
    const { dispatch } = this.props;

    dispatch(actions.setNextCaseStudy(id));
    dispatch(actions.setActiveModal(<CaseStudyModalWrapper />, 'casestudy'));
    dispatch(actions.toggleModal(true));
  };

  // returns index of this.scrollPoints element that matches id
  getScrollElementIndex (id) {
    if (this.scrollPoints) {
      return this.scrollPoints.findIndex(p => p.classList.contains(`cs__${id}`));
    }
  }

  render () {
    return (
      <div className="home">
        <Showcase leadingScene={ <Hero /> } scenes={ caseStudies.filter(cs => cs.featured) } />
      </div>
    );
  }
}

Home.propTypes = {
  modal: React.PropTypes.string,
  dispatch: React.PropTypes.func
};

export default connect()(Home);
