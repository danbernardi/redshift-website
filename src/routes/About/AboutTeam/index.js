import React from 'react';
import BioModal from './BioModal';
import PinkHover from 'components/PinkHover';

const AboutTeam = props => {
  const { team } = props;

  return (
    <div>
      <PinkHover
        classes="quarter-width team-member"
        modal={ {
          component: <BioModal bioContent={ team } />,
          openState: true
        } }
        imageSrc={ team.photo }
      >
        <h2 className="typ--bold">{ team.name }</h2>
        <h4>{ team.position }</h4>
      </PinkHover>
    </div>
  );
};

const { object } = React.PropTypes;
AboutTeam.propTypes = {
  team: object
};

export default AboutTeam;
