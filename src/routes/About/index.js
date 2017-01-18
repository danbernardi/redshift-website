import React from 'react';
import AboutProcess from './AboutProcess';
import AboutClients from './AboutClients';
import AboutTeam from './AboutTeam';
import _ from 'lodash';
import './style.scss';
import { teamInfo } from 'data/teamInfo';
import { clientInfo } from 'data/clientInfo';

export function About () {
  debugger;
  return (
    <div>
      <AboutProcess />
      <section className="flex theme--dark about--clients pb9 py6--tlg pt8">
        <div className="row hero--scene-text">
          <h1 className="typ--bold">Who we work with</h1>
          <h2 className="py9 py6--tlg">We work with companies large and small, from start-ups to global brands.</h2>
          <div className="col-12--dlg">
            {
              _.chunk(clientInfo, 4).map((clientLine, index) => (
                <AboutClients clientLine={ clientLine } key={ index } />
              ))
            }
          </div>
        </div>
      </section>
      <section className="about--team pt9 pt6--tlg pt2--mlg">
        <div className="row hero--scene-text">
          <h1 className="typ--bold pb8 pb6--tlg">Who we are</h1>
          {
            teamInfo.map((team, index) => (
              <AboutTeam key={ index } team={ team } />
            ))
          }
        </div>
      </section>
    </div>
  );
}

export default About;
