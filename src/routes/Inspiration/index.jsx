import React from 'react';
import PropTypes from 'prop-types';
import Footer from 'components/Footer';
import { ellipsisString } from 'utils/string';
import { TimelineLite, Power2 } from 'gsap';
import Isotope from 'isotope-layout';
import 'masonry-layout';
import GSAP from 'react-gsap-enhancer';
import Loader from 'components/Loader';
import { enableScroll, disableScroll } from 'utils/scrollJack';
import { connect } from 'react-redux';
import './Inspiration.scss';

/**
 * Slack integrated Inspiration page
 *
 * @param {Object} props
 * @param {Object} modalState         checks browser dimsnsions for scroller
 * @return {React.Component}
 */

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
    disableScroll();

    fetch('/feed/inspiration').then(
      (res) => res.json()
    ).then((json) => {
      this.setState({ feed: json });

      // Counting the image attachements so that we can check
      // when all images have loaded.
      this.totalImageCount = json.reduce((prev, curr) => curr.attachments[0].image_url ? prev + 1 : prev, 0);

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

  componentWillUnmount () {
    enableScroll();
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
        enableScroll();
      }
    })
    .to(loader, 0.3, { opacity: 0, ease: Power2.easeOut }, 'animIn')
    .fromTo(feed, 0.6, { opacity: 0, y: 50, ease: Power2.easeOut }, { opacity: 1, y: 0, ease: Power2.easeOut }, 'animIn+=.3');
  }

  onImageLoadedOrError = () => {
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
        onLoad={ this.onImageLoadedOrError }
        onError={ this.onImageLoadedOrError }
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
              <div className="inspiration__itemtitle typ--b2 typ--bold">{ title }</div>
              { imgUrl
                ? this.loadImage(imgUrl)
                : null
              }

              { videoHtml
                ? <div dangerouslySetInnerHTML={ { __html: videoHtml } } />
                : null
              }

              <p className="mb0 typ--b3 mt1">{ articleText }</p>
            </a>
          </div>
        );
      });
    }

    return (
      <div className="inspiration pt10 scroller">
        <div className="row inspiration--container">
          <h1 className="typ--redshift typ--bold">Be inspired. <br /> Here's what inspires us.</h1>
          <section className="inspiration__grid">
            <div className="inspiration__feed" ref={ el => { this.grid = el; } }>{feedItems}</div>
            <div className="inspiration__loader"><Loader /></div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

Inspiration.propTypes = {
  modalState: PropTypes.object
};

const mapStateToProps = state => ({
  modalState: state.modalState
});

export default connect(mapStateToProps)(GSAP()(Inspiration));
