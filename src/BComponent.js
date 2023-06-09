import React from 'react';
import CounterHoc from './CounterHoc';

function B(props) {
  const { increment, count } = props;

  return (
    <div>
      <button onMouseOver={increment}>B Component {count} Hover</button>
    </div>
  );
}

export default CounterHoc(B);
