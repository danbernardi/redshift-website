import React from 'react';
import GSAP from 'react-gsap-enhancer';
import { TimelineMax, TweenMax, Linear } from 'gsap';
import MorphSVGPlugin from 'vendor/gsap-plugins/MorphSVGPlugin';
import _ from 'lodash';

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
        ease: Linear.easeNone
      }
    );
  };

  createTimeline (target) {
    const wrapper = target.target[0];

    const collPath = [];
    const cp = [];
    const collCircle = [];
    const tl = new TimelineMax();
    const baseDuration = 4;

    _.times(5, (i) => {
      collPath[i + 1] = wrapper.querySelector('#collPath' + (i + 1));
      cp[i + 1] = MorphSVGPlugin.pathDataToBezier(wrapper.querySelector('#collPath' + (i + 1)));
    });

    _.times(14, (i) => {
      collCircle[i + 1] = wrapper.querySelector('#collCircle' + (i + 1));
    });

    tl
      .add(this.createLineTween(collPath[1], baseDuration * 1), 'coll')
      .to(collCircle[1], baseDuration * 1.03125, { bezier: { values: cp[1], type: 'cubic' }, ease: Linear.easeNone, repeat: 0, delay: baseDuration * 0.85 }, 'coll')
      .to(collCircle[2], baseDuration * 1.09375, { bezier: { values: cp[1], type: 'cubic' }, ease: Linear.easeNone, repeat: 0, delay: baseDuration * 1.05 }, 'coll')
      .to(collCircle[3], baseDuration * 1.185, { bezier: { values: cp[1], type: 'cubic' }, ease: Linear.easeNone, repeat: 0, delay: baseDuration * 1.375 }, 'coll')

      .add(this.createLineTween(collPath[2], baseDuration * 1), 'coll+=1.5')
      .to(collCircle[4], baseDuration * 1.09375, { bezier: { values: cp[2], type: 'cubic' }, ease: Linear.easeNone, repeat: 0, delay: baseDuration * 0.75 }, 'coll')
      .to(collCircle[5], baseDuration * 1.03125, { bezier: { values: cp[2], type: 'cubic' }, ease: Linear.easeNone, repeat: 0, delay: baseDuration * 1.225 }, 'coll')

      .add(this.createLineTween(collPath[3], baseDuration * 1), 'coll+=1')
      .to(collCircle[6], baseDuration * 1, { bezier: { values: cp[3], type: 'cubic' }, ease: Linear.easeNone, repeat: 0, delay: baseDuration * 1.18 }, 'coll')
      .to(collCircle[7], baseDuration * 1.03125, { bezier: { values: cp[3], type: 'cubic' }, ease: Linear.easeNone, repeat: 0, delay: baseDuration * 0.85 }, 'coll')
      .to(collCircle[8], baseDuration * 1.09325, { bezier: { values: cp[3], type: 'cubic' }, ease: Linear.easeNone, repeat: 0, delay: baseDuration }, 'coll')

      .add(this.createLineTween(collPath[4], baseDuration * 1), 'coll+=2')
      .to(collCircle[9], baseDuration * 0.9, { bezier: { values: cp[4], type: 'cubic' }, ease: Linear.easeNone, repeat: 0, delay: baseDuration * 0.85 }, 'coll')
      .to(collCircle[10], baseDuration * 1.03125, { bezier: { values: cp[4], type: 'cubic' }, ease: Linear.easeNone, repeat: 0, delay: baseDuration  * 0.95 }, 'coll')
      .to(collCircle[11], baseDuration * 0.9325, { bezier: { values: cp[4], type: 'cubic' }, ease: Linear.easeNone, repeat: 0, delay: baseDuration * 1.15 }, 'coll')

      .add(this.createLineTween(collPath[5], baseDuration * 1), 'coll+=0.5')
      .to(collCircle[12], baseDuration * 1, { bezier: { values: cp[5], type: 'cubic' }, ease: Linear.easeNone, repeat: 0, delay: baseDuration * 0.92 }, 'coll')
      .to(collCircle[13], baseDuration * 1.03125, { bezier: { values: cp[5], type: 'cubic' }, ease: Linear.easeNone, repeat: 0, delay: baseDuration * 1.05 }, 'coll')
      .to(collCircle[14], baseDuration * 1.09125, { bezier: { values: cp[5], type: 'cubic' }, ease: Linear.easeNone, repeat: 0, delay: baseDuration * 1.275 }, 'coll')
      .addPause(baseDuration + 2);
    tl.play();

    return tl;
  }

  render () {
    return (
      <section style={ { height: '50vh' } }>
        <svg>
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <path
              id="collPath1"
              className="aboutPath"
              d="M-20,244 L1450,244"
            />
            <path
              id="collPath2"
              className="aboutPath"
              d="M-20,276 L1450,276"
            />
            <path
              id="collPath3"
              className="aboutPath"
              d="M-20,308 L1450,308"
            />
            <path
              id="collPath4"
              className="aboutPath"
              d="M-20,340 L1450,340"
            />
            <path
              id="collPath5"
              className="aboutPath"
              d="M-20,372 L1450,372"
            />
          </g>
          <circle id="collCircle1" className="aboutCircle redCircle" r="6" cx="0" cy="0" fill="#FF2953" />
          <circle id="collCircle2" r="6" cx="0" cy="0" fill="#CF3785" />
          <circle id="collCircle3" r="6" cx="0" cy="0" fill="#CF3785" />

          <circle id="collCircle4" r="6" cx="0" cy="0" fill="#FF2953" />
          <circle id="collCircle5" r="6" cx="0" cy="0" fill="#CF3785" />

          <circle id="collCircle6" r="6" cx="0" cy="0" fill="#FF2953" />
          <circle id="collCircle7" r="6" cx="0" cy="0" fill="#CF3785" />
          <circle id="collCircle8" r="6" cx="0" cy="0" fill="#FF2953" />

          <circle id="collCircle9" r="6" cx="0" cy="0" fill="#FF2953" />
          <circle id="collCircle10" r="6" cx="0" cy="0" fill="#FF2953" />
          <circle id="collCircle11" r="6" cx="0" cy="0" fill="#FF2953" />

          <circle id="collCircle12" r="6" cx="0" cy="0" fill="#FF2953" />
          <circle id="collCircle13" r="6" cx="0" cy="0" fill="#CF3785" />
          <circle id="collCircle14" r="6" cx="0" cy="0" fill="#CF3785" />
        </svg>
      </section>
    );
  }
}

export default GSAP()(AboutCollaboration);
