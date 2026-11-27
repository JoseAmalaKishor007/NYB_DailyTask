
import React, { useState } from "react";

function CourseDetails({ courseName, duration }) {

  // State Destructuring
  const [students, setStudents] = useState(10);

  function addStudent() {
    setStudents((previousStudents) => previousStudents + 1);
  }

  return (
    <div>

      <h2>Course Details</h2>

      <p>Course: {courseName}</p>

      <p>Duration: {duration}</p>

      <p>Total Students: {students}</p>

      <button onClick={addStudent}>
        Add Student
      </button>

    </div>
  );
}

export default CourseDetails;
