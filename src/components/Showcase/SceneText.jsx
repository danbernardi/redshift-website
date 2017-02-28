import React from 'react';
import mojs from 'mo-js';
import { Link } from 'react-router';

export class Device extends React.Component {
  componentWillReceiveProps (nextProps) {
    const { active } = this.props;
    if (!nextProps.active && active) {
      // animate text out
    }
    if (nextProps.active && !active) {
      // animate text in
    }
  }

  render () {
    const { caption, id } = this.props;

    return (
      <div className="scene__cta typ--center typ--white">
        <h2 className="scene__caption mb4 typ--bold">
          { caption.map((string, index) => (
            <span key={ index }>{ string }</span>
          )) }
        </h2>

        <Link className="scene__link typ--bold typ--h6" to={ `/work/${id}` }>
          View project
        </Link>
      </div>
    );
  }
}

Device.propTypes = {
  caption: React.PropTypes.array,
  id: React.PropTypes.string,
  active: React.PropTypes.bool
};

export default Device;
