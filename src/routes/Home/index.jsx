import React from 'react';
import Showcase from 'components/Showcase';
import { caseStudies } from 'data/caseStudies';
import { connect } from 'react-redux';
import * as actions from 'store/actions';
import CaseStudyModalWrapper from 'components/CaseStudy/CaseStudyModalWrapper';
import PropTypes from 'prop-types';

/**
 * Homepage index - container for Showcase
 *
 * @param {Object} props
 * @param {string} modal                  determines correct modal to dispatch
 * @param {function} dispatch             connects case studies to correct modal
 * @param {Object} params                 opens modal if user goes directly to modal url
 * @return {React.Component}
 */

export class Home extends React.Component {
  componentDidMount () {
    const { modal, params } = this.props;
    if (modal) this.openModal(modal);
    this.props.dispatch(actions.setHeaderTheme('pink'));
    if (params.modalID) this.openModal(params.modalID);
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
        <Showcase scenes={ caseStudies.filter(cs => cs.featured) } />
      </div>
    );
  }
}

Home.propTypes = {
  modal: PropTypes.string,
  dispatch: PropTypes.func,
  params: PropTypes.object
};

export default connect()(Home);
