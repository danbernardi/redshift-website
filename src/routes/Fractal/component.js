import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { changeValueTo } from './reducer';

export const Fractal = ({ fractal, dispatch }) => {

  return (
    <div className="row typ--center">
      <h2 className="mb1">Test Local Reducer</h2>
      <p>
        Click button to change this value controlled by a local reducer:
      </p>
      <button className='btn btn-default my5' onClick={ () => { dispatch(changeValueTo(Math.random())) } }>
        Randomize
      </button>
      <p>{ fractal }</p>
      <Link to='/fractal/subroute'>Link to Subroute</Link>
    </div>
  );
};

const { number, func } = React.PropTypes;
Fractal.propTypes = {
  dispatch: func,
  fractal: number
};

const mapStateToProps = (state) => ({
  fractal: state.fractal
});

export default connect(mapStateToProps)(Fractal);
