import React from 'react';
import '../../style.scss';
import BioModal from '../BioModal';
import AndrewImage from '../andrew.jpg';

const teamBio = {
  id: 'andrew',
  name: 'Andrew Fitzpatrick',
  bio1: 'Andrew is a self-taught developer with a background in fine arts.',
  bio2: 'He has built websites for some of the largest (and smallest) online retailers in the world over the last decade. When he is not writing the code that makes your page load as a Full Stack Engineer at Redshift, you can find him lurking in thrift shops and garage sales for inspiration for his artwork and products. His products have been sold in various quirky boutiques worldwide.',
  bio3: 'Originally from Philadelphia, via Austin and Los Angeles, he currently lives in Alameda with his wife Ellen and his crabby dog, Ajax Pupperknuckles.',
  image: AndrewImage
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
