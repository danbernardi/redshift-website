import React from 'react';
import '../../style.scss';
import BioModal from '../BioModal';

const teamBio = {
  id: 'sandra',
  name: 'Sandra Wing',
  bio1: 'Sandra Wing is a User Experience Researcher at Redshift.',
  bio2: 'Sandra is a native of San Francisco, CA and received a B.A. in Global Studies with a minor in Asian Languages from UCLA. Influenced by her upbringing in San Francisco’s diverse neighborhoods, she was always interested in understanding what motivates people and why people do the things they do. Before working at Redshift, she worked as a Research and GIS Analyst for UCLA’s North American Integration and Development Center.',
  bio3: 'A lover of the outdoors, travel, and all things adventurous, she spends her free time rock climbing and hiking. When not working at Redshift, Sandra is busy plotting her next adventure.'
};

export function BioTemplate () {
  return (
    <div>
      <BioModal bios={ teamBio } />
    </div>
  );
}

const { object } = React.PropTypes;
BioTemplate.propTypes = {
  bios: object
};

export default BioTemplate;
