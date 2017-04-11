import React from 'react';
import AboutAnimation from './AboutAnimation';
import AnimationWrapper from 'components/AnimationWrapper';
import AboutHero from './AboutHero';
import AboutVillage from './AboutVillage';
import AboutExplore from './AboutExplore';
import './style.scss';

export class NewAbout extends React.Component {
  render () {
    return (
      <div className="row">
        <AnimationWrapper />




        <AboutHero />
        <AboutVillage />
        <AboutExplore />

         <div className="hero layout--relative layout--fullheight">
          <div className="layout--absolute layout-abs--bottom pb5">
            <div className="col-8 col-last">
              <h1 className="typ--bold typ--redshift pb2">Space to think.</h1>
              <h3>Our studio is an environment where passionate, creative people work together to solve hard problems. We are located in a sunny industrial space in downtown San Francisco, a short walk from the Ferry Building.</h3>
            </div>
          </div>
        </div>

      </div>


    );
  }
}

export default NewAbout;
