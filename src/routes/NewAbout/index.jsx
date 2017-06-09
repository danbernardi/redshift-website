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

export class NewAbout extends React.Component {
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

export default NewAbout;
