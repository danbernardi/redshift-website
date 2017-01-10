import React from 'react';
import Modal from 'components/Modal';
import Header from 'components/Header';
// import Footer from 'components/Footer';
import Nav from 'components/Nav';

// import CsModals from 'components/case-studies/cs-modals';

import 'styles/core.scss';
import './CoreLayout.scss';

export class CoreLayout extends React.Component {
  componentDidMount () {
    if (window.emailjs) return;

    const script = document.createElement('script');
    const body = document.getElementsByTagName('body')[0];

    script.src = 'https://cdn.emailjs.com/dist/email.min.js';
    script.type = 'text/javascript';

    body.appendChild(script);

    this.initEmailjs();
  }

  // Keep trying to initialize until two seconds have passed
  initEmailjs (attempt = 0) {
    if (attempt >= 10) {
      console.error('Failed to initialize emailjs!');
      return;
    }

    setTimeout(() => {
      if (window.emailjs) {
        window.emailjs.init('user_6TiXPRNCY6MhiuslNSu0v');
      } else {
        this.initEmailjs(attempt + 1);
      }
    }, 200);
  }

  render () {
    const pathClass = {
      '': 'root',
      about: 'about',
      careers: 'careers'
    }[location.pathname.slice(1)];
    const { children } = this.props;

    return (
      <div className={ `${pathClass} page-wrap` } id="content">
        <Modal />

        <Nav />

        <div className="content-wrap">
          <Header />
          {/* class needed for page somewhere */}
          <div className={ `${pathClass} content-main content-swap` }>
            { children }
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    );
  }
}

const { element } = React.PropTypes;
CoreLayout.propTypes = {
  children: element.isRequired
};

export default CoreLayout;
