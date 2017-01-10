import React, { Component, PropTypes } from 'react';
import { browserHistory, Router } from 'react-router';
import { Provider, connect } from 'react-redux';
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

  componentWillReceiveProps (nextProps) {
    const html = document.getElementsByTagName('html');

    // halt normal page scrolling if modal is open
    if (nextProps.modalState.open) {
      if (html && html[0]) { html[0].classList.add('modal--open'); }
    } else {
      if (html && html[0]) { html[0].classList.remove('modal--open'); }
    }
  }

  render () {
    const { routes, store } = this.props;

    return (
      <Provider store={ store }>
        <div style={ { height: '100%' } }>
          <Router history={ browserHistory } children={ routes } />
        </div>
      </Provider>
    );
  }
}

const injectStateProps = state => ({
  modalState: state.modalState
});

export default connect(injectStateProps)(AppContainer);
