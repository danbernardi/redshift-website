import React from 'react';
import * as actions from 'store/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import './404.scss';
import PropTypes from 'prop-types';

/**
 * Renders a watcher component that is wrapped by the Watch higher order component
 * for handling events when divs are scrolled into view
 * @param {function} dispatch                 sets header theme class
 * @return {React.Component}
 */

class FourOhFour extends React.Component {
  componentDidMount () {
    const { dispatch } = this.props;
    dispatch(actions.setHeaderTheme('white'));
  }

  render () {
    return (
      <div className="theme--dark four0four layout--flex">
        <div className="row typ--center">
          <h2 className="typ--bold">
            What you were searching<br />
            for doesn't exist.
          </h2>

          <p className="typ--b1 typ--bold">Here are some things that do exist</p>
          <ul className="typ--b3">
            <li><Link className="typ--bold px2" to="/">Our work</Link></li>
            <li><Link className="typ--bold px2" to="/about">About us</Link></li>
            <li><Link className="typ--bold px2" to="/careers">Careers</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

FourOhFour.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(FourOhFour);
