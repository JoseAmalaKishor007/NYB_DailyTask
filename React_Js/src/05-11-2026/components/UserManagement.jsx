import { useEffect, useState } from "react";

import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  patchUser,
  deleteUser
} from "../services/userAPI";

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Common function for displaying errors
  function handleError(error) {
    if (error.response) {
      setError("Server Error: " + error.response.status);
    } else if (error.request) {
      setError("No response received from server");
    } else {
      setError(error.message);
    }
  }

  // GET request
  async function loadUsers() {
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  }

  // GET request using path parameter
  async function viewUser() {
    setSuccess("");
    setError("");

    try {
      const response = await getUserById(1);
      setSuccess("User found: " + response.data.name);
    } catch (error) {
      handleError(error);
    }
  }

  // POST request
  async function addUser() {
    setSuccess("");
    setError("");

    if (name === "" || email === "") {
      setError("Please enter both name and email");
      return;
    }

    setLoading(true);

    try {
      const response = await createUser({
        name: name,
        email: email
      });

      setSuccess("User created successfully! ID: " + response.data.id);

      setName("");
      setEmail("");
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  }

  // PUT request
  async function replaceUser() {
    setSuccess("");
    setError("");
    setLoading(true);

    try {
      const response = await updateUser(1, {
        name: "Updated User",
        email: "updated@example.com"
      });

      setSuccess("User completely updated: " + response.data.name);
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  }

  // PATCH request
  async function changeUserName() {
    setSuccess("");
    setError("");
    setLoading(true);

    try {
      const response = await patchUser(1, {
        name: "Patched User"
      });

      setSuccess("User name updated: " + response.data.name);
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  }

  // DELETE request
  async function removeUser() {
    setSuccess("");
    setError("");
    setLoading(true);

    try {
      await deleteUser(1);

      setSuccess("User deleted successfully");

      setUsers((previousUsers) =>
        previousUsers.filter((user) => user.id !== 1)
      );
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      <h2>Axios User Management</h2>

      <button onClick={loadUsers}>GET - Load Users</button>
      <button onClick={viewUser}>GET - View User 1</button>

      <hr />

      <h3>Add New User</h3>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <button onClick={addUser}>POST - Add User</button>

      <hr />

      <h3>Update User 1</h3>

      <button onClick={replaceUser}>PUT - Replace User</button>
      <button onClick={changeUserName}>PATCH - Change Name</button>
      <button onClick={removeUser}>DELETE - Remove User</button>

      <hr />

      {loading && <p>Loading...</p>}

      {success && <p style={{ color: "green" }}>{success}</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      <h3>User List</h3>

      {users.map((user) => (
        <div key={user.id}>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default UserManagement;