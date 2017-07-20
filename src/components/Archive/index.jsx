import React from 'react';
import { Link } from 'react-router';
import { caseStudies } from 'data/caseStudies';
import Isotope from 'isotope-layout';
import FooterHome from 'components/Footer/FooterHome';
import 'masonry-layout';
import './Archive.scss';

export class Archive extends React.Component {
  componentDidMount () {
    setTimeout(() => {
      this.isotope = new Isotope(this.grid, {
        itemSelector: '.archive__item',
        layoutMode: 'masonry'
      });
    }, 200);

    window.addEventListener('scroll', this.handleScroll.bind(this));
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

  render () {
    return (
      <section className="archive__wrapper" ref={ el => { this.container = el; } }>
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

export default Archive;
