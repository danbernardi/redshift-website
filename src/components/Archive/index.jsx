import React from 'react';
import { Link } from 'react-router';
import { caseStudies } from 'data/caseStudies';
import Isotope from 'isotope-layout';
import FooterHome from 'components/Footer/FooterHome';
import GSAP from 'react-gsap-enhancer';
import { isInRange } from 'utils/animation';
import { TimelineMax, Power2 } from 'gsap';
import 'masonry-layout';
import './Archive.scss';

export class Archive extends React.Component {
  constructor (props) {
    super(props);

    this.timeline = null;
    this.animationComplete = false;
    this.state = {
      animationProgress: 0
    };
  }

  componentDidMount () {
    this.timeline = this.addAnimation(this.createTimeline);

    setTimeout(() => {
      this.isotope = new Isotope(this.grid, {
        itemSelector: '.archive__item',
        layoutMode: 'masonry'
      });
    }, 200);
  }

  shouldComponentUpdate (nextProps) {
    return isInRange(nextProps.animationProgress, 0, 1);
  }

  componentWillReceiveProps (nextProps) {
    const { animationProgress } = nextProps;
    if (isInRange(animationProgress, 0, 1)) {
      this.setState({
        animationProgress
      }, () => {
        this.timeline.progress(animationProgress);
      });
    }
  }

  createTimeline ({ target }) {
    const grid = target.find({ 'data-animationName': 'grid' });
    const footer = target.find({ 'data-animationName': 'footer' });

    return new TimelineMax({
      onComplete: () => {
        this.animationComplete = true;
      }
    }).set([grid, footer], { y: '100%', opacity: 0 })
      .pause()
      .addPause(0.70)
      .add('text-entry-point')
      .staggerTo([grid, footer], 0.3, {
        y: '0%',
        opacity: 1,
        ease: Power2.easeOut
      }, 0.1, 'text-entry-point');
  }

  render () {
    const { onDidMount } = this.props;

    return (
      <section className="archive__wrapper" ref={ onDidMount }>
        <div className="archive row" data-animationName="grid">
          <h1 className="typ--bold typ--center mb10">Selected work.</h1>

          <div className="archive__grid" ref={ el => { this.grid = el; } }>
            { caseStudies.map((study, index) => (
              <div className="archive__item theme--dark" key={ index }>
                <Link className="archive__link" to={ `/work/${study.id}` }>
                  { study.gridThumbnail ? <img src={ study.gridThumbnail } alt={ study.name } /> : <div className="archive__imgspacer" /> }
                  <h4 className="archive__name typ--bold">{ `${ study.name }.` }</h4>
                  <div className="archive__overlay" style={ { backgroundColor: study.color } }>
                    <div className="p4">
                      <h2 className="typ--bold">{ study.shortDescription }</h2>
                    </div>
                  </div>
                </Link>
              </div>
            )) }
          </div>
        </div>
        <div data-animationName="footer"><FooterHome /></div>
      </section>
    );
  }
}

export default (GSAP()(Archive));
