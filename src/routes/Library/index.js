import React from 'react';
import { connect } from 'react-redux';

import SingleDropdown from 'components/Dropdown/SingleDropdown';
import RadioGroup from 'components/RadioGroup';

import './styles.scss';

const sections = {
  'Radio Group': <RadioGroup
    groupID="test-radio"
    items={ ['Valencia', 'Cara Cara', 'Blood'] }
  />,
  'Single Dropdown': <SingleDropdown
    dropID="demo-single-dropdown"
    items={ ['Anchovies', 'Sardines', 'Smelt', 'Herring'] }
  />
};

export function Library ({ section, openDropdownID }) {
  return (
    <div className="row typ--center">
      <SingleDropdown
        title="Select a component type"
        dropID="library-selector"
        className="library-selector mb10"
        items={ ['Single Dropdown', 'Radio Group'] }
      />

      { openDropdownID !== 'library-selector' && sections[section] }
    </div>
  );
}

const { string } = React.PropTypes;
Library.propTypes = {
  section: string,
  openDropdownID: string
};

const mapStateToProps = state => ({
  section: state.dropdowns.getIn(['library-selector', 0, 'value']),
  openDropdownID: state.openDropdownID
});

export default connect(mapStateToProps)(Library);
