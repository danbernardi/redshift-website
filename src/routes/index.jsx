import CoreLayout from 'containers/CoreLayout';
import Home from './Home';
import About from './About';
import Careers from './Careers';

export function createRoutes () {
  return ({
    path: '/',
    component: CoreLayout,
    indexRoute: { component: Home },
    childRoutes: [
      { path: 'work', component: Home },
      { path: 'about', component: About },
      { path: 'careers', component: Careers }
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
