import React from 'react';
import Footer from 'components/Footer';
import './Inspiration.scss';

export class Inspiration extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      feed: null
    };
  }

  componentDidMount () {
    fetch('/feed/inspiration').then((res) => {
      return res.json();
    }).then((json) => {
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

        return (
          <div className="inspiration__item" key={ index }>
            <h4 className="mb4"><a target="_blank" href={ titleLink }>{ title }</a></h4>
            { imgUrl
              ? <img src={ imgUrl } alt="" />
              : null
            }

            { videoHtml
              ? <div dangerouslySetInnerHTML={ { __html: videoHtml } } />
              : null
            }

            <p>{text}</p>
          </div>
        );
      });
    }

    return (
      <div style={ { marginTop: '175px' } }>
        <div className="row row--maxwidth">
          <h1 className="typ--redshift typ--bold mb4 mb3--tlg">Inspiration</h1>
          <section className="pt9 pt6--tlg inspiration__grid">
            {feedItems}
          </section>
        </div>

        <Footer />
      </div>
    );
  }
}

Inspiration.propTypes = {
  dispatch: React.PropTypes.func
};

export default Inspiration;
