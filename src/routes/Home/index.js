import React from 'react';
import Hero from './Hero';
import HomepageCaseStudy from './HomepageCaseStudy';
import './style.scss';

import NortonImage from './Norton/norton-scene-bg.jpg';
import NortonMLGImage from './Norton/norton-scene-bg-mlg.jpg';
import NortonMobileImage from './Norton/norton-scene-bg-mobile.jpg';
import YumavoreImage from './Yumavore/yumavore-scene-bg.jpg';
import YumavoreMobileImage from './Yumavore/yumavore-scene-bg-mobile.jpg';

const caseStudies = [
  {
    name: 'norton',
    homepageImage: NortonImage,
    homepageMLGImage: NortonMLGImage,
    homepageMobileImage: NortonMobileImage,
    imageAlt: 'Yumavore app design',
    caption1: 'A new way to create',
    caption2: 'and share recipes',
    anchor: true
  },
  {
    name: 'yumavore',
    homepageImage: YumavoreImage,
    // homepageMLGImage: YumavoreMLGImage,
    homepageMobileImage: YumavoreMobileImage,
    imageAlt: 'Yumavore app design',
    caption1: 'A new way to create',
    caption2: 'and share recipes',
    anchor: false
  }
];

export function Home () {
  return (
    <div>
      <Hero />
      <div
        id="homepage-work"
        // ref={ (el) => {
        //   if (location.hash === '#worksss') {
        //     el.scrollIntoView();
        //   }
        // } }
      >
        {
          caseStudies.map((study, index) => (
            <HomepageCaseStudy key={ index } study={ study } />
          ))
        }
      </div>
    </div>
  );
}

export default Home;
