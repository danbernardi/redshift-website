import React from 'react';
import GSAP from 'react-gsap-enhancer';
import { TimelineMax, TweenMax, Power3 } from 'gsap';
import MorphSVGPlugin from 'vendor/gsap-plugins/MorphSVGPlugin';
import { getRandomInt } from 'utils/animation';
import Watcher from 'components/Watcher';

export class AboutCollaboration extends React.Component {
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
        ease: Power3.easeOut
      }
    );
  };

  createTimeline (target) {
    const wrapper = target.target[0];

    const tl = new TimelineMax({ paused: true });
    const baseDuration = 1 * 3;
    const buildDuration = baseDuration / 2; // Chord build

    // Convert grab DOM elements and convert nodelist to array
    const chords = [].slice.call(wrapper.querySelectorAll('.chord'));
    const collCircle = [].slice.call(wrapper.querySelectorAll('.collCircle'));

    // Create array of bezier paths
    const chordPaths = chords.map((node) => MorphSVGPlugin.pathDataToBezier(node));

    // Add chord animation
    const chordDelay = 0.15;
    chords.forEach((chord, index) => {
      const tween = this.createLineTween(chord, buildDuration);
      tl.add(tween, `coll+=${buildDuration * (chordDelay + (index * 0.05))}`);
    });

    // Add dot animation
    collCircle.forEach((circle, index) => {
      let pathIndex = 0;
      switch (true) {
        case index <= 2:
          pathIndex = 0;
          break;
        case index <= 4 && index > 2:
          pathIndex = 1;
          break;
        case index <= 7 && index > 4:
          pathIndex = 2;
          break;
        case index <= 10 && index > 7:
          pathIndex = 3;
          break;
        case index <= 13 && index > 10:
          pathIndex = 4;
          break;
      }

      // Clone array and contents
      const localPath = chordPaths[pathIndex].slice().map((val) => Object.assign({}, val));
      const pathLength = localPath[3]['x'];
      const randomNum = getRandomInt(pathLength * 0.2, pathLength * 0.95);

      // Randomly update the end point of the line to produce a more staggered animation
      localPath[3]['x'] = randomNum;

      // Set bezier to 0 so as not to overshoot
      localPath[1] = { x: 0, y: localPath[0].y };
      localPath[2] = { x: 0, y: localPath[0].y };

      tl.to(circle, baseDuration, { bezier: { values: localPath, type: 'thru', curviness: 0 }, ease: Power3.easeOut }, `coll+= ${pathIndex * 0.25}`);
    });

    // tl.play();

    return tl;
  }

  watcherCallback (watcher) {
    if (watcher.isInViewport) { this.timeline.play(); }
  };

  render () {
    return (
      <section style={ { height: '50vh' } }>
        <Watcher
          offset={ { top: '50rem', position: 'relative' } }
          autoStart={ false }
          stateChange={ this.watcherCallback.bind(this) }
          enterViewport={ this.watcherCallback.bind(this) }
        />
        <svg width="1440" height="400px" viewBox="0 0 1440 400" preserveAspectRatio="xMaxYMax meet">
          <g id="Page-1" fill="none" fillRule="evenodd">
            <path
              id="collPath1"
              className="aboutPath chord"
              d="M-20,244 L1450,244"
            />
            <path
              id="collPath2"
              className="aboutPath chord"
              d="M-20,276 L1450,276"
            />
            <path
              id="collPath3"
              className="aboutPath chord"
              d="M-20,308 L1450,308"
            />
            <path
              id="collPath4"
              className="aboutPath chord"
              d="M-20,340 L1450,340"
            />
            <path
              id="collPath5"
              className="aboutPath chord"
              d="M-20,372 L1450,372"
            />
          </g>
          <circle id="collCircle1" className="collCircle" r="6" cx="0" cy="0" fill="#FF2953" />
          <circle id="collCircle2" className="collCircle" r="6" cx="0" cy="0" fill="#CF3785" />
          <circle id="collCircle3" className="collCircle" r="6" cx="0" cy="0" fill="#CF3785" />

          <circle id="collCircle4" className="collCircle" r="6" cx="0" cy="0" fill="#FF2953" />
          <circle id="collCircle5" className="collCircle" r="6" cx="0" cy="0" fill="#CF3785" />

          <circle id="collCircle6" className="collCircle" r="6" cx="0" cy="0" fill="#FF2953" />
          <circle id="collCircle7" className="collCircle" r="6" cx="0" cy="0" fill="#CF3785" />
          <circle id="collCircle8" className="collCircle" r="6" cx="0" cy="0" fill="#FF2953" />

          <circle id="collCircle9" className="collCircle" r="6" cx="0" cy="0" fill="#FF2953" />
          <circle id="collCircle10"className="collCircle" r="6" cx="0" cy="0" fill="#FF2953" />
          <circle id="collCircle11"className="collCircle" r="6" cx="0" cy="0" fill="#FF2953" />

          <circle id="collCircle12"className="collCircle" r="6" cx="0" cy="0" fill="#FF2953" />
          <circle id="collCircle13"className="collCircle" r="6" cx="0" cy="0" fill="#CF3785" />
          <circle id="collCircle14"className="collCircle" r="6" cx="0" cy="0" fill="#CF3785" />
        </svg>
        <svg width="100vw" height="400px" viewBox="0 0 1440 400" preserveAspectRatio="none" style={ { position: 'absolute', top: 0 } }>
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <path
              id="collPathEnd1"
              className="aboutPath chord"
              d="M5,244 L1450,244"
            />
            <path
              id="collPathEnd2"
              className="aboutPath chord"
              d="M5,276 L1450,276"
            />
            <path
              id="collPathEnd3"
              className="aboutPath chord"
              d="M5,308 L1450,308"
            />
            <path
              id="collPathEnd4"
              className="aboutPath chord"
              d="M5,340 L1450,340"
            />
            <path
              id="collPathEnd5"
              className="aboutPath chord"
              d="M5,372 L1450,372"
            />
          </g>
        </svg>
      </section>
    );
  }
}

export default GSAP()(AboutCollaboration);
