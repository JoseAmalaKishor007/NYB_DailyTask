
import React, { useState } from "react";

function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [marks, setMarks] = useState(75);
  const [showMessage, setShowMessage] = useState(true);
  const [role, setRole] = useState("student");

  // 1. if-else condition
  let loginMessage;

  if (isLoggedIn === true) {
    loginMessage = <h3>Welcome Back!</h3>;
  } else {
    loginMessage = <h3>Please Login</h3>;
  }

  // 2. Ternary Operator
  const result = marks >= 50 ? "Pass" : "Fail";

  // 3. Logical AND Operator
  // The message displays only when showMessage is true.

  // 4. Switch Case
  let roleMessage;

  switch (role) {
    case "admin":
      roleMessage = "Welcome Admin";
      break;

    case "student":
      roleMessage = "Welcome Student";
      break;

    case "teacher":
      roleMessage = "Welcome Teacher";
      break;

    default:
      roleMessage = "Invalid Role";
  }

  return (
    <div>
      <h1>Conditional Rendering in React</h1>

      {/* 1. if-else */}
      <h2>1. If-Else</h2>
      {loginMessage}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      <hr />

      {/* 2. Ternary Operator */}
      <h2>2. Ternary Operator</h2>
      <h3>Marks: {marks}</h3>
      <h3>Result: {result}</h3>

      <button onClick={() => setMarks(35)}>
        Set Marks to 35
      </button>

      <button onClick={() => setMarks(75)}>
        Set Marks to 75
      </button>

      <hr />

      {/* 3. Logical AND Operator */}
      <h2>3. Logical AND Operator</h2>

      {showMessage && <h3>This message is visible!</h3>}

      <button onClick={() => setShowMessage(!showMessage)}>
        Show / Hide Message
      </button>

      <hr />

      {/* 4. Switch Case */}
      <h2>4. Switch Case</h2>
      <h3>{roleMessage}</h3>

      <button onClick={() => setRole("admin")}>
        Admin
      </button>

      <button onClick={() => setRole("student")}>
        Student
      </button>

      <button onClick={() => setRole("teacher")}>
        Teacher
      </button>

      <button onClick={() => setRole("guest")}>
        Guest
      </button>

    </div>
  );
}

export default ConditionalRendering;



condition?exprssioniftrue : expressioniffalse;