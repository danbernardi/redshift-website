import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { changeNumberTo } from './reducer';

export const Fractal = ({ number, dispatch }) => (
  <div className="row typ--center">
    <h2 className="mb1">Test Local Reducer</h2>
    <p>
        Click button to change this value controlled by a local reducer:
      </p>
    <button className="btn btn-default my5" onClick={ () => { dispatch(changeNumberTo(Math.random())); } }>
        Randomize
      </button>
    <p>{ number }</p>
    <Link to="/fractal/subroute">Link to Subroute</Link>
  </div>
  );

const { number, func } = React.PropTypes;
Fractal.propTypes = {
  dispatch: func,
  number: number
};

const mapStateToProps = (state) => ({
  number: state.fractal.get('number')
});

export default connect(mapStateToProps)(Fractal);
