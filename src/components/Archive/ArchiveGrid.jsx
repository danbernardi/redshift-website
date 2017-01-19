import React from 'react';
import './Archive.scss';
import { caseStudyArchives } from 'data/caseStudyArchives';
import PinkHover from 'components/PinkHover';

import CSArchive1 from 'routes/Archives/Archive1/CSArchive1';

const generateCaseStudies = (caseStudyArray) => (
  caseStudyArray.map((item, index) => (
    <PinkHover
      key={ index }
      classes="archive__item"
      modal={ {
        // create ArchiveModal and pass 'component: <ArchiveModal archiveContent={ item }'> from caseStudyArchives data
        component: <CSArchive1 />,
        openState: true
      } }
      imageSrc={ item.thumb }
    >
      <p>{ item.id }</p>
    </PinkHover>
  ))
);

const ArchiveGrid = () => (
  <section className="archive__grid">
    { caseStudyArchives && caseStudyArchives.length
      ? generateCaseStudies(caseStudyArchives)
      : null
    }
  </section>
);

export default ArchiveGrid;
