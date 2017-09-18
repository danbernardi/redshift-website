import React from 'react';
import { connect } from 'react-redux';
import { scrollDocToZero } from 'utils/scrollTo';
import { Link } from 'react-router';
import * as actions from 'store/actions';
import PropTypes from 'prop-types';

/**
  * Header - Modal Component
  *
  * @param {function} dispatch                toggle modal window
  * @param {function} link                    nav links from nav index
  * @returns {React.Component}                Returns a react component
*/

class NavLinks extends React.Component {

  routingHandler (to) {
    const { dispatch } = this.props;
    dispatch(actions.toggleModal(false));
    this.timer = setTimeout(() => {
      scrollDocToZero();
      if (to === '/') { dispatch(actions.goToNextCaseStudy(0, false, [-1])); }
      setTimeout(() => {
        dispatch(actions.setActiveModal(null, null));
      }, 200);
    }, 100);
  };

  componentWillUnmount () {
    window.clearInterval(this.timer);
  }

  render () {
    const { links } = this.props;
    return (
      <ul className="nav__menu">
        {
          links.map((navLink, i) => (
            <li key={ i }>
              { navLink.to &&
                <Link to={ navLink.to } className="typ--menu typ--bold" onClick={ () => this.routingHandler() }>
                  { navLink.name }
                </Link>
              }

              { navLink.outgoing &&
                <a className="typ--menu typ--bold" target="_blank" href={ navLink.outgoing }>{ navLink.name }</a>
              }
            </li>
          ))
        }
      </ul>
    );
  }
}
NavLinks.propTypes = {
  dispatch: PropTypes.func,
  links: PropTypes.array
};

export default connect()(NavLinks);
