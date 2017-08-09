import React, { Component } from 'react';
import { browserHistory, Router } from 'react-router';
import { Provider, connect } from 'react-redux';
import { enableScroll, disableScroll } from 'utils/scrollJack';
import './styles.scss';
import ReactGA from 'react-ga';
import PropTypes from 'prop-types';

ReactGA.initialize('UA-48401766-1');

class AppContainer extends Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  }

  shouldComponentUpdate () {
    return false;
  }

  componentDidMount () {
    setTimeout(() => {
      document.querySelector('#loader').style.display = 'none';
    }, 200);
  }

  logPageView () {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }

  componentWillReceiveProps (nextProps) {
    // halt normal page scrolling if modal is open
    if (nextProps.modalState.open || location.pathnam === '/') {
      disableScroll();
    } else if (!nextProps.modalState.open && this.props.modalState.open && location.pathname !== '/') {
      enableScroll();
    }
  }

  render () {
    const { routes, store } = this.props;

    return (
      <Provider store={ store }>
        <Router
          history={ browserHistory }
          children={ routes }
          onUpdate={ this.logPageView } />
      </Provider>
    );
  }
}

const injectStateProps = state => ({
  modalState: state.modalState
});

AppContainer.propTypes = {
  modalState: PropTypes.object
};

export default connect(injectStateProps)(AppContainer);
