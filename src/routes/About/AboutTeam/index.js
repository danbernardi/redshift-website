import React from 'react';

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
    const { team } = this.props;
    const { hover } = this.state;

    return (
      <div>
        <div
          className="quarter-width team-member"
          onMouseEnter={ () => this.setState({ hover: true }) }
          onMouseLeave={ () => this.setState({ hover: false }) }
        >
          <div
            className="team-hover"
            style={ hover ? { width: '100%' } : { width: '0' } }
          >
            <div className="team-gradient">
              <div
                className="team-info"
                style={ hover ? { transform: 'translateX(0%)' } : { transform: 'translateX(-100%)' } }
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
const { object } = React.PropTypes;
AboutTeam.propTypes = {
  team: object
};

export default AboutTeam;
