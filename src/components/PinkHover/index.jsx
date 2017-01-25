import React from 'react';
import './styles.scss';

class PinkHover extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      hover: false
    };
  }

  _onMouseEnterHandler () {
    this.setState({
      hover: true
    });
  }

  _onMouseLeaveHandler () {
    this.setState({
      hover: false
    });
  }

  // const { } = props;
  render () {
    const { children, classes, imageSrc, clickHandler, alt } = this.props;
    const { hover } = this.state;

    const initialHoverStyles = { transition: `transform 0.2s ease-in-out 0.25s` };
    const initialInfoStyles = { transition: `transform 0.2s ease-in-out 0.325s` };
    let transformStyles = {};

    if (hover) {
      // if modal is currently active
      transformStyles = { transform: 'none' };
    } else {
      // if modal isn't currently active
      transformStyles = { transform: 'translateX(-100.1%)' };
    }

    return (
      <div
        className={ classes }
        onMouseEnter={ () => this.setState({ hover: true }) }
        onMouseLeave={ () => this.setState({ hover: false }) }
        onClick={ () => clickHandler && clickHandler() }
      >
        <div
          className="pink-hover"
          style={ Object.assign(initialHoverStyles, transformStyles) }
        >
          <div className="pink-gradient">
            <div
              className="pink-info"
              style={ Object.assign(initialInfoStyles, transformStyles) }
            >
              { children }
            </div>
          </div>
        </div>
        <picture>
          <img src={ imageSrc } alt={ alt } />
        </picture>
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
