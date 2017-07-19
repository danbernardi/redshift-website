import React from 'react';
import { Link } from 'react-router';
import { caseStudies } from 'data/caseStudies';
import Isotope from 'isotope-layout';
import FooterHome from 'components/Footer/FooterHome';
import Watcher from 'components/Watcher';
import 'masonry-layout';
import './Archive.scss';

export class Archive extends React.Component {

  constructor (props) {
    super(props);

    this.isotope;
    this.state = {
      imagesLoaded: 0
    };
  }

  componentDidMount () {
    this.isotope = new Isotope(this.grid, {
      itemSelector: '.archive__item',
      layoutMode: 'masonry'
    });

    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentDidUpdate () {
    const { imagesLoaded } = this.state;

    if (imagesLoaded === caseStudies.filter(cs => cs.gridThumbnail).length) {
      this.isotope.layout();
    }
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll () {
    if (this.container) {
      if (document.scrollingElement.scrollTop < this.container.getBoundingClientRect().top) {
        document.querySelector('.showcase').style.overflow = 'auto';
      }
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
      <section className="archive__wrapper" ref={ el => { this.container = el; } }>
        <Watcher
          autoStart={ false }
          exitViewport={ this.watcherCallback.bind(this) }
        />
        <div className="archive row" data-animationName="grid">
          <h1 className="typ--bold typ--center mb10">Selected work.</h1>

          <div className="archive__gridwrapper">
            <div className="archive__grid" ref={ el => { this.grid = el; } }>
              { caseStudies.map((study, index) => (
                <div className="archive__item theme--dark" key={ index }>
                  <Link className="archive__link" to={ `/work/${study.id}` }>
                    { study.gridThumbnail
                      ? <img src={ study.gridThumbnail } alt={ study.name } onLoad={ () => this.setState({ imagesLoaded: imagesLoaded + 1 }) } />
                      : <div className="archive__imgspacer" />
                    }
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
        </div>
        <div data-animationName="footer"><FooterHome /></div>\
      </section>
    );
  }
}

export default Archive;
