import React from 'react';
import GSAP from 'react-gsap-enhancer';
import { TimelineMax, TweenMax, Power2 } from 'gsap';
import MorphSVGPlugin from 'vendor/gsap-plugins/MorphSVGPlugin';
import CustomEase from 'vendor/gsap-plugins/CustomEase';

//Custom easing curve
const superBounce = 'M0,0 C0.08,0.502 0.096,0.964 0.208,0.964 0.362,0.964 0.336,0.224 0.43,0.224 0.516,0.224 0.532,0.752 0.638,0.752 0.724,0.752 0.736,0.38 0.798,0.38 0.848,0.38 0.856,0.554 0.9,0.554 0.938,0.554 0.952,0.5 1,0.5';

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
        ease: Power2.easeInOut
      }
    );
  };

  createTimeline (target) {
    const wrapper = target.target[0];
    const experimentPath = wrapper.querySelector('#experimentPath1');
    const exCircles = [].slice.call(wrapper.querySelectorAll('.exCircle'));
    const pathExtensions = [].slice.call(wrapper.querySelectorAll('.path-extension')).map((path) => {
      return MorphSVGPlugin.pathDataToBezier(path);
    });

    const tl = new TimelineMax();
    var baseDuration = 1;

    tl
      .add(this.createLineTween(experimentPath, baseDuration * 2), 'experiment')
      .staggerTo(exCircles, baseDuration * 6, { bezier: { values: pathExtensions[0], type: 'cubic' }, ease: CustomEase.create('custom', superBounce) }, 0.2, 'experiment+=1');
  }

  render () {
    return (
      <section style={ { height: '50vh' } }>
        <svg>
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <path id="experimentPath1" className="path-extension cls-1 aboutPath" d="M72.92,-34.7 C339,529 1076,528 1350,0" />
            <path className="path-extension cls-2" d="M1350,0 C1140.47,415.71 564.29,551.4 199.21,157.33" />
            <path className="path-extension cls-3" d="M199.21,157.33 C443.82,420.8 836.49,475.4 1132.96,255.47" />
            <path className="path-extension cls-4" d="M1132.96,255.47 C977.5,367.16 727.65,457.82 438.57,331.85" />
            <path className="path-extension cls-5" d="M438.57,331.85 C527.91,371.95 628.26,394.29 738.27,392.22" />
            <path className="path-extension cls-6" d="M438.57,331.85 C521.79,368.7 600.14,388.72 709.5,392.83" />
            <path className="path-extension cls-7" d="M438.57,331.85 C510.03,364.68 596.18,385.4 686.72,391.54" />
            <path className="path-extension cls-8" d="M438.57,331.85 C515.09,366.84 580.16,379.95 658,389.17" />
            <path className="path-extension cls-9" d="M438.57,331.85 C505.9,362.13 552.66,373.41 632.18,386.08" />
          </g>
          <circle id="exCircle1" className="exCircle" r="6" cx="0" cy="0" fill="#BF3C95" />
          <circle id="exCircle2" className="exCircle" r="6" cx="0" cy="0" fill="#FF2953" />
          <circle id="exCircle3" className="exCircle" r="6" cx="0" cy="0" fill="#FF2953" />
          <circle id="exCircle4" className="exCircle" r="6" cx="0" cy="0" fill="#BF3C95" />
          <circle id="exCircle5" className="exCircle" r="6" cx="0" cy="0" fill="#DC3377" />
        </svg>
      </section>
    );
  }
}

export default GSAP()(AboutExperiment);
