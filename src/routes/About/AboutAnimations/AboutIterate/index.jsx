import React from 'react';
import GSAP from 'react-gsap-enhancer';
import { TimelineMax, TweenMax, Power1 } from 'gsap';
import MorphSVGPlugin from 'vendor/gsap-plugins/MorphSVGPlugin';

export class AboutIterate extends React.Component {
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
        ease: Power1.easeOut
      }
    );
  };

  createTimeline (target) {
    const wrapper = target.target[0];
    const iPath = MorphSVGPlugin.pathDataToBezier(wrapper.querySelector('#iteratePath1'));
    const iCircles = [].slice.call(wrapper.querySelectorAll('.iCircle'));
    const spiralPath = wrapper.querySelector('#iteratePath1');
    const baseDuration = 5;
    const delay = 0.5;
    const tl = new TimelineMax();

    tl.add('iterate')
    .add(this.createLineTween(spiralPath, baseDuration * 1), `iterate+=${delay}`)
    .staggerTo(iCircles, baseDuration, {
      bezier: { values: iPath, type: 'cubic' },
      ease: Power1.easeOut
    }, 0.5, `iterate+=${delay}`);

    tl.play();
    return tl;
  }

  render () {
    return (
      <section style={ { height: '50vh' } }>
        <svg>
          <g fill="none">
            <path
              id="iteratePath1"
              className="aboutPath"
              d="M0,223.056 C0,100.97 116.396055,1.999 259.978,1.999 C410.487912,1.999 519.955,88.8224572 519.955,223.056
                C520.941958,281.033402 471.13824,359.672605 399.984,362.157 C316.511285,361.473542 262.016933,297.303317 260.766,221.665
                C260.766,124.025 353.882,44.872 468.747,44.872 C583.612,44.872 676.778077,144.423502 676.729,221.665 C676.729,281.281896
                636.551,332.915 580.752,332.915 C519.827581,334.205872 469.535,275.648524 469.535,219.8 C469.535,141.688 543.958,78.365
                635.763,78.365 C727.568,78.365 801.991,141.688 801.991,219.8 C801.991,297.914 744.663,308.799 725.282,308.799 C688.690391,309.617832
                635.763,280.702932 636.551,219.977 C637.364244,157.305708 696.159,106.499 769.69,106.499 C843.221,106.499 902.831,157.305
                902.831,219.977 C902.635545,262.580844 880.791,291.382 841.391,291.382 C801.991,291.382 770.716277,261.18467 769.999,218.721
                C770.240684,168.765078 818.094,129.275 876.833,129.275 C932.685244,130.698079 968.136578,160.849079 983.187,219.728"
              />
          </g>
          <circle id="iCircle1" className="iCircle" r="6" cx="0" cy="0" fill="#BF3C95" />
          <circle id="iCircle2" className="iCircle" r="6" cx="0" cy="0" fill="#FF2953" />
          <circle id="iCircle3" className="iCircle" r="6" cx="0" cy="0" fill="#FF2953" />
          <circle id="iCircle4" className="iCircle" r="6" cx="0" cy="0" fill="#BF3C95" />
          <circle id="iCircle5" className="iCircle" r="6" cx="0" cy="0" fill="#DC3377" />
          <circle id="iCircle6" className="iCircle" r="6" cx="0" cy="0" fill="#CF3785" />
          <circle id="iCircle7" className="iCircle" r="6" cx="0" cy="0" fill="#FF2953" />
          <circle id="iCircle8" className="iCircle" r="6" cx="0" cy="0" fill="#FF2953" />
        </svg>
      </section>
    );
  }
}

export default GSAP()(AboutIterate);
