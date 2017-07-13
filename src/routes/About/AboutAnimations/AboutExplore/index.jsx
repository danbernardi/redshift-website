import React from 'react';
import GSAP from 'react-gsap-enhancer';
import { TimelineMax, TweenMax, Power2 } from 'gsap';
import MorphSVGPlugin from 'vendor/gsap-plugins/MorphSVGPlugin';
import PropTypes from 'prop-types';
import Watcher from 'components/Watcher';

export class AboutExplore extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      exploreAnimationStart: false
    };
  }

  componentDidMount () {
    this.timeline = this.addAnimation(this.createTimeline.bind(this));
  }

  drawLine (obj, line) {
    line.style.strokeDasharray = [obj.length, obj.pathLength].join(' ');
  };

  createLineTween (line, speed) {
    const pathObject = {
      length: 0,
      pathLength: line.getTotalLength()
    };

    return TweenMax
      .to(pathObject, speed, {
        length: pathObject.pathLength,
        onUpdate: this.drawLine,
        onUpdateParams: [pathObject, line],
        immediateRender: true,
        ease: Power2.easeInOut
      }
    );
  };

  circlePathTween (circle, path, speed) {
    return TweenMax
      .to(circle, speed, {
        bezier: { values: path, type: 'cubic' },
        ease: Power2.easeInOut
      }
    );
  };

  createTimeline (target) {
    const wrapper = target.target[0];
    const baseDuration = 1 * 0.5;
    const tl = new TimelineMax({ paused: true });
    const exSvg = [].slice.call(wrapper.querySelectorAll('.aboutPath'));
    const exCircle = [].slice.call(wrapper.querySelectorAll('.exCircle'));
    const exPath = exSvg.map((path) => MorphSVGPlugin.pathDataToBezier(path));

    tl
    .set(exCircle, { opacity: 1 })
    .add(this.createLineTween(exSvg[0], baseDuration * 2.99), 'aboutOne')
    .add(this.createLineTween(exSvg[1], baseDuration * 6), 'aboutOne')
    .add(this.createLineTween(exSvg[2], baseDuration * 6.48), 'aboutOne')
    .add(this.createLineTween(exSvg[3], baseDuration * 5.27), 'aboutOne')
    .add(this.createLineTween(exSvg[4], baseDuration * 4.44), 'aboutOne')
    .add(this.createLineTween(exSvg[5], baseDuration * 6.05), 'aboutOne')
    .add(this.createLineTween(exSvg[6], baseDuration * 5.62), 'aboutOne')
    .add(this.createLineTween(exSvg[7], baseDuration * 1.95), 'aboutOne')
    .add(this.createLineTween(exSvg[8], baseDuration * 2.2), 'aboutOne')

    .add(this.circlePathTween(exCircle[0], exPath[0], baseDuration * 2.99), 'aboutOne+=0.5')
    .add(this.circlePathTween(exCircle[1], exPath[1], baseDuration * 6), 'aboutOne+=0.5')
    .add(this.circlePathTween(exCircle[2], exPath[2], baseDuration * 6.48), 'aboutOne+=0.5')
    .add(this.circlePathTween(exCircle[3], exPath[3], baseDuration * 5.27), 'aboutOne+=0.5')
    .add(this.circlePathTween(exCircle[4], exPath[4], baseDuration * 4.44), 'aboutOne+=0.5')
    .add(this.circlePathTween(exCircle[5], exPath[5], baseDuration * 6.05), 'aboutOne+=0.5')
    .add(this.circlePathTween(exCircle[6], exPath[6], baseDuration * 5.62), 'aboutOne+=0.5')
    .add(this.circlePathTween(exCircle[7], exPath[7], baseDuration * 1.95), 'aboutOne+=0.5')
    .add(this.circlePathTween(exCircle[8], exPath[8], baseDuration * 2.2), 'aboutOne+=0.5');

    return tl;
  }

  watcherCallback (watcher) {
    if (watcher.isInViewport) { this.timeline.play(); }
  };

  render () {
    return (
      <section className="about--explore-svg" style={ { height: '50vh' } }>
        <Watcher
          offset={ { top: '50rem', position: 'relative' } }
          autoStart={ false }
          stateChange={ this.watcherCallback.bind(this) }
          enterViewport={ this.watcherCallback.bind(this) }
        />
        <svg width="1220" height="380" viewBox="0 0 1220 380" preserveAspectRatio="xMinYMin meet">
          <g
            id="aboutExploreLines"
            fill="none"
          >
            <path
              id="explorePath1"
              className="aboutPath"
              d="M-10,218 L235,218 C251.569,218 265,205.552 265,189 C265,172.151 278.432,159
                295,159 L461,159 C477.569,159 490,146.55 490,130 C490,113.451 504.432,100 521,100 L572,100"
            />
            <path
              id="explorePath2"
              className="aboutPath"
              d="M-10,218 L235,218 C251.568,218 265,205.462 265,189 C265,172.538 278.431,159
                295,159 L461,159 C477.568,159 490,173.538 490,190 C490,206.462 496.431,218 513,218 L610,218
                C626.568,218 645,205.462 645,189 C645,172.538 658.431,159 675,159 L837,159 C853.577,159 867,145.472
                867,129 C867,106.497 885.352,89 908,89 L1051,89 C1067.568,89 1080,76.463 1080,60 C1080,43.538 1093.432,31 1110,31"
            />
            <path
              id="explorePath3"
              className="aboutPath"
              d="M-10,218 L235,218 C251.568,218 265,205.462 265,189 C265,172.538 278.431,159 295,159 L461,159
                C477.568,159 490,173.538 490,190 C490,206.462 496.431,218 513,218 L610,218 C626.568,218 645,205.462
                645,189 C645,172.538 658.431,159 675,159 L837,159 C853.577,159 867,145.472 867,129 C867,106.497 885.352,89
                908,89 L1051,89 C1064.901,89 1080,102.538 1080,119 C1080,135.462 1093.43,148 1110,148 L1213,148"
            />
            <path
              id="explorePath4"
              className="aboutPath"
              d="M-10,217.979996 L235,218 C251.568,218 265,205.462 265,189 C265,172.538 278.432,159 295,159 L461,159 C477.568,159
                490,173.538 490,190 C490,206.462 496.431,218 513,218 L610,218 C626.568,218 645,205.462 645,189 C645,172.538 658.432,159
                675,159 L837,159 C853.567,159 867,172.45 867,189 C867,205.55 880.43,218 897,218 L995,218"
            />
            <path
              id="explorePath5"
              className="aboutPath"
              d="M-10,218 L235,218 C251.569,218 265,205.55 265,189 C265,172.45 278.432,159 295,159 L461,159 C477.567,159 490,173.451
                490,190 C490,206.55 496.432,218 513,218 L610,218 C626.568,218 640,231.45 640,248 C640,264.55 653.433,278 670,278 L752,278
                C768.57,278 782,264.551 782,248 C782,231.45 795.432,218 812,218"
            />
            <path
              id="explorePath6"
              className="aboutPath"
              d="M-10,218 L235,218 C251.568,218 265,205.549 265,189 C265,172.45 278.431,159 295,159 L461,159 C477.568,159 490,173.45
                490,190 C490,206.55 496.431,218 513,218 L610,218 C623.416127,218 640,228.894566 640,248 C640,264.549 653.431,278
                670,278 L752,278 C768.568,278 776,291.451 776,308 C776,324.549 790.432,338 807,338 L970,338 C986.569,338 999,324.551
                999,308 C999,291.45 1013.431,278 1030,278 L1127,278"
            />
            <path
              id="explorePath7"
              className="aboutPath"
              d="M-10,218 L235,218 C251.568,218 265,205.55 265,189 C265,172.449 278.431,159 295,159 L461,159 C477.568,159 490,173.45
                490,190 C490,206.55 496.431,218 513,218 L610,218 C626.568,218 640,231.124808 640,248 C640,264.875192 653.431,278 670,278
                L752,278 C768.568,278 776,291.451 776,308 C776,324.549 790.432,338 807,338 L970,338 C986.569,338 1000.732,351.46
                1000.732,368.043 C1000.732,384.594 1014.164,398.01 1030.732,398.01"
            />
            <path
              className="aboutPath"
              id="explorePath8"
              d="M-10,218 L235,218 C251.568,218 261,231.451 261,248 C261,264.552 274.431,278 291,278 C307.568,278 321.762,264.518
              321.762,247.967 C321.762,231.417 335.194,218 351.762,218"
            />
            <path
              id="explorePath9"
              className="aboutPath"
              d="M-10,218 L235,218 C251.568,218 261,231.451 261,248 C261,264.551 274.431,278 291,278 C307.568,278 321.756,291.467
                321.756,308.017 C321.756,324.566 335.187,337.983 351.756,337.983 L406,338"
            />
          </g>
          <circle id="circle1" className="exCircle" r="6" cx="0" cy="0" fill="#BF3C95" />
          <circle id="circle2" className="exCircle" r="6" cx="0" cy="0" fill="#FF2953" />
          <circle id="circle3" className="exCircle" r="6" cx="0" cy="0" fill="#FF2953" />
          <circle id="circle4" className="exCircle" r="6" cx="0" cy="0" fill="#BF3C95" />
          <circle id="circle5" className="exCircle" r="6" cx="0" cy="0" fill="#DC3377" />
          <circle id="circle6" className="exCircle" r="6" cx="0" cy="0" fill="#CF3785" />
          <circle id="circle7" className="exCircle" r="7" cx="0" cy="0" fill="#FF2953" />
          <circle id="circle8" className="exCircle" r="6" cx="0" cy="0" fill="#FF2953" />
          <circle id="circle9" className="exCircle" r="6" cx="0" cy="0" fill="#DC3377" />
        </svg>
      </section>
    );
  }
}

AboutExplore.propTypes = {
  playExplore: PropTypes.bool
};

export default GSAP()(AboutExplore);
