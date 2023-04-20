import React from 'react';
import './style.css';
import AComponent from './AComponent';
import BComponent from './BComponent';

export default function App() {
  return (
    <div className='App'>
      <h1>HOC Component Example</h1> <br></br>
      <AComponent name="hii hoc child A" />
      <BComponent />
    </div>
  );
}
