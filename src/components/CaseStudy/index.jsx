import React from 'react';
import CaseStudySection from './CaseStudySection';
import './styles.scss';

const CaseStudy = props => {
  const { name, content, heading, next } = props;

  return (
    <section className="casestudy">
      <div className="row">
        <h4 className="casestudy__name typ--caps">{ name }</h4>
      </div>

      <div className="row">
        <h1 className="casestudy__heading">{ heading }</h1>
      </div>

      { content && content.length ?
        content.map((section, index) => (
          <CaseStudySection
            key={ index }
            { ...section }
          />
        ))
      : null }

      { typeof next === 'object' ?
        <div className="casestudy__next py7" data-target={ next.id }>
          <div className="row">
            <h2 className={ `typ--${next.id}` }>{ next.name }</h2>
            <span className="typ--default">View case study</span>
          </div>
        </div>
      : null }
    </section>
  );
};

CaseStudy.propTypes = {
  name: React.PropTypes.string,
  heading: React.PropTypes.string,
  content: React.PropTypes.array,
  next: React.PropTypes.object
};

export default CaseStudy;
