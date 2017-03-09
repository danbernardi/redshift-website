import React from 'react';
import ReactDOM from 'react-dom';
import Rx from 'rxjs/Rx';
import Scene from './Scene';
import { onScroll, getScrollDirection, enableScroll, disableScroll } from 'utils/scrollJack';
import { connect } from 'react-redux';
import * as actions from 'store/actions';
import mojs from 'mo-js';
import { mapRange } from 'utils/animation';
import * as browser from 'utils/browserTests';
import { getClosestNumber } from 'utils/closestNumber';
import Footer from 'components/Footer';
import { Link } from 'react-router';
import { scrollDocToZero } from 'utils/scrollTo';

export class Showcase extends React.Component {
  constructor (props) {
    super(props);

    this.scrollPoints = [];
    this.duration = 600;
    this.scrollObservable = null;
    this.scrollYPosition = null;
    this.scrollAnimationInProgress = false;
    this.state = { sceneColor: '#fff' };
  }

  componentDidMount () {

    enableScroll();
    this.scrollObservable = Rx.Observable.fromEvent(window, 'scroll');
     // Get the three major events
    // this.mouseup = Rx.Observable.fromEvent(window, 'mouseup');
    // this.mousemove = Rx.Observable.fromEvent(window, 'mousemove');
    // this.mousedown = Rx.Observable.fromEvent(window, 'mousedown');

    // this.mouseDrag = this.mousedown.flatMap((mouseDownEvent) => {
    //   return this.mousemove.map((mouseMoveEvent) => {
    //     return mouseMoveEvent;
    //   }).takeUntil(this.mouseup);
    // });

    // const scrollDrag = Rx.Observable.fromEvent(window, 'mousedown').takeUntil(mouseup);

    // const mouseDrag = this.scrollDrag.subscribe((event) => console.log(event));


    // this.mouseDrag.subscribe((dragEvent) => {
    //   console.log('dragging');
    // });

    this.scrollYPosition = window.pageYOffset;

    const scrollSubscription = this.scrollObservable.subscribe(
      (scrollEvent) => {
        debugger;
        const newYPosition = window.pageYOffset;
        const direction = getScrollDirection(this.scrollYPosition, newYPosition);


        if (this.scrollAnimationInProgress) {
          return;
        } else {
          this.scrollStart(direction);
          this.updateScrollPosition(newYPosition);
        }

        // debugger;
      },
      function (err) {
        console.log('Error: %s', err);
      },
      function () {
        console.log('Completed');
    });



    // onScroll(100, (event) => this.onScrollStart(event));
    // disableScroll();

    // // timeout of 1 waits for body to return correct scrollTop
    // setTimeout(() => this.scrollToClosestIndex(), 200);

    // console.log('mounted');
  }

  updateScrollPosition (yPosition) {
    this.scrollYPosition = yPosition;
    console.log(this.scrollYPosition);
  }

  componentWillUnmount () {
    enableScroll();
  }

  // Deteremines scroll direction and navigates to next or previous scrollPoint
  scrollStart (scrollDirection) {
    const { bannerState, modalState } = this.props;

    if (!modalState.open) {
      if (scrollDirection) {
        const index = scrollDirection === 'down' ? bannerState.active + 1 : bannerState.active - 1;
        this.scrollToIndex(index);
      }
    }
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
    if (bannerIndex === 0 || bannerIndex === this.scrollPoints.length - 1) dispatch(actions.setHeaderTheme('pink'));

    dispatch(actions.setActiveBanner(bannerIndex, sceneColor));

    const target = this.scrollPoints[bannerIndex];
    const frameHeight = window.innerHeight;
    const targetCenter = target.offsetTop + (target.offsetHeight / 2);

    this.scrollToPosition(targetCenter - frameHeight / 2);
  }

  // animates page scrolling to a specific location
  scrollToPosition (targetScrollPosition) {
    const showcase = ReactDOM.findDOMNode(this.refs.showcase);

    if (showcase) {
      const scrollStartPosition = window.scrollY;

      new mojs.Tween({
        duration: this.duration,
        easing: 'cubic.out',
        onUpdate: (progress) => {
          const pos = mapRange(progress, 0, 1, scrollStartPosition, targetScrollPosition);
          window.scrollTo(0, pos);
        },
        onPlaybackComplete: () => this.scrollComplete()
      }).play();
    }
  }

   // Scrolls to the closest scrollPoint to the current page scroll value
  scrollToClosestIndex () {
    let doc = document.querySelector('body');
    if (browser.isFirefox) doc = document.querySelector('html');

    if (doc) {
      const closestNumber = getClosestNumber(doc.scrollTop, this.scrollPoints.map(p => p.offsetTop));
      const currentIndex = this.scrollPoints.findIndex(p => p.offsetTop === closestNumber);
      this.scrollToIndex(currentIndex);
    }
  }

  scrollToTop () {
    scrollDocToZero();
  }

  scrollComplete () {
    console.log('complete');
    this.scrollAnimationInProgress = false;
  }

  render () {
    const { scenes, leadingScene, bannerState } = this.props;

    return (
      <section ref="showcase" className="showcase" style={ {
        backgroundColor: bannerState.color,
        transition: `background-color ${this.duration}ms ease-out`
      } }>

        { React.cloneElement(leadingScene, { onDidMount: (el) => this.addScrollPoint(el) }) }

        { scenes.map((scene, index) => (
          <Scene
            onDidMount={ (el) => this.addScrollPoint(el) }
            key={ index }
            index={ index + 1 }
            { ...scene }
          />
        )) }

        <Footer classes="footer__tall" onDidMount={ (el) => this.addScrollPoint(el) }>
          <div className="footer__center">
            <div className="row">
              <ul className="typ--bold">
                <li className="typ--h1" onClick={ () => this.scrollToTop() }><Link className="typ--redshift" to="/about">About.</Link></li>
                <li className="typ--h1" onClick={ () => this.scrollToTop() }><Link className="typ--redshift" to="/careers">Careers.</Link></li>
                <li className="typ--h1"><a className="typ--redshift" href="http://weareredshift.tumblr.com/" target="_blank">Blog.</a></li>
              </ul>
            </div>
          </div>
        </Footer>
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
  modalState: state.modalState
});

export default connect(injectStateProps)(Showcase);
