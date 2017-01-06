import React from 'react';
import { connect } from 'react-redux';
import { githubAPI } from 'store/asyncActions';
import { map } from 'react-immutable-proptypes';

export function ApiExample ({ dispatch, github }) {
  return (
    <div className="row typ--center">
      <button className="btn btn-default" onClick={ () => {
        dispatch(githubAPI.getRepo('reactjs', 'redux'));
      } }>
        Get repo
      </button>

      {
        github.get('redux') && <p className="mt5">
          Request has come back successfully. Look in state.github.
        </p>
      }
    </div>
  );
}

const { func } = React.PropTypes;
ApiExample.propTypes = {
  github: map,
  dispatch: func
};

const mapStateToProps = (state) => ({
  github: state.github
});

export default connect(mapStateToProps)(ApiExample);
