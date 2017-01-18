import React from 'react';
import '../style.scss';

export function BioTemplate (props) {
  const { bioContent } = props;

  const bio = bioContent.bioStatement.map((paragraph, index) =>
    <h5 key={ index } className="pb2">{paragraph}</h5>
  );

  return (
    <div className={ `${bioContent.id} team-member__modal row` }>
      <div className="col-12 bio--wrap">
        <div className="col-6 col-12--mlg team-member-bio">
          <h2 className="typ--bold">{ bioContent.name }</h2>
          <h2 className="pb10 pb2--mlg">{ bioContent.position }</h2>
          { bio }
        </div>
        <div className="bio--wrap__img"><img src={ bioContent.photo } /></div>
      </div>
    </div>
  );
};

const { object } = React.PropTypes;
BioTemplate.propTypes = {
  bioContent: object
};

export default BioTemplate;
