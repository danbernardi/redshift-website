import CoreLayout from 'containers/CoreLayout';
import Home from './Home';
import CSFive from './Home/Five/CSFive';
import CSYumavore from './Home/Yumavore/CSYumavore';
import CSNexus from './Home/Nexus/CSNexus';
import CSNorton from './Home/Norton/CSNorton';
import CareerSeniorUX from './Careers/CareersJobs/CareerSeniorUX';
import CareerUXDesigner from './Careers/CareersJobs/CareerUXDesigner';
import CareerSeniorVisual from './Careers/CareersJobs/CareerSeniorVisual';
import About from './About';
import Careers from './Careers';
// import Library from './Library';

export function createRoutes (store) {
  return ({
    path: '/',
    component: CoreLayout,
    indexRoute: { component: Home },
    childRoutes: [
      { path: 'five', component: CSFive },
      { path: 'yumavore', component: CSYumavore },
      { path: 'nexus', component: CSNexus },
      { path: 'norton', component: CSNorton },
      { path: 'about', component: About },
      { path: 'careers', component: Careers },
      { path: 'careers-senior-ux-position', component: CareerSeniorUX },
      { path: 'careers-ux-designer-position', component: CareerUXDesigner },
      { path: 'careers-senior-visual-designer-position', component: CareerSeniorVisual }
    ]
  });
}

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./ApiExample').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes;
