import React from 'react';
import GSAP from 'react-gsap-enhancer';
import { TimelineMax, Linear } from 'gsap';
import MorphSVGPlugin from 'vendor/gsap-plugins/MorphSVGPlugin';

export class AboutExplore extends React.Component {
  // constructor (props) {
  //   super(props);
  // }
  componentDidMount () {
    this.timeline = this.addAnimation(this.createTimeline);
  }

  createTimeline (target) {
    const wrapper = target.target[0];

    const path1 = MorphSVGPlugin.pathDataToBezier(wrapper.querySelector('#motionPath1'));
    const path2 = MorphSVGPlugin.pathDataToBezier(wrapper.querySelector('#motionPath2'));
    const path3 = MorphSVGPlugin.pathDataToBezier(wrapper.querySelector('#motionPath3'));
    const path4 = MorphSVGPlugin.pathDataToBezier(wrapper.querySelector('#motionPath4'));
    const path5 = MorphSVGPlugin.pathDataToBezier(wrapper.querySelector('#motionPath5'));
    const path6 = MorphSVGPlugin.pathDataToBezier(wrapper.querySelector('#motionPath6'));
    const path7 = MorphSVGPlugin.pathDataToBezier(wrapper.querySelector('#motionPath7'));
    const path8 = MorphSVGPlugin.pathDataToBezier(wrapper.querySelector('#motionPath8'));
    const path9 = MorphSVGPlugin.pathDataToBezier(wrapper.querySelector('#motionPath9'));
    // change repeat to zero for one cycle

    const tl = new TimelineMax({ repeat: -1 });
    tl
      .from('#circle1', 3, { bezier: { values: path1, type: 'cubic' }, ease: Linear.easeNone }, 'start')
      .to('#circle2', 6, { bezier: { values: path2, type: 'cubic' }, ease: Linear.easeNone }, 'start')
      .to('#circle3', 6.5, { bezier: { values: path3, type: 'cubic' }, ease: Linear.easeNone }, 'start')
      .from('#circle4', 5.25, { bezier: { values: path4, type: 'cubic' }, ease: Linear.easeNone }, 'start')
      .from('#circle5', 4.4, { bezier: { values: path5, type: 'cubic' }, ease: Linear.easeNone }, 'start')
      .to('#circle6', 6, { bezier: { values: path6, type: 'cubic' }, ease: Linear.easeNone }, 'start')
      .from('#circle7', 5.6, { bezier: { values: path7, type: 'cubic' }, ease: Linear.easeNone }, 'start')
      .to('#circle8', 2, { bezier: { values: path8, type: 'cubic' }, ease: Linear.easeNone }, 'start')
      .to('#circle9', 2.2, { bezier: { values: path9, type: 'cubic' }, ease: Linear.easeNone }, 'start');

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
              d="M571.5091,1.4961 L520.2601,1.5141 C503.6921,1.5141 490.2601,14.9301 490.2601,31.4791 C490.2601,48.0291 476.8621,60.4791 460.2931,60.4791 L294.2601,60.5141 C277.6921,60.5141 264.2601,73.6301 264.2601,90.4791 C264.2601,107.0311 250.8621,119.4791 234.2931,119.4791 L1.0001,119.4971"
              stroke="#DCDCDB"
              strokeWidth="2"
            />
            <path
              id="motionPath2"
              d="M1,187.993 L234.293,187.976 C250.861,187.976 264.293,174.63 264.293,158.168 C264.293,141.706 277.44,129.304 294.009,129.304 L453.009,129.304 C469.577,129.304 482.798,142.667 482.798,159.129 C482.798,175.591 496.196,187.976 512.765,187.976 L614.293,187.976 C630.861,187.976 644.26,175.591 644.26,159.129 C644.26,142.667 657.691,129.321 674.26,129.321 L836.508,129.304 C853.085,129.304 866.025,115.934 866.025,99.462 C866.025,76.959 884.367,59.673 907.015,59.673 L1050.628,59.516 C1067.196,59.516 1079.259,47.271 1079.259,30.808 C1079.259,14.346 1092.691,1 1109.259,1"
              stroke="#DCDBDA"
              strokeWidth="2"
            />
            <path
              id="motionPath3"
              d="M1.0003,130.0781 L234.2933,130.0611 C250.8613,130.0611 264.2933,116.7151 264.2933,100.2531 C264.2933,83.7911 277.4403,71.3891 294.0093,71.3891 L453.0093,71.3891 C469.5773,71.3891 482.7983,84.7521 482.7983,101.2141 C482.7983,117.6761 496.1963,130.0611 512.7653,130.0611 L614.2933,130.0611 C630.8613,130.0611 644.2603,117.6761 644.2603,101.2141 C644.2603,84.7521 657.6913,71.4051 674.2603,71.4051 L836.5083,71.3891 C853.0853,71.3891 866.0253,58.0191 866.0253,41.5471 C866.0253,19.0441 884.3673,1.7571 907.0153,1.7571 L1049.4713,1.9941 C1063.3723,1.9941 1079.2593,15.3571 1079.2593,31.8191 C1079.2593,48.2811 1093.1753,60.6791 1109.7453,60.6791 L1212.4483,60.6461"
              stroke="#DCDBDA"
              strokeWidth="2"
            />
            <path
              id="motionPath4"
              d="M994.008,60.0002 L896.265,59.9832 C879.695,59.9832 866.508,47.5172 866.508,30.9672 C866.508,14.4172 853.075,1.0002 836.508,1.0002 L674.259,1.0172 C657.691,1.0172 644.259,14.3632 644.259,30.8252 C644.259,47.2872 630.861,59.6732 614.293,59.6732 L512.764,59.6732 C496.195,59.6732 482.798,47.2872 482.798,30.8252 C482.798,14.3632 469.576,1.0002 453.008,1.0002 L294.008,1.0002 C277.44,1.0002 264.293,13.4022 264.293,29.8642 C264.293,46.3262 250.861,59.6732 234.293,59.6732 L1,59.6892"
              stroke="#DCDCDB"
              strokeWidth="2"
            />
            <path
              id="motionPath5"
              d="M811.2606,60.0947 C794.6926,60.0947 781.2606,73.5117 781.2606,90.0617 C781.2606,106.6127 767.8626,120.0617 751.2926,120.0617 L751.5086,120.0777 L669.7646,120.0617 C653.1976,120.0617 639.7646,106.6447 639.7646,90.0947 L639.7986,90.0617 C639.7986,73.5117 626.6906,60.0777 610.1226,60.0777 L512.7646,60.0617 C496.1966,60.0617 482.7916,47.0007 482.7916,30.4507 C482.7916,13.9017 469.3656,1.0947 452.7986,1.0947 L294.2606,1.0947 C277.6926,1.0947 264.2746,14.0767 264.2746,30.6267 C264.2746,47.1767 250.8626,60.0617 234.2936,60.0617 L233.3136,60.0777 L1.0006,60.0777"
              stroke="#DCDCDB"
              strokeWidth="2"
            />
            <path
              id="motionPath6"
              d="M1.0003,60.8789 L234.2933,60.8619 C250.8613,60.8619 264.2633,47.9859 264.2633,31.4369 C264.2633,14.8869 277.6913,1.8959 294.2603,1.8959 L452.7983,1.8959 C469.3663,1.8959 482.7683,14.7789 482.7683,31.3289 C482.7683,47.8789 496.1963,60.8619 512.7653,60.8619 L609.7983,60.8959 C626.3663,60.8959 639.7653,74.3459 639.7653,90.8959 C639.7653,107.4449 652.9403,120.8789 669.5093,120.8789 L745.7923,120.8789 C762.3603,120.8789 775.7653,134.3469 775.7653,150.8959 C775.7653,167.4449 789.9403,180.8789 806.5083,180.8789 L967.9923,180.8459 C984.5613,180.8459 997.9923,167.4299 997.9923,150.8789 C997.9923,134.3289 1011.4233,120.8789 1027.9923,120.8789 L1126.4933,120.8789"
              stroke="#DCDCDB"
              strokeWidth="2"
            />
            <path
              id="motionPath7"
              d="M1029.7322,240.9307 C1013.1642,240.9307 999.7322,227.5147 999.7322,210.9637 L999.7322,210.9307 C999.7322,194.3807 986.3012,180.9637 969.7322,180.9637 L806.5082,180.9037 C789.9402,180.9037 775.7652,167.4697 775.7652,150.9207 C775.7652,134.3717 762.3602,120.9037 745.7922,120.9037 L669.5092,120.9037 C652.9402,120.9037 639.7652,107.4697 639.7652,90.9207 C639.7652,74.3707 626.3662,60.9207 609.7982,60.9207 L512.7652,60.8867 C496.1962,60.8867 482.7682,47.9047 482.7682,31.3547 C482.7682,14.8047 469.3662,1.9207 452.7982,1.9207 L294.2602,1.9207 C277.6912,1.9207 264.2632,14.9107 264.2632,31.4617 C264.2632,48.0117 250.8612,60.8867 234.2932,60.8867 L1.0002,60.9037"
              stroke="#DCDBDA"
              strokeWidth="2"
            />
            <path
              id="motionPath8"
              d="M1.30988637,1.017 L230.551,1.017 C247.119,1.017 260.551,14.433 260.551,30.982 C260.551,47.534 273.949,60.982 290.518,60.982 C307.086,60.982 320.762,47.518 320.762,30.967 C320.762,14.417 334.194,1 350.762,1"
              stroke="#DBDAD9"
              strokeWidth="2"
            />
            <path
              id="motionPath9"
              d="M1.0003,1.6162 L229.7893,1.6342 C246.3573,1.6342 259.7893,15.0502 259.7893,31.5992 C259.7893,48.1502 273.1873,61.5992 289.7563,61.5992 C306.3243,61.5992 319.7563,75.0832 319.7563,91.6332 C319.7563,108.1822 333.1873,121.5992 349.7563,121.5992 L404.0003,121.6162"
              stroke="#DBD9D9"
              strokeWidth="2"
            />
          </g>
          <circle id="circle1" r="6" cx="0" cy="68" fill="#BF3C95" />
          <circle id="circle2" r="6" cx="0" cy="0" fill="#FF2953" />
          <circle id="circle3" r="6" cx="0" cy="57" fill="#FF2953" />
          <circle id="circle4" r="6" cx="0" cy="128" fill="#BF3C95" />
          <circle id="circle5" r="6" cx="0" cy="128" fill="#DC3377" />
          <circle id="circle6" r="6" cx="0" cy="128" fill="#CF3785" />
          <circle id="circle7" r="6" cx="0" cy="128" fill="#FF2953" />
          <circle id="circle8" r="6" cx="0" cy="187" fill="#FF2953" />
          <circle id="circle9" r="6" cx="0" cy="187" fill="#DC3377" />
        </svg>
      </section>
    );
  }
}

export default GSAP()(AboutExplore);
