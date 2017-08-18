import React from 'react';
import * as actions from 'store/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import './404.scss';
import PropTypes from 'prop-types';

class FourOhFour extends React.Component {
  componentDidMount () {
    const { dispatch } = this.props;
    dispatch(actions.setHeaderTheme('white'));
  }

  render () {
    return (
      <div className="theme--dark four0four layout--fullheight layout--flex">
        <div className="row typ--center">
          <h2 className="typ--bold">
            What you were searching<br />
            for doesn't exist.
          </h2>

          <h5 className="mb1">Here are some things that do exist</h5>
          <ul>
            <li><Link className="typ--bold px2 mb1--mxsm" to="/">Our work</Link></li>
            <li><Link className="typ--bold px2 mb1--mxsm" to="/about">About us</Link></li>
            <li><Link className="typ--bold px2 mb1--mxsm" to="/careers">Careers</Link></li>
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
