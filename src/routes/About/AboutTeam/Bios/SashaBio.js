import React from 'react';
import '../../style.scss';
import BioModal from '../BioModal';
import SashaImage from '../sasha.jpg';

const teamBio = {
  id: 'sasha',
  name: 'Sasha Klein',
  bio1: 'Sasha Klein is a senior web developer at Redshift.',
  bio2: 'He grew up in Washington, DC, got a BA in English from Harvard College, taught in China, and then took a sharp turn into web development upon arriving in SF. Before landing at Redshift, Sasha coded and ran the web dev curriculum at Bloc, an online tech boot camp. He also gave startups a shot, founding and then giving up on a meat-sharing and a social-travel startup, both of which he requires alcohol to discuss.',
  bio3: 'When Sasha isn\'t complimenting coworkers on their lunches, he likes to trap them in discussions about universal basic income.',
  image: SashaImage
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
