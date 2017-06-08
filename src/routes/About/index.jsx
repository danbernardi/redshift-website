import React from 'react';
import AboutProcess from './AboutProcess';
import AboutTeam from './AboutTeam';
import HowWeWork from './HowWeWork';
import './style.scss';
import { teamInfo } from 'data/teamInfo';
import { clientData } from 'data/clients';
import { connect } from 'react-redux';
import Footer from 'components/Footer';
import BioModal from './AboutTeam/BioModal';
import * as actions from 'store/actions';
import PropTypes from 'prop-types';

export class About extends React.Component {
  componentDidMount () {
    const { dispatch, params } = this.props;
    dispatch(actions.setHeaderTheme('pink'));
    if (params.employeeID) this.openModal(params.employeeID);
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

  clients (clientData) {
    return (
      <div className="clients">
        { clientData.map((client, index) => (
          <div key={ index } className="clients__client">
            <img src={ client.image } alt={ client.name } />
          </div>
        )) }
      </div>
    );
  }

  render () {
    return (
      <div>
        <AboutProcess />
        <HowWeWork />
        <section className="col-12 about__clients theme--dark py7">
          <div className="row">
            <h1 className="typ--bold">Who we work with.</h1>
            <h4
              className="pt6 pb8 pt2--mlg pb4--mlg"
              style={ { maxWidth: '67rem' } }
            >
              We’ve had the privilege of working with some of the world’s top brands and many promising startups.
            </h4>
            { this.clients(clientData) }
          </div>
        </section>
        <section className="about--team pt9 pt6--tlg cf">
          <div className="row hero--scene-text">
            <h1 className="typ--bold py8 py6--tlg">Who we are<span className="typ--redshift">.</span></h1>
          </div>
          { teamInfo.map((team, index) => (
            <AboutTeam key={ index } team={ team } />
          )) }
        </section>
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
