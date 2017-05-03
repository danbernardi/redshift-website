import React from 'react';
import GSAP from 'react-gsap-enhancer';
import Footer from 'components/Footer';
import { Link } from 'react-router';
import { scrollDocToZero } from 'utils/scrollTo';
import { isInRange } from 'utils/animation';
import { connect } from 'react-redux';

export class FooterHome extends React.Component {
  constructor (props) {
    super(props);

    this.timeline = null;
    this.animationComplete = false;
    this.state = {
      animationProgress: 0
    };
  }

  componentDidMount () {
    this.timeline = this.addAnimation(this.createTimeline);
  }

  shouldComponentUpdate (nextProps) {
    return isInRange(nextProps.animationProgress, 0, 1);
  }

  componentWillReceiveProps (nextProps) {
    const { animationProgress } = nextProps;
    if (isInRange(animationProgress, 0, 1)) {
      this.setState({
        animationProgress
      }, () => {
        this.timeline.progress(animationProgress);
      });
    }
  }

  createTimeline ({ target }) {
    const wrapper = target;
    const test = target.find({'classes': 'footer__tall'});
    const footerMenu = target.find({ 'data-animationName': 'menu-list' });
    const menuItems = footerMenu.findAllInChildren({'data-animationName': 'menu-item'});

    const footer = wrapper[0].childNodes[0];
    // debugger;


    return new TimelineMax({
      onUpdate: () => {
        //Do stuff here
        console.log(this.timeline.progress());
      },
      onComplete: () => {
        this.animationComplete = true;
      }
    })
    .pause()
    .addPause(.7)
    .to(footer, .25, { opacity: .5 });
  }

  render () {
    const { onDidMount, animationProgress } = this.props;
    console.log(animationProgress);
    return (
      <section
        ref={ onDidMount }
        className="FooterHome layout--fullheight"
      >
        <Footer
          key="footer"
          classes="footer__tall"
        >
          <div className="footer__center">
            <div className="row">
              <ul data-animationName="menu-list" className="typ--bold">
                <li data-animationName="menu-item" className="typ--h1" onClick={ () => scrollDocToZero() }><Link className="typ--redshift" to="/about">About.</Link></li>
                <li data-animationName="menu-item" className="typ--h1" onClick={ () => scrollDocToZero() }><Link className="typ--redshift" to="/careers">Careers.</Link></li>
                <li data-animationName="menu-item" className="typ--h1"><a className="typ--redshift" href="http://weareredshift.tumblr.com/" target="_blank">Blog.</a></li>
              </ul>
            </div>
          </div>
        </Footer>
      </section>
    );
  }
}

FooterHome.propTypes = {
  onDidMount: React.PropTypes.func,
  animationProgress: React.PropTypes.number
};

export default GSAP()(FooterHome);
