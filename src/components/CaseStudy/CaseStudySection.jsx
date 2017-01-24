import React from 'react';

const CaseStudySection = props => {
  const { img, copy, pad, classes } = props;

  return (
    <div className={ classes && classes }>
      { img && <img className="full-image" src={ img } /> }

      { copy
        ? <div className={ `row typ--center ${pad && 'py10 py5--mlg'}` }>
          { copy.map((copy, index) => (
            <div key={ index }>
              { copy.url && copy.text
                ? <a href={ copy.url } className={ copy.classes && copy.classes }>{ copy.text }</a>
                : <div className={ copy.classes && copy.classes }>{ copy.text }</div> }
              { copy.src && <img src={ copy.src } /> }
            </div>
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
