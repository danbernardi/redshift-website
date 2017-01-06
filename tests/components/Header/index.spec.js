import React from 'react';
import { Header } from 'components/Header';
import { IndexLink } from 'react-router';

describe('(Component) Header', () => {
  let _wrapper;

  beforeEach(() => {
    _wrapper = mockComp(Header);
  });

  it('Renders a welcome message', () => {
    const welcome = _wrapper.find('h1');
    expect(welcome).to.exist;
    expect(welcome.text()).to.match(/React Redux Starter Kit/);
  });

  describe('Navigation links...', () => {
    it('Should render a Link to Home route', () => {
      expect(_wrapper.contains(
        <IndexLink activeClassName="route--active" to="/">
          Home
        </IndexLink>
      )).to.be.true;
    });
  });
});
