import React from 'react';
import GSAP from 'react-gsap-enhancer';
import { TimelineMax, TweenMax, Power2 } from 'gsap';
import MorphSVGPlugin from 'vendor/gsap-plugins/MorphSVGPlugin';
import PropTypes from 'prop-types';
import Watcher from 'components/Watcher';

export class AboutExplore extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      exploreAnimationStart: false
    };
  }

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
        ease: Power2.easeInOut,
        autoKill: false
      }
    );
  };

  circlePathTween (circle, path, speed) {
    return TweenMax
      .to(circle, speed, {
        bezier: { values: path, type: 'cubic' },
        ease: Power2.easeInOut,
        autoKill: false
      }
    );
  };

  createTimeline (target) {
    const wrapper = target.target[0];
    const baseDuration = 1 * 0.5;
    const tl = new TimelineMax({ paused: true });
    const exSvg = [].slice.call(wrapper.querySelectorAll('.aboutPath'));
    const exCircle = [].slice.call(wrapper.querySelectorAll('.exCircle'));
    const exPath = exSvg.map((path) => MorphSVGPlugin.pathDataToBezier(path));

    tl
    .set(exCircle, { opacity: 1 })
    .add(this.createLineTween(exSvg[0], baseDuration * 2.99), 'aboutOne')
    .add(this.createLineTween(exSvg[1], baseDuration * 6), 'aboutOne')
    .add(this.createLineTween(exSvg[2], baseDuration * 6.48), 'aboutOne')
    .add(this.createLineTween(exSvg[3], baseDuration * 5.27), 'aboutOne')
    .add(this.createLineTween(exSvg[4], baseDuration * 4.44), 'aboutOne')
    .add(this.createLineTween(exSvg[5], baseDuration * 6.05), 'aboutOne')
    .add(this.createLineTween(exSvg[6], baseDuration * 5.62), 'aboutOne')
    .add(this.createLineTween(exSvg[7], baseDuration * 1.95), 'aboutOne')
    .add(this.createLineTween(exSvg[8], baseDuration * 2.2), 'aboutOne')

    .add(this.circlePathTween(exCircle[0], exPath[0], baseDuration * 2.99), 'aboutOne+=0.5')
    .add(this.circlePathTween(exCircle[1], exPath[1], baseDuration * 6), 'aboutOne+=0.5')
    .add(this.circlePathTween(exCircle[2], exPath[2], baseDuration * 6.48), 'aboutOne+=0.5')
    .add(this.circlePathTween(exCircle[3], exPath[3], baseDuration * 5.27), 'aboutOne+=0.5')
    .add(this.circlePathTween(exCircle[4], exPath[4], baseDuration * 4.44), 'aboutOne+=0.5')
    .add(this.circlePathTween(exCircle[5], exPath[5], baseDuration * 6.05), 'aboutOne+=0.5')
    .add(this.circlePathTween(exCircle[6], exPath[6], baseDuration * 5.62), 'aboutOne+=0.5')
    .add(this.circlePathTween(exCircle[7], exPath[7], baseDuration * 1.95), 'aboutOne+=0.5')
    .add(this.circlePathTween(exCircle[8], exPath[8], baseDuration * 2.2), 'aboutOne+=0.5');

    return tl;
  }

  watcherCallback (watcher) {
    if (watcher.isInViewport) { this.timeline.play(); }
  };

  render () {
    return (
      <section>
        <Watcher
          offset={ { top: '50rem', position: 'relative' } }
          autoStart={ false }
          stateChange={ this.watcherCallback.bind(this) }
          enterViewport={ this.watcherCallback.bind(this) }
        />
        <svg width="100%" viewBox="10 0 1219 239" preserveAspectRatio="xMaxYMax meet" style={ { maxWidth: '134rem' } }>
          <g
            id="aboutExploreLines"
            fill="none"
          >
            <path
              id="explorePath1"
              className="aboutPath"
              d="M-30,164 L504.335664,164 C515.922378,164 525.314685,155.244203 525.314685,143.601695 C525.314685,131.75028 534.707692,122.5 546.293706,122.5 L662.377622,122.5 C673.964336,122.5 682.657343,113.742797 682.657343,102.101695 C682.657343,90.4612966 692.74965,81 704.335664,81 L740,81"
            />
            <path
              id="explorePath2"
              className="aboutPath"
              d="M-30,164 L504.5,164 C516.0976,164 525.5,155.216695 525.5,143.684492 C525.5,132.152289 534.9017,122.668449 546.5,122.668449 L662.7,122.668449 C674.2976,122.668449 683,132.852824 683,144.385027 C683,155.91723 687.5017,164 699.1,164 L767,164 C778.5976,164 791.5,155.216695 791.5,143.684492 C791.5,132.152289 800.9017,122.668449 812.5,122.668449 L925.9,122.668449 C937.5039,122.668449 946.9,113.191615 946.9,101.652406 C946.9,85.8882727 959.7464,73.631016 975.6,73.631016 L1075.7,73.631016 C1087.2976,73.631016 1096,64.8484118 1096,53.315508 C1096,41.7833048 1105.4024,33 1117,33"
            />
            <path
              id="explorePath3"
              className="aboutPath"
              d="M-30,164 L504.480627,164 C516.076861,164 525.478153,155.252558 525.478153,143.767442 C525.478153,132.282326 534.878746,122.837209 546.47568,122.837209 L662.661995,122.837209 C674.258229,122.837209 682.959604,132.98 682.959604,144.465116 C682.959604,155.950233 687.460774,164 699.057708,164 L766.949711,164 C778.545946,164 791.446826,155.252558 791.446826,143.767442 C791.446826,132.282326 800.847419,122.837209 812.444353,122.837209 L925.830998,122.837209 C937.433531,122.837209 946.828524,113.39907 946.828524,101.906977 C946.828524,86.2072093 959.673411,74 975.525144,74 L1075.61336,74 C1085.34291,74 1095.91096,83.4451163 1095.91096,94.9302326 C1095.91096,106.415349 1105.31086,115.162791 1116.90849,115.162791 L1189,115.162791"
            />
            <path
              id="explorePath4"
              className="aboutPath"
              d="M-30,163.986099 L504.61809,164 C516.224016,164 525.633166,155.287153 525.633166,143.847458 C525.633166,132.407763 535.042316,123 546.648241,123 L662.931658,123 C674.537584,123 683.246231,133.102678 683.246231,144.542373 C683.246231,155.982068 687.751163,164 699.357789,164 L767.306533,164 C778.912458,164 791.824121,155.287153 791.824121,143.847458 C791.824121,132.407763 801.23327,123 812.839196,123 L926.320603,123 C937.925828,123 947.335678,132.34661 947.335678,143.847458 C947.335678,155.348305 956.743427,164 968.350754,164 L1037,164"
            />
            <path
              id="explorePath5"
              className="aboutPath"
              d="M-30,164.151261 L504.384236,164.151261 C515.974374,164.151261 525.369458,155.467647 525.369458,143.92437 C525.369458,132.381092 534.765241,123 546.35468,123 L662.472906,123 C674.061645,123 682.758621,133.079269 682.758621,144.621849 C682.758621,156.165126 687.257852,164.151261 698.847291,164.151261 L766.699507,164.151261 C778.288946,164.151261 787.684729,173.532353 787.684729,185.07563 C787.684729,196.618908 797.081212,206 808.669951,206 L866.029557,206 C877.620394,206 887.014778,196.619605 887.014778,185.07563 C887.014778,173.532353 896.410562,164.151261 908,164.151261"
            />
            <path
              id="explorePath6"
              className="aboutPath"
              d="M-30,164.201117 L504.520852,164.201117 C516.119922,164.201117 525.523514,155.506285 525.523514,143.949721 C525.523514,132.392458 534.926406,123 546.526176,123 L662.740905,123 C674.339975,123 683.043478,133.090782 683.043478,144.648045 C683.043478,156.205307 687.545749,164.201117 699.145519,164.201117 L767.054126,164.201117 C776.446605,164.201117 788.056788,171.809055 788.056788,185.150838 C788.056788,196.707402 797.45968,206.100559 809.05945,206.100559 L866.466726,206.100559 C878.065796,206.100559 883.268855,215.493715 883.268855,227.050279 C883.268855,238.606844 893.372536,248 904.971606,248 L1019.08607,248 C1030.68584,248 1039.38864,238.60824 1039.38864,227.050279 C1039.38864,215.493017 1049.49162,206.100559 1061.09139,206.100559 L1129,206.100559"
            />
            <path
              id="explorePath7"
              className="aboutPath"
              d="M-30,164.5 L504.61117,164.224217 C516.216607,164.224217 525.625361,155.525208 525.625361,143.961466 C525.625361,132.397025 535.033415,123 546.639553,123 L662.918082,123 C674.523519,123 683.2318,133.096439 683.2318,144.660182 C683.2318,156.223924 687.736543,164.224217 699.342681,164.224217 L767.288568,164.224217 C778.894005,164.224217 788.30276,173.394724 788.30276,185.185683 C788.30276,196.976642 797.710813,206.147149 809.316951,206.147149 L866.755743,206.147149 C878.36118,206.147149 883.567096,215.545571 883.567096,227.108615 C883.567096,238.671658 893.676323,248.070081 905.281761,248.070081 L1019.45887,248.070081 C1031.06501,248.070081 1040.98581,257.474792 1040.98581,269.061592 C1040.98581,280.626032 1050.39456,290 1062,290"
            />
            <path
              className="aboutPath"
              id="explorePath8"
              d="M-30,164 L504.344074,164 C515.93068,164 522.526822,173.4157 522.526822,185 C522.526822,196.5864 531.91961,206 543.506917,206 C555.093523,206 565.019906,196.5626 565.019906,184.9769 C565.019906,173.3919 574.413393,164 586,164"
            />
            <path
              id="explorePath9"
              className="aboutPath"
              d="M-30,164 L504.384236,164 C515.973675,164 522.571429,173.4157 522.571429,185 C522.571429,196.5857 531.966512,206 543.55665,206 C555.146089,206 565.0707,215.4269 565.0707,227.0119 C565.0707,238.5962 574.465783,247.9881 586.055921,247.9881 L624,248"
            />
          </g>
          <circle id="circle1" className="exCircle" r="6" cx="0" cy="0" fill="#BF3C95" />
          <circle id="circle2" className="exCircle" r="6" cx="0" cy="0" fill="#FF2953" />
          <circle id="circle3" className="exCircle" r="6" cx="0" cy="0" fill="#FF2953" />
          <circle id="circle4" className="exCircle" r="6" cx="0" cy="0" fill="#BF3C95" />
          <circle id="circle5" className="exCircle" r="6" cx="0" cy="0" fill="#DC3377" />
          <circle id="circle6" className="exCircle" r="6" cx="0" cy="0" fill="#CF3785" />
          <circle id="circle7" className="exCircle" r="6" cx="0" cy="0" fill="#FF2953" />
          <circle id="circle8" className="exCircle" r="6" cx="0" cy="0" fill="#FF2953" />
          <circle id="circle9" className="exCircle" r="6" cx="0" cy="0" fill="#DC3377" />
        </svg>
      </section>
    );
  }
}

AboutExplore.propTypes = {
  playExplore: PropTypes.bool
};

export default GSAP()(AboutExplore);
