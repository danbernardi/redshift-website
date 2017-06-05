import React from 'react';
import PropTypes from 'prop-types';

/* eslint react/jsx-boolean-value: 0 */

class CaseStudySection extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      hover: false
    };
  }

  componentDidMount () {
    const { caseStudyContent } = this.props;
    if (caseStudyContent.video) {
      this.videoTimeout = setTimeout(() => {
        document.getElementById(`caseStudyVideo-${caseStudyContent.video.id}`).play();
      }, 5000);
    };
  }

  componentWillUnmount () {
    clearTimeout(this.videoTimeout);
  }

  render () {
    const { caseStudyContent } = this.props;
    return (
      <div className={ caseStudyContent.classes && caseStudyContent.classes }>
        { caseStudyContent.video &&
          <div className="layout--relative">
            <picture className="video-image">
              <img src={ caseStudyContent.video.videoImage } className="full-image" />
            </picture>
            <div className="video-container" style={ { maxWidth: caseStudyContent.video.maxWidth, padding: caseStudyContent.video.videoPadding } } >
              <video id={ `caseStudyVideo-${caseStudyContent.video.id}` }
                loop
                muted
                playsInline
                poster={ caseStudyContent.video.videoPoster }
                style={ { margin: caseStudyContent.video.videoMargin } }
              >
                <source src={ caseStudyContent.video.url } media="screen and (max-width:768px)" type="video/mp4" />
                <source src={ caseStudyContent.video.url_sm } media="screen and (max-width:767px)" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        }

        { caseStudyContent.images &&
          <picture>
            <source srcSet={ caseStudyContent.images.imgDef } media="(min-width: 1040px)" />
            <source srcSet={ caseStudyContent.images.imgTlg } media="(min-width: 767px)" />
            <img src={ caseStudyContent.images.imgMlg } className="full-image" style={ { marginBottom: '1px' } } alt={ caseStudyContent.imgAlt } />
          </picture>
        }

        { caseStudyContent.copy &&
          <div className={ `row py10 py5--mlg ${caseStudyContent.containerClass}` }>
            { caseStudyContent.copy.map((copy, index) => (
              <div key={ index }>
                { copy.src && <img src={ copy.src } /> }
                { copy.url && copy.text
                  ? <a href={ copy.url } target="_blank" className={ copy.classes && copy.classes }>{ copy.text }</a>
                  : <div className={ copy.classes && copy.classes }>{ copy.text }</div> }

                { copy.linkText &&
                  <div className={ copy.classes && copy.classes }>
                    <span>{ copy.linkText.startText }</span>
                    <span><a href={ copy.linkText.link } target="_blank">{ copy.linkText.linkText }</a></span>
                    <span>{ copy.linkText.endText }</span>
                  </div>
                }

              </div>
            )) }
          </div>
        }
      </div>
    );
  }
};

CaseStudySection.propTypes = {
  caseStudyContent: PropTypes.object
};

export default CaseStudySection;
