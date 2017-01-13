import React from 'react';
import '../style.scss';

export function BioTemplate ({ bios }) {
  return (
    <div className={ `${bios.id} team-member__modal row` }>
      {/* <div className="modal__close" /> */}
      <div className="col-12 pt10">
        <div className="col-6 team-member-bio">
          <h2 className="typ--bold">{ bios.name }</h2>
          <h2 className="pb10">{ bios.position }</h2>
          <h5>{ bios.bio1 }</h5>
          { bios.bio2 ? <h5>{ bios.bio2 }</h5> : null }
          { bios.bio3 ? <h5>{ bios.bio3 }</h5> : null }
          { bios.bio4 ? <h5>{ bios.bio4 }</h5> : null }
        </div>
        <div className="col-6" ><img src={ bios.image } /></div>
      </div>
    </div>
  );
}

const { object } = React.PropTypes;
BioTemplate.propTypes = {
  bios: object
};

export default BioTemplate;
