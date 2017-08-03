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
          { bioContent.inspiration &&
            <div>
              <h3>Current favorite</h3>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/D9_XdDvgkGg?rel=0"
                frameborder="0"
              />
            </div>}
        </div>
        <div className="bio--wrap__img hide--tmd">
          <img src={ bioContent.modal } alt={ bioContent.name } />
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
