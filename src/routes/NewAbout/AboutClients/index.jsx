import React from 'react';
import './Clients.scss';

export function AboutClients (props) {
  const { data } = props;

  return (
    <section className="row layout--flex my8">
      <div className="row typ--center">
        <h1 className="typ--bold typ--redshift mb6 mb4--mlg">Who we work with.</h1>
        <div className="clients">
          { data.map((client, index) => (
            <div key={ index } className="clients__client">
              <img src={ client.image } alt={ client.name } />
            </div>
          )) }
        </div>
      </div>
    </section>
  );
}

const { array } = React.PropTypes;
AboutClients.propTypes = {
  data: array
};

export default AboutClients;
