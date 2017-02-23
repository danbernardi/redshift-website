import React from 'react';
import mojs from 'mo-js';
import { Link } from 'react-router';

export const Device = props => {
  const { caption, id } = props;

  return (
    <div className="scene__cta typ--center typ--white">
      <div className="row">
        <h2 className="scene__caption mb4 typ--bold">
          { caption.map((string, index) => (
            <span key={ index }>{ string }</span>
          )) }
        </h2>

        <Link className="scene__link typ--bold typ--h6" to={ `/work/${id}` }>
          View project
        </Link>
      </div>
    </div>
  );
};

Device.propTypes = {
  caption: React.PropTypes.array,
  id: React.PropTypes.string
};

export default Device;
