import React from 'react';
import PropTypes from 'prop-types';
import Builder from 'components/Builder';
import Vimeo from '@vimeo/player';
import { TweenLite } from 'gsap';

/**
  * Content of Case Study
  *
  * @extends React.Component
  * @param {Object} caseStudyContent    Content of the current case study
  * @param {Object} scrollContainer     Dimensions of the case study sections passed to the builder for animations
  * @returns {React.Component}          Returns a react component
*/

class CaseStudySection extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      hover: false,
      videoActive: false
    };
  }

  componentDidMount () {
    const { caseStudyContent } = this.props;

    if (caseStudyContent.videoEmbed) {
      this.urlParams = new URLSearchParams(window.location.search);
      if (this.urlParams.has('playvideo')) {
        this.initializeVideo();
      }
    }

    if (caseStudyContent.video) {
      this.videoTimeout = setTimeout(() => {
        document.getElementById(`caseStudyVideo-${caseStudyContent.video.id}`).play();
      }, 5000);
    };
  }

  initializeVideo() {
    const { caseStudyContent } = this.props;
    this.setState({ videoActive: true });
  }

  componentDidUpdate (prevProps, prevState) {
    const { container } = this.props;
    if (this.videoEmbed) this.player = new Vimeo(this.videoEmbed);

    if (!prevState.videoActive && this.state.videoActive) {
      if (this.urlParams.has('playvideo')) {
        setTimeout(function () {
          const offsetElem = document.querySelector('.casestudy__heading');
          TweenLite.to(container, 0.1, { scrollTop: offsetElem.offsetHeight });
        }, 200);
      }

      this.player.play();
    }
  }

  componentWillUnmount () {
    clearTimeout(this.videoTimeout);
  }

  render () {
    const { scrollContainer } = this.props;
    const { videoActive } = this.state;
    const { video, videoEmbed, images, copy, containerClass, classes, imgAlt } = this.props.caseStudyContent;

    const videoOverlay = {
      iphone: {
        def: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/case-studies/default/iphone.png',
        tlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/case-studies/tablet/iphone.png',
        mlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/case-studies/mobile/iphone.png'
      },
      ipad: {
        def: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/case-studies/default/ipad.png',
        tlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/case-studies/tablet/ipad.png',
        mlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/case-studies/mobile/ipad.png'
      },
      laptop: {
        def: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/case-studies/default/laptop.png',
        tlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/case-studies/tablet/laptop.png',
        mlg: 'https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/home/case-studies/mobile/laptop.png'
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

        { videoEmbed &&
          <div ref={ el => { this.videoEmbedContainer = el; } } className="video__embedcontainer">
            { videoActive
              ? <iframe
                src={ `https://player.vimeo.com/video/${videoEmbed.vimeoID}?api=1` }
                frameBorder="0"
                ref={ el => { this.videoEmbed = el; } }
              />

              : <div>
                <img className="video__thumbnail" src={ videoEmbed.thumbnail } />
                <div className="video__play" onClick={ () => this.setState({ videoActive: true }) }>
                  <img src={ require('../../assets/img/play-btn.svg') } />
                  <h3>Play video</h3>
                </div>
              </div>
            }
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
