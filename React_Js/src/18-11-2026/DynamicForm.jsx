
import React, { useState } from "react";

function DynamicForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [skills, setSkills] = useState([""]);

  const [submittedData, setSubmittedData] = useState(null);

  // Add new input field
  function addSkill() {
    setSkills([...skills, ""]);
  }

  // Update input field
  function handleSkillChange(index, value) {

    const updatedSkills = [...skills];

    updatedSkills[index] = value;

    setSkills(updatedSkills);
  }

  // Remove input field
  function removeSkill(index) {

    const updatedSkills = skills.filter(
      (skill, i) => i !== index
    );

    setSkills(updatedSkills);
  }

  // Submit form
  function handleSubmit(event) {

    event.preventDefault();

    const userData = {
      name: name,
      email: email,
      skills: skills
    };

    setSubmittedData(userData);
  }

  return (
    <div>

      <h1>Dynamic Form Handling</h1>

      <form onSubmit={handleSubmit}>

        <label>Name:</label>
        <br />

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />

        <br /><br />

        <label>Email:</label>
        <br />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />

        <br /><br />

        <h3>Skills:</h3>

        {skills.map((skill, index) => (

          <div key={index}>

            <input
              type="text"
              value={skill}
              onChange={(e) =>
                handleSkillChange(index, e.target.value)
              }
              placeholder="Enter your skill"
              required
            />

            <button
              type="button"
              onClick={() => removeSkill(index)}
              disabled={skills.length === 1}
            >
              Remove
            </button>

          </div>

        ))}

        <br />

        <button type="button" onClick={addSkill}>
          Add Skill
        </button>

        <br /><br />

        <button type="submit">
          Submit
        </button>

      </form>

      {submittedData && (

        <div>

          <h2>Submitted Details</h2>

          <p>Name: {submittedData.name}</p>

          <p>Email: {submittedData.email}</p>

          <h3>Skills:</h3>

          <ul>
            {submittedData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>

        </div>

      )}

    </div>
  );
}

export default DynamicForm;



<div>
    <label>Value</label>
    <input
    type="text" 
    placeholder="Enter the address"
    />
</div>