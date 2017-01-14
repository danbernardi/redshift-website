import React from 'react';
import '../../style.scss';
import BioModal from '../BioModal';
import SteffanImage from '../steffan.jpg';

const teamBio = {
  id: 'steffan',
  name: 'Steffan Schlarb',
  bio1: 'Steffan is an award-winning creative director with extensive innovation, creative strategy and product design experience.',
  bio2: 'He has helped shape the creative vision of REDSHIFT for the past 5 years. He leads a team of designers in creating innovative and engaging digital products.',
  bio3: 'Steffan has lead successful projects for such clients as Kaiser Permanente, Google, Symantec, Cisco, OpenTable, Western Union, and SalesForce, among others.',
  bio4: 'Steffan attended Clark University, where he graduated cum laude with a degree in English Literature.',
  image: SteffanImage
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
