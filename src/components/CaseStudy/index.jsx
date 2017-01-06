import React from 'react';
import CaseStudySection from './CaseStudySection';
import './styles.scss';

const CaseStudy = props => {
  const { name, content, heading, next } = props;

  // debugger;

  return (
    <section className="casestudy">
      <div className="row">
        <h4 className="casestudy__name typ--caps">{ name }</h4>
      </div>

      <div className="row">
        <h1 className="casestudy__heading">{ heading }</h1>
      </div>

      { content.map((section, index) => (
        <CaseStudySection key={ index } img={ section.img } items={ section.items } />
      )) };

      { typeof next === 'object' ?
        <a className="casestudy__next mt8 py7" data-target={ next.id }>
          <div className="row">
            <h2 className={ `typ--${next.id}` }>{ next.name }</h2>
            <span className="typ--default">View case study</span>
          </div>
        </a>
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
