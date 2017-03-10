import React, { Component, PropTypes } from 'react';
import { browserHistory, Router } from 'react-router';
import { Provider, connect } from 'react-redux';
// import * as actions from 'store/actions';
import 'modernizr';
import './styles.scss';

class AppContainer extends Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  }

  shouldComponentUpdate () {
    return false;
  }

  componentDidMount () {
    const body = document.getElementsByTagName('body');
    if (body && body[0]) { setTimeout(() => { body[0].style.opacity = '1'; }, 100); }
  }

  componentWillReceiveProps (nextProps) {
    // halt normal page scrolling if modal is open
    if (nextProps.modalState.open) {
      disableScroll();
    } else if (!nextProps.modalState.open) {
      enableScroll();
    }
  }

  render () {
    const { routes, store } = this.props;

    return (
      <Provider store={ store }>
        <Router history={ browserHistory } children={ routes } />
      </Provider>
    );
  }
}

const injectStateProps = state => ({
  modalState: state.modalState
});

AppContainer.propTypes = {
  dispatch: React.PropTypes.func,
  modalState: React.PropTypes.object
};

export default connect(injectStateProps)(AppContainer);
