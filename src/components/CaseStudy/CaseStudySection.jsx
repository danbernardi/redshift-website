import React from 'react';
import PropTypes from 'prop-types';
import Builder from 'components/Builder';

/**
  * Content of Case Study
  *
  * @extends React.Component
  * @param {object} caseStudyContent    Content of the current case study
  * @param {object} scrollContainer     Dimensions of the case study sections passed to the builder for animations
  * @returns {React.Component}          Returns a react component
*/

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
    const { scrollContainer } = this.props;
    const { video, images, copy, containerClass, classes, imgAlt } = this.props.caseStudyContent;
    const videoOverlay = {
      iphone: {
        def: require('assets/img/case-studies/iphone.png'),
        tlg: require('assets/img/case-studies/iphone-tlg.png'),
        mlg: require('assets/img/case-studies/iphone-mlg.png')
      },
      ipad: {
        def: require('assets/img/case-studies/ipad.png'),
        tlg: require('assets/img/case-studies/ipad-tlg.png'),
        mlg: require('assets/img/case-studies/ipad-mlg.png')
      },
      laptop: {
        def: require('assets/img/case-studies/laptop.png'),
        tlg: require('assets/img/case-studies/laptop-tlg.png'),
        mlg: require('assets/img/case-studies/laptop-mlg.png')
      }
    };

    return (
      <div className={ classes && classes }>
        { video &&
          <div className={ `layout--relative video--${video.type}` }>
            <Builder scrollContainer={ scrollContainer }>
              { video.type !== 'no-device' &&
                <picture className="video-image">
                  <source srcSet={ videoOverlay[video.type].def } media="(min-width: 1040px)" />
                  <source srcSet={ videoOverlay[video.type].tlg } media="(min-width: 767px)" />
                  <img src={ videoOverlay[video.type].mlg } className="full-image" alt={ video.type } />
                </picture>
              }
              <div className="video-container">
                <video id={ `caseStudyVideo-${video.id}` } loop muted playsInline>

                  <source src={ video.url } media="screen and (min-width:768px)" type="video/mp4" />
                  <source src={ video.url_sm } media="screen and (max-width:767px)" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </Builder>
          </div>
        }

        { images &&
          <Builder scrollContainer={ scrollContainer }>
            <picture>
              <source srcSet={ images.imgDef } media="(min-width: 1040px)" />
              <source srcSet={ images.imgTlg } media="(min-width: 767px)" />
              <img src={ images.imgMlg } className="full-image" style={ { marginBottom: '1px' } } alt={ imgAlt } />
            </picture>
          </Builder>
        }

        { copy &&
          <Builder scrollContainer={ scrollContainer }>
            <div className={ `row copy--container ${containerClass}` }>
              { copy.map((copyItem, index) => (
                <div key={ index }>
                  { copyItem.src && <img src={ copyItem.src } /> }
                  { copyItem.url && copyItem.text
                    ? <a href={ copyItem.url } target="_blank" className={ copyItem.classes && copyItem.classes }>{ copyItem.text }</a>
                    : <div className={ copyItem.classes && copyItem.classes }>{ copyItem.text }</div> }

                  { copyItem.linkText &&
                    <div className={ copyItem.classes && copyItem.classes }>
                      <span>{ copyItem.linkText.startText }</span>
                      <span><a href={ copyItem.linkText.link } target="_blank">{ copyItem.linkText.linkText }</a></span>
                      <span>{ copyItem.linkText.endText }</span>
                    </div>
                  }

                </div>
              )) }
            </div>
          </Builder>
        }
      </div>
    );
  }
};

CaseStudySection.propTypes = {
  caseStudyContent: PropTypes.object,
  scrollContainer: PropTypes.object
};

export default CaseStudySection;
