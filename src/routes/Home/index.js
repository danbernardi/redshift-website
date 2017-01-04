import React from 'react';
import DuckImage from './Duck.jpg';
import Mountain from './mountain.jpg';
import './style.scss';

export function Home () {
  return (
    <div>
      <h4>Welcome!</h4>
      <img
        alt='This is a duck, because Redux!'
        className='duck'
        src={ DuckImage } />
      <img
        alt='Big photo!'
        className='mountain'
        src={ Mountain } />
    </div>
  );
}

export default Home;
