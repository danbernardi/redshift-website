import React from 'react';
import * as actions from 'store/actions';
import { connect } from 'react-redux';

class AboutTeam extends React.Component {
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
    console.log('enter', this.state.hover);
  }

  _onMouseLeaveHandler () {
    this.setState({
      hover: false
    });
  }

  render () {
    const { team, dispatch } = this.props;
    const { hover } = this.state;
    const openModal = (component, openState) => {
      console.log(team.component);
      dispatch(actions.setActiveModal(component, 'bio'));
      dispatch(actions.toggleModal(openState));
    };

    return (
      <div>
        <div
          className="quarter-width team-member"
          onMouseEnter={ () => this.setState({ hover: true }) }
          onMouseLeave={ () => this.setState({ hover: false }) }
          onClick={ () => openModal(team.component, true, team.id) }
        >
          <div
            className="team-hover"
            style={ hover ? { width: '100%' } : { width: '0', transitionDelay: '0.25s' } }
          >
            <div className="team-gradient">
              <div
                className="team-info"
                style={ hover ? { transform: 'translate(0%, -50%)', transitionDelay: '0.05s' } : { transform: 'translate(-100%, -50%)' } }
              >
                <h2 className="typ--bold">{ team.name }</h2>
                <h4>{ team.position }</h4>
              </div>
            </div>
          </div>
          <img src={ team.photo } />
        </div>
      </div>
    );
  }
}
const { object, func } = React.PropTypes;
AboutTeam.propTypes = {
  team: object,
  bio: object,
  dispatch: func
};

export default connect()(AboutTeam);
