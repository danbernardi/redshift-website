import React from 'react';
import '../../style.scss';
import BioModal from '../BioModal';
import ShannonImage from '../shannon.jpg';

const teamBio = {
  id: 'shannon',
  name: 'Shannon Chin',
  position: 'Senior Interactive Producer',
  bio1: 'Shannon Chin is an interactive producer at Redshift.',
  bio2: 'She is born and raised in San Francisco, CA and attended Boston University for her BS in Business. Prior to working at Redshift, Shannon has worked on digital marketing and advertising campaigns and projects for clients including Google, Nike, Visa and Levi\'s.',
  bio3: 'In her freetime, she loves going to shows around the bay area, eating Japanese food, and boxing.',
  image: ShannonImage
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
