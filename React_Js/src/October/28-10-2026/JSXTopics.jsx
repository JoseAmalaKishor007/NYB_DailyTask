
import { useState } from "react";

// 1. JSX Syntax
function JSXTopics() {

  // 3. JSX Expressions
  const name = "Jose Amala Kishor";
  const age = 22;

  // 5. Calling Functions in JSX
  function greet() {
    return "Welcome to React!";
  }

  // 8. Dynamic Rendering
  const [showMessage, setShowMessage] = useState(true);

  return (
    <>
      {/* 1. JSX Syntax */}
      <h2>JSX Topics</h2>

      {/* 2. Valid JSX */}
      <p>This is valid JSX.</p>

      {/* Invalid JSX example (commented because it causes an error) */}
      {/* <h1>Hello</h1><p>Welcome</p> */}

      {/* 3. JSX Expressions */}
      <p>Name: {name}</p>
      <p>Age: {age}</p>

      {/* 4. JavaScript Expressions in JSX */}
      <p>Next year age: {age + 1}</p>
      <p>Multiplication: {5 * 2}</p>

      {/* 5. Calling Functions in JSX */}
      <p>{greet()}</p>

      {/* 6. Fragments */}
      <>
        <h3>Fragment Example</h3>
        <p>A fragment groups elements without an extra HTML element.</p>
      </>

      {/* 7. Strict Mode */}
      <p>Strict Mode is configured in main.jsx.</p>

      {/* 8. Dynamic Rendering */}
      {showMessage && <p>Hello! This message is visible.</p>}

      <button onClick={() => setShowMessage(!showMessage)}>
        Show / Hide Message
      </button>
    </>
  );
}

export default JSXTopics;
