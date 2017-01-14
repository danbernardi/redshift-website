import React from 'react';
import '../../style.scss';
import BioModal from '../BioModal';
import MattKImage from '../mattk.jpg';

const teamBio = {
  id: 'mattk',
  name: 'Matt Kissick',
  bio1: 'Matt Kissick is a user experience designer at Redshift.',
  bio2: 'He grew up in Ottawa, Canada and went to OCAD University in Toronto. He received a Bachelor of Design in Industrial Design. Prior to Redshift, Matt freelanced as a graphic and web designer.',
  bio3: 'As a stereotypical Canadian, Matt loves playing hockey, eating maple-based products and wearing many different jackets.',
  image: MattKImage
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
