
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

function Child() {
  const { name, setName } = useContext(UserContext);

  return (
    <div>
      <h3>Child Component</h3>
      <p>User: {name}</p>
      <button onClick={() => setName("Priya")}>
        Change Name
      </button>
    </div>
  );
}

function Parent() {
  return (
    <div>
      <h3>Parent Component</h3>
      <Child />
    </div>
  );
}

function ContextRevision() {
  const [name, setName] = useState("John");

  return (
    <UserContext.Provider value={{ name, setName }}>
      <h2>Context API Revision</h2>
      <Parent />
    </UserContext.Provider>
  );
}

export default ContextRevision;
