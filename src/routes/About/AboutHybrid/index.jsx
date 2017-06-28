import React from 'react';
import GSAP from 'react-gsap-enhancer';
import { TimelineMax, TweenMax, Linear } from 'gsap';
import MorphSVGPlugin from 'vendor/gsap-plugins/MorphSVGPlugin';

export class AboutHybrid extends React.Component {
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
    const hybridPath = wrapper.querySelector('#hybridPath1');
    const hyPath = MorphSVGPlugin.pathDataToBezier(wrapper.querySelector('#hybridPath1'));
    const hyPath2 = MorphSVGPlugin.pathDataToBezier(wrapper.querySelector('#hybridPath2'));
    const tl = new TimelineMax();
    var baseDuration = 4;

    tl
      .add(this.createLineTween(hybridPath, baseDuration * 1),
        // Y THIS NO WOK
        // { onComplete: () => { tl.set('.hyText', { opacity: 1 }); } },
      'experiment')
      .to('#hyCircle1', baseDuration, { bezier: { values: hyPath, type: 'cubic' }, ease: Linear.easeNone, delay: 3.4 / baseDuration }, 'experiment')
      .to('#hyCircle2', baseDuration, { bezier: { values: hyPath, type: 'cubic' }, ease: Linear.easeNone, delay: 4.6 / baseDuration }, 'experiment')
      .to('#hyCircle3', baseDuration, { bezier: { values: hyPath, type: 'cubic' }, ease: Linear.easeNone, delay: 5.8 / baseDuration }, 'experiment')
      .to('#hyCircle4', baseDuration, { bezier: { values: hyPath, type: 'cubic' }, ease: Linear.easeNone, delay: 7 / baseDuration }, 'experiment')
      .to('#hyText1', baseDuration, { attr: { 'stdDeviation': 3 }, opacity: 1.5, bezier: { values: hyPath2, type: 'cubic' }, ease: Linear.easeNone, delay: 3.2 / baseDuration }, 'experiment')
      .to('#hyText2', baseDuration, { attr: { 'stdDeviation': 3 }, opacity: 1.5, bezier: { values: hyPath2, type: 'cubic' }, ease: Linear.easeNone, delay: 4.3 / baseDuration }, 'experiment')
      .to('#hyText3', baseDuration, { attr: { 'stdDeviation': 3 }, opacity: 1.5, bezier: { values: hyPath2, type: 'cubic' }, ease: Linear.easeNone, delay: 5.4 / baseDuration }, 'experiment')
      .to('#hyText4', baseDuration, { attr: { 'stdDeviation': 3 }, opacity: 1.5, bezier: { values: hyPath2, type: 'cubic' }, ease: Linear.easeNone, delay: 6.5 / baseDuration }, 'experiment')
      // .set('.hyText', { opacity: 1 })
      .addPause(baseDuration);
    tl.play();
    return tl;
  }

  render () {
    return (
      <section className="hero layout--relative layout--fullheight layout--landscape" style={ { overflow: 'hidden' } }>
        <div className="about__hybrid--circle">
          <svg viewBox="0 0 1370 818" preserveAspectRatio="xMaxYMax meet">
            <filter id="f1" x="0" y="0">
              <feGaussianBlur in="SourceGraphic" stdDeviation="0" id="textBlur" />
            </filter>
            <g id="Hybrid" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <path
                id="hybridPath1"
                className="aboutPath"
                d="M0,646 C250,-230.75 1452.15,58.74 1338,912"
              />
              <path
                id="hybridPath2"
                d="M-24,639.26 C234.55,-259.1 1477.46,37.58 1359,912"
              />
            </g>

            <circle id="hyCircle1" r="10" cx="0" cy="0" fill="#B141A5" />
            <circle id="hyCircle2" r="10" cx="0" cy="0" fill="#BE3C97" />
            <circle id="hyCircle3" r="10" cx="0" cy="0" fill="#E33170" />
            <circle id="hyCircle4" r="10" cx="0" cy="0" fill="#FF2953" />

            <text className="hyText" id="hyText1" filter="url(#f1)">UX</text>
            <text className="hyText" id="hyText2" filter="url(#f1)">Visual</text>
            <text className="hyText" id="hyText3" filter="url(#f1)">Engineering</text>
            <text className="hyText" id="hyText4" filter="url(#f1)">Research</text>

          </svg>
        </div>
        <div className=" row pb5 about__hybrid--header">
          <div className="col-8 col-12--mlg">
            <h1 className="typ--bold typ--redshift pb2">Hybrid teams.</h1>
            <h3>We believe the best products are created by hybrid teams. Designers, researchers, and developers work shoulder-to-shoulder in our studio to create experiences that are beautiful and grounded in real user needs.</h3>
          </div>
        </div>
      </section>
    );
  }
}

export default GSAP()(AboutHybrid);
