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
    const { dispatch } = this.props;
    const body = document.getElementsByTagName('body');
    if (body && body[0]) { setTimeout(() => { body[0].style.opacity = '1'; }, 100); }
    // if (location.pathname === '/work') { dispatch(actions.goToNextCaseStudy(0, false, [-1])); }
  }

  componentWillReceiveProps (nextProps) {
    const html = document.getElementsByTagName('html');

    // halt normal page scrolling if modal is open
    if (nextProps.modalState.open) {
      if (html && html[0]) { html[0].classList.add('disable-scroll'); }
    } else {
      if (html && html[0]) { html[0].classList.remove('disable-scroll'); }
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
  dispatch: React.PropTypes.func
};

export default connect(injectStateProps)(AppContainer);
