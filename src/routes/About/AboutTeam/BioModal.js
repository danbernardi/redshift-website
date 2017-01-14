import React from 'react';
import '../style.scss';
import * as actions from 'store/actions';
import { connect } from 'react-redux';

export function BioTemplate (props) {
  const { bios, animationTiming, dispatch } = props;
  const closeModal = () => {
    dispatch(actions.toggleModal(false));
    const timing = setTimeout(() => {
      dispatch(actions.setActiveModal(null, null));
      clearInterval(timing);
    }, animationTiming);
  };

  return (
    <div className={ `${bios.id} team-member__modal row` }>
      <div className="layout--relative bio--wrap">
        <div className="icon-close layout--right actionable" onClick={ () => closeModal() } />
        <div className="col-12">
          <div className="col-6 team-member-bio">
            <h2 className="typ--bold">{ bios.name }</h2>
            <h2 className="pb10">{ bios.position }</h2>
            <h5>{ bios.bio1 }</h5>
            { bios.bio2 ? <h5>{ bios.bio2 }</h5> : null }
            { bios.bio3 ? <h5>{ bios.bio3 }</h5> : null }
            { bios.bio4 ? <h5>{ bios.bio4 }</h5> : null }
          </div>
          <div className="col-6 col-last"><img src={ bios.image } /></div>
        </div>
      </div>
    </div>
  );
};

const { object, func, number } = React.PropTypes;
BioTemplate.propTypes = {
  bios: object,
  dispatch: func,
  animationTiming: number
};

export default connect()(BioTemplate);
