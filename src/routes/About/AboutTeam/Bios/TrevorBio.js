import React from 'react';
import '../../style.scss';
import BioModal from '../BioModal';

const teamBio = {
  id: 'trevor',
  name: 'Trevor Alexander',
  bio1: '  Trevor Alexander is a software engineer and data analyst at Redshift. Raised in Arizona, he received his B.S. in Electrical Engineering from the University of Hawai`i at Manoa, with a focus in systems engineering and a minor in Japanese. Following that, he received an M.S. in Electrical Engineering from the same, with a thesis in the area of brain-computer interfaces. Prior to working at Redshift, he worked for a number of technical startups, developing a passion for application development and high-performance web engineering.',
  bio2: 'He lives in Alameda, CA with his cat, Dan.'
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
