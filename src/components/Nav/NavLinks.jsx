import React from 'react';
import { connect } from 'react-redux';
import { scrollDocToZero } from 'utils/scrollTo';
import { Link } from 'react-router';
import * as actions from 'store/actions';
import PropTypes from 'prop-types';

class NavLinks extends React.Component {

  routingHandler (to) {
    const { dispatch } = this.props;
    dispatch(actions.toggleModal(false));
    this.timer = setTimeout(() => {
      scrollDocToZero();
      if (to === '/work') { dispatch(actions.goToNextCaseStudy(0, false, [-1])); }
      setTimeout(() => {
        dispatch(actions.setActiveModal(null, null));
      }, 200);
    }, 100);
  };

  componentWillUnmount () {
    window.clearInterval(this.timer);
  }

  render () {
    const { links, activeURL } = this.props;
    return (
      <ul className="nav__menu">
        {
          links.map((navLink, i) => (
            <li key={ i }>
              { navLink.to &&
                <div>
                  { navLink.to === activeURL
                    ? <div className="typ--h1 typ--bold typ--black typ--not__link">{ navLink.name }</div>
                    : <Link to={ navLink.to } className="typ--h1 typ--bold" onClick={ () => this.routingHandler() }>
                      { navLink.name }
                    </Link>
                  }
                </div>
              }

              { navLink.outgoing &&
                <a className="typ--h1 typ--bold" target="_blank" href={ navLink.outgoing }>{ navLink.name }</a>
              }
            </li>
          ))
        }
      </ul>
    );
  }
}
NavLinks.propTypes = {
  activeURL: PropTypes.string,
  dispatch: PropTypes.func,
  links: PropTypes.array
};

export default connect()(NavLinks);
