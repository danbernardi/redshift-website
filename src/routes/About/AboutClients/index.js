import React from 'react';

export function AboutClients ({ clientLine }) {
  return (
    <div>
      {
        clientLine.map((client, index) => (
          <div key={ index } className={ `${client.class} col-3 col-6--tlg pb9 pb6--tlg pb4--msm` }>
            <img src={ client.image } alt={ client.name } />
          </div>
        ))
      }
    </div>
  );
}

const { object } = React.PropTypes;
AboutClients.propTypes = {
  clientLine: object
};

export default AboutClients;
