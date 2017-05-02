import React from 'react';
import Showcase from 'components/Showcase';
import { caseStudies } from 'data/caseStudies';
import { connect } from 'react-redux';
import * as actions from 'store/actions';
import CaseStudyModalWrapper from 'components/CaseStudy/CaseStudyModalWrapper';

export class Home extends React.Component {
  componentDidMount () {
    const { modal } = this.props;
    if (modal) this.openModal(modal);
    this.props.dispatch(actions.setHeaderTheme('pink'));
  }

  // opens a case study modal depending on id
  openModal (id) {
    const { dispatch } = this.props;
    dispatch(actions.setNextCaseStudy(id));
    dispatch(actions.setActiveModal(<CaseStudyModalWrapper />, 'casestudy'));
    dispatch(actions.toggleModal(true));
  };

  render () {
    return (
      <div className="home">
        <Showcase scenes={ caseStudies.filter(cs => cs.featured) } />
      </div>
    );
  }
}

Home.propTypes = {
  modal: React.PropTypes.string,
  dispatch: React.PropTypes.func
};

export default connect()(Home);
