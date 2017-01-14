import React from 'react';
import '../../style.scss';
import BioModal from '../BioModal';
import TiffanyImage from '../tiffany.jpg';

const teamBio = {
  id: 'tiffany',
  name: 'Tiffany La',
  bio1: 'Tiffany La is a User Researcher at Redshift.',
  bio2: 'She is a San Francisco native who has a Bachelor of Arts from UC Davis for Communication and Economics. She has worked in Finance and IT and in between discovered Design Thinking at Carnegie Mellon, which catalyzed her interest in UX. Several conversations later, she obtained her UX Design Immersive certification at General Assembly.',
  bio3: 'She loves to work on big projects that really touch the lives of those that need it the most.',
  image: TiffanyImage
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
