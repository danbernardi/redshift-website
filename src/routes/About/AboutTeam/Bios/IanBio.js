import React from 'react';
import '../../style.scss';
import BioModal from '../BioModal';
import IanImage from '../ian.jpg';

const teamBio = {
  id: 'ian',
  name: 'Ian Eck',
  position: 'UX Designer',
  bio1: 'Ian is a user experience designer at Redshift.',
  bio2: 'He grew up outside of Philadelphia, PA and studied at Wake Forest University—immersing himself in English, Economics, and the charms of southern hospitality. After school he moved to San Francisco, where he cut his journalistic teeth at San Francisco Magazine. He also blogged for various nifty tech ventures and learned about UX design through General Assembly.',
  bio3: 'Ian spends most of his time gazing at panels filled with millions of densely-packed lights. They mean things to him.',
  image: IanImage
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
