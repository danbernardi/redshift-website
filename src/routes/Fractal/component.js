import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { changeValueTo } from './reducer';

export const FullyFractal = ({ fractal, dispatch }) => {

  return (
    <div style={ { margin: '0 auto' } } >
      <p onClick={ () => { dispatch(changeValueTo(Math.random())) } }>
        Click to change this value controlled by a local reducer: { fractal }
      </p>
      <Link to='/fractal/subroute'>Subroute</Link>
    </div>
  );
};

const { number, func } = React.PropTypes;
FullyFractal.propTypes = {
  dispatch: func,
  fractal: number
};

const mapStateToProps = (state) => ({
  fractal: state.fractal
});

export default connect(mapStateToProps)(FullyFractal);
