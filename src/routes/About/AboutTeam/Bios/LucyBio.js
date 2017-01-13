import React from 'react';
import '../../style.scss';
import BioModal from '../BioModal';

const teamBio = {
  id: 'lucy',
  name: 'Lucy Dotson',
  bio1: 'Lucy Dotson is a senior user experience designer at Redshift.',
  bio2: 'After receiving her degree in English from Colby College, Lucy crafted engaging stories for companies of all sizes as a copywriter and content strategist. Lucy discovered her appreciation for design while working as a ux writer, and shortly after decided to pursue ux full time. Since then, Lucy has designed experiences for clients including Kaiser Permantente, Western Union, and Advanced Microgrid Solutions (AMS).',
  bio3: 'Lucy spends her free time petting neighborhood dogs, making playlists, and searching for a really good gluten-free donut (she has yet to find one).'
};

export function BioTemplate () {
  return (
    <div>
      <BioModal bios={ teamBio } />
    </div>
  );
}

const { object } = React.PropTypes;
BioTemplate.propTypes = {
  bios: object
};

export default BioTemplate;
