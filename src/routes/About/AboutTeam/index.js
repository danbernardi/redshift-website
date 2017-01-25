import React from 'react';
import BioModal from './BioModal';
import PinkHover from 'components/PinkHover';
import * as actions from 'store/actions';
import { connect } from 'react-redux';

const AboutTeam = props => {
  const { team, dispatch } = props;

  const openModal = (component, id) => {
    dispatch(actions.setNextCaseStudy(id, true));
    dispatch(actions.setActiveModal(component, 'casestudy'));
    dispatch(actions.toggleModal(true));
  };

  return (
    <PinkHover
      classes="quarter-width team-member"
      imageSrc={ team.photo }
      clickHandler={ () => openModal(<BioModal bioContent={ team } />, 'bio') }
      alt={ team.name }
    >
      <h2 className="typ--bold">{ team.name }</h2>
      <h4>{ team.position }</h4>
      <div className="right-arrow">
        <picture>
          <img src={ require('assets/img/arrow-right-short.png') } />
        </picture>
      </div>
    </PinkHover>
  );
};

const { object, func } = React.PropTypes;
AboutTeam.propTypes = {
  team: object,
  dispatch: func
};

export default connect()(AboutTeam);
