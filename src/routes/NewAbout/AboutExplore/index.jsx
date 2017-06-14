import React from 'react';
import GSAP from 'react-gsap-enhancer';
import { TimelineMax, TweenMax, Linear } from 'gsap';
import MorphSVGPlugin from 'vendor/gsap-plugins/MorphSVGPlugin';
import _ from 'lodash';

export class AboutExplore extends React.Component {
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

    return TweenMax.to(
      pathObject, speed, {
        length: pathObject.pathLength,
        onUpdate: this.drawLine,
        onUpdateParams: [pathObject, line],
        immediateRender: true,
        ease: Linear.easeNone
      }
    );
  };

  circlePathTween (circle, path, speed) {
    return TweenMax.to(
      circle, speed, {
        bezier: { values: path, type: 'cubic' },
        ease: Linear.easeNone,
        repeat: 0
      }
    );
  };

  createTimeline (target) {
    const svg = [];
    const circle = [];
    const path = [];
    const tl = new TimelineMax();

    // const speed = [ 2.99, 6, 6.48, 5.27, 4.44, 6.05, 5.6, 1.95, 2.2 ];

    const wrapper = target.target[0];
    _.times(10, (i) => {
      svg[i + 1] = wrapper.querySelector('#motionPath' + (i + 1));
      circle[i + 1] = wrapper.querySelector('#circle' + (i + 1));
      path[i + 1] = MorphSVGPlugin.pathDataToBezier(wrapper.querySelector('#motionPath' + (i + 1)));
    });

    tl.add(
      this.createLineTween(svg[1], 2.99),
      this.createLineTween(svg[2], 6),
      this.createLineTween(svg[3], 6.48),
      this.createLineTween(svg[4], 5.27),
      this.createLineTween(svg[5], 4.44),
      this.createLineTween(svg[6], 6.05),
      this.createLineTween(svg[7], 5.6),
      this.createLineTween(svg[8], 1.95),
      this.createLineTween(svg[9], 2.2),

      this.circlePathTween(circle[1], path[1], 2.99),
      this.circlePathTween(circle[2], path[2], 6),
      this.circlePathTween(circle[3], path[3], 6.48),
      this.circlePathTween(circle[4], path[4], 5.27),
      this.circlePathTween(circle[5], path[5], 4.44),
      this.circlePathTween(circle[6], path[6], 6.05),
      this.circlePathTween(circle[7], path[7], 5.6),
      this.circlePathTween(circle[8], path[8], 1.95),
      this.circlePathTween(circle[9], path[9], 2.2),
      '-=1'
    );
    tl.play();

    return tl;
  }

  render () {
    return (
      <section>
        <svg>
          <g
            id="Line1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
            strokeLinecap="square"
            strokeDasharray="1,1"
          >
            <path
              id="motionPath1"
              d="M1,119.001 L234.293,118.983 C250.862,118.983 264.26,106.535 264.26,89.983
                C264.26,73.134 277.692,60.018 294.26,60.018 L460.293,59.983 C476.862,59.983
                490.26,47.533 490.26,30.983 C490.26,14.434 503.692,1.018 520.26,1.018 L571.509,1"
              stroke="#DCDCDB"
              strokeWidth="2"
            />
            <path
              id="motionPath2"
              d="M1,187.993 L234.293,187.976 C250.861,187.976 264.293,174.63 264.293,158.168
                C264.293,141.706 277.44,129.304 294.009,129.304 L453.009,129.304 C469.577,129.304
                482.798,142.667 482.798,159.129 C482.798,175.591 496.196,187.976 512.765,187.976
                L614.293,187.976 C630.861,187.976 644.26,175.591 644.26,159.129 C644.26,142.667
                657.691,129.321 674.26,129.321 L836.508,129.304 C853.085,129.304 866.025,115.934
                866.025,99.462 C866.025,76.959 884.367,59.673 907.015,59.673 L1050.628,59.516
                C1067.196,59.516 1079.259,47.271 1079.259,30.808 C1079.259,14.346 1092.691,1 1109.259,1"
              stroke="#DCDBDA"
              strokeWidth="2"
            />
            <path
              id="motionPath3"
              d="M1.0003,130.0781 L234.2933,130.0611 C250.8613,130.0611 264.2933,116.7151 264.2933,100.2531
                C264.2933,83.7911 277.4403,71.3891 294.0093,71.3891 L453.0093,71.3891 C469.5773,71.3891
                482.7983,84.7521 482.7983,101.2141 C482.7983,117.6761 496.1963,130.0611 512.7653,130.0611
                L614.2933,130.0611 C630.8613,130.0611 644.2603,117.6761 644.2603,101.2141 C644.2603,84.7521
                657.6913,71.4051 674.2603,71.4051 L836.5083,71.3891 C853.0853,71.3891 866.0253,58.0191
                866.0253,41.5471 C866.0253,19.0441 884.3673,1.7571 907.0153,1.7571 L1049.4713,1.9941
                C1063.3723,1.9941 1079.2593,15.3571 1079.2593,31.8191 C1079.2593,48.2811 1093.1753,60.6791
                1109.7453,60.6791 L1212.4483,60.6461"
              stroke="#DCDBDA"
              strokeWidth="2"
            />
            <path
              id="motionPath4"
              d="M1,59.7l233.3,0c16.6,0,30-13.3,30-29.8S277.4,1,294,1h159c16.6,0,29.8,13.4,29.8,29.8s13.4,28.8,30,28.8
                h101.5c16.6,0,30-12.4,30-28.8S657.7,1,674.3,1l162.2,0c16.6,0,30,13.4,30,30s13.2,29,29.8,29l97.7,0"
              stroke="#DCDCDB"
              strokeWidth="2"
            />
            <path
              id="motionPath5"
              d="M1,60.1h232.3l1,0c16.6,0,30-12.9,30-29.4s13.4-29.5,30-29.5h158.5c16.6,0,30,12.8,30,29.4
                c0,16.6,13.4,29.6,30,29.6l97.4,0c16.6,0,29.7,13.4,29.7,30l0,0c0,16.5,13.4,30,30,30l81.7,0l-0.2,0c16.6,0,30-13.4,30-30
                c0-16.5,13.4-30,30-30"
              stroke="#DCDCDB"
              strokeWidth="2"
            />
            <path
              id="motionPath6"
              d="M1.0003,60.8789 L234.2933,60.8619 C250.8613,60.8619 264.2633,47.9859 264.2633,31.4369 C264.2633,14.8869
                277.6913,1.8959 294.2603,1.8959 L452.7983,1.8959 C469.3663,1.8959 482.7683,14.7789 482.7683,31.3289 C482.7683,47.8789
                496.1963,60.8619 512.7653,60.8619 L609.7983,60.8959 C626.3663,60.8959 639.7653,74.3459 639.7653,90.8959
                C639.7653,107.4449 652.9403,120.8789 669.5093,120.8789 L745.7923,120.8789 C762.3603,120.8789 775.7653,134.3469
                775.7653,150.8959 C775.7653,167.4449 789.9403,180.8789 806.5083,180.8789 L967.9923,180.8459 C984.5613,180.8459
                997.9923,167.4299 997.9923,150.8789 C997.9923,134.3289 1011.4233,120.8789 1027.9923,120.8789 L1126.4933,120.8789"
              stroke="#DCDCDB"
              strokeWidth="2"
            />
            <path
              id="motionPath7"
              d="M1,60.9l233.3,0c16.6,0,30-12.9,30-29.4c0-16.6,13.4-29.5,30-29.5h158.5
                c16.6,0,30,12.9,30,29.4s13.4,29.5,30,29.5l97,0c16.6,0,30,13.4,30,30c0,16.5,13.2,30,29.7,30h76.3c16.6,0,30,13.5,30,30
                s14.2,30,30.7,30l163.2,0.1c16.6,0,30,13.4,30,30v0c0,16.6,13.4,30,30,30"
              stroke="#DCDBDA"
              strokeWidth="2"
            />
            <path
              id="motionPath8"
              d="M1.30988637,1.017 L230.551,1.017 C247.119,1.017 260.551,14.433 260.551,30.982 C260.551,47.534 273.949,60.982
                290.518,60.982 C307.086,60.982 320.762,47.518 320.762,30.967 C320.762,14.417 334.194,1 350.762,1"
              stroke="#DBDAD9"
              strokeWidth="2"
            />
            <path
              id="motionPath9"
              d="M1.0003,1.6162 L229.7893,1.6342 C246.3573,1.6342 259.7893,15.0502 259.7893,31.5992 C259.7893,48.1502 273.1873,61.5992
                289.7563,61.5992 C306.3243,61.5992 319.7563,75.0832 319.7563,91.6332 C319.7563,108.1822 333.1873,121.5992 349.7563,121.5992 L404.0003,121.6162"
              stroke="#DBD9D9"
              strokeWidth="2"
            />
          </g>
          <circle id="circle1" r="6" cx="0" cy="69" fill="#BF3C95" />
          <circle id="circle2" r="6" cx="0" cy="0" fill="#FF2953" />
          <circle id="circle3" r="6" cx="0" cy="57" fill="#FF2953" />
          <circle id="circle4" r="6" cx="0" cy="129" fill="#BF3C95" />
          <circle id="circle5" r="6" cx="0" cy="129" fill="#DC3377" />
          <circle id="circle6" r="6" cx="0" cy="128" fill="#CF3785" />
          <circle id="circle7" r="7" cx="0" cy="128" fill="#FF2953" />
          <circle id="circle8" r="6" cx="0" cy="187" fill="#FF2953" />
          <circle id="circle9" r="6" cx="0" cy="187" fill="#DC3377" />
        </svg>
      </section>
    );
  }
}

export default GSAP()(AboutExplore);
