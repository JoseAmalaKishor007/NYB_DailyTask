
import { useReducer } from "react";

// 1. Initial State
const initialState = {
  count: 0
};

// 2. Reducer Function
function counterReducer(state, action) {

  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1
    };
  }

  if (action.type === "DECREMENT") {
    return {
      count: state.count - 1
    };
  }

  if (action.type === "RESET") {
    return {
      count: 0
    };
  }

  return state;
}

function UseReducerrevision() {

  // 3. useReducer Hook
  const [state, dispatch] = useReducer(
    counterReducer,
    initialState
  );

  return (
    <div>
      <h2>useReducer Hook Example</h2>

      <h3>Count: {state.count}</h3>

      {/* 4. Dispatch Actions */}

      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increase
      </button>

      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrease
      </button>

      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>

    </div>
  );
}

export default UseReducerrevision;