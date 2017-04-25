import React from 'react';
import Scene from './Scene';
import Footer from 'components/Footer';
import { Link } from 'react-router';
import { scrollDocToZero } from 'utils/scrollTo';
import { connect } from 'react-redux';
import Rx from 'rxjs/Rx';
import { mapRange, isInRange } from 'utils/animation';

export class Showcase extends React.Component {
  constructor (props) {
    super(props);

    this.duration = 500;
    this.container = null;
    this.scrollObservable = null;
    this.colors = ['#FFFFFF'].concat(this.props.scenes.map((scene) => scene.color)).concat(['#FFFFFF']);
    this.children = this.buildChildren();
    this.scrollPoints = [];
    this.sceneMeta = [];

    this.state = {
      animationProgress: 0
    };
  }

  componentDidMount () {
    // if(location.pathname) {
    //   this.container.scrollTop = window.innerHeight * 1.5;
    // }

    this.createObservables(this.container);

    //Wait to get accurate height
    setTimeout(() => {
      this.sceneMeta = this.setSceneMeta();
    }, 300);
  }

  //TODO: move this logic to Home component and pass as children
  buildChildren () {
    const children = React.Children.toArray([
      this.header(),
      this.sections(),
      this.footer()
    ]);

    return children.map((child, index) => {
      return React.cloneElement(child, {
        animationProgress: 0,
        index,
        onDidMount: (el) => this.addScrollPoint(el, index)
      });
    });
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
   * Creates a scroll observable and maps it to a timeline in state
   * @param  {Object} element A dom element
   */
  createObservables (element) {
    this.scrollObservable = Rx.Observable.fromEvent(element, 'scroll');

    //Subscribe to the devices scroll event
    this.scrollSubscription = this.scrollObservable.subscribe((scrollEvent) => {
      const target = scrollEvent.target;
      const animationProgress = mapRange(target.scrollTop, 0, target.scrollHeight, 0, 1);

      this.setState({
        animationProgress
      });
    });
  }

  addScrollPoint (element) {
    if (element && this.scrollPoints.indexOf(element) === -1) {
      this.scrollPoints.push({
        element
      });
    };
  }

  setSceneMeta () {
    let currentTimePosition = 0;
    const segments = this.scrollPoints.map((scene) => {
      const height = scene.element.offsetHeight;
      const timelinePercentage = scene.element.offsetHeight / this.container.scrollHeight;
      const low = currentTimePosition;
      const high = currentTimePosition + timelinePercentage;

      const segmentMeta = {
        height,
        timelinePercentage,
        animationProgress: 0,
        bounds: {
          low,
          high
        }
      };

      // increment position
      currentTimePosition = high;
      return segmentMeta;
    });

    return segments;
  }

  transitionScene (sceneIndex) {
    this.setState({
      activeScene: sceneIndex
    });
  }

  render () {
    let sceneBgColor = '#fff';
    if (this.sceneMeta.length) {
      const ap = this.state.animationProgress;

      let i = 0;
      const childCount = this.children.length;

      while (i < childCount) {
        const range = this.sceneMeta[i].bounds;

        // The + 1/24 is padding to trigger proper color change on the footer
        if (isInRange(ap + 1 / 24, range.low, range.high)) {
          sceneBgColor = this.colors[i];
        }

        i++;
      }
    }

    // const renderChildren = this.children.map((child, index) => {
    //   const range = this.sceneAnimationRange(index, this.children.length, 1);

    //   //Pass animation progress to each child
    //   const individualProgress = mapRange(this.state.animationProgress, range.low, range.high, 0, 1);
    //   return React.cloneElement(child, {
    //     animationProgress: individualProgress,
    //     index,
    //     onDidMount: (el) => this.addScrollPoint(el, index)
    //   });
    // });

    return (
      <section ref={ (element) => { this.container = element; } } className="showcase" style={ {
        backgroundColor: sceneBgColor || '#fff',
        transition: `background-color ${this.duration}ms ease-out`,
        width: '100%',
        height: window.innerHeight,
        position: 'fixed',
        overflowY: 'scroll',
        top: 0
      } }>

        { /* For animation debugging*/ }
        <div style={ { position: 'fixed', top: 10, left: 20 } }>
          {this.state.animationProgress}
        </div>

        { /* React.cloneElement(leadingScene, { clickCallback: () => {
            //do something with arrow click
          } }) */}

        { this.sceneMeta.length ? this.children.map((child, index) => {
          return React.cloneElement(child, {
            animationProgress: mapRange(this.state.animationProgress, this.sceneMeta[index].bounds.low, this.sceneMeta[index].bounds.high, 0, 1),
            index,
            onDidMount: (el) => this.addScrollPoint(el, index)
          });
        })
        : this.children /* We need to mount the children initially to get their height */
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
