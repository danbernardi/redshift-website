import React from 'react';
import Modal from 'components/Modal';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Nav from 'components/Nav';
{ /* import CsModals from 'components/case-studies/cs-modals'; */ }

import 'styles/core.scss';
import './CoreLayout.scss';

export function CoreLayout ({ children }) {
  const pathClass = {
    '': 'root',
    about: 'about',
    careers: 'careers'
  }[location.pathname.slice(1)];

  return (
    <div className={ 'page-wrap'.concat(` ${pathClass}`) } id="content">
      <Modal />

      <Nav />

      { /* <CsModals /> */ }
      <div className="content-wrap">
        <Header />
        {/* class needed for page somewhere */}
        <div className={ `${pathClass} content-main content-swap` }>
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
