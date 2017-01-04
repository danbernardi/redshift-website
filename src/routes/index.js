import React from 'react';
import { browserHistory, Router, Route } from 'react-router';
import CoreLayout from 'containers/CoreLayout';
import Home from './Home';
import Counter from './Counter';
import fractalRouteCreator from './Fractal';

export function createRoutes (store) {
  return ({
    path: '/',
    component: CoreLayout,
    indexRoute: { component: Home },
    childRoutes: [
      { path: 'counter', component: Counter },
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
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes;
