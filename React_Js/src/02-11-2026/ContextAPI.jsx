import { createContext, useContext, useState } from "react";

// 1. Create Context
const UserContext = createContext();

function ChildComponent() {
  // 2. Access global data using useContext
  const { name, setName } = useContext(UserContext);

  return (   
    <div>
      <h3>Child Component</h3>

      <p>Welcome, {name}!</p>

      <button onClick={() => setName("Jose")}>
        Change Name
      </button>
    </div>
  );
}

function ParentComponent() {
  return (
    <div>
      <h3>Parent Component</h3>
      <ChildComponent />
    </div>
  );
}

function ContextAPI() {
  const [name, setName] = useState("Kishor");

  return (
    <UserContext.Provider value={{ name, setName }}>
      <h2>React Context API Example</h2>

      <p>Global Name: {name}</p>

      <ParentComponent />
    </UserContext.Provider>
  );
}

export default ContextAPI;