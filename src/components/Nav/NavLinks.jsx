import React from 'react';
import { connect } from 'react-redux';
import { scrollDocToZero } from 'utils/scrollTo';
import { Link } from 'react-router';
import * as actions from 'store/actions';

class NavLinks extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      staggerIn: true
    };
  }

  // componentDidMount () {
  //   setTimeout(() => {
  //     this.setState({ staggerIn: true });
  //   }, 100);
  // }

  routingHandler (to) {
    const { dispatch } = this.props;

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
              { navLink.to &&
                <Link to={ navLink.to } className="typ--h1 typ--bold" onClick={ () => this.routingHandler() }>
                  { navLink.name }
                </Link>
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
  dispatch: React.PropTypes.func,
  links: React.PropTypes.array
};

export default connect()(NavLinks);
