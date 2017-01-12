import React from 'react';
import CaseStudy from '../../../components/CaseStudy/index';
import yumavore1 from './yumavore1.jpg';
import yumavore2 from './yumavore2.jpg';
import yumavore3 from './yumavore3.jpg';
import yumavore4 from './yumavore4.jpg';
import yumavore5 from './yumavore5.jpg';
import yumavore6 from './yumavore6.jpg';
import CSNexus from '../Nexus/CSNexus';

const CSYumavore = (props) => {
  const { animateIn } = props;

  const content = [
    {
      img: yumavore1,
      items: [
        (<h3 className="casestudy__text">We reimagined the recipe format for mobile devices, showing the ingredients you need for each step.</h3>),
        (<a href="https://itunes.apple.com/us/app/yumavore/id1043281685?mt=8:" target="_blank"><div className="btn btn--ghost mt5 typ--yumavore">download the app</div></a>)
      ]
    },
    {
      img: yumavore2,
      items: [
        (<h3 className="casestudy__text">Capture photos, choose ingredients, and format your recipe with a simple drag and drop.</h3>)
      ]
    },
    {
      img: yumavore3,
      items: [
        (<h3 className="casestudy__text">Yumavore makes shopping easy by collecting multiple recipes into an intelligent list which can be viewed by store aisle.</h3>)
      ]
    },
    {
      img: yumavore4,
      items: [
        (<h3 className="casestudy__text">Redshift also designed Yumavore’s logo and visual identity.</h3>)
      ]
    },
    {
      pad: false,
      items: [(<img src={ yumavore5 } />)]
    },
    {
      items: [(<img src={ yumavore6 } />)]
    }
  ];

  return (
    <CaseStudy
      id="yumavore"
      name="Yumavore"
      heading="Working with celebrity chef Tyler Florence, we designed a publishing platform that allows anyone to create and share beautiful recipes with the world."
      content={ content }
      next={ { id: 'nexus', name: 'Google Nexus', component: <CSNexus /> } }
      animateIn={ animateIn }
    />
  );
};

CSYumavore.propTypes = {
  animateIn: React.PropTypes.bool
};

export default CSYumavore;
