import React from 'react';
import { TweenMax } from 'gsap';
import gsap from 'gsap';
// import Snap from 'snapsvg';
import './style.scss';

import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js';

export class AboutAnimation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  animatePath() {

    // var path = MorphSVGPlugin.pathDataToBezier("#motionPath");

    // TweenMax.to("#circle", 40, {bezier:{values:path, type:"cubic"}, ease:Linear.easeNone, repeat:-1});


    const lowerCircle = (
      <svg width="1238px" height="392px" viewBox="0 0 1238 392" >
          <g id="Nodes-v2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Artboard-Copy-17" transform="translate(-101.000000, 0.000000)" stroke="#DDDDDD" stroke-width="2">
                  <path d="M1403,391 C1403,13.7895159 1097.21048,-292 720,-292 C342.789516,-292 37,13.7895159 37,391" id="Oval-16" transform="translate(720.000000, 49.500000) scale(-1, -1) translate(-720.000000, -49.500000) "></path>
              </g>
          </g>
      </svg>
    );



    const svgPath = "M1403,391 C1403,13.7895159 1097.21048,-292 720,-292 C342.789516,-292 37,13.7895159 37,391".split(' ').map((coord) => {
      const xYPair = coord.replace(/[A-Za-z]/, '').split(',');
      return {
        x: xYPair[0],
        y: xYPair[1]
      };
    });

    const s = Snap.path.toCubic("M1403,391 C1403,13.7895159 1097.21048,-292 720,-292 C342.789516,-292 37,13.7895159 37,391");
    // debugger;

    // const path = MorphSVGPlugin.pathDataToBezier(lowerCircle);

    // TweenMax.to(circle, 40, {bezier:{morphSVG: lowerCircle, type:"cubic"}, ease:Linear.easeNone, repeat:-1});

    if (this.circle) {
      TweenMax.to(this.circle, 6, {
        bezier: {
          type: "soft",
          values: s,
          autoRotate: true
        },
        ease: Linear.easeNone,
        repeat: -1
      }, "start+=3");
    }

    return lowerCircle;
  }

  drawCircle () {
    return (
      <svg id="circle" ref={(el) => {
        this.circle = el;
        this.animatePath();
        }
      }>
        <circle cx={50} cy={50} r={10} fill="red" />
      </svg>
    );
  }

  render () {
    return (
      <div className="row">
        { this.drawCircle() }
        Animation
      </div>
    );
  }
}

export default AboutAnimation;
