import React from 'react';
import AboutExplore from './AboutExplore';
import AboutIterate from './AboutIterate';
import AboutExperiment from './AboutExperiment';
import AboutCollaboration from './AboutCollaboration';

import './style.scss';

export class NewAbout extends React.Component {
  render () {
    return (
      <div>
        <AboutExplore />
        <AboutExperiment />
        <AboutIterate />
        <AboutCollaboration />
      </div>
    );
  }
}

export default NewAbout;
