// This one is a struggle to set up because of fs loading issues
// import { assertPass, assertFail } from 'support/assertions';

// const exceptions = [];//['App.jsx', 'charts/TrendChart.jsx', 'charts/FilledAreaChartD3.jsx', 'charts/LineChartD3.jsx'];

// const componentPaths = ['components', 'routes'];

// const deleteFrom = (array, el) => array.splice(array.indexOf(el), 1);
// const getDeepPathContents = (path, ending) => {
//   let contents = fs.readDirSync(path);
//   const directories = contents.filter(entry => entry.indexOf('.') === -1);
//   directories.forEach(directory => {
//     deleteFrom(contents, directory);
//     contents = [
//       ...contents,
//       ...getDeepPathContents(`${path}/${directory}`, ending)
//         .map(entry => `${directory}/${entry}`)
//     ];
//   });
//   return contents.filter(entry => entry.indexOf(ending) !== -1);
// };

// const componentList = [];
// const testList = [];
// componentPaths.forEach(tree => {
//   const testTree = './'.concat(tree);
//   getDeepPathContents(tree, '.js').forEach(filePath => { componentList.push(filePath); });
//   getDeepPathContents(testTree, '.spec.js').forEach(filePath => { testList.push(filePath); });
// });

// const componentsMissingTests = componentList
//   .filter(componentName => {
//     const hasNoTest = (testList.indexOf(componentName.replace('.js', '.spec.js')) === -1);
//     const isAnException = exceptions.indexOf(componentName) !== -1;
//     return hasNoTest && !isAnException;
//   });

// describe('Component test mandating', () => {
//   if (componentsMissingTests.length) {
//     const formatted = componentsMissingTests.map(name => ` - ${name}`);
//     assertFail(`The following components are untested:\n${formatted.join('\n')}`, true);
//   } else {
//     assertPass('');
//   }
// });
