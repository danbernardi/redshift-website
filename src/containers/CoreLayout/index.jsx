import React from 'react';
import Modal from 'components/Modal';
import Header from 'components/Header';
import 'styles/core.scss';
import './CoreLayout.scss';
import { metaInfo } from 'data/metaInfo';
import DocumentMeta from 'react-document-meta';

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
    const { children } = this.props;
    const pathname = location.href.substr(location.href.lastIndexOf('/') + 1) || 'home';

    return (
      <DocumentMeta { ...metaInfo[pathname] } extend={ true }>
        <div className="page-wrap">
          <Modal />
          <div className="content-wrap">
            <Header />
            {/* class needed for page somewhere */}
            <div className="content-main">
              { children }
            </div>
            {/* <Footer /> */}
          </div>
        </div>
      </DocumentMeta>
    );
  }
}

const { element } = React.PropTypes;
CoreLayout.propTypes = {
  children: element.isRequired
};

export default CoreLayout;
