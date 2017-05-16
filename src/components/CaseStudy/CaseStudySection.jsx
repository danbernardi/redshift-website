import React from 'react';

/* eslint react/jsx-boolean-value: 0 */

class CaseStudySection extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      hover: false
    };
  }

  componentDidMount () {
    const { video } = this.props;
    if (this.props.video) {
      this.videoTimeout = setTimeout(() => {
        document.getElementById(`caseStudyVideo-${video.id}`).play();
      }, 5000);
    };
  }

  componentWillUnmount () {
    clearTimeout(this.videoTimeout);
  }

  render () {
    const { video, images, imgAlt, copy, pad, classes, containerClass } = this.props;
    return (
      <div className={ classes && classes }>
        { video &&
          <div className="layout--relative">
            <picture className="video-image">
              <img src={ video.videoImage } className="full-image" />
            </picture>
            <div className="video-container" style={ { maxWidth: video.maxWidth, padding: video.videoPadding } } >
              <video id={ `caseStudyVideo-${video.id}` }
                loop
                muted
                playsInline
                poster={ video.videoPoster }
                style={ { margin: video.videoMargin } }
              >
                <source src={ video.url } media="screen and (max-width:768px)" type="video/mp4" />
                <source src={ video.url_sm } media="screen and (max-width:767px)" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        }

        { images &&
          <picture>
            <source srcSet={ images.imgDef } media="(min-width: 1040px)" />
            <source srcSet={ images.imgTlg } media="(min-width: 767px)" />
            <img src={ images.imgMlg } className="full-image" style={ { marginBottom: '1px' } } alt={ imgAlt } />
          </picture>
        }

        { copy &&
          <div className={ `row ${pad && 'py10 py5--mlg'} ${containerClass}` }>
            { copy.map((copy, index) => (
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

const { object, string, array, bool } = React.PropTypes;
CaseStudySection.propTypes = {
  containerClass: string,
  video: object,
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
