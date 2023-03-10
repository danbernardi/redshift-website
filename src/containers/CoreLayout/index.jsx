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

/**
 * Renders a watcher component that is wrapped by the Watch higher order component
 * for handling events when divs are scrolled into view
 * @param {Object} props
 * @param {function} dispatch              dispatches active breakpoints
 * @param {element} children            active page content
 * @return {React.Component}
 */

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
  }

  dispatchActiveQuery () {
    const { dispatch } = this.props;
    const activeQuery = this.mediaQueryState.reduce((prev, curr) => curr.matches ? curr : prev && prev.matches ? prev : null);
    const breakpointName = activeQuery ? activeQuery.name : 'default';
    const breakpointSize = activeQuery && activeQuery.breakpoint;

    dispatch(setActiveBreakpoint(breakpointName, breakpointSize));
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
