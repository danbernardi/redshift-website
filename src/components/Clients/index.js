import React from 'react';
import './Clients.scss';

export function AboutClients (props) {
  const { clients } = props;

  return (
    <div className="clients">
      { clients.map((client, index) => (
        <div key={ index } className="clients__client">
          <img src={ client.image } alt={ client.name } />
        </div>
      )) }
    </div>
  );
}

const { array } = React.PropTypes;
AboutClients.propTypes = {
  clients: array
};

export default AboutClients;
