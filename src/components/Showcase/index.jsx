import React from 'react';
import Rx from 'rxjs/Rx';
import Scene from './Scene';
import { getScrollDirection, enableScroll, disableScroll } from 'utils/scrollJack';
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
    this.scrollYPosition = window.pageYOffset;

    //Subscribe to the devices scroll event
    this.scrollSubscription = this.scrollObservable.subscribe(() => {
      if (this.scrollAnimationInProgress) {
        return;
      } else {
        disableScroll();
        this.scrollToScene();
      }
    });
  }

  componentWillUnmount () {
    this.scrollSubscription.unsubscribe();
    enableScroll();
  }

  // adds a scrollPoint element to this.scrollPoints
  addScrollPoint (element) {
    if (element && this.scrollPoints.indexOf(element) === -1) this.scrollPoints.push(element);
  }

  //determines direction of scroll and triggers animation
  scrollToScene () {
    this.scrollAnimationInProgress = true;
    const { bannerState } = this.props;

    const newYPosition = window.pageYOffset;
    const direction = getScrollDirection(this.scrollYPosition, newYPosition);
    const index = direction === 'down' ? bannerState.active + 1 : bannerState.active - 1;
    this.scrollToIndex(index);
  }

  // scrolls to the scrollPoint that matches passed index
  scrollToIndex (bannerIndex) {
    const { dispatch, scenes } = this.props;
    const activeScene = scenes[bannerIndex - 1];
    const sceneColor = activeScene ? activeScene.color : '#fff';

    if (bannerIndex < 0 || bannerIndex >= this.scrollPoints.length) {
      this.scrollAnimationInProgress = false;
      return;
    };

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
    const scrollStartPosition = window.scrollY;

    new mojs.Tween({
      duration: this.duration,
      easing: 'cubic.out',
      onUpdate: (progress) => {
        const pos = mapRange(progress, 0, 1, scrollStartPosition, targetScrollPosition);
        window.scrollTo(0, pos);
      },
      onPlaybackComplete: () => {
        setTimeout(() => {
          this.scrollAnimationInProgress = false;
          this.scrollYPosition = window.pageYOffset;
          enableScroll();
        }, this.duration);
      }
    }).play();
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

  render () {
    const { scenes, leadingScene, bannerState } = this.props;

    return (
      <section ref="showcase" className="showcase" style={ {
        backgroundColor: bannerState.color,
        transition: `background-color ${this.duration}ms ease-out`
      } }>

        { React.cloneElement(leadingScene, { onDidMount: (el) => this.addScrollPoint(el) } ) }

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
                <li className="typ--h1" onClick={ () => scrollDocToZero() }><Link className="typ--redshift" to="/about">About.</Link></li>
                <li className="typ--h1" onClick={ () => scrollDocToZero() }><Link className="typ--redshift" to="/careers">Careers.</Link></li>
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
