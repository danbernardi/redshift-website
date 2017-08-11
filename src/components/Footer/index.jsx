import React from 'react';
import FooterSocial from './FooterSocial';
import { breakpointIsGreaterThan } from 'utils/responsiveHelpers';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import './footer.scss';

export function Footer (props) {
  const { onDidMount, classes, children, breakpoint } = props;
  return (
    <footer ref={ (el) => onDidMount instanceof Function && onDidMount(el) } className={ `footer cf ${classes && classes}` }>
      { children && children }

      <div className="row">

        <FooterSocial />

        <div className="contact-info layout--align-right">
          { breakpointIsGreaterThan('mobileLg', breakpoint.size) &&
            <Link
              className="typ--b2"
              to="https://www.google.com/maps/place/8+California+St,+San+Francisco,+CA+94111/@37.793838,-122.3989129,17z/data=!3m1!4b1!4m5!3m4!1s0x808580615b0ca361:0xc58b8a2deddd07ae!8m2!3d37.793838!4d-122.3967242"
              target="_blank"
            >8 California St, San Francisco, CA 94111<br /></Link>
          }
          <Link className="typ--b2" to="mailto:hello@redshiftdigital.com">hello@redshiftdigital.com<br /></Link>
          { breakpointIsGreaterThan('mobileLg', breakpoint.size) &&
            <Link to="tel:4153711500" className="typ--b2">415 371 1500</Link>
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
