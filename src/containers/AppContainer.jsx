import React, { Component, PropTypes } from 'react';
import { browserHistory, Router } from 'react-router';
import { Provider, connect } from 'react-redux';
import { enableScroll, disableScroll } from 'utils/scrollJack';
// import * as actions from 'store/actions';
import 'modernizr';
import './styles.scss';
import ReactGA from 'react-ga';

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
    const body = document.getElementsByTagName('body');
    if (body && body[0]) { setTimeout(() => { body[0].style.opacity = '1'; }, 100); }
  }

  logPageView () {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
    const { hash } = window.location;
    if (hash !== '') {
      // Push onto callback queue so it runs after the DOM is updated,
      // this is required when navigating from a different page so that
      // the element is rendered on the page before trying to getElementById.
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) element.scrollIntoView();
      }, 0);
    }
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
        <Router history={ browserHistory } children={ routes } onUpdate={ this.logPageView } />
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
