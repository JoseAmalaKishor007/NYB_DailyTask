
import React from "react";

function StudentDetails() {

  // Object Destructuring
  const student = {
    name: "John",
    age: 22,
    department: "Computer Science"
  };

  const { name, age, department } = student;


  // Array Destructuring
  const subjects = ["JavaScript", "React", "CSS"];

  const [subject1, subject2, subject3] = subjects;


  return (
    <div>

      <h2>Object Destructuring</h2>

      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Department: {department}</p>

      <hr />

      <h2>Array Destructuring</h2>

      <p>Subject 1: {subject1}</p>
      <p>Subject 2: {subject2}</p>
      <p>Subject 3: {subject3}</p>

    </div>
  );
}

export default StudentDetails;
