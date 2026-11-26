
import { useReducer } from "react";

// Initial State
const initialState = {
  marks: 0,
  studentName: "John"
};

// Reducer Function
function marksReducer(state, action) {

  if (action.type === "INCREASE") {
    return {
      ...state,
      marks: state.marks + 5
    };
  }

  if (action.type === "DECREASE") {
    return {
      ...state,
      marks: state.marks - 5
    };
  }

  if (action.type === "CHANGE_NAME") {
    return {
      ...state,
      studentName: action.payload
    };
  }

  if (action.type === "RESET") {
    return initialState;
  }

  return state;
}

function ReducerPractice() {

  const [state, dispatch] = useReducer(
    marksReducer,
    initialState
  );

  return (
    <div>
      <h2>Student Marks Management</h2>

      <h3>Student: {state.studentName}</h3>
      <h3>Marks: {state.marks}</h3>

      <button onClick={() => dispatch({ type: "INCREASE" })}>
        Increase Marks
      </button>

      <button onClick={() => dispatch({ type: "DECREASE" })}>
        Decrease Marks
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "CHANGE_NAME",
            payload: "Priya"
          })
        }
      >
        Change Student Name
      </button>

      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
    </div>
  );
}

export default ReducerPractice;