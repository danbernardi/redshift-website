import React from 'react';
import '../../style.scss';
import BioModal from '../BioModal';
import EmmaImage from '../emma.jpg';

const teamBio = {
  id: 'emma',
  name: 'Emma Hazlett',
  position: 'Visual Designer',
  bio1: 'Emma Hazlett is a visual designer at Redshift.',
  bio2: 'She grew up in Norwich, VT. She attended the University of Vermont for Anthropology and pre-med. She received her graphic design training at MICA.',
  bio3: 'She has lived and worked in Italy, Ethiopia, New Mexico, Baltimore and Wyoming. She currently resides in San Francisco, CA with her pup, Gracie.',
  image: EmmaImage
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
