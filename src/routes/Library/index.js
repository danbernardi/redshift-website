import React from 'react';

import SimpleDropdown from 'components/Dropdown/SimpleDropdown';

export function Library () {
  return (
    <div className="row typ--center">
      <h2 className="mb1">Basic Dropdown</h2>

      <SimpleDropdown
        dropID="test-dropdown"
        items={ ['First', 'Second', 'Third'] }
      />
    </div>
  );
}

export default Library;
