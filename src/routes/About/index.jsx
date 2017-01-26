import React from 'react';
import AboutProcess from './AboutProcess';
import Clients from 'components/Clients';
import AboutTeam from './AboutTeam';
import './style.scss';
import { teamInfo } from 'data/teamInfo';
import { clientData } from 'data/clients';
import { connect } from 'react-redux';
import * as actions from 'store/actions';

export class About extends React.Component {
  componentDidMount () {
    const { dispatch } = this.props;
    dispatch(actions.setHeaderTheme('pink'));
  }

  render () {
    return (
      <div>
        <AboutProcess />
        <section className="flex theme--dark about--clients pb9 py6--tlg pt8">
          <div className="row hero--scene-text">
            <h1 className="typ--bold">Who we work with.</h1>
            <h4
              className="pt6 pb8 pt2--mlg pb4--mlg"
              style={ { maxWidth: '67rem' } }
            >
              We’ve had the privilege of working with some of the world’s top brands and many promising startups.
            </h4>
            <Clients data={ clientData } />
          </div>
        </section>
        <section className="about--team pt9 pt6--tlg pt2--mlg">
          <div className="row hero--scene-text">
            <h1 className="typ--bold pb8 pb6--tlg">Who we are.</h1>
          </div>
          { teamInfo.map((team, index) => (
            <AboutTeam key={ index } team={ team } />
          )) }
        </section>
      </div>
    );
  }
}

About.propTypes = {
  dispatch: React.PropTypes.func
};

export default connect()(About);
