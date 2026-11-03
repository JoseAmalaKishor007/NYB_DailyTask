import { useState } from "react";

// 1. Props
function Student(props) {
  return (
    <div>
      <h3>Student Name: {props.name}</h3>
      <p>Course: {props.course}</p>
    </div>
  );
}

// 2. State
function PropsState() {

  // 4. useState
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Jose");

  // 5. State Updates
  function increaseCount() {
    setCount(count + 1);
  }

  // 6. Event-Based State Changes
  function changeName() {
    setName("Kishor");
  }

  return (
    <div>
      <h2>Props and State Example</h2>

      {/* 1. Props */}
      <Student name="Joseph" course="React" />

      {/* 2. State and 4. useState */}
      <h3>Count: {count}</h3>

      {/* 5. State Updates */}
      <button onClick={increaseCount}>
        Increase Count
      </button>

      {/* 3. Difference Between Props and State */}
      <h3>Name: {name}</h3>

      {/* 6. Event-Based State Changes */}
      <button onClick={changeName}>
        Change Name
      </button>
    </div>
  );
}

export default PropsState;