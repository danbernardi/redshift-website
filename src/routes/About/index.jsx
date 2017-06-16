import React from 'react';
import AboutHero from './AboutHero';
import AboutHybrid from './AboutHybrid';
import AboutExplore from './AboutExplore';
import AboutClients from './AboutClients';
import AboutTeam from './AboutTeam';
import { clientData } from 'data/newClients';
import { teamInfo } from 'data/teamInfo';
import Footer from 'components/Footer';
import './style.scss';
import * as actions from 'store/actions';
import PropTypes from 'prop-types';
import BioModal from './AboutTeam/BioModal';
import { connect } from 'react-redux';

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
    return (
      <div>
        <AboutHero />
        <AboutHybrid />
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
  params: PropTypes.object
};

export default connect()(About);
