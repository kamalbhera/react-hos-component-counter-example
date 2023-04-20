import React from 'react';
import './style.css';
import AComponent from './AComponent';
import BComponent from './BComponent';

export default function App() {
  return (
    <div className='App'>
      <h1>Hoc</h1>
      <AComponent name="hii hoc child A" />
      <BComponent />
    </div>
  );
}
