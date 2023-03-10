import React from 'react';
import { browserHistory, Router } from 'react-router';
import { Provider, connect } from 'react-redux';
import { enableScroll, disableScroll } from 'utils/scrollJack';
import './styles.scss';
import ReactGA from 'react-ga';
import PropTypes from 'prop-types';
import initReactFastclick from 'react-fastclick';
import { isTouchDevice } from 'utils/browserTests';
initReactFastclick();

ReactGA.initialize('UA-48401766-1');

/**
 * Renders a watcher component that is wrapped by the Watch higher order component
 * for handling events when divs are scrolled into view
 *
 * @param {Object} modalState         disable scroll when modal is open
 *
 */

class AppContainer extends React.Component {
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

    if (isTouchDevice) {
      document.querySelector('html').classList.add('is-touchdevice');
    };
  }

  logPageView () {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }

  componentWillReceiveProps (nextProps) {
    // halt normal page scrolling if modal is open
    if ((nextProps.modalState.open && !this.props.modalState.open) || location.pathname === '/') {
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
