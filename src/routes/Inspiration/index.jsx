import React from 'react';
import Footer from 'components/Footer';
import './Inspiration.scss';
import { ellipsisString } from 'utils/string';
import PropTypes from 'prop-types';
import Isotope from 'isotope-layout';
import 'masonry-layout';
import { TimelineMax, Power2 } from 'gsap';
import GSAP from 'react-gsap-enhancer';

export class Inspiration extends React.Component {
  constructor (props) {
    super(props);
    this.imgCount = 0;

    this.state = {
      feed: null,
      loaded: false
    };
  }

  componentDidMount () {
    fetch('/feed/inspiration').then(
      (res) => res.json()
    ).then((json) => {
      this.setState({ feed: json });

      // Counting the image attachements so that we can check
      // when all images have loaded.
      this.totalImageCount = json.reduce((prev, curr) => {
        return curr.attachments[0].image_url ? prev + 1 : prev;
      }, 0);

      this.isotope = new Isotope(this.grid, {
        itemSelector: '.archive__item',
        layoutMode: 'masonry'
      });

      window.addEventListener('scroll', this.handleScroll.bind(this));
      this.timeline = this.addAnimation(this.animateIn);
    });
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.loaded !== this.state.loaded) {
      this.isotope.layout();
      // this.timeline.play();
    }
  }

  animateIn ({ target }) {
    const loader = target[0].querySelector('.inspiration__loader');
    const feed = target[0].querySelector('.inspiration__grid');

    return new TimelineMax({
      // paused: true,
      onUpdate: () => {
        //Do stuff here
      },
      onComplete: () => {
        this.animationComplete = true;
      }
    })
    .to(loader, 0.3, { opacity: 0, ease: Power2.easeOut }, 'animIn')
    .fromTo(feed, 0.6, { opacity: 0, ease: Power2.easeOut }, { opacity: 1, ease: Power2.easeOut }, 'animIn+=.3');
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll () {
    if (this.container) {
      if (document.scrollingElement.scrollTop < this.container.getBoundingClientRect().top) {
        document.querySelector('.archive__wrapper').style.overflow = 'auto';
      }
    }
  }

  onImageLoadedOrError () {
    this.imgCount++;
    if (this.imgCount === this.totalImageCount) {
      this.setState({
        loaded: true
      });
    }
  }

  loadImage (src) {
    return (
      <img
        src={ src }
        onLoad={ this.onImageLoadedOrError.bind(this) }
        onError={ this.onImageLoadedOrError.bind(this) }
      />
    );
  }

  render () {
    let feedItems = [];

    if (this.state.feed) {
      feedItems = this.state.feed.map((message, index) => {
        const attachment = message.attachments[0];
        const { title, text } = attachment;
        const imgUrl = attachment.image_url || null;
        const videoHtml = attachment.video_html || null;
        const titleLink = attachment.title_link;

        const articleText = text ? ellipsisString(text, 200) : '';

        return (
          <div className="archive__item p3" key={ index }>
            <a className="inspiration__link" target="_blank" href={ titleLink }>
              <h4 className="inspiration__itemtitle mb2">{ title }</h4>
              { imgUrl
                ? this.loadImage(imgUrl)
                : null
              }

              { videoHtml
                ? <div dangerouslySetInnerHTML={ { __html: videoHtml } } />
                : null
              }

              <p className="mb0">{ articleText }</p>
            </a>
          </div>
        );
      });
    }

    return (
      <div className="inspiration pt10">
        <div className="row row--maxwidth mb8 mb3--msm">
          <h1 className="typ--redshift typ--bold mb4 mt8 mt4--mlg mt0--msm mb3--tlg mb0--mlg">Be inspired. <br /> Here's what inspires us.</h1>
          <section className="pt9 pt6--tlg pt3--msm inspiration__gridwrapper">
            <div className="inspiration__grid" ref={ el => { this.grid = el; } }>{feedItems}</div>
            <div className="inspiration__loader spinner">
              <div className="bounce1" />
              <div className="bounce2" />
              <div className="bounce3" />
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

Inspiration.propTypes = {
  dispatch: PropTypes.fun
};

export default GSAP()(Inspiration);
