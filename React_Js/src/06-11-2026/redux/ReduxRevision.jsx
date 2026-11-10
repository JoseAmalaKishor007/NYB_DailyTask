
import { useSelector, useDispatch } from "react-redux";

import {
  increment,
  decrement,
  reset
} from "./06-11-2026/redux/counterSlice";

function ReduxRevision() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Redux Toolkit Revision</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => dispatch(increment())}>
        Increase
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrease
      </button>

      <button onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  );
}

export default ReduxRevision;
