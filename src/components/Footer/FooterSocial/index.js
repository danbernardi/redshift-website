import React from 'react';

const footerIcons = [
  {
    class: 'facebook',
    url: 'https://www.facebook.com/REDSHIFT-214656608561411/'
  },
  {
    class: 'twitter',
    url: 'https://twitter.com/weareredshift'
  },
  {
    class: 'instagram',
    url: 'https://www.instagram.com/redshiftdigital/'
  }
];

export function FooterSocial () {
  return (
    <ul className="list--inline social-icons">
      {
        footerIcons.map((footerIcon, i) => (
          <li key={ i }>
            <a href={ footerIcon.url }>
              <span className={ `icon-${footerIcon.class}` } />
            </a>
          </li>
        ))
      }
    </ul>
  );
};

export default FooterSocial;
