import React from 'react';
import { connect } from 'react-redux';
import { githubAPI } from 'store/asyncActions';
import { map } from 'react-immutable-proptypes';

import RM from 'utils/RequestManager';

export function ApiExample ({ dispatch, github }) {
  const rm = new RM(dispatch);
  return (
    <div className="row typ--center">
      <button className="btn btn-default" onClick={ () => {
        rm.dispatchIfHaventAlready(githubAPI.getRepo('reactjs', 'redux'));
      } }>
        Get repo
      </button>

      {
        github.get('redux') && <p className="mt5">
          Response stored in state.github.
          Future clicks will be ignored by Request Manager.
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
