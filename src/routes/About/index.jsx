import React from 'react';
import AboutSlider from './AboutSlider';
import AboutHybrid from './AboutHybrid';
import AboutExplore from './AboutExplore';
import AboutClients from './AboutClients';
import AboutTeam from './AboutTeam';
import { clientData } from 'data/newClients';
import { teamInfo } from 'data/teamInfo';
import Footer from 'components/Footer';
import * as actions from 'store/actions';
import PropTypes from 'prop-types';
import BioModal from './AboutTeam/BioModal';
import { connect } from 'react-redux';
import { ScrollContainer } from 'scrollmonitor-react';
import { breakpointIsGreaterThan } from 'utils/responsiveHelpers';

import './style.scss';

/**
 * The About Page
 *
 * @param {Object} props
 * @param  {func} dispatch              Opens correct team modal and sets header color
 * @param {object} params               Opens modal is user goes directly to modal URL
 * @param {object} modalState           Returns information about the current modal
 * @param {object} scrollContainer      Dimensions of the scrollContainer for the watcher in AboutHybrid
 * @param {object} breakpoint           Checks browser width
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
    const { modalState, scrollContainer, breakpoint } = this.props;

    return (
      <div className="scroller" style={ { width: modalState.windowWidth, height: modalState.windowHeight } }>
        <AboutSlider />
        { breakpointIsGreaterThan('mobileLg', breakpoint.size) &&
          <AboutHybrid scrollContainer={ scrollContainer } />
        }
        <AboutExplore />
        <AboutClients data={ clientData } />
        <AboutTeam team={ teamInfo } />
        <Footer />
      </div>
    );
  }
}

About.propTypes = {
  dispatch: PropTypes.func,
  params: PropTypes.object,
  modalState: PropTypes.object,
  scrollContainer: PropTypes.object,
  breakpoint: PropTypes.object
};

const mapStateToProps = state => ({
  breakpoint: state.breakpoint,
  modalState: state.modalState
});

export default connect(mapStateToProps)(ScrollContainer(About));
