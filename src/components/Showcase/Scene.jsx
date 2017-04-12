import React from 'react';
import { connect } from 'react-redux';
import SceneDevice from './SceneDevice';
import SceneText from './SceneText';
import './Scene.scss';


import { TimeLineMax } from 'gsap';


export class Scene extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      animationInProgress: false,
      animationProgress: 0,
      active: true
    };

    // this.timeline = null;
  }

  componentDidMount () {
    // this.timeline = new TimelineMax({onUpdate: () => {
    //   this.setState({
    //     animationProgress: this.timeline.progress()
    //   })
    // }});

    // let tlValues = { progress: 0 };
    // this.timeline.pause();

    // this.timeline
    //   .to(tlValues, 1, { progress: 100, onUpdate: (val) => {
    //     console.log(this.timeline.progress())
    //   }});

  }

  shouldComponentUpdate (nextProps) {
    return nextProps.animationProgress >= 0 && nextProps.animationProgress <= 100;
  }

  componentDidUpdate (prevProps, prevState) {

    // const { bannerState, index } = this.props;

    // if (prevProps.bannerState.active !== bannerState.active) {
    //   if (bannerState.active === index) this.setActive(true);
    //   if (bannerState.active !== index && prevState.active) this.setActive(false);
    // }
  }

  setActive (state) {
    this.setState({ active: state });
  }

  animate () {

  }

  playAnimation () {
    this.timeline.play();
  }

  pauseAnimation () {
    this.timeline.pause();
  }

  render () {
    const { id, caption, onDidMount, device, animationProgress } = this.props;
    console.log(`scene: ${id} `, animationProgress)
    const { active } = this.state;

    return (
      <div
        className={ `scene sc__${id}` }
        data-id={ id }
        style={ { pointerEvents: active ? 'auto' : 'none' } }
      >
        <SceneDevice
          id={ id }
          { ...device }
          active={ active }
          ref={ (element) => { this.SceneDevice = element } }
          animationProgress = { animationProgress }
        />

        <SceneText
          id={ id }
          caption={ caption }
          active={ active }
          ref={ (element) => { this.SceneText = element } }
          animationProgress = { animationProgress }
        />
      </div>
    );
  }
}

Scene.propTypes = {
  index: React.PropTypes.number,
  id: React.PropTypes.string,
  caption: React.PropTypes.array,
  onDidMount: React.PropTypes.func,
  device: React.PropTypes.object,
  bannerState: React.PropTypes.object,
  color: React.PropTypes.string
};

const injectStateProps = state => ({
  bannerState: state.bannerState
});

export default connect(injectStateProps)(Scene);
