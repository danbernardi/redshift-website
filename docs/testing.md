# Testing

- [Testing tools](#tools)
- [What we test](#what-we-test)
  + [Unit tests](#unit-tests)
  + [Component tests](#component-tests)
  + [API tests](#api-tests)

## Tools

This project uses the following technologies for testing:

- [Karma](https://karma-runner.github.io/1.0/index.html) - A test runner with informative output.
- [Mocha](https://mochajs.org/) - An async friendly test framework.
- [Chai](http://chaijs.com/) - BDD/TDD assertion library.
- [PhantomJS](http://phantomjs.org/) - Headless browser for running tests in complete webpack environment
- [Enzyme](https://github.com/airbnb/enzyme) - An Airbnb-built library for testing React components.
- [Sinon](sinonjs.org) - A popular JavaScript mocking library.

The `tests` folder structure mimics the `src` structure, such that each test has a corresponding file. Tests are named after the corresponding file, but instead of `js`, their file extensions is `spec.js`. with suffix of `Test`. Only `spec.js` files will be run -- all other files in `tests` (such as support files in the `tests/support` directory) will be ignored unless explicitly imported.

To run tests in the Command Line:

```
npm test // Run all tests once
npm run test:dev // Watch files and run tests on save
```

## What we test

### Unit tests

Simple tests of low-level data structures and functions are written almost entirely using Chai assertions. We test things like internal utilities, as well as Redux Actions and Reducers, which are purely functional and have consistently predictable output with given inputs. For testing Redux Reducers/Actions, we follow the [documented Redux patterns](http://redux.js.org/docs/recipes/WritingTests.html), in addition to writing some tests that assert/enforce patterns around Action naming/structure.

### Component tests

Although `enzyme` makes component testing relatively straightforward, testing Redux-connected components adds a significant layer of complication. To simplify testing these components (which are attached to a global "store" with a snapshot of the application's data state), we follow a number of best practices:

- **Components should be tested "shallowly" as much as possible.** A test of a component should avoid assertions about the behavior of nested components.

  > As an example, our `Dropdown` component renders multiple `DropdownListItem` components. We test only that given certain props, the `Dropdown` component renders the list items correctly, and passes them the predicted props. What a `DropdownListItem` does with those props is tested separately.

- **When writing components, export them by name *and* by default.** This allows us to import an *unconnected* version of the component for testing, and a connected version in the app:

  ```
  import React from 'react';

  export const MyComponent = props => {
    return (<div>{ props.title }</div>);
  };

  const injectProps = s => ({ title: s.title });
  export default connect(injectProps)(MyComponent);
  ```

  > In the above example, we could now `import { MyComponent } from 'components/MyComponent'` in our test and `import MyComponent from 'components/MyComponent'` in the app code. In the test, the imported component is not connected, and will make no attempts to connect to the Redux store, so we can simply pass in the props it expects.

- **Test that complex behavior is *called*; then test that behavior separately.** For example, if testing that clicking a dropdown item dispatches a request to update the clicked item for that dropdown, simply test that the passed `dispatch` function is called, with the expected arguments. To test this behavior, we use `sinon` spies:

  ```
  import test from 'ava';
  import sinon from 'sinon';
  import { shallow } from 'enzyme';

  import { MyComponent } from '../src/components/MyComponent';

  test("MyComponent dispatches its ID when clicked", t => {
    const fakeDispatch = sinon.spy();
    const component = shallow(<MyComponent
      dispatch={ fakeDispatch }
      id="unique-id"
    />)

    component.simulate('click');
    t.true(fakeDispatch.called);
    t.deepEqual(
      fakeDispatch.lastCall.args[0],
      { type: 'MY_COMPONENT_CLICK', id: 'unique-id' }
    );
  });
  ```

  > In a separate test (ie the `reducerTest`), follow through on what that `dispatch` should do with those arguments.

- **Avoid testing exact HTML.** Enzyme provides a handy `html()` method, which can render a component as a string of HTML. While it seems convenient to test the output directly, doing so is extremely brittle, as the test will fail -- and waste time -- on the slightest change to the component. So attempt to test core elements of the HTML rather than the HTML itself:

  Bad:

  ```
    test('The rendered component has the right classes and title', t => {
      const component = shallow(<MyComponent classes="extra" title="Hi"/>)
      t.is(
        component.html(),
        '<div class="my-component extra"><span class="title">Hi</span></div>'
      )
    })
  ```

  Better:

  ```
    test('The rendered component has the right classes and title', t => {
      const component = shallow(<MyComponent classes="extra" title="Hi"/>)
      t.true(component.hasClass('extra'));
      t.is(
        component.find('.title').first().text(),
        'Hi'
      );
    })
  ```

#### Component Test Gotchas

It's important to import components correctly in the tests. When testing that one component is nested in another, you'll need to import the *unconnected* version of the parent component, and the *connected* version of its child:

```
import { Dropdown } from '../../src/components/Dropdown';
import DropdownListItem from '../../src/components/dropdown/DropdownListItem';
```

- We import the *unconnected* parent, because Enzyme can't render, even shallowly, a connected component.
- We import the *connected* child, because Enzyme doesn't render it at all (when the parent is shallowly rendered), and when asserting that the child is in the parent's tree, we need to pass the **exact** component class/function that is being rendered -- ie the connected version.

An example:

```js
import { Checkbox } from '../../src/components/Checkbox';
import Checkable from '../../src/components/Checkable';

test('Checkbox renders a Checkable component', t => {
 *  const component = shallow(<Checkbox name="my-checkbox" checkID="my-checkbox" />);
 *  t.is(
 *    component.find(Checkable).length,
 *    1
 *  );
});
```

#### Component Test Helpers

- A `mockComp` function is globally available in `spec.js` files. It takes a component and props object, and returns that component, shallowly rendered with those props:

  ```js
  it('renders a div', () => {
    const component = mockComp(SomeComponent, { title: 'whatever' });
    expect(component.find('div').length).to.eq(1);
  });
  ```

- The `testComponent` file inside `tests/support` default exports a function which runs basic tests asserting that a component renders HTML, declares `propTypes`, and is exported both by default and explicitly (see above).

  ```js
  import { UnconnectedCompName }, CompName from 'routes/CompName';
  import ChildComp from 'routes/ChildComp';
  import testComponent from '../support/testComponent';

  const propsNecessaryForComponentToRender = {};
  testComponent({
    connected: CompName,
    unconnected: UnconnectedCompName,
    props: propsNecessaryForComponentToRender,
    searchFor: ChildComp // The tests will attempt to find this child to prove rendering - by default they search for a div.
  })
  ```
