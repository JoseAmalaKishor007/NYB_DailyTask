
import React from "react";

const StudentList = React.memo(function StudentList({ students, onAdd }) {

  console.log("StudentList Component Rendered");

  return (
    <div>
      <h2>Student List</h2>

      {students.map((student) => (
        <p key={student.id}>
          {student.name} - Marks: {student.marks}
        </p>
      ))}

      <button onClick={onAdd}>
        Add Student
      </button>
    </div>
  );

});

export default StudentList;
