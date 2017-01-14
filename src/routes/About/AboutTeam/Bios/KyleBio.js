import React from 'react';
import '../../style.scss';
import BioModal from '../BioModal';
import KyleImage from '../kyle.jpg';

const teamBio = {
  id: 'kyle',
  name: 'Kyle Lloyd',
  position: 'Director of Business Development',
  bio1: 'Kyle Lloyd is the Director of Business Development at Redshift',
  bio2: 'Kyle grew up in Austin, TX and went to school at Texas State University in San Marcos where he earned a BBA in Marketing. He prides himself in building successful sales organizations from the ground up, and prior to Redshift, Kyle worked for pharmaceutical companies, technology accelerators, and other world-renowned digital design firms.',
  bio3: 'A proud Texan (in name only), Kyle indefinitely resides in San Francisco, CA with his longtime partner. You can find him any given weekend on hiking trails around the Bay Area.',
  image: KyleImage
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
