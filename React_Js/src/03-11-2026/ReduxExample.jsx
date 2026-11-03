
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, reset } from "./ReactRedux/counterSlice";

function ReduxExample() {

  // Access data from Redux Store
  const count = useSelector((state) => state.counter.count);

  // Dispatch actions
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Redux Toolkit Counter</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrements
      </button>

      <button onClick={() => dispatch(reset())}>
        Reset
      </button>

    </div>
  );
}

export default ReduxExample;