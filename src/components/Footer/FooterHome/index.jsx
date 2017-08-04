import React from 'react';
import Footer from 'components/Footer';
import GSAP from 'react-gsap-enhancer';

export class FooterHome extends React.Component {
  render () {
    return (
      <section
        className="footer__home"
      >
        <Footer
          key="footer"
          classes="footer__tall"
        />
      </section>
    );
  }
};

export default GSAP()(FooterHome);
