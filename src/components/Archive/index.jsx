import React from 'react';
import { Link } from 'react-router';
import { caseStudies } from 'data/caseStudies';
import Isotope from 'isotope-layout';
import FooterHome from 'components/Footer/FooterHome';
import GSAP from 'react-gsap-enhancer';
import 'masonry-layout';
import './Archive.scss';
import PropTypes from 'prop-types';

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

  componentDidUpdate () {
    const { imagesLoaded } = this.state;

    if (imagesLoaded.length === caseStudies.filter(cs => cs.gridThumbnail).length) {
      this.isotope = new Isotope(this.grid, {
        itemSelector: '.archive__item',
        layoutMode: 'masonry'
      });
    }
  }

  shouldComponentUpdate () {
    return false;
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
          <h1 className="typ--bold typ--center mb10 mb6--mlg">More work.</h1>

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
                    <h4 className="archive__name typ--bold">{ `${ study.name }.` }</h4>
                    <div className="archive__overlay" style={ { backgroundColor: study.color } }>
                      <div className="p2">
                        <h3 className="typ--bold">{ study.shortDescription }</h3>
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
  onReady: PropTypes.func,
  onDidMount: PropTypes.func
};

export default GSAP()(Archive);
