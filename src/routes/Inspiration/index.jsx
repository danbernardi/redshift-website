import React from 'react';
import Footer from 'components/Footer';

export class Inspiration extends React.Component {
  constructor(props) {
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
        const titleLink = attachment.title_link;

        return(
          <div className="mb8" key={ index }>
            <h3 className="mb4"><a href={ titleLink }>{ title }</a></h3>
            {
              imgUrl ?
              <img src={ imgUrl } alt="" />
              : null
            }

            <p>{text}</p>
          </div>
        );
      });

    }

    return (
      <div className="row row--maxwidth" style={{ marginTop: '175px' }}>
        <h1 className="typ--redshift typ--bold mb4 mb3--tlg">Inspiration</h1>
        <section className="pt9 pt6--tlg">
          {feedItems}
        </section>
        <Footer />
      </div>
    );
  }
}

Inspiration.propTypes = {
  dispatch: React.PropTypes.func
};

export default Inspiration;
