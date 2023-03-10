const fs = require('fs-extra');
const webpack = require('webpack');
const debug = require('debug')('app:bin:compile');
const webpackConfig = require('../config/webpack.config');
const project = require('../config/project.config');

// Wrapper around webpack to promisify its compiler and supply friendly logging
const webpackCompiler = (webpackConfig) =>
  new Promise((resolve, reject) => {
    const compiler = webpack(webpackConfig);

    compiler.run((err, stats) => {
      if (err) {
        debug('Webpack compiler encountered a fatal error.', err);
        return reject(err);
      }

      const jsonStats = stats.toJson();
      debug('Webpack compile completed.');
      debug(stats.toString(project.compiler_stats));

      if (jsonStats.errors.length > 0) {
        debug('Webpack compiler encountered errors.');
        debug(jsonStats.errors.join('\n'));
        return reject(new Error('Webpack compiler encountered errors'));
      } else if (jsonStats.warnings.length > 0) {
        debug('Webpack compiler encountered warnings.');
        debug(jsonStats.warnings.join('\n'));
      } else {
        debug('No errors or warnings encountered.');
      }
      resolve(jsonStats);
    });
  });

const compile = () => {
  debug('Starting compiler.');
  debug('NODE_ENV: ');
  debug(process.env && process.env.NODE_ENV);

  return Promise.resolve()
    .then(() => webpackCompiler(webpackConfig))
    .then(stats => {
      if (stats.warnings.length && project.compiler_fail_on_warning) {
        throw new Error('Config set to fail on warning, exiting with status code "1".');
      }
      debug('Copying static assets to dist folder.');
      fs.copySync(project.paths.public(), project.paths.dist());

      debug('Logging contents of key folders, for deploy diagnostics...');

      ['./', './dist', './public'].forEach(dir => {
        fs.readdir(dir, (err, items) => {
          if (err) {
            debug(`Error Reading ${dir}: `);
            debug(err);
          } else {
            debug(`Reading ${dir}: `);

            if (items) {
              items.forEach(item => {
                const filePath = `${dir}/${item}`;
                debug(`- ${filePath}`);
              });
            }
          }
        });
      });
    })
    .then(() => {
      debug('Compilation completed successfully.');
    })
    .catch((err) => {
      debug('Compiler encountered an error.', err);
      process.exit(1);
    });
};

compile();
