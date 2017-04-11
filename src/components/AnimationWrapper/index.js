import React from 'react';
import Rx from 'rxjs/Rx';
import { mapRange } from 'utils/animation';

export class AnimationWrapper extends React.Component {
  constructor (props) {
    super(props);
    this.wrapper = null;
    this.scrollObservable = null;

    this.state = {
      animationProgress: null
    };

    //Flatten and memoize
    this.children = React.Children.toArray(this.props.children);

  }

  componentDidMount () {
    this.createObservables(this.wrapper);
  }

  createObservables (element) {
    this.scrollObservable = Rx.Observable.fromEvent(element, 'scroll');

    //Subscribe to the devices scroll event
    this.scrollSubscription = this.scrollObservable.subscribe((scrollEvent) => {
      const target = scrollEvent.target;
      const animationProgress = mapRange(target.scrollTop, 0, target.scrollHeight - target.offsetHeight, 0, 100);

      this.setState({
        animationProgress
      }, () => {
        this.props.onAnimationProgress(animationProgress);
      });
    });
  }


  render () {
    //Figure percentages start points
    const childCount = this.children.length;

    return (
      <div
        style={ { width: '100%', height: window.innerHeight, overflowY: 'scroll' } }
        ref={ (el) => { this.wrapper = el; }
      }>
        <div style={ { position: 'fixed', top: 10 } }>{ this.state.animationProgress }</div>
        { this.children.map((child, index) => {


          let lowEnd = 0;
          let hiEnd = null;
          let individualProgress = null;
          const sceneDuration = 100 / this.children.length;

          if (index === 0) {
            lowEnd = 0;
            hiEnd = sceneDuration;
          } else {
            lowEnd = index * sceneDuration - (sceneDuration / 2);
            hiEnd = index * sceneDuration + (sceneDuration / 2);
          }

          //Pass animation progress to each child
          individualProgress = mapRange(this.state.animationProgress, lowEnd, hiEnd, 0, 100);
          return React.cloneElement(child, { animationProgress: individualProgress });
        })
        }
      </div>
    );
  }
}

export default AnimationWrapper;

