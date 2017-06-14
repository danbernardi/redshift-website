import React from 'react';
import AboutExplore from './AboutExplore';
import AboutIterate from './AboutIterate';

import './style.scss';

export class NewAbout extends React.Component {
  render () {
    return (
      <div>
        <AboutExplore />
        <AboutIterate />
      </div>
    );
  }
}

export default NewAbout;
