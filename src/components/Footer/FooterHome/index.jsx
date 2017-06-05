import React from 'react';
import GSAP from 'react-gsap-enhancer';
import { TimelineMax, Power2 } from 'gsap';
import Footer from 'components/Footer';
import { Link } from 'react-router';
import { scrollDocToZero } from 'utils/scrollTo';
import { isInRange } from 'utils/animation';
import PropTypes from 'prop-types';

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
    const targetElement = target[0];

    const footer = targetElement.querySelector('footer');
    const footerMenuItems = footer.querySelectorAll('#footer-menu li');

    return new TimelineMax({
      onUpdate: () => {
        //Do stuff here
      },
      onComplete: () => {
        this.animationComplete = true;
      }
    })
    .set(footerMenuItems, { y: '100%', opacity: 0 })
    .pause()
    .addPause(0.70)
    .add('text-entry-point')
    .staggerTo(footerMenuItems, 0.3, {
      y: '0%',
      opacity: 1,
      ease: Power2.easeOut
    }, 0.1, 'text-entry-point');
  }

  render () {
    const { onDidMount } = this.props;
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
              <ul id="footer-menu" className="typ--bold">
                <li onClick={ () => scrollDocToZero() }><h3 className="typ--h1"><Link className="typ--redshift" to="/about">About.</Link></h3></li>
                <li onClick={ () => scrollDocToZero() }><h3 className="typ--h1" ><Link className="typ--redshift" to="/careers">Careers.</Link></h3></li>
                <li><h3 className="typ--h1"><Link className="typ--redshift" to="http://weareredshift.tumblr.com/" target="_blank">Blog.</Link></h3></li>
              </ul>
            </div>
          </div>
        </Footer>
      </section>
    );
  }
}

FooterHome.propTypes = {
  onDidMount: PropTypes.func,
  animationProgress: PropTypes.number
};

export default GSAP()(FooterHome);
