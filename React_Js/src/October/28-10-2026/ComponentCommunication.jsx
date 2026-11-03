
import { useState } from "react";

// Child Component 1
function ChildOne(props) {
  return (
    <div>
      <h3>Child One</h3>

      {/* 1. Parent to Child Communication */}
      <p>Message from Parent: {props.message}</p>

      {/* 2. Child to Parent Communication */}
      <button onClick={() => props.sendMessage("Hello Parent!")}>
        Send Message to Parent
      </button>
    </div>
  );
}

// Child Component 2
function ChildTwo(props) {
  return (
    <div>
      <h3>Child Two</h3>

      {/* 3. Child to Child Communication */}
      <p>Message from Child One: {props.childMessage}</p>
    </div>
  );
}

// Parent Component
function ComponentCommunication() {

  const [parentMessage, setParentMessage] = useState("Welcome Child!");
  const [childMessage, setChildMessage] = useState("No message yet");

  // 4. Passing Functions as Props
  // 5. Callback Function
  function receiveMessage(message) {
    setChildMessage(message);
  }

  return (
    <div>
      <h2>Component Communication</h2>

      {/* 1. Parent to Child Communication */}
      <ChildOne
        message={parentMessage}
        sendMessage={receiveMessage}
      />

      {/* 6. State Lifting */}
      <ChildTwo childMessage={childMessage} />
    </div>
  );
}

export default ComponentCommunication;