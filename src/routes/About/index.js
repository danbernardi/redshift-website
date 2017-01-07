import React from 'react';
import AboutProcess from './AboutProcess';
import AboutClients from './AboutClients';
import AboutTeam from './AboutTeam';
import _ from 'lodash';
import './style.scss';

import GoogleImage from './AboutClients/google.jpg';
import SymantecImage from './AboutClients/symantec.jpg';
import OpenTableImage from './AboutClients/opentable.jpg';
import GroupOnImage from './AboutClients/groupon.jpg';
import KaiserImage from './AboutClients/kaiser.jpg';
import WesternUnionImage from './AboutClients/wu.jpg';
import TaskRabbitImage from './AboutClients/taskrabbit.jpg';
import YumavoreImage from './AboutClients/yumavore.jpg';
import CiscoImage from './AboutClients/cisco.jpg';
import ChatworkImage from './AboutClients/chatwork.jpg';
import VlocityImage from './AboutClients/vlocity.jpg';
import MyPointsImage from './AboutClients/mypoints.jpg';

import AndrewImage from './AboutTeam/andrew.jpg';
import DavidImage from './AboutTeam/david.jpg';
import EmmaImage from './AboutTeam/emma.jpg';
import IanImage from './AboutTeam/ian.jpg';
import JennieImage from './AboutTeam/jennie.jpg';
import JoImage from './AboutTeam/jo.jpg';
import KyleImage from './AboutTeam/kyle.jpg';
import LucyImage from './AboutTeam/lucy.jpg';
import MichaelImage from './AboutTeam/michael.jpg';
import NickImage from './AboutTeam/nick.jpg';
import RickImage from './AboutTeam/rick.jpg';
import SandraImage from './AboutTeam/sandra.jpg';
import SashaImage from './AboutTeam/sasha.jpg';
import ShannonImage from './AboutTeam/shannon.jpg';
import SteffanImage from './AboutTeam/steffan.jpg';
import StewartImage from './AboutTeam/stewart.jpg';
import SuzanneImage from './AboutTeam/suzanne.jpg';

const aboutClientsMap = [
  {
    class: ' typ--left',
    image: GoogleImage,
    name: 'google'
  },
  {
    class: 'col-last--tlg',
    image: SymantecImage,
    name: 'symantec'
  },
  {
    image: OpenTableImage,
    name: 'Open Table'
  },
  {
    class: 'col-last',
    image: GroupOnImage,
    name: 'Open Table'
  },
  {
    class: ' typ--left',
    image: KaiserImage,
    name: 'Kaiser Permanente'
  },
  {
    class: 'col-last--tlg',
    image: WesternUnionImage,
    name: 'Western Union'
  },
  {
    image: TaskRabbitImage,
    name: 'Task Rabbit'
  },
  {
    class: 'col-last',
    image: YumavoreImage,
    name: 'Yumavore'
  },
  {
    class: ' typ--left',
    image: CiscoImage,
    name: 'Cisco'
  },
  {
    class: 'col-last--tlg',
    image: ChatworkImage,
    name: 'Chatwork'
  },
  {
    image: VlocityImage,
    name: 'Vlocity'
  },
  {
    class: 'col-last',
    image: MyPointsImage,
    name: 'MyPoints'
  }
];

const teamArray = [
  {
    name: 'Jennie Bowers',
    position: 'Senior Visual Designer',
    photo: JennieImage
  },
  {
    name: 'Ian Eck',
    position: 'UX Designer',
    photo: IanImage
  },
  {
    name: 'Sasha Klein',
    position: 'Senior Software Engineer',
    photo: SashaImage
  },
  {
    name: 'Emma Hazlett',
    position: 'Visual Designer',
    photo: EmmaImage
  },
  {
    name: 'Rick Takes',
    position: 'Director of Engineering',
    photo: RickImage
  },
  {
    name: 'Andrew Fitzpatrick',
    position: 'Software Engineer',
    photo: AndrewImage
  },
  {
    name: 'Lucy Dotson',
    position: 'Senior UX Designer',
    photo: LucyImage
  },
  {
    name: 'Steffan Schlarb',
    position: 'Creative Director',
    photo: SteffanImage
  },
  {
    name: 'Stewart Maclennan',
    position: 'Director of Digital Media',
    photo: StewartImage
  },
  {
    name: 'David Westen',
    position: 'Principal &amp; Founder',
    photo: DavidImage
  },
  {
    name: 'Suzanne Katanic',
    position: 'Finance &amp; Operations',
    photo: SuzanneImage
  },
  {
    name: 'Johanna Silver',
    position: 'UX Designer',
    photo: JoImage
  },
  {
    name: 'Kyle Lloyd',
    position: 'Director of Business Development',
    photo: KyleImage
  },
  {
    name: 'Sandra Wing',
    position: 'UX Researcher',
    photo: SandraImage
  },
  {
    name: 'Michael Iseri',
    position: 'UX Designer',
    photo: MichaelImage
  },
  {
    name: 'Shannon Chin',
    position: 'Senior Interactive Producer',
    photo: ShannonImage
  },
  {
    name: 'Nick Capello',
    position: 'Studio Manager',
    photo: NickImage
  }
];

export function About () {
  return (
    <div>
      <AboutProcess />
      <section className="flex theme--dark about--clients pb9 py6--tlg pt8">
        <div className="row hero--scene-text">
          <h1 className="typ--bold">Who we work with</h1>
          <h2 className="py9 py6--tlg">We work with companies large and small, from start-ups to global brands.</h2>
          <div className="col-12--dlg">
            {
              _.chunk(aboutClientsMap, 4).map((clientLine, index) => (
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
            teamArray.map((team, index) => (
              <AboutTeam key={ index } team={ team } />
            ))
          }
        </div>
      </section>
    </div>
  );
}

export default About;
