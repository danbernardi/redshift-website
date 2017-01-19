import React from 'react';
import * as actions from 'store/actions';
import { connect } from 'react-redux';
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
    const { children, classes, modal, dispatch, imageSrc } = this.props;
    const { hover } = this.state;
    const openModal = ({ component, openState }) => {
        //   dispatch(actions.setNextCaseStudy(id, true)); - needed for archives?
      dispatch(actions.setActiveModal(component, 'bio'));
      dispatch(actions.toggleModal(openState));
    };

    return (
      <div
        className={ classes }
        onMouseEnter={ () => this.setState({ hover: true }) }
        onMouseLeave={ () => this.setState({ hover: false }) }
        onClick={ () => openModal(modal) }
      >
        <div
          className="pink-hover"
          style={ hover ? { width: '100%', transitionDelay: '0.25s' } : { width: '0', transitionDelay: '0.25s' } }
        >
          <div className="pink-gradient">
            <div
              className="pink-info"
              style={ hover ? { transform: 'translate(0%, -50%)', transitionDelay: '0.3s' } : { transform: 'translate(-100%, -50%)' } }
            >
              { children }
            </div>
          </div>
        </div>
        <img src={ imageSrc } />
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
  imageSrc: string
};

export default connect()(PinkHover);
