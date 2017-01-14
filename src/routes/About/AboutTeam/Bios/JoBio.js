import React from 'react';
import '../../style.scss';
import BioModal from '../BioModal';
import JoImage from '../jo.jpg';

const teamBio = {
  id: 'jo',
  name: 'Johanna Silver',
  position: 'UX Designer',
  bio1: 'Johanna Silver is a User Experience Designer at Redshift.',
  bio2: 'She grew up by the ocean in Half Moon Bay, CA and went to UC Berkeley for Psychology and Social Welfare. After working as a professional baker and yoga teacher for several years, she went back to school for design at General Assembly. She previously designed products for the agricultural technology industry.',
  bio3: 'Her passions include mini-pigs, making soup for her friends, and finding ways to avoid going out on the weekends.',
  image: JoImage
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
