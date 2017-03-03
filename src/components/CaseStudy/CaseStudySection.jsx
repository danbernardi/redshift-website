import React from 'react';

const CaseStudySection = props => {
  const { images, imgAlt, copy, pad, classes } = props;

  return (
    <div className={ classes && classes }>
      { images &&
        <picture>
          <source srcSet={ images.imgDef } media="(min-width: 1040px)" />
          <source srcSet={ images.imgTlg } media="(min-width: 767px)" />
          <img src={ images.imgMlg } className="full-image" style={ { marginBottom: '1px' } } alt={ imgAlt } />
        </picture>
      }

      { copy
        ? <div className={ `row ${pad && 'py10 py5--mlg'}` }>
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

const { object, string, array, bool } = React.PropTypes;
CaseStudySection.propTypes = {
  images: object,
  imgAlt: string,
  copy: array,
  pad: bool,
  classes: string
};

CaseStudySection.defaultProps = {
  pad: true
};

export default CaseStudySection;
