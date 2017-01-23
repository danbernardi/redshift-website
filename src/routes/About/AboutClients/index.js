import React from 'react';

export function AboutClients ({ clientLine }) {
  return (
    <div>
      {
        clientLine.map((client, index) => (
          <div key={ index } className={ `${client.class} col-3 col-6--tlg pb9 pb6--tlg pb3--msm px4--mlg` }>
            <img src={ client.image } alt={ client.name } />
          </div>
        ))
      }
    </div>
  );
}

const { array } = React.PropTypes;
AboutClients.propTypes = {
  clientLine: array
};

export default AboutClients;
