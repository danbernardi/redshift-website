import React from 'react';

import AboutPageContent from './AboutPageContent';
import AboutClients from './AboutClients';
import AboutTeam from './AboutTeam';
import { clientData } from 'data/clients';
import { teamInfo } from 'data/teamInfo';
import Footer from 'components/Footer';
import * as actions from 'store/actions';
import PropTypes from 'prop-types';
import BioModal from './AboutTeam/BioModal';
import { connect } from 'react-redux';
import { ScrollContainer } from 'scrollmonitor-react';

import './About.scss';

/**
 * The About Page
 *
 * @param {Object} props
 * @param {function} dispatch           Opens correct team modal and sets header color
 * @param {Object} params               Opens modal is user goes directly to modal URL
 * @param {Object} modalState           Returns information about the current modal
 * @param {Object} scrollContainer      Dimensions of the scrollContainer for the watcher in AboutHybrid
 * @param {Object} breakpoint           Checks browser width
 * @return {React.Component}
 */

export class About extends React.Component {
  componentDidMount () {
    const { params, dispatch } = this.props;
    if (params.employeeID) this.openModal(params.employeeID);
    dispatch(actions.setHeaderTheme('pink'));
  }

  shouldComponentUpdate (props) {
    // Don't remount home if the modal is the only change
    if (props.params.employeeID !== this.props.params.employeeID) {
      return false;
    }
    return true;
  }

  // Using employeeID URL param, open or close the modal
  componentWillReceiveProps (props) {
    if (props.params.employeeID !== this.props.params.employeeID) {
      if (props.params.employeeID) {
        this.openModal(props.params.employeeID);
      } else {
        this.closeModal();
      }
    }
  }

  openModal (id) {
    const { dispatch } = this.props;
    dispatch(actions.setActiveModal(<BioModal bioContent={ teamInfo.find(t => t.id === id) } />, 'bio'));
    dispatch(actions.toggleModal(true));
  }

  closeModal () {
    const { dispatch } = this.props;
    dispatch(actions.toggleModal(false));
  }

  render () {
    const { modalState } = this.props;

    return (
      <div className="scroller" style={ { width: modalState.windowWidth, height: modalState.windowHeight } }>
        <div className="parallax">
          <AboutPageContent />
          <div className="about--bottom__content">
            <AboutClients data={ clientData } />
            <AboutTeam team={ teamInfo } />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  dispatch: PropTypes.func,
  params: PropTypes.object,
  modalState: PropTypes.object
};

const mapStateToProps = state => ({
  breakpoint: state.breakpoint,
  modalState: state.modalState
});

export default connect(mapStateToProps)(ScrollContainer(About));
