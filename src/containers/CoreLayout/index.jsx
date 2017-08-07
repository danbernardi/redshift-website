import React from 'react';
import Modal from 'components/Modal';
import Header from 'components/Header';
import { metaInfo } from 'data/metaInfo';
import DocumentMeta from 'react-document-meta';

import { connect } from 'react-redux';
// import the breakpoints module from the new responsiveHelpers file
import { breakpoints } from 'utils/responsiveHelpers';
// import the setActiveBreakpoint action, which we will create in the next step
import { setActiveBreakpoint } from 'store/actions';
import PropTypes from 'prop-types';

import 'styles/core.scss';

export class CoreLayout extends React.Component {
  constructor (props) {
    super(props);
    // init media query array for store
    this.mediaQueryState = [];
  }
  componentDidMount () {
    // loop breakpoints to create media query
    Object.keys(breakpoints).forEach(key => {
      // new media query using matchMedia
      const query = window.matchMedia(`(max-width: ${breakpoints[key]}px)`);
      // add breakpoint value to new query
      query.breakpoint = breakpoints[key];
      // add the name
      query.name = key;

      // do something when the breakpoint changes
      function breakpointChange () {
        this.dispatchActiveQuery();
      }

      // attach a listener to the query
      query.addListener(breakpointChange.bind(this));
      // push the query back to the initial array
      this.mediaQueryState.push(query);
    });

    this.dispatchActiveQuery();

    if (window.emailjs) return;

    const script = document.createElement('script');
    const body = document.getElementsByTagName('body')[0];

    script.src = 'https://cdn.emailjs.com/dist/email.min.js';
    script.type = 'text/javascript';

    body.appendChild(script);

    this.initEmailjs();
  }

  dispatchActiveQuery () {
    const { dispatch } = this.props;
    const activeQuery = this.mediaQueryState.reduce((prev, curr) => curr.matches ? curr : prev && prev.matches ? prev : null);
    const breakpointName = activeQuery ? activeQuery.name : 'default';
    const breakpointSize = activeQuery && activeQuery.breakpoint;

    dispatch(setActiveBreakpoint(breakpointName, breakpointSize));
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

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired,
  dispatch: PropTypes.func
};

export default connect()(CoreLayout);
