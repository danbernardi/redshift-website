import React from 'react';
import '../../style.scss';
import BioModal from '../BioModal';

const teamBio = {
  id: 'diana',
  name: 'Diana Cheng',
  bio1: 'Diana Cheng is the Director of User Research at Redshift.',
  bio2: 'She has a BA from UC Berkeley in Political Science and Art. She received her Masters from the IIT Institute of Design in Chicago, which teaches ethnography and other social science methods as part of the human-centered design process. Prior to Redshift, she held design, strategy and innovation roles for such companies as Google, Panasonic, and Jump Associates. She is a regular contributor to the Design Thinking program at the Rochester Institute of Technology.',
  bio3: 'When not channeling the voice of the user, Diana can often be found eating ice cream and sipping matcha.'
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
