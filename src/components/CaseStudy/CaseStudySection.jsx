import React from 'react';

const CaseStudySection = props => {
  const { img, items, pad } = props;

  return (
    <div>
      <img className="full-image" src={ img } />
      <div className={ `row typ--center ${pad && 'py10'}` }>
        { items.map((item, index) => (
          React.cloneElement(item, { key: index })
        )) }
      </div>
    </div>
  );
};

CaseStudySection.propTypes = {
  img: React.PropTypes.string,
  items: React.PropTypes.array,
  pad: React.PropTypes.bool
};

CaseStudySection.defaultProps = {
  pad: true
};

/*
img.full-image(src="./assets/img/case-study/five/five2.jpg")
  .row.typ--center.py10
    h3.case-study-text Creating a FIVE is easy too. The app seamlessly integrates with Google Images to bring your lists to life.
    .btn.mt5.mb10.typ--five coming soon
    h3.case-study-text.mt10 You can share, comment, or even add suggestions to other lists.
 */

export default CaseStudySection;
