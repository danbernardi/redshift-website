import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import * as actions from 'store/actions';

class NavLinks extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      staggerIn: false
    };
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({ staggerIn: true });
    }, 100);
  }

  routingHandler (to) {
    const { dispatch } = this.props;

    browserHistory.push(to);
    const body = document.getElementsByTagName('body');
    if (body && body[0]) { body[0].scrollTop = 0; }

    this.timer = setTimeout(() => {
      if (to === '/work') {
        const work = document.getElementsByName('work');
        if (work && work[0] && body && body[0]) { body[0].scrollTop = work[0].getBoundingClientRect().top; }
      }

      dispatch(actions.toggleModal(false));
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
    const { staggerIn } = this.state;

    return (
      <ul className={ `nav__menu list--block full-height ${staggerIn ? 'stagger-in' : ''}` }>
        {
          links.map((navLink, i) => (
            <li key={ i }>
              <h1 className="typ--bold" onClick={ () => this.routingHandler(navLink.to) }>
                { navLink.name }
              </h1>
            </li>
          ))
        }
      </ul>
    );
  }
}
NavLinks.propTypes = {
  dispatch: React.PropTypes.func,
  links: React.PropTypes.array
};

export default connect()(NavLinks);
