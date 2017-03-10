import React from 'react';

class CaseStudySection extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      hover: false
    };
  }

  componentDidMount () {
    setTimeout(() => {
      document.getElementById('caseStudyVideo').play();
    }, 5000);
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
              <video id="caseStudyVideo" loop="true" style={ { margin: video.videoMargin } }>
                <source src={ video.url } type="video/mp4" />
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

              </div>
            )) }
          </div>
        }
      </div>
    );
  }
};

const { object, string, array, bool, number } = React.PropTypes;
CaseStudySection.propTypes = {
  containerClass: string,
  video: object,
  videoImage: string,
  videoPadding: string,
  maxWidth: number,
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
