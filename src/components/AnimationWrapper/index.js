import React from 'react';
import Rx from 'rxjs/Rx';
import gsap from 'gsap';

export class AnimationWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.wrapper = null;
    this.scrollObservable = null;

    this.state = {
      animationPercent: null
    };
  }

  componentDidMount () {
    this.createObservables();
  }

  createObservables () {
    this.scrollObservable = Rx.Observable.fromEvent(this.wrapper, 'scroll');

    //Subscribe to the devices scroll event
    this.scrollSubscription = this.scrollObservable.subscribe((scrollEvent) => {
      const target = scrollEvent.target;
      const animationPercent = ((target.scrollTop + target.offsetHeight) / target.scrollHeight) * 100;

      this.setState({
        animationPercent
      }, () => {
        this.props.onAnimationProgress(animationPercent);
      });
    });
  }

  render () {
    return (
      <div
        style={ { width: '100%', height: window.innerHeight, overflowY: 'scroll' } }
        ref={ (el) => {
          this.wrapper = el;
        }
      }>
        <div style={{ position: 'fixed', top: 10 }}>{ this.state.animationPercent }</div>
        { this.props.children }

      </div>
    );
  }
}

export default AnimationWrapper;

