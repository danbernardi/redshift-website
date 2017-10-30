import React from 'react';
import PropTypes from 'prop-types';
import { setClass, breakpointIsLessThan, breakpointIsGreaterThan } from 'utils/responsiveHelpers';
import { connect } from 'react-redux';
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
        {
          breakpointIsLessThan('mobileLg', breakpoint.size) &&
            <p className="col-12 typ--b2 client__text">
              We have been fortunate to work with outstanding clients across a wide variety of industries, from aspiring startups to some of the world’s best known brands.
            </p>
        }
        <div className={ setClass({ default: 'clients col-7', mobileLg: 'clients col-12' }, breakpoint) }>
          { data.map((client, index) => (
            <div key={ index } className="clients__client">
              <img src={ client.image } alt={ client.name } />
            </div>
          )) }
        </div>
        {
          breakpointIsGreaterThan('mobileLg', breakpoint.size) &&
            <p className="col-5 typ--b2 client__text">
              We have been fortunate to work with outstanding clients across a wide variety of industries, from aspiring startups to some of the world’s best known brands.
            </p>
        }
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
