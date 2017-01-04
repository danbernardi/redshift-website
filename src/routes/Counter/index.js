import React from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from 'store/actions';

export function Counter ({ dispatch, counter }) {
  return (
    <div className="row typ--center">
      <h2 className="mb1">Counter Value: {counter}</h2>
      <button className="btn btn-default mr2" onClick={ () => { dispatch(decrementCounter()); } }>
        Decrement
      </button>
      <button className="btn btn-default" onClick={ () => { dispatch(incrementCounter()); } }>
        Increment
      </button>
    </div>
  );
}

const { number, func } = React.PropTypes;
Counter.propTypes = {
  counter: number.isRequired,
  dispatch: func.isRequired
};

const mapStateToProps = (state) => ({
  counter: state.counter,
  delay: state.location && state.location.query
});

export default connect(mapStateToProps)(Counter);
