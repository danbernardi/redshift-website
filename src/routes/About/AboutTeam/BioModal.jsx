import React from 'react';
import ModalCloseBtn from 'components/Modal/ModalCloseBtn';
import { browserHistory } from 'react-router';
import '../style.scss';

export function BioTemplate (props) {
  const { bioContent } = props;

  const bio = bioContent.bioStatement.map((paragraph, index) =>
    <h5 key={ index } className="pb2">{ paragraph }</h5>
  );

  return (
    <div className={ `${bioContent.id} team-member__modal` }>
      <ModalCloseBtn closeCallback={ () => browserHistory.push('/about') } />
      <div className="col-12 bio--wrap row">
        <div className="team-member-bio py5">
          <h2 className="typ--bold">{ bioContent.name }</h2>
          <h2 className="pb6 pb2--dsm">{ bioContent.position }</h2>
          { bio }
        </div>
        <div className="bio--wrap__img hide--tmd">
          <img src={ `https://s3-us-west-1.amazonaws.com/rs-website-cdn/images/about/team/modal/${bioContent.id}.jpg` } alt={ bioContent.name } />
        </div>
      </div>
    </div>
  );
};

const { object } = React.PropTypes;
BioTemplate.propTypes = {
  bioContent: object
};

export default BioTemplate;
