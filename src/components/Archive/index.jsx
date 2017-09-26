import React from 'react';
import Isotope from 'isotope-layout';
import FooterHome from 'components/Footer/FooterHome';
import PropTypes from 'prop-types';

import GSAP from 'react-gsap-enhancer';
import 'masonry-layout';

import { connect } from 'react-redux';
import { Link } from 'react-router';
import { caseStudies } from 'data/caseStudies';

import './Archive.scss';

/**
 * Bottom of Homepage - "More Work" Case Studies
 *
 * @extends React.Component
 * @param {Object} props                React properties argument
 * @param {function} onDidMount             returns a reference to itself to the parent component when the container is mounted.
 * @param {function} reportAsLoaded         returns a function to the parent component when loaded
 * @param {Object} modalState           dispatches the correspoding case study in a modal
 * @returns {React.Component}           Returns a react component
 */

export class Archive extends React.Component {
  constructor (props) {
    super(props);

    this.timeline = null;
    this.animationInRange = null;
    this.isotope;
    this.state = {
      imagesLoaded: []
    };
  }

  componentDidUpdate (prevProps) {
    const { imagesLoaded } = this.state;
    const { reportAsLoaded, modalState } = this.props;

    if (imagesLoaded.length === caseStudies.filter(cs => cs.gridThumbnail).length) {
      this.isotope = new Isotope(this.grid, {
        itemSelector: '.archive__item',
        layoutMode: 'masonry',
        resize: false
      });

      if (reportAsLoaded instanceof Function) reportAsLoaded();
    }

    if (prevProps.modalState !== modalState && this.isotope) {
      setTimeout(() => { this.isotope.layout(); }, 200);
    }
  }

  shouldComponentUpdate (nextProps) {
    if (nextProps.modalState === this.props.modalState) {
      return false;
    } else {
      return true;
    }
  }

  loadImage (index) {
    const { imagesLoaded } = this.state;
    const newImagesLoaded = imagesLoaded.slice();
    newImagesLoaded.push(index);

    this.setState({ imagesLoaded: newImagesLoaded });
    this.forceUpdate();
  }

  render () {
    const { imagesLoaded } = this.state;

    return (
      <section className="archive__wrapper" ref={ el => { this.container = el; this.props.onDidMount(el); } }>
        <div className="archive row" data-animationName="grid">
          <h1 className="typ--bold typ--center archive--title">More work.</h1>

          <div className="archive__gridwrapper">
            <div className="archive__grid" ref={ el => { this.grid = el; } }>
              { caseStudies.filter(study => !study.featured).map((study, index) => (
                <div className="archive__item theme--dark" key={ index }>
                  <Link className="archive__link" to={ `/work/${study.id}` }>
                    { study.gridThumbnail
                      ? <img
                        src={ study.gridThumbnail }
                        alt={ study.name }
                        onLoad={ () => imagesLoaded.indexOf(index) === -1 && this.loadImage(index) }
                      />
                      : <div className="archive__imgspacer" />
                    }
                    <div className="archive__name typ--b2 typ--bold">{ `${ study.name }.` }</div>
                    <div className="archive__overlay" style={ { backgroundColor: study.color } }>
                      <div className="archive__overlay--text">
                        <h3 className="typ--bold">{ study.shortDescription }</h3>
                      </div>
                      <div className="archive__arrow">
                        <img src="https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/right-arrow.svg" alt="Click" />
                      </div>
                    </div>
                  </Link>
                </div>
              )) }
            </div>
          </div>
        </div>
        <FooterHome />
      </section>
    );
  }
}

Archive.propTypes = {
  onDidMount: PropTypes.func,
  reportAsLoaded: PropTypes.func,
  modalState: PropTypes.object
};

const mapStateToProps = state => ({
  modalState: state.modalState
});

export default connect(mapStateToProps)(GSAP()(Archive));
