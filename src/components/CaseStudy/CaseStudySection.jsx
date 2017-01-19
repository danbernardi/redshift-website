import React from 'react';

const CaseStudySection = props => {
  const { img, copy, pad, classes } = props;

  return (
    <div className={ classes && classes }>
      <img className="full-image" src={ img } />
      { copy
        ? <div className={ `row typ--center ${pad && 'py10'}` }>
          { copy.map((copy, index) => (
            copy.url
            ? <a href={ copy.url } className={ copy.classes && copy.classes } key={ index }>{ copy.text }</a>
            : <div className={ copy.classes && copy.classes } key={ index }>{ copy.text }</div>
          )) }
        </div>
        : null
      }
    </div>
  );
};

CaseStudySection.propTypes = {
  img: React.PropTypes.string,
  copy: React.PropTypes.array,
  pad: React.PropTypes.bool,
  classes: React.PropTypes.string
};

CaseStudySection.defaultProps = {
  pad: true
};

export default CaseStudySection;
