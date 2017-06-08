import React from 'react';
import Watcher from 'components/Watcher';
import { TimelineMax } from 'gsap';
import GSAP from 'react-gsap-enhancer';
import PropTypes from 'prop-types';

/**
 * Renders a Builder component that animates it's children in and
 * up as the Watcher enters the viewport
 *
 * @param {Object} props
 * @param {Node} props.children               React child node containing content to be animated
 * @param {string} props.offset               String defining offset passed to top value of watcher,
 *                                            for offsetting where the watcher is triggered.
 * @param {Object} props.scrollContainer      
 * @returns {React.Component}                 Returns a react component
 */
export class Builder extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      animatedIn: false
    };
  }

  componentDidMount () {
    this.mounted = true;
  }

  watcherCallback (watcher) {
    const { animatedIn } = this.state;

    if (watcher.isInViewport && !animatedIn) {
      this.timeline = this.addAnimation(this.animateIn.bind(this)).play();
    }
  };

  animateIn ({ target }) {
    const { delay } = this.props;

    if (target && target[0]) {
      return new TimelineMax({ onComplete: () => this.clearAnimation() })
        .to(target[0], 0.6, { opacity: 1, y: 0, delay }, 'slideIn');
    }
  }

  clearAnimation () {
    if (this.mounted) this.setState({ animatedIn: true });
  }

  componentWillUnmount () {
    this.mounted = false;
  }

  render () {
    const { children, scrollContainer } = this.props;

    return (
      <div style={ { opacity: 0, transform: 'translateY(20rem)' } }>
        <Watcher
          autoStart={ false }
          stateChange={ this.watcherCallback.bind(this) }
          enterViewport={ this.watcherCallback.bind(this) }
          scrollContainer={ scrollContainer }
        >
          { children }
        </Watcher>

      </div>
    );
  }
}

const { node, string, number, object } = PropTypes;
Builder.propTypes = {
  children: node,
  offset: string,
  delay: number,
  scrollContainer: object
};

Builder.defaultProps = {
  offset: '10vh',
  delay: 0
};

export default GSAP()(Builder);
