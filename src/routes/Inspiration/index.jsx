import React from 'react';
import Footer from 'components/Footer';
import './Inspiration.scss';
import { ellipsisString } from 'utils/string';
import PropTypes from 'prop-types';
import { TimelineLite, Power2 } from 'gsap';
import Isotope from 'isotope-layout';
import 'masonry-layout';
import GSAP from 'react-gsap-enhancer';
import Loader from 'components/Loader';

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

      this.timeline = this.addAnimation(this.animateIn);
    });
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.loaded !== this.state.loaded) {
      this.timeline.play();
      this.isotope = new Isotope(this.grid, {
        itemSelector: '.inspiration__item',
        layoutMode: 'masonry'
      });
    }
  }

  animateIn ({ target }) {
    const loader = target[0].querySelector('.inspiration__loader');
    const feed = target[0].querySelector('.inspiration__feed');

    return new TimelineLite({
      paused: true,
      onUpdate: () => {
        //Do stuff here
      },
      onComplete: () => {
        this.animationComplete = true;
      }
    })
    .to(loader, 0.3, { opacity: 0, ease: Power2.easeOut }, 'animIn')
    .fromTo(feed, 0.6, { opacity: 0, y: 50, ease: Power2.easeOut }, { opacity: 1, y: 0, ease: Power2.easeOut }, 'animIn+=.3');
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
          <div className="inspiration__item" key={ index }>
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
        <div className="row inspiration--container">
          <h1 className="typ--redshift typ--bold">Be inspired. <br /> Here's what inspires us.</h1>
          <section className="inspiration__grid">
            <div className="inspiration__feed" ref={ el => { this.grid = el; } }>{feedItems}</div>
            <Loader />
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

Inspiration.propTypes = {
  dispatch: PropTypes.func
};

export default GSAP()(Inspiration);
