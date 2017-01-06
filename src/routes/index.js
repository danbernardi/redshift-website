import CoreLayout from 'containers/CoreLayout';
import Home from './Home';
import ApiExample from './ApiExample';
import Library from './Library';

import fractalRouteCreator from './Fractal';

export function createRoutes (store) {
  return ({
    path: '/',
    component: CoreLayout,
    indexRoute: { component: Home },
    childRoutes: [
      { path: 'api-example', component: ApiExample },
      { path: 'library', component: Library },
      ...fractalRouteCreator(store)
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
