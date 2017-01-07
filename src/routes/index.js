import CoreLayout from 'containers/CoreLayout';
import Home from './Home';
import CSFive from './Home/Five/CSFive';
import CSYumavore from './Home/Yumavore/CSYumavore';
import CSNexus from './Home/Nexus/CSNexus';
import CSNorton from './Home/Norton/CSNorton';
import About from './About';
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
      { path: 'about', component: About }
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
