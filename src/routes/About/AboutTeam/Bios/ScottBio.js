import React from 'react';
import '../../style.scss';
import BioModal from '../BioModal';
import ScottImage from '../.jpg';

const teamBio = {
  id: 'scott',
  name: 'Scott Lambridis',
  bio1: 'Scott Lambridis is the director of UX at Redshift.',
  bio2: 'He grew up in New York and earned a degree in neurobiology from the University of Virginia. After designing and coding custom educational tools for large and mid-sized companies, Scott built a UX department at Eveo and designed numerous mobile and desktop applications for doctors, patients, and healthcare reps.',
  bio3: 'Scott is also an award-winning writer with an MFA from San Francisco State University, and has published stories in Amazon\'s Day One, Slice, and other journals. He also co-hosts the Action Fiction! performance series.',
  image: ScottImage
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
