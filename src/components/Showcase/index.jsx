import React from 'react';
import ReactDOM from 'react-dom';
import Scene from './Scene';
import { onScroll, getScrollDirection, enableScroll, disableScroll } from 'utils/scrollJack';
import { connect } from 'react-redux';
import * as actions from 'store/actions';
import mojs from 'mo-js';
import { mapRange } from 'utils/animation';

export class Showcase extends React.Component {
  constructor (props) {
    super(props);

    this.scrollPoints = [];
    this.duration = 600;
    this.state = { sceneColor: '#fff' };
  }

  componentDidMount () {
    // onScroll(100, (event) => this.onScrollStart(event));
    const showcase = ReactDOM.findDOMNode(this.refs.showcase);
    // disableScroll(showcase);
  }

  componentWillUnmount () {
    const showcase = ReactDOM.findDOMNode(this.refs.showcase);
    // enableScroll(showcase);
  }

  // Deteremines scroll direction and navigates to next or previous scrollPoint
  onScrollStart (event) {
    const { bannerState } = this.props;

    const index = getScrollDirection(event) === 'down' ? bannerState.active + 1 : bannerState.active - 1;
    this.scrollToIndex(index);
  }

  // adds a scrollPoint element to this.scrollPoints
  addScrollPoint (element) {
    if (element && this.scrollPoints.indexOf(element) === -1) this.scrollPoints.push(element);
  }

  // scrolls to the scrollPoint that matches passed index
  scrollToIndex (bannerIndex) {
    const { dispatch, scenes } = this.props;
    const activeScene = scenes[bannerIndex - 1];
    const sceneColor = activeScene ? activeScene.color : '#fff';

    if (bannerIndex < 0 || bannerIndex >= this.scrollPoints.length) return false;

    if (bannerIndex > 0) dispatch(actions.setHeaderTheme('white'));
    if (bannerIndex === 0) dispatch(actions.setHeaderTheme('pink'));

    this.setState({ sceneColor });
    dispatch(actions.setActiveBanner(bannerIndex));

    const target = this.scrollPoints[bannerIndex];
    const frameHeight = window.innerHeight;
    const targetCenter = target.offsetTop + (target.offsetHeight / 2);

    this.scrollToPosition(targetCenter - frameHeight / 2);
  }

  // animates page scrolling to a specific location
  scrollToPosition (targetScrollPosition) {
    const showcase = ReactDOM.findDOMNode(this.refs.showcase);

    if (showcase) {
      const scrollStartPosition = showcase.scrollTop;

      new mojs.Tween({
        duration: this.duration,
        easing: 'cubic.out',
        onUpdate: (progress) => {
          const pos = mapRange(progress, 0, 1, scrollStartPosition, targetScrollPosition);
          showcase.scrollTop = pos;
        }
        // onPlaybackComplete: () => this.enableScroll()
      }).play();
    }
  }

  render () {
    const { scenes, leadingScene } = this.props;
    const { sceneColor } = this.state;

    return (
      <section ref="showcase" className="showcase parallax" style={ {
        // backgroundColor: sceneColor,
        transition: `background-color ${this.duration}ms ease-out`
      } }>
        <div className="parallax__group">
          { React.cloneElement(leadingScene, { onDidMount: (el) => this.addScrollPoint(el) }) }
        </div>

        { scenes.map((scene, index) => (
          <Scene
            onDidMount={ (el) => this.addScrollPoint(el) }
            key={ index }
            index={ index + 1 }
            { ...scene }
          />
        )) }
      </section>
    );
  }
}

Showcase.propTypes = {
  leadingScene: React.PropTypes.node,
  scenes: React.PropTypes.array,
  bannerState: React.PropTypes.object,
  dispatch: React.PropTypes.func
};

const injectStateProps = state => ({
  bannerState: state.bannerState
});

export default connect(injectStateProps)(Showcase);
