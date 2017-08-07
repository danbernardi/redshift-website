import React from 'react';
import './Loader.scss';

export function Loader () {
  return (
    <div className="loader">
      <div className="loader__ball" />
      <div className="loader__ball" />
      <div className="loader__ball" />
    </div>
  );
}

export default Loader;
