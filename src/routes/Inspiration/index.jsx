import React from 'react';
import Footer from 'components/Footer';
import './Inspiration.scss';
import { ellipsisString } from 'utils/string';
import PropTypes from 'prop-types';

export class Inspiration extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      feed: null
    };
  }

  componentDidMount () {
    fetch('/feed/inspiration').then(
      (res) => res.json()
    ).then((json) => {
      this.setState({
        feed: json
      });
    });
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
                ? <img className="mb1" src={ imgUrl } alt="" />
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
      <div className="pt10">
        <div className="row row--maxwidth mb8 mb3--msm">
          <h1 className="typ--redshift typ--bold mb4 mt8 mt4--mlg mt0--msm mb3--tlg mb0--mlg">Be inspired. <br /> Here's what inspires us.</h1>
          <section className="pt9 pt6--tlg pt3--msm inspiration__grid">
            {feedItems}
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

export default Inspiration;
