import React from 'react';
import PropTypes from 'prop-types';

export function AboutClients (props) {
  const { data } = props;

  return (
    <div className="clients">
      { data.map((client, index) => (
        <div key={ index } className="clients__client">
          <img src={ client.image } alt={ client.name } />
        </div>
      )) }
    </div>
  );
}

AboutClients.propTypes = {
  data: PropTypes.array
};

export default AboutClients;
