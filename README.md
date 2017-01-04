# RS React Redux Starter

This starter app is a simplified version of [React Redux Starter Kit](https://github.com/davezuko/react-redux-starter-kit). It provides a bunch of goodies, out of the box:

- React
- Redux
- Webpack
  + [Path Aliasing](#path-aliasing)!
  + Hot loading!
  + [Redux Dev Tools][#dev-tools]!
  + Asset management (Base-64 encodes small assets; hosts big ones)
- Karma/Mocha for [testing](./docs/testing.md)
- [SCSS/PostCSS](./docs/styling.md)
- Eslint
- Flow type checking (optional)
- Code coverage

### Getting started

To build locally:

```
npm install
npm dev
```

To deploy to Heroku, simply commit the code and run:

```
git push heroku master
```

Which will deploy the code, compile it, and run the server.

## Architecture

This is a pared down version of the archicture described in the original [starter kit repo](https://github.com/davezuko/react-redux-starter-kit) and [intro article](https://suspicious.website/2016/04/29/starting-out-with-react-redux-starter-kit/).

Our component structure is flattened compared to the above fully fractal structure. Although it permits a more complex component structure (with helpers and fractal child routes), it only assumes that each route is a folder with an `index.js` file defining the component. Additional styles, helpers, or sub-components can be placed within the folder.

The full structural outline:

```
.
├── bin                      # Build/Start scripts
├── config                   # Project and build configurations
├── public                   # Static public assets (not imported anywhere in source code)
├── server                   # Express application that provides webpack middleware
│   └── main.js              # Server application entry point
├── src                      # Application source code
│   ├── index.html           # Main HTML page container for app
│   ├── main.js              # Application bootstrap and rendering
│   ├── components           # Global Reusable Presentational Components
│   ├── containers           # Global Reusable Container Components
│   ├── routes               # Main route definitions
│   │   ├── index.js         # Defines routes with store as input
│   │   ├── ComponentName    # Fractal route
│   │   │   ├── index.js     # Component file -- sibling files possible
│   ├── store                # Redux-specific pieces
│   │   ├── action.js        # Synchronous Redux actions
│   │   ├── createStore.js   # Create and instrument redux store
│   │   ├── handlers.js      # Object-style mapping of actions to reducer functions
│   │   └── reducers.js      # Reducer registry and injection
│   └── styles               # Application-wide styles (generally settings)
└── tests                    # Unit tests
```

## Development

### Dev Tools

This app uses Redux DevTools out of the box, so install [Redux DevTools Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) if you want to use them.

### Path Aliasing

Webpack is configured to make use of [resolve.root](http://webpack.github.io/docs/configuration.html#resolve-root), which lets you import local packages as if you were traversing from the root of your `~/src` directory. Here's an example:

```js
// current file: ~/src/views/some/nested/View.js
// What used to be this:
import SomeComponent from '../../../components/SomeComponent'

// Can now be this:
import SomeComponent from 'components/SomeComponent' // Hooray!
```

### Core Scripts

```
yarn install // better npm install
npm run dev // start local server
npm test // run tests once
npm run test:dev // run tests continuously (watch)
npm run flow // run flow type checking
npm run lint
```

### Globals

These are global variables available to you anywhere in your source code. If you wish to modify them, they can be found as the `globals` key in `~/config/project.config.js`. When adding new globals, make sure you also add them to `~/.eslintrc`.

|Variable|Description|
|---|---|
|`process.env.NODE_ENV`|the active `NODE_ENV` when the build started|
|`__DEV__`|True when `process.env.NODE_ENV` is `development`|
|`__PROD__`|True when `process.env.NODE_ENV` is `production`|
|`__TEST__`|True when `process.env.NODE_ENV` is `test`|

#### How we adapted this to deploy on Heroku

Loosely following the instructions [here](https://github.com/davezuko/react-redux-starter-kit/wiki/FAQ:-Frequently-Asked-Questions), we adapted this for Heroku deployment by taking the following steps:

- Replaced/added the following commands in `package.json`:

```
...
"start": "better-npm-run start:prod",
"serve": "better-npm-run start",
"postinstall": "npm run deploy:prod",
"betterScripts": {
  ...
  "deploy:prod": {
    "command": "npm run clean && npm run compile",
    "env": {
      "NODE_ENV": <!--  -->"production",
      "DEBUG": "app:*"
    }
  },
  "start:prod": {
    "command": "node bin/server",
    "env": {
      "NODE_ENV": "production"
    }
  }
  ...
},
```

- Added a `bin/server` file (equivalent to `bin/dev-server`, except without the `debug` import or usage -- used `console.info` instead).
- Ran `heroku config:set NPM_CONFIG_PRODUCTION=false` to make sure Heroku installs necessary dev dependencies such as `express` etc.
