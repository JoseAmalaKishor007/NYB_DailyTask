// API URL
const API_URL = "https://jsonplaceholder.typicode.com/users";

// Fetch API using Async/Await
export async function getUsers() {
  try {
    // Send GET request to server
    const response = await fetch(API_URL);

    // Check HTTP Status
    if (!response.ok) {
      throw new Error("Failed to fetch users. Status: " + response.status);
    }

    // Convert JSON response into JavaScript data
    const data = await response.json();

    return data;

  } catch (error) {
    console.log("Error:", error.message);
    throw error;
  }
}