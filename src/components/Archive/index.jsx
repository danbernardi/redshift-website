import React from 'react';
import { caseStudies } from 'data/caseStudies';
import Isotope from 'isotope-layout';
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
  }

  render () {
    return (
      <section className="archive row">
        <h1 className="typ--bold typ--center mb10">Selected work.</h1>

        <div className="archive__grid" ref={ el => { this.grid = el; } }>
          { caseStudies.map((study, index) => (
            <div className="archive__item theme--dark" key={ index }>
              { study.gridThumbnail ? <img src={ study.gridThumbnail } alt={ study.name } /> : <div className="archive__imgspacer" /> }
              <h4 className="archive__name typ--bold">{ `${ study.name }.` }</h4>
              <div className="archive__overlay">
                <h2 className="typ--bold">{ study.shortDescription }</h2>
              </div>
            </div>
          )) }
        </div>
      </section>
    );
  }
}

export default Archive;
