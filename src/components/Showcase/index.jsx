import React from 'react';
import Scene from './Scene';
import Footer from 'components/Footer';
import { Link } from 'react-router';
import { scrollDocToZero } from 'utils/scrollTo';
import { connect } from 'react-redux';
import Rx from 'rxjs/Rx';
import { mapRange } from 'utils/animation';

import AnimationWrapper from 'components/AnimationWrapper';

export class Showcase extends React.Component {
  constructor (props) {
    super(props);

    this.duration = 500;
    this.container = null;
    this.scrollObservable = null;
    this.colors = ['#FFFFFF'].concat(this.props.scenes.map((scene) => scene.color)).concat(['#FFFFFF']);
    this.children = this.buildChildren();

    this.state = {
      sceneColor: '#fff',
      animationProgress: 0
    };
  }

  componentDidMount () {
    this.createObservables(this.container);
  }

  //TODO: move this logic to Home component and pass as children
  buildChildren () {
    const children = [
      this.header(),
      this.sections(),
      this.footer()
    ];

    return React.Children.toArray(children);
  }

  header () {
    return React.cloneElement(this.props.leadingScene);
  }

  sections () {
    return this.props.scenes.map((scene, index) => (
      <Scene
        key={ index }
        index={ index + 1 }
        { ...scene }
      />
    ));
  }

  //TODO: Abstract to own component
  footer () {
    return (
      <Footer classes="footer__tall" >
        <div className="footer__center">
          <div className="row">
            <ul className="typ--bold">
              <li className="typ--h1" onClick={ () => scrollDocToZero() }><Link className="typ--redshift" to="/about">About.</Link></li>
              <li className="typ--h1" onClick={ () => scrollDocToZero() }><Link className="typ--redshift" to="/careers">Careers.</Link></li>
              <li className="typ--h1"><a className="typ--redshift" href="http://weareredshift.tumblr.com/" target="_blank">Blog.</a></li>
            </ul>
          </div>
        </div>
      </Footer>
    );
  }

  /**
   * Returns a low (start) and high (end) relative to a timeline
   * @param  {Number} index     The index of the segment
   * @param  {Number} segments  The number of segements
   * @param  {Number} timeLineLength Duration of overall animation
   * @return {Object}                Returns an object with a low and high key
   */
  sceneAnimationRange (index, segments, timeLineLength = 100) {
    const segmentLength = (timeLineLength + (timeLineLength / segments)) / segments;

    return {
      low: index * segmentLength - (segmentLength / 2),
      high: index * segmentLength + (segmentLength / 2)
    };
  }

  /**
   * Checks if numuber is contained within a range.  Inclusive of
   * minimum, exclusive of maximum;
   * @param  {Number}  val Value to check
   * @param  {Number}  min Minimum range
   * @param  {Number}  max Maximum range (exclusive)
   * @return {Boolean} Returns true or false
   */
  isInRange (val, min, max) {
    return val >= min && val <= max;
  }

  /**
   * Creates a scroll observable and maps it to a timeline in state
   * @param  {Object} element A dom element
   */
  createObservables (element) {
    this.scrollObservable = Rx.Observable.fromEvent(element, 'scroll');

    //Subscribe to the devices scroll event
    this.scrollSubscription = this.scrollObservable.subscribe((scrollEvent) => {
      const target = scrollEvent.target;
      const animationProgress = mapRange(target.scrollTop, 0, target.scrollHeight - target.offsetHeight, 0, 100);

      this.setState({
        animationProgress
      });
    });
  }


  render () {
    const { scenes, leadingScene } = this.props;

    let sceneBgColor = '#fff';
    const ap = this.state.animationProgress;

    let i = 0;
    const childCount = 6;


    while (i < childCount) {
      const range = this.sceneAnimationRange(i, childCount);

      if (this.isInRange(ap, range.low, range.high)) {
        sceneBgColor = this.colors[i];
      }

      i++;
    }

    return (
      <section ref={ (element) => { this.container = element; } } className="showcase" style={ {
        backgroundColor: sceneBgColor || '#fff',
        transition: `background-color ${this.duration}ms ease-out`,
        width: '100%',
        height: window.innerHeight,
        position: 'fixed',
        overflowY: 'scroll',
        top: 0,
        border: '1px solid red'
      } }>

        { /* For animation debugging*/ }
        <div style={ { position: 'fixed', top: 10, left: 20 } }>
          {this.state.animationProgress}
        </div>

        { /* React.cloneElement(leadingScene, { clickCallback: () => {
            //do something with arrow click
          } }) */}

        { this.children.map((child, index) => {
            const range = this.sceneAnimationRange(index, this.children.length);

            //Pass animation progress to each child
           const individualProgress = mapRange(this.state.animationProgress, range.low, range.high, 0, 100);
            return React.cloneElement(child, { animationProgress: individualProgress });
          })
        }



      </section>
    );
  }
}

Showcase.propTypes = {
  leadingScene: React.PropTypes.node,
  scenes: React.PropTypes.array,
  bannerState: React.PropTypes.object,
  dispatch: React.PropTypes.func,
  modalState: React.PropTypes.object
};

const injectStateProps = state => ({
  bannerState: state.bannerState,
  locationHistory: state.locationHistory,
  modalState: state.modalState
});

export default connect(injectStateProps)(Showcase);
