import React from 'react';
import '../../style.scss';
import BioModal from '../BioModal';
import PeterImage from '../peter.jpg';

const teamBio = {
  id: 'peter',
  name: 'Peter Odum',
  bio1: 'Peter Odum is a Lead User Experience Designer at Redshift.',
  bio2: 'An accomplished digital artist and data architect, Peter brings nearly two decades of design expertise to his work. His intense creative focus and deep understanding of user engagement have led to work for Bank of America, Sutter Health, Ghirardelli Chocolate, The New York Times, Virgin Atlantic and many others. Peter has also designed digital experiences for Electronic Arts and Disney, most recently directing user experience for Disney\'s mobile title Star Wars Commander.',
  bio3: 'Peter is a classically trained painter and printmaker who enjoys travel, photography, and roughhousing with his kids, Sam and Irene.',
  image: PeterImage
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
