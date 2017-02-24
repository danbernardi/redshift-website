import React from 'react';
import * as actions from 'store/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import './404.scss';

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
          <ul className="list--inline">
            <li><Link className="typ--bold px1" to="/work">Our work</Link></li>
            <li><Link className="typ--bold px1" to="/about">About us</Link></li>
            <li><Link className="typ--bold px1" to="/careers">Careers</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

FourOhFour.propTypes = {
  dispatch: React.PropTypes.func
};

export default connect()(FourOhFour);
