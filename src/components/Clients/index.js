import React from 'react';
import './Clients.scss';

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

const { array } = React.PropTypes;
AboutClients.propTypes = {
  data: array
};

export default AboutClients;
