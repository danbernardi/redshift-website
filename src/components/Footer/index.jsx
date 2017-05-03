import React from 'react';
import FooterSocial from './FooterSocial';
import './footer.scss';

export function Footer (props) {
  const { onDidMount, classes, children } = props;
  return (
    <footer ref={ (el) => onDidMount instanceof Function && onDidMount(el) } className={ `footer py6 py3--mlg cf ${classes && classes}` }>
      { children && children }

      <div className="row">
        <div className="hide--msm">
          <FooterSocial />
        </div>
        <div className="contact-info layout--align-right">
          <a
            href="https://www.google.com/maps/place/8+California+St,+San+Francisco,+CA+94111/@37.793838,-122.3989129,17z/data=!3m1!4b1!4m5!3m4!1s0x808580615b0ca361:0xc58b8a2deddd07ae!8m2!3d37.793838!4d-122.3967242"
            target="_blank"
          >8 California St, San Francisco, CA 94111<br /></a>
          <a href="mailto:hello@redshiftdigital.com">hello@redshiftdigital.com<br /></a>
          <a href="tel:4153711500">415 371 1500</a>
        </div>
        <div className="show--msm">
          <FooterSocial />
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  onDidMount: React.PropTypes.func,
  classes: React.PropTypes.string,
  children: React.PropTypes.node
};

export default Footer;
