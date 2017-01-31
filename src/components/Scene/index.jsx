import React from 'react';
import './Scene.scss';

export class Scene extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      topValue: 0
    };
  }

  componentDidMount () {
    this.setTopValue();
  }

  setTopValue () {
    const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    const topValue = viewportHeight / 2;

    this.setState({ topValue });
  }

  clickHandler () {
    const { clickCallback } = this.props;
    if (clickCallback instanceof Function) { clickCallback(); }
  }

  render () {
    const { children } = this.props;
    const { topValue } = this.state;

    return (
      <div className="scene" style={ { top: topValue } } onClick={ () => this.clickHandler() }>
        { children }
      </div>
    );
  }
}

Scene.propTypes = {
  children: React.PropTypes.node,
  clickCallback: React.PropTypes.func
};

export default Scene;
