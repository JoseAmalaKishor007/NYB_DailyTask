
import axios from "axios";

// Create a reusable Axios instance
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json"
  }
});

// Add authentication token if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// GET - Get all users with query parameters
export function getUsers() {
  return api.get("/users", {
    params: {
      _limit: 5
    }
  });
}

// GET - Get one user using path parameter
export function getUserById(id) {
  return api.get(`/users/${id}`);
}

// POST - Create a new user
export function createUser(user) {
  return api.post("/users", user);
}

// PUT - Update complete user information
export function updateUser(id, user) {
  return api.put(`/users/${id}`, user);
}

// PATCH - Update specific user information
export function patchUser(id, user) {
  return api.patch(`/users/${id}`, user);
}

// DELETE - Delete a user
export function deleteUser(id) {
  return api.delete(`/users/${id}`);
}
