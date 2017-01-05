import React from 'react';
import FooterSocial from './FooterSocial';

export function Footer () {
  return (
    <footer className='footer py6 py3--mlg cf'>
      <div className='row'>
        <div className='hide--msm'>
          <FooterSocial />
        </div>
        <div className='contact-info layout--align-right'>
          <span>8 California St, San Francisco, CA 94111<br /></span>
          <a href='mailto:hello@redshiftdigital.com'>hello@redshiftdigital.com<br /></a>
          <a href='tel:4154333776'>415 433 3776</a>
        </div>
        <div className='show--msm'>
          <FooterSocial />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
