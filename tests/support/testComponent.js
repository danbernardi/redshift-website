import _ from 'lodash';
import parseFunc from './parseFunc';

export default function testComponent ({
  connected,
  unconnected,
  props = {},
  searchFor = 'div'
}) {
  const givenProps = props;
  const pass = () => expect(true).to.eq(true);

  describe(`<${parseFunc(connected).name} /> - base behavior`, () => {
    it('exported both by default (connected) and destructureable (unconnected)', () => {
      expect(typeof connected).to.eq('function');
      expect(typeof unconnected).to.eq('function');
    });

    it('declares its propTypes', () => {
      const hasProps = parseFunc(unconnected).arguments[0];
      if (hasProps) {
        expect(unconnected.propTypes instanceof Object).to.eq(true);
      } else {
        pass();
      }
    });

    it('explicitly requires (in propTypes) all props necessary for render', () => {
      const necessaryButNotExplicitlyRequiredProps = _.keys(givenProps).filter(key => {
        const props = unconnected.propTypes;
        const explicitlyRequiredProps = _.keys(props).filter(prop => !props[prop].isRequired); // Unintuitive, but true
        return explicitlyRequiredProps.indexOf(key) === -1;
      });

      if (necessaryButNotExplicitlyRequiredProps.length > 0) {
        assert.fail(0, 1, `Props are passed in to pass test but not explicitly required: ${necessaryButNotExplicitlyRequiredProps}`);
      }
      pass();
    });

    it('renders HTML (shallow test only)', () => {
      const props = {};
      const logs = [];

      _.keys(unconnected.propTypes).forEach(propName => {
        if (givenProps[propName]) {
          props[propName] = givenProps[propName];
        } else {
          // Store un-given prop name to list if render fails
          logs.push('   - '.concat(propName));
        }
      });

      const element = mockComp(unconnected, props);

      // Rendering elements with connected children throws an error,
      // so instead, check tree for div or specified component (string or component).
      const foundElement = element.find(searchFor);

      if (!foundElement.length) {
        if (logs.length) { logs.unshift('  Declared props which weren\'t supplied:'); }
        logs.unshift(`  Given child to search for:\n   - ${searchFor}`);
        logs.unshift('\nFailed to render any HTML elements or specified children.');
        assert.fail(0, 1, logs.join('\n'));
      }
      pass();
    });
  });
};
