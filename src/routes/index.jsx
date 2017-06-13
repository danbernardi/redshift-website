// import React from 'react';
import CoreLayout from 'containers/CoreLayout';
import Home from './Home';
import About from './About';
import NewAbout from './NewAbout';
import Careers from './Careers';
import FourOhFour from './FourOhFour';
import Inspiration from './Inspiration';

export function createRoutes () {
  return ({
    path: '/',
    component: CoreLayout,
    indexRoute: { component: Home },
    childRoutes: [
      {
        path: 'work',
        indexRoute: { component: Home },
        childRoutes: [{
          path: ':modalID',
          component: Home
        }]
      },
      {
        path: 'about',
        indexRoute: { component: About },
        childRoutes: [{
          path: ':employeeID',
          component: About
        }]
      },
      {
        path: 'new-about',
        indexRoute: { component: NewAbout }
        // childRoutes: [{
        //   path: ':employeeID',
        //   component: About
        // }]
      },
      {
        path: 'careers',
        indexRoute: { component: Careers },
        childRoutes: [{
          path: ':jobID',
          component: Careers
        }]
      },
      {
        path: 'inspiration',
        indexRoute: { component: Inspiration }
      },
      {
        path: '404',
        indexRoute: { component: FourOhFour }
      },
      {
        path: '*',
        onEnter: (nextState, replace) => replace('/404')
      }
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
