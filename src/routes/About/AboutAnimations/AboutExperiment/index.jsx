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
    const tl = new TimelineMax({  });
    var baseDuration = 4;

    const newPath = [...exPath];
    const path2 = [ newPath.slice().reverse()[0], { x: 220, y: 200 }];
    // path2[3] = { x: 220, y: 200 };


    console.log(newPath, path2)

    tl
      .add(this.createLineTween(experimentPath, 1), 'experiment')
      .to('#exCircle1', baseDuration, { bezier: { values: newPath, type: 'cubic' }, ease: Power3.easeInOut,   repeat: -1, yoyo: true   }, 'experiment')
      .to('#exCircle2', baseDuration, { bezier: { values: newPath, type: 'cubic' }, ease: Power3.easeInOut,   repeat: -1, yoyo: true   }, 'experiment+=0.1')
      .to('#exCircle3', baseDuration, { bezier: { values: newPath, type: 'cubic' }, ease: Power3.easeInOut,   repeat: -1, yoyo: true   }, 'experiment+=0.2')
      .to('#exCircle4', baseDuration, { bezier: { values: newPath, type: 'cubic' }, ease: Power3.easeInOut,   repeat: -1, yoyo: true   }, 'experiment+=0.3')
      .to('#exCircle5', baseDuration, { bezier: { values: newPath, type: 'cubic' }, ease: Power3.easeInOut,   repeat: -1, yoyo: true   }, 'experiment+=0.4')

      // .to('#exCircle1', baseDuration, { bezier: { values: path2, type: 'thru', curviness: 2 }, ease: Power3.easeInOut, /* repeat: -1, yoyo: true */ }, 'experiment2')
      // .to('#exCircle2', baseDuration, { bezier: { values: path2, type: 'thru', curviness: 2 }, ease: Power3.easeInOut, /* repeat: -1, yoyo: true */ }, 'experiment2+=0.1')
      // .to('#exCircle3', baseDuration, { bezier: { values: path2, type: 'thru', curviness: 2 }, ease: Power3.easeInOut, /* repeat: -1, yoyo: true */ }, 'experiment2+=0.2')
      // .to('#exCircle4', baseDuration, { bezier: { values: path2, type: 'thru', curviness: 2 }, ease: Power3.easeInOut, /* repeat: -1, yoyo: true */ }, 'experiment2+=0.3')
      // .to('#exCircle5', baseDuration, { bezier: { values: path2, type: 'thru', curviness: 2 }, ease: Power3.easeInOut, /* repeat: -1, yoyo: true */ }, 'experiment2+=0.4')




    tl.play();

    // debugger;
    // tl
    //   .to('#exCircle1', 2, {physicsProps: {
    //     bezier: { values: exPath, type: 'cubic', velocity: 100, accelleration: 200 }
    //   }})
    //   // .to('#exCircle1', baseDuration, { bezier: { values: exPath, type: 'cubic' }, ease: Linear.easeNone, repeat: 0 }, 'experiment')

    // return tl;
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
