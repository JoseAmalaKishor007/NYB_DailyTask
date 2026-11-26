
import React from "react";

const Counter = React.memo(function Counter({ count }) {

  console.log("Counter Component Rendered");

  return (
    <div>
      <h2>Counter Component</h2>
      <h3>Count: {count}</h3>
    </div>
  );

});

export default Counter;
