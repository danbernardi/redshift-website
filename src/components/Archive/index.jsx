import React from 'react';
import { caseStudies } from 'data/caseStudies';
import './Archive.scss';

export function Archive () {
  return (
    <section className="archive row">
      <h1 className="typ--bold typ--center mb10">Selected work.</h1>

      <div className="archive__grid">
        { caseStudies.map((study, index) => (
          <div className="archive__item theme--dark" key={ index }>
            { study.gridThumbnail && <img src={ study.gridThumbnail } alt={ study.name } /> }
            <h3 className="archive__name typ--bold">{ `${ study.name }.` }</h3>
            <div className="archive__overlay">
              <h2 className="typ--bold">{ study.shortDescription }</h2>
            </div>
          </div>
        )) }
      </div>
    </section>
  );
}

export default Archive;
