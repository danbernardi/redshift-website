import React from 'react';
import '../../style.scss';
import BioModal from '../BioModal';
import StewartImage from '../stewart.jpg';

const teamBio = {
  id: 'david',
  name: 'David Westen',
  bio1: 'David is an expert in internet technology, user experience and digital business strategy.',
  bio2: 'In 1999 David co-founded Internet Learning Corporation (ILC), a VC-backed startup focusing on creative, customized e-learning solutions, which was acquired in 2002 by A.S.K. Learning. During his seven years as CTO of A.S.K., David lead the development of e-learning initiatives for clients including HP, Cisco Systems, Veritas, EMC, Sony, Commonwealth Bank and PriceWaterHouseCoopers.',
  bio3: 'David is a graduate of Stanford University.',
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
