import React from 'react';
import '../../style.scss';
import BioModal from '../BioModal';

const teamBio = {
  id: 'lily',
  name: 'Lily Hu',
  bio1: 'Lily Hu is a visual designer at Redshift.',
  bio2: 'She received an MFA in Graphic Design from Art Center College of Design in Los Angeles. Prior to working at Redshift, Lily designed products for such companies as Polaroid, Octovo and Blackboard',
  bio3: 'She now lives in San Francisco, CA.'
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
