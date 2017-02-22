import React from 'react';
import ReactDOM from 'react-dom';
import mojs from 'mo-js';
import './styles.scss';

class PinkHover extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      hover: false
    };
  }

  componentDidMount () {
    this.setupAnimation();
  }

  setupAnimation () {
    const hoverElem = ReactDOM.findDOMNode(this.refs.hover);
    this.animate = new mojs.Tween({
      easing: 'cubic.inout',
      backwardEasing: 'cubic.inout',
      duration: 250,
      delay: 100,
      onUpdate: progress => {
        hoverElem.style.transform = `translateX(calc(${100 - (progress * 100)}% + 1px))`;
      }
    });
  }

  animateIn () {
    this.animate.pause().play().resume();
  }

  animateOut () {
    this.animate.pause().playBackward().resume();
  }

  render () {
    const { children, classes, imageSrc, clickHandler, alt } = this.props;

    return (
      <div
        className={ classes }
        onMouseEnter={ () => this.animateIn() }
        onMouseLeave={ () => this.animateOut() }
        onClick={ () => clickHandler && clickHandler() }
      >
        <div ref="hover" className="pink-hover">
          <div className="pink-info">{ children }</div>
        </div>
        <img
          className="pinkhover__img"
          ref="img"
          src={ imageSrc }
          alt={ alt }
        />
      </div>
    );
  }
}

const { object, string, func, oneOfType, element, array } = React.PropTypes;
PinkHover.propTypes = {
  children: oneOfType([element, array]),
  classes: string,
  modal: object,
  dispatch: func,
  imageSrc: string,
  clickHandler: func,
  alt: string
};

export default PinkHover;
