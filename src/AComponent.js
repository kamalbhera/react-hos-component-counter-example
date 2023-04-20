import React from 'react';
import CounterHoc from './CounterHoc';

function A(props) {
  const { increment, count } = props;
  return (
    <div>
      <button onClick={increment}>A {count} Click</button>
    </div>
  );
}

export default CounterHoc(A);
