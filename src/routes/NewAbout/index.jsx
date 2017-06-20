import React from 'react';
import AboutExplore from './AboutExplore';
import AboutIterate from './AboutIterate';
import AboutExperiment from './AboutExperiment';

import './style.scss';

export class NewAbout extends React.Component {
  render () {
    return (
      <div>
        <AboutExplore />
        <AboutExperiment />
        <AboutIterate />
      </div>
    );
  }
}

export default NewAbout;
