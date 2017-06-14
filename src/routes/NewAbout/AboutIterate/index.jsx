import React from 'react';
import GSAP from 'react-gsap-enhancer';
import { TimelineMax, Linear } from 'gsap';
import MorphSVGPlugin from 'vendor/gsap-plugins/MorphSVGPlugin';

export class AboutIterate extends React.Component {
  componentDidMount () {
    this.timeline = this.addAnimation(this.createTimeline.bind(this));
  }

  createTimeline (target) {
    const wrapper = target.target[0];
    const iPath = MorphSVGPlugin.pathDataToBezier(wrapper.querySelector('#iteratePath1'));
    const tl = new TimelineMax();

    tl
      .from('#iCircle1', 10, { bezier: { values: iPath, type: 'cubic' }, ease: Linear.easeNone, repeat: -1 }, 'iterate')
      .from('#iCircle2', 10, { bezier: { values: iPath, type: 'cubic' }, ease: Linear.easeNone, repeat: -1, delay: 0.5 }, 'iterate')
      .from('#iCircle3', 10, { bezier: { values: iPath, type: 'cubic' }, ease: Linear.easeNone, repeat: -1, delay: 1 }, 'iterate')
      .from('#iCircle4', 10, { bezier: { values: iPath, type: 'cubic' }, ease: Linear.easeNone, repeat: -1, delay: 1.5 }, 'iterate')
      .from('#iCircle5', 10, { bezier: { values: iPath, type: 'cubic' }, ease: Linear.easeNone, repeat: -1, delay: 2 }, 'iterate')
      .from('#iCircle6', 10, { bezier: { values: iPath, type: 'cubic' }, ease: Linear.easeNone, repeat: -1, delay: 2.5 }, 'iterate')
      .from('#iCircle7', 10, { bezier: { values: iPath, type: 'cubic' }, ease: Linear.easeNone, repeat: -1, delay: 3 }, 'iterate')
      .from('#iCircle8', 10, { bezier: { values: iPath, type: 'cubic' }, ease: Linear.easeNone, repeat: -1, delay: 3.5 }, 'iterate');

    tl.play();

    return tl;
  }

  render () {
    return (
      <section style={ { height: '50vh' } }>
        <svg>
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <path
              id="iteratePath1"
              d="M984.187,218.728 C984.187,168.772 936.571,128.275 877.833,128.275 C819.094,128.275
                770.999,167.765 770.999,217.721 C771.306,237.501 775.409,248.861 780.994,258.082
                C786.578,267.304 797.12,277.609 806.917,282.666 C816.716,287.725 826.868,290.382
                842.391,290.382 C857.914,290.382 903.831,281.649 903.831,218.977 C903.831,156.305
                844.221,105.499 770.69,105.499 C697.159,105.499 637.551,156.305 637.551,218.977
                C637.935,243.63 642.654,256.047 649.626,267.541 C656.598,279.036 669.761,291.877
                681.994,298.182 C694.227,304.487 706.902,307.799 726.282,307.799 C745.663,307.799
                802.991,296.914 802.991,218.8 C802.991,140.688 728.568,77.365 636.763,77.365
                C544.958,77.365 470.535,140.688 470.535,218.8 C471.016,249.617 477.118,267.224
                485.842,281.591 C494.565,295.959 511.034,312.012 526.339,319.893 C541.645,327.773
                557.504,331.915 581.752,331.915 C606,331.915 677.729,318.307 677.729,220.665
                C677.729,123.025 584.612,43.872 469.747,43.872 C354.882,43.872 261.766,123.025
                261.766,220.665 C262.367,259.198 270.191,280.27 281.096,298.235 C292,316.2 312.586,336.272
                331.718,346.125 C350.85,355.979 370.674,361.157 400.984,361.157 C431.294,361.157
                520.955,344.142 520.955,222.056 C520.955,178.412 506.08,137.721 480.405,103.451 C434.26,41.857
                353.23,0.999 260.978,0.999 C117.396,0.999 1,99.97 1,222.056"
              stroke="#DDDDDC"
              strokeWidth="2" />
          </g>
          <circle id="iCircle1" r="6" cx="0" cy="0" fill="#BF3C95" />
          <circle id="iCircle2" r="6" cx="0" cy="0" fill="#FF2953" />
          <circle id="iCircle3" r="6" cx="0" cy="0" fill="#FF2953" />
          <circle id="iCircle4" r="6" cx="0" cy="0" fill="#BF3C95" />
          <circle id="iCircle5" r="6" cx="0" cy="0" fill="#DC3377" />
          <circle id="iCircle6" r="6" cx="0" cy="0" fill="#CF3785" />
          <circle id="iCircle7" r="6" cx="0" cy="0" fill="#FF2953" />
          <circle id="iCircle8" r="6" cx="0" cy="0" fill="#FF2953" />
        </svg>
      </section>
    );
  }
}

export default GSAP()(AboutIterate);
