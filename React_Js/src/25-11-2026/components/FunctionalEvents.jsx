
import React, { useState } from "react";

function FunctionalEvents() {

  const [name, setName] = useState("");

  function handleClick() {
    alert("Button Clicked!");
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    alert("Welcome " + name);
  }

  return (
    <div>

      <h2>Functional Component Events</h2>

      <button onClick={handleClick}>
        Click Me
      </button>

      <br /><br />

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <button type="submit">
          Submit
        </button>

      </form>

      <p>Your Name: {name}</p>

    </div>
  );
}

export default FunctionalEvents;
