import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import * as actions from 'store/actions';

const NavLinks = props => {
  const { dispatch, links } = props;

  const routingHandler = (to) => {
    browserHistory.push(to);
    const body = document.getElementsByTagName('body')
    if (body && body[0]) { body[0].scrollTop = 0; }

    setTimeout(() => {
      if (to === '/work') {
        const work = document.getElementsByName('work');
        if (work && work[0] && body && body[0]) { body[0].scrollTop = work[0].getBoundingClientRect().top }
      }

      dispatch(actions.toggleModal(false));
    }, 100);
  };

  return (
    <ul className="nav__menu list--block">
      {
        links.map((navLink, i) => (
          <li key={ i }>
            <h1 className="typ--bold" onClick={ () => routingHandler(navLink.to) }>
              { navLink.name }
            </h1>
          </li>
        ))
      }
    </ul>
  );
};

NavLinks.propTypes = {
  dispatch: React.PropTypes.func,
  links: React.PropTypes.array
};

export default connect()(NavLinks);
