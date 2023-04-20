import React from 'react';

const CounterHoc = (WrappedComp) => {
  return function Counter(props) {
    const [count, setCount] = React.useState(0);
    const increment = () => {
      setCount(count + 1);
    };
    return (
      <div>
        <WrappedComp count={count} increment={increment} {...props} />
      </div>
    );
  }
};

export default CounterHoc;
