import React from 'react';

const CaseStudySection = props => {
  const { img, items, pad, classes } = props;

  return (
    <div className={ classes && classes }>
      <img className="full-image" src={ img } />

      { items
        ? <div className={ `row typ--center ${pad && 'py10'}` }>
          { items.map((item, index) => (
            React.cloneElement(item, { key: index })
          )) }
        </div>
        : null
      }
    </div>
  );
};

CaseStudySection.propTypes = {
  img: React.PropTypes.string,
  items: React.PropTypes.array,
  pad: React.PropTypes.bool,
  classes: React.PropTypes.string
};

CaseStudySection.defaultProps = {
  pad: true
};

export default CaseStudySection;
