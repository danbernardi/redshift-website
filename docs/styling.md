# Styling

Because of the semi-fractal, directory nature of this application, component-specific styles can be imported into the component directly. Given the following component structure:

```
├── src                      # Application source code
...
│   ├── routes               # Main route definitions
...
│   │   ├── ComponentName    # Fractal route
│   │   │   ├── index.js     # Component file -- sibling files possible
│   │   │   ├── styles.scss  # Component-specific styles
```

The component can require these styles like so:

```
import React from 'react';
import './styles.scss';

export function ComponentName () {
  return (
    <div className="locally-defined">
      ...
    </div>
  );
}

export default ComponentName;

```

This allows for greater style modularity, but it comes at a cost: This file does not inherently have access to variables defined in global styles files, so they must be imported directly into the local styles file, and aliasing is unavailable:

```scss
@import '../../styles/variables.scss';

.locally-defined {
  ...
}
```