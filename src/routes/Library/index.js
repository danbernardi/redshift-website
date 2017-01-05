import React from 'react';
import { connect } from 'react-redux';

import SingleDropdown from 'components/Dropdown/SingleDropdown';
import RadioGroup from 'components/RadioGroup';
import Checkbox from 'components/Checkbox';

import './styles.scss';

const sections = {
  'Radio Group': <RadioGroup
    groupID="oranges"
    items={ ['Valencia', 'Cara Cara', 'Blood'] }
  />,
  'Single Dropdown': <SingleDropdown
    dropID="small-fish"
    items={ ['Anchovies', 'Sardines', 'Smelt', 'Herring'] }
  />,
  Checkboxes: <div>
    <h4>Is Darth Vader:</h4>
    <Checkbox boxID="darth-good" name="Good" />
    <Checkbox boxID="darth-evil" name="Evil" />
  </div>,
  Typography: <div>
    <h1>h1 <strong>strong</strong> <em>em</em></h1>
    <h2>h2 <strong>strong</strong> <em>em</em></h2>
    <h3>h3 <strong>strong</strong> <em>em</em></h3>
    <h4>h4 <strong>strong</strong> <em>em</em></h4>
    <h5>h5 <strong>strong</strong> <em>em</em></h5>
    <h6>h6 <strong>strong</strong> <em>em</em></h6>
    <p>{ 'p  '}<strong>strong</strong> <em>em</em></p>
  </div>
};

export function Library ({ section, openDropdownID }) {
  return (
    <div className="row typ--center">
      <SingleDropdown
        title="Select a component type"
        dropID="library-selector"
        className="library-selector"
        items={ ['Single Dropdown', 'Radio Group', 'Checkboxes', 'Typography'] }
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
