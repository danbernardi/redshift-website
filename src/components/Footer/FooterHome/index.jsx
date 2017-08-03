import React from 'react';
import GSAP from 'react-gsap-enhancer';
import Footer from 'components/Footer';
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

  shouldComponentUpdate () {
    return false;
  }

  render () {
    const { onDidMount } = this.props;
    return (
      <section
        ref={ onDidMount }
        className="footer__home"
      >
        <Footer
          key="footer"
          classes="footer__tall"
        />
      </section>
    );
  }
}

FooterHome.propTypes = {
  onDidMount: PropTypes.func,
  animationProgress: PropTypes.number
};

export default GSAP()(FooterHome);
