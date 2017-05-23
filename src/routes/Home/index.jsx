import React from 'react';
import Showcase from 'components/Showcase';
import { caseStudies } from 'data/caseStudies';
import { connect } from 'react-redux';
import * as actions from 'store/actions';
<<<<<<< 582e0abe5c752d5486c2b3b50db7351e62d5d2d8
import Loader from 'components/Loader';
=======
>>>>>>> new seo update
import CaseStudyModalWrapper from 'components/CaseStudy/CaseStudyModalWrapper';

export class Home extends React.Component {
  componentDidMount () {
    const { modal } = this.props;
    if (modal) this.openModal(modal);
    this.props.dispatch(actions.setHeaderTheme('pink'));
  }

  shouldComponentUpdate (props) {
    // Don't remount home if the modal is the only change
    if (props.params.modalID !== this.props.params.modalID) {
      return false;
    }
    return true;
  }

  // Using modalID URL param, open or close the modal
  componentWillReceiveProps (props) {
    if (props.params.modalID !== this.props.params.modalID) {
      if (props.params.modalID) {
        this.openModal(props.params.modalID);
      } else {
        this.closeModal();
      }
    }
  }

  closeModal () {
    const { dispatch } = this.props;
    dispatch(actions.toggleModal(false));
  }
  // opens a case study modal depending on id
  openModal (id) {
    const { dispatch } = this.props;
    dispatch(actions.setNextCaseStudy(id));
    dispatch(actions.setActiveModal(<CaseStudyModalWrapper caseContent={ caseStudies.find(c => c.id === id) } />, 'casestudy'));
    dispatch(actions.toggleModal(true));
  };

  render () {
    return (
      <div className="home">
<<<<<<< 582e0abe5c752d5486c2b3b50db7351e62d5d2d8
        { location.pathname === '/' && <Loader /> }
=======
>>>>>>> new seo update
        <Showcase scenes={ caseStudies.filter(cs => cs.featured) } />
      </div>
    );
  }
}

Home.propTypes = {
  modal: React.PropTypes.string,
  dispatch: React.PropTypes.func,
  params: React.PropTypes.object
};

export default connect()(Home);
