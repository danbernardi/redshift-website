// import React from 'react';
// import GSAP from 'react-gsap-enhancer';
// import { TimelineLite, TweenMax, Power2 } from 'gsap';
// import MorphSVGPlugin from 'vendor/gsap-plugins/MorphSVGPlugin';
// import CustomEase from 'vendor/gsap-plugins/CustomEase';
// import Watcher from 'components/Watcher';

// //Custom easing curve
// const superBounce = 'M0,0 C0.08,0.502 0.096,0.964 0.208,0.964 0.362,0.964 0.336,0.224 0.43,0.224 0.516,0.224 0.532,0.752 0.638,0.752 0.724,0.752 0.736,0.38 0.798,0.38 0.848,0.38 0.856,0.554 0.9,0.554 0.938,0.554 0.952,0.5 1,0.5';

// export class AboutExperiment extends React.Component {
//   componentDidMount () {
//     this.timeline = this.addAnimation(this.createTimeline.bind(this));
//   }

//   drawLine (obj, line) {
//     line.style.strokeDasharray = [obj.length, obj.pathLength].join(' ');
//   };

//   createLineTween (line, speed) {
//     const pathObject = {
//       length: 0,
//       pathLength: line.getTotalLength()
//     };

//     return TweenMax
//       .to(pathObject, speed, {
//         length: pathObject.pathLength,
//         onUpdate: this.drawLine,
//         onUpdateParams: [pathObject, line],
//         immediateRender: true,
//         ease: Power2.easeInOut
//       }
//     );
//   };

//   createTimeline (target) {
//     const wrapper = target.target[0];
//     const experimentPath = wrapper.querySelector('#experimentPath1');
//     const exCircles = [].slice.call(wrapper.querySelectorAll('.exCircle'));
//     const pathExtensions = [].slice.call(wrapper.querySelectorAll('.path-extension')).map((path) => {
//       return MorphSVGPlugin.pathDataToBezier(path);
//     });

    // const tl = new TimelineLite({ paused: true });
    // var baseDuration = 1;

//     tl
//       .set(exCircles, { opacity: 1 })
//       .add(this.createLineTween(experimentPath, baseDuration * 2), 'experiment')
//       .staggerTo(exCircles, baseDuration * 6, { bezier: { values: pathExtensions[0], type: 'cubic' }, ease: CustomEase.create('custom', superBounce) }, 0.2, 'experiment+=1');

//     return tl;
//   }

//   watcherCallback (watcher) {
//     if (watcher.isInViewport) { this.timeline.play(); }
//   };

//   render () {
//     return (
//       <section>
//         <Watcher
//           offset={ { top: '50rem', position: 'relative' } }
//           autoStart={ false }
//           stateChange={ this.watcherCallback.bind(this) }
//           enterViewport={ this.watcherCallback.bind(this) }
//         />
//         <svg width="70%" viewBox="20 0 929 300" preserveAspectRatio="xMinYMax meet" style={ { maxWidth: '93rem' } }>
//           <g fill="none">
//             <path id="experimentPath1" className="path-extension cls-1 aboutPath" d="M50,0 C257.04, 411.9 784.68,366.51 976.58,0" />

//           </g>
//           <circle id="exCircle1" className="exCircle" r="6" cx="0" cy="0" fill="#BF3C95" />
//           <circle id="exCircle2" className="exCircle" r="6" cx="0" cy="0" fill="#FF2953" />
//           <circle id="exCircle3" className="exCircle" r="6" cx="0" cy="0" fill="#FF2953" />
//           <circle id="exCircle4" className="exCircle" r="6" cx="0" cy="0" fill="#BF3C95" />
//           <circle id="exCircle5" className="exCircle" r="6" cx="0" cy="0" fill="#DC3377" />
//         </svg>
//       </section>
//     );
//   }
// }

// export default GSAP()(AboutExperiment);
