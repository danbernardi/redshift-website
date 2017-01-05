import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Nav from 'components/Nav';
{ /* import CsModals from 'components/case-studies/cs-modals'; */ }

import 'styles/core.scss';
import './CoreLayout.scss';

export function CoreLayout ({ children }) {
  return (
    <div className='page-wrap' id='content'>
      <Nav />
      { /* <CsModals /> */ }
      <div className='content-wrap'>
        <Header />
        {/* class needed for page somewhere */}
        <div className='content-main index content-swap'>
          { children }
        </div>
        <Footer />
      </div>
    </div>
  );
}

const { element } = React.PropTypes;
CoreLayout.propTypes = {
  children: element.isRequired
};

export default CoreLayout;
