import React from 'react';
import GSAP from 'react-gsap-enhancer';
import { TimelineMax, TweenMax, Linear } from 'gsap';
import MorphSVGPlugin from 'vendor/gsap-plugins/MorphSVGPlugin';

export class AboutExperiment extends React.Component {
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
        ease: Linear.easeNone
      }
    );
  };

  createTimeline (target) {
    const wrapper = target.target[0];
    const exPath = MorphSVGPlugin.pathDataToBezier(wrapper.querySelector('#experimentPath1'));
    const experimentPath = wrapper.querySelector('#experimentPath1');
    const tl = new TimelineMax();
    var baseSpeed = 6;

    tl
      .add(this.createLineTween(experimentPath, baseSpeed * 1), 'experiment')
      .to('#exCircle1', baseSpeed * 1, { bezier: { values: exPath, type: 'cubic' }, ease: Linear.easeNone, repeat: -1 }, 'experiment')
      .to('#exCircle2', baseSpeed * 1, { bezier: { values: exPath, type: 'cubic' }, ease: Linear.easeNone, repeat: -1, delay: 0.5 }, 'experiment')
      .to('#exCircle3', baseSpeed * 1, { bezier: { values: exPath, type: 'cubic' }, ease: Linear.easeNone, repeat: -1, delay: 1 }, 'experiment')
      .to('#exCircle4', baseSpeed * 1, { bezier: { values: exPath, type: 'cubic' }, ease: Linear.easeNone, repeat: -1, delay: 1.5 }, 'experiment')
      .to('#exCircle5', baseSpeed * 1, { bezier: { values: exPath, type: 'cubic' }, ease: Linear.easeNone, repeat: -1, delay: 2 }, 'experiment');

    tl.play();

    return tl;
  }

  render () {
    return (
      <section style={ { height: '50vh' } }>
        <svg>
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <path
              id="experimentPath1"
              className="aboutPath"
              d="M92,3.5C313.26,537.71,1137.22,547.76,1351.7.36"
            />
          </g>
          <circle id="exCircle1" r="6" cx="0" cy="0" fill="#BF3C95" />
          <circle id="exCircle2" r="6" cx="0" cy="0" fill="#FF2953" />
          <circle id="exCircle3" r="6" cx="0" cy="0" fill="#FF2953" />
          <circle id="exCircle4" r="6" cx="0" cy="0" fill="#BF3C95" />
          <circle id="exCircle5" r="6" cx="0" cy="0" fill="#DC3377" />
        </svg>
      </section>
    );
  }
}

export default GSAP()(AboutExperiment);
