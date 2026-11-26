
import React, { useState, useEffect } from "react";

function UserList() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 1. useEffect Hook
  useEffect(() => {

    // 2. API Call using Fetch
    fetch("https://jsonplaceholder.typicode.com/users")

      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        return response.json();
      }) 

      .then((data) => {
        setUsers(data);
        setLoading(false);
      })

      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });

  }, []);

  return (
    <div>
      <h1>User Management</h1>

      {/* Loading Condition */}
      {loading && <h3>Loading Users...</h3>}

      {/* Error Condition */}
      {error && <h3>{error}</h3>}

      {/* 3. map() Method */}
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
            <p>City: {user.address.city}</p>
            <hr />
          </div>
        ))}
      </div>

    </div>
  );
}

export default UserList;
