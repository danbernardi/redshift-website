import React from 'react';
import { setClass } from 'utils/responsiveHelpers';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Clients.scss';

export function AboutClients (props) {
  const { data, breakpoint } = props;

  return (
    <section className="row">
      <div className="about__clients">
        <h1 className={
          `typ--bold typ--redshift
          ${ setClass({ default: 'mb6', mobileLg: 'mb3' }, breakpoint)}`
        }>
          Who we work with.
        </h1>
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
