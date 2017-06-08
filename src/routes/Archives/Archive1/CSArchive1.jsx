import React from 'react';
import CaseStudy from '../../../components/CaseStudy/index';
import img1 from './archive1_1.jpg';
import img2 from './archive1_2.jpg';
import img3 from './archive1_3.jpg';
import img4 from './archive1_4.jpg';
import img5 from './archive1_5.jpg';
import CSNorton from 'routes/Home/Norton/CSNorton';
import PropTypes from 'prop-types';

const CSFive = (props) => {
  const { animateIn } = props;

  const content = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 }
  ];

  return (
    <CaseStudy
      id="archive1"
      name="Archive 1"
      sidebar={ true }
      heading="In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam intege."
      content={ content }
      next={ { id: 'norton', name: 'Norton Antivirus', component: <CSNorton /> } }
      animateIn={ animateIn }
    />
  );
};

CSFive.propTypes = {
  animateIn: PropTypes.bool
};

export default CSFive;
