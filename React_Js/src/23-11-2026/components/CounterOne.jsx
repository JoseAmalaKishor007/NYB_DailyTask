
import useCounter from "./23-11-2026/useCounter";

function CounterOne() {

  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h2>Counter One</h2>

      <h3>Count: {count}</h3>

      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterOne;
