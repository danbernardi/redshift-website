import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { scrollDocToZero } from 'utils/scrollTo';
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

    this.timer = setTimeout(() => {
      scrollDocToZero();

      if (to === '/work') { dispatch(actions.goToNextCaseStudy(0, false, [-1])); }

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
