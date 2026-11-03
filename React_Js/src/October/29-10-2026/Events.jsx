import { useState } from "react";

function ReactEvents() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // 1. onClick
  function handleClick() {
    alert("Button Clicked!");
  }

  // 3. onSubmit
  function handleSubmit(event) {
    event.preventDefault();
    setMessage("Welcome, " + name);
  }

  // 7. Passing Arguments to Event Handlers
  function showMessage(value) {
    alert("Hello " + value);
  }

  return (
    <div>
      <h2>React Event Handling</h2>

      {/* 1. onClick */}
      <button onClick={handleClick}>
        Click Me
      </button>

      <hr />

      {/* 2. onChange */}
      <label>Enter Name: </label>

      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter your name"
      />

      <p>Name: {name}</p>

      <hr />

      {/* 3. onSubmit */}
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>

      <p>{message}</p>

      <hr />

      {/* 4. Mouse Events */}
      <p
        onMouseEnter={() => setMessage("Mouse entered!")}
        onMouseLeave={() => setMessage("Mouse left!")}
      >
        Move your mouse over this text.
      </p>

      <hr />

      {/* 5. Keyboard Events */}
      <input
        type="text"
        placeholder="Press any key"
        onKeyDown={(event) =>
          setMessage("Key pressed: " + event.key)
        }
      />

      <hr />

      {/* 6. Event Object */}
      <button
        onClick={(event) =>
          setMessage("Event type: " + event.type)
        }
      >
        Show Event Type
      </button>

      <hr />

      {/* 7. Passing Arguments to Event Handlers */}
      <button onClick={() => showMessage("John")}>
        Greet John
      </button>
    </div>
  );
}

export default ReactEvents;
