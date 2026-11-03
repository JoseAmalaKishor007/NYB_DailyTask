import { useState } from "react";

function Lists() {

  // 1. Rendering Arrays
  // 2. map()
  // 3. Keys
  const [students, setStudents] = useState([
    { id: 1, name: "Jose", course: "React" },
    { id: 2, name: "Amala", course: "JavaScript" },
    { id: 3, name: "Kishor", course: "Python" }
  ]);

  // 4. Conditional Rendering
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 7. Dynamic UI Rendering
  const [showStudents, setShowStudents] = useState(true);

  // Add a student dynamically
  function addStudent() {
    const newStudent = {
      id: Date.now(),
      name: "David",
      course: "React"
    };

    setStudents([...students, newStudent]);
  }

  return (
    <div>
      <h2>Lists and Rendering</h2>

      {/* 4. Conditional Rendering */}
      <h3>1. Conditional Rendering</h3>

      {isLoggedIn ? (
        <p>Welcome! You are logged in.</p>
      ) : (
        <p>Please log in.</p>
      )}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      <hr />

      {/* 5. Ternary Operator */}
      <h3>2. Ternary Operator</h3>

      <p>{students.length >= 3 ? "Many students" : "Few students"}</p>

      <hr />

      {/* 6. Logical && */}
      <h3>3. Logical &&</h3>

      {students.length > 0 && (
        <p>There are students in the list.</p>
      )}

      <hr />

      {/* 1. Rendering Arrays, 2. map(), 3. Keys */}
      <h3>4. Student List</h3>

      <button onClick={() => setShowStudents(!showStudents)}>
        {showStudents ? "Hide Students" : "Show Students"}
      </button>

      {/* 7. Dynamic UI Rendering */}
      {showStudents && (
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              Name: {student.name} - Course: {student.course}
            </li>
          ))}
        </ul>
      )}

      <button onClick={addStudent}>
        Add Student
      </button>
    </div>
  );
}

export default Lists;