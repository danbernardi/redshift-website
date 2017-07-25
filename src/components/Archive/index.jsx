import React from 'react';
import { Link } from 'react-router';
import { caseStudies } from 'data/caseStudies';
import Isotope from 'isotope-layout';
import FooterHome from 'components/Footer/FooterHome';
import Watcher from 'components/Watcher';
import { TimelineMax } from 'gsap';
import GSAP from 'react-gsap-enhancer';
import { isInRange } from 'utils/animation';
import 'masonry-layout';
import './Archive.scss';

export class Archive extends React.Component {
  constructor (props) {
    super(props);

    this.timeline = null;
    this.animationInRange = null;
    this.isotope;
    this.state = {
      imagesLoaded: 0,
      animationProgress: 0
    };
  }

  componentDidMount () {
    this.isotope = new Isotope(this.grid, {
      itemSelector: '.archive__item',
      layoutMode: 'masonry'
    });

    this.timeline = this.addAnimation(this.animateIn);
  }

  componentWillReceiveProps (nextProps) {
    const { animationProgress } = nextProps;
    this.animationInRange = isInRange(animationProgress, 0, 1);

    if (isInRange(animationProgress, 0, 1)) {
      this.setState({
        animationProgress
      }, () => {
        this.timeline.progress(animationProgress);
      });
    } else {
      this.timeline.progress(0);
    }
  }

  shouldComponentUpdate () {
    return true;
    // return this.animationInRange;
  }

  animateIn ({ target }) {
    const tl = new TimelineMax();
    tl.to(target[0], 1, { top: 0 });
    tl.pause();

    return tl;
  }

  componentDidUpdate () {
    const { imagesLoaded } = this.state;

    if (imagesLoaded === caseStudies.filter(cs => cs.gridThumbnail).length) {
      this.props.onReady();
      this.isotope.layout();
    }
  }

  watcherCallback (watcher) {
    if (watcher.isFullyInViewport) {
      const showcase = document.querySelector('.showcase');
      showcase.scrollTop = showcase.scrollHeight;
    }
  };

  render () {
    const { imagesLoaded } = this.state;

    return (
      <section className="archive__wrapper" ref={ el => { this.container = el; this.props.onDidMount(el); } }>
        <Watcher
          autoStart={ false }
          exitViewport={ this.watcherCallback.bind(this) }
        />
        <div className="archive row" data-animationName="grid">
          <h1 className="typ--bold typ--center mb10">Selected work.</h1>

          <div className="archive__gridwrapper">
            <div className="archive__grid" ref={ el => { this.grid = el; } }>
              { caseStudies.filter(study => !study.featured).map((study, index) => (
                <div className="archive__item theme--dark" key={ index }>
                  <Link className="archive__link" to={ `/work/${study.id}` }>
                    { study.gridThumbnail
                      ? <img src={ study.gridThumbnail } alt={ study.name } onLoad={ () => this.setState({ imagesLoaded: imagesLoaded + 1 }) } />
                      : <div className="archive__imgspacer" />
                    }
                    <h4 className="archive__name typ--bold">{ `${ study.name }.` }</h4>
                    <div className="archive__overlay" style={ { backgroundColor: study.color } }>
                      <div className="p2">
                        <h3 className="typ--bold">{ study.shortDescription }</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              )) }
            </div>
          </div>
        </div>
        <FooterHome />
      </section>
    );
  }
}

export default GSAP()(Archive);
