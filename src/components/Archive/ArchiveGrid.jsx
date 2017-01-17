import React from 'react';
import './Archive.scss';
import { caseStudyArchives } from 'data/caseStudyArchives';

const ArchiveGrid = () => {
  const generateCaseStudies = (caseStudyArray) => (
    caseStudyArray.map((item, index) => (
      <div
        key={ index }
        className="archive__item"
        style={ { backgroundImage: `url(${item.thumb})` } }
      />
    ))
  );

  console.log(caseStudyArchives);

  return (
    <section className="archive__grid">
      { caseStudyArchives && caseStudyArchives.length
        ? generateCaseStudies(caseStudyArchives)
        : null
      }
    </section>
  );
};

export default ArchiveGrid;
