import React from 'react';
import '../../style.scss';
import BioModal from '../BioModal';
import StewartImage from '../stewart.jpg';

const teamBio = {
  id: 'Stewart',
  name: 'Stewart Maclennan',
  position: 'Director of Digital Media',
  bio1: 'Stewart Maclennan is a new media guru who combines 12 years of web consulting experience with 9 years as a film writer, director and producer.',
  bio2: 'Stewart\'s work includes film production for theatrical and web distribution, interactive internet campaigns, and design and branding solutions. Drawing on his dual interests, Stewart has worked with companies such as Hewlett-Packard and Symantec to leverage new media strategies to accomplish their business objectives.',
  bio3: 'Stewart graduated from Stanford University before attending the USC School of Cinema-Television.',
  image: StewartImage
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
