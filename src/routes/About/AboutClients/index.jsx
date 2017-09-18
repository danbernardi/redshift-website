import React from 'react';
import { setClass } from 'utils/responsiveHelpers';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Clients.scss';

/**
 * Client Grid on the About Page
 *
 * @param {Object} props
 * @param {array} data                  client data from parent
 * @param {Object} breakpoint           Checks browser width
 */

export function AboutClients (props) {
  const { data, breakpoint } = props;

  return (
    <section className="row">
      <div className="about__clients">
        <h2 className={ setClass({ default: 'mb6', mobileLg: 'mb3' }, breakpoint) }>
          Who we work with.
        </h2>
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

AboutClients.propTypes = {
  data: PropTypes.array,
  breakpoint: PropTypes.object
};

const mapStateToProps = state => ({
  breakpoint: state.breakpoint
});

export default connect(mapStateToProps)(AboutClients);
