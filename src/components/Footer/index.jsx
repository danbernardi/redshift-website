import React from 'react';
import FooterSocial from './FooterSocial';
import { breakpointIsGreaterThan } from 'utils/responsiveHelpers';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Footer.scss';

/**
  * Footer
  *
  * @param {Object} props
  * @param {function} onDidMount        returns a reference to itself to the parent component when the container is mounted.
  * @param {Node} classes               classNames from parent
  * @param {Node} children              React child node containing footer content
  * @param {Object} breakpoint          captures browser width
  * @returns {React.Component}          Returns a react component
*/

export function Footer (props) {
  const { onDidMount, classes, children, breakpoint } = props;
  return (
    <footer ref={ (el) => onDidMount instanceof Function && onDidMount(el) } className={ `footer cf ${classes && classes}` }>
      { children && children }
      <div className="row">
        <FooterSocial />
        <div className="contact-info layout--align-right">
          { breakpointIsGreaterThan('mobileLg', breakpoint.size) &&
            <a
              className="typ--footer"
              href="https://www.google.com/maps/place/8+California+St,+San+Francisco,+CA+94111/@37.793838,-122.3989129,17z/data=!3m1!4b1!4m5!3m4!1s0x808580615b0ca361:0xc58b8a2deddd07ae!8m2!3d37.793838!4d-122.3967242"
              target="_blank"
            >8 California St, San Francisco, CA 94111<br /></a>
          }
          <a className="typ--footer" href="mailto:hello@redshiftdigital.com">hello@redshiftdigital.com</a>
          { breakpointIsGreaterThan('mobileLg', breakpoint.size) &&
            <span className="typ--footer">&nbsp;&nbsp; | &nbsp;&nbsp;<a href="tel:4153711500" className="typ--footer">415 371 1500</a></span>
          }
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  onDidMount: PropTypes.func,
  classes: PropTypes.string,
  children: PropTypes.node,
  breakpoint: PropTypes.object
};

const mapStateToProps = state => ({
  breakpoint: state.breakpoint
});

export default connect(mapStateToProps)(Footer);
