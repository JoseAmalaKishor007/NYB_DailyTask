
import React, { useState } from "react";

function StudentList() {

  const [students, setStudents] = useState([
    { id: 1, name: "John", marks: 85 },
    { id: 2, name: "Priya", marks: 90 },
    { id: 3, name: "Ravi", marks: 75 }
  ]);

  const [name, setName] = useState("");

  // Add student dynamically
  function addStudent() {

    if (name === "") {
      alert("Please enter student name");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: name,
      marks: 80
    };

    setStudents([...students, newStudent]);

    setName("");
  }

  // Remove student
  function deleteStudent(id) {

    const updatedStudents = students.filter(
      (student) => student.id !== id
    );

    setStudents(updatedStudents);
  }

  return (
    <div>

      <h2>Student List</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter student name"
      />

      <button onClick={addStudent}>
        Add Student
      </button>

      <h3>All Students</h3>

      {/* Conditional Rendering */}
      {students.length === 0 ? (

        <p>No Students Available</p>

      ) : (

        /* List Rendering and Keys */
        students.map((student) => (

          <div key={student.id}>

            <p>Name: {student.name}</p>

            <p>Marks: {student.marks}</p>

            <button onClick={() => deleteStudent(student.id)}>
              Delete
            </button>

            <hr />

          </div>

        ))

      )}

    </div>
  );
}

export default StudentList;
