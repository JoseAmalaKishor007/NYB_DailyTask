import { useState } from "react";

function ReactForms() {
  // 2. Controlled Components and 8. Multiple Form Fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    course: "",
    gender: "",
    hobbies: [],
    agree: false
  });

  // 10. Dynamic Forms
  const [skills, setSkills] = useState([""]);

  // 9. Form Validation
  const [error, setError] = useState("");
  const [result, setResult] = useState("");

  // Handle input fields
  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  // 6. Checkbox
  function handleCheckbox(event) {
    const { value, checked } = event.target;

    if (checked) {
      setFormData({
        ...formData,
        hobbies: [...formData.hobbies, value]
      });
    } else {
      setFormData({
        ...formData,
        hobbies: formData.hobbies.filter(
          (hobby) => hobby !== value
        )
      });
    }
  }

  // 10. Dynamic Forms - Update skill fields
  function handleSkillChange(index, value) {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  }

  // Add a new skill field
  function addSkill() {
    setSkills([...skills, ""]);
  }

  // Remove a skill field
  function removeSkill(index) {
    const updatedSkills = skills.filter(
      (skill, i) => i !== index
    );

    setSkills(updatedSkills);
  }

  // 1. Form Handling and 9. Form Validation
  function handleSubmit(event) {
    event.preventDefault();

    setError("");
    setResult("");

    if (formData.name === "") {
      setError("Please enter your name.");
      return;
    }

    if (formData.email === "") {
      setError("Please enter your email.");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }

    if (formData.course === "") {
      setError("Please select a course.");
      return;
    }

    if (formData.gender === "") {
      setError("Please select your gender.");
      return;
    }

    if (formData.hobbies.length === 0) {
      setError("Please select at least one hobby.");
      return;
    }

    if (formData.message === "") {
      setError("Please enter your message.");
      return;
    }

    if (!formData.agree) {
      setError("Please accept the terms and conditions.");
      return;
    }

    for (let i = 0; i < skills.length; i++) {
      if (skills[i] === "") {
        setError("Please fill in all skill fields.");
        return;
      }
    }

    setResult("Registration submitted successfully!");
  }

  return (
    <div>
      <h2>React Registration Form</h2>

      {/* 1. Form Handling */}
      <form onSubmit={handleSubmit}>

        {/* 3. Input Fields */}
        <label>Name:</label>
        <br />

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <br /><br />

        <label>Email:</label>
        <br />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <br /><br />

        {/* 4. Textarea */}
        <label>Message:</label>
        <br />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
        />

        <br /><br />

        {/* 5. Select */}
        <label>Select Course:</label>
        <br />

        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
        >
          <option value="">Choose a course</option>
          <option value="React">React</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
        </select>

        <br /><br />

        {/* 7. Radio Buttons */}
        <label>Gender:</label>
        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleChange}
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleChange}
          />
          Female
        </label>

        <br /><br />

        {/* 6. Checkbox */}
        <label>Hobbies:</label>
        <br />

        <label>
          <input
            type="checkbox"
            value="Reading"
            checked={formData.hobbies.includes("Reading")}
            onChange={handleCheckbox}
          />
          Reading
        </label>

        <label>
          <input
            type="checkbox"
            value="Music"
            checked={formData.hobbies.includes("Music")}
            onChange={handleCheckbox}
          />
          Music
        </label>

        <label>
          <input
            type="checkbox"
            value="Sports"
            checked={formData.hobbies.includes("Sports")}
            onChange={handleCheckbox}
          />
          Sports
        </label>

        <br /><br />

        {/* 10. Dynamic Forms */}
        <label>Skills:</label>

        {skills.map((skill, index) => (
          <div key={index}>
            <input
              type="text"
              value={skill}
              onChange={(event) =>
                handleSkillChange(index, event.target.value)
              }
              placeholder="Enter a skill"
            />

            <button
              type="button"
              onClick={() => removeSkill(index)}
            >
              Remove
            </button>
          </div>
        ))}

        <button type="button" onClick={addSkill}>
          Add Skill
        </button>

        <br /><br />

        {/* Terms and Conditions */}
        <label>
          <input
            type="checkbox"
            checked={formData.agree}
            onChange={(event) =>
              setFormData({
                ...formData,
                agree: event.target.checked
              })
            }
          />
          I accept the terms and conditions.
        </label>

        <br /><br />

        {/* Submit Form */}
        <button type="submit">Register</button>

      </form>

      {/* Validation Messages */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {result && (
        <div>
          <h3>{result}</h3>

          <h4>Submitted Details</h4>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Course: {formData.course}</p>
          <p>Gender: {formData.gender}</p>
          <p>Hobbies: {formData.hobbies.join(", ")}</p>
          <p>Message: {formData.message}</p>
          <p>Skills: {skills.join(", ")}</p>
        </div>
      )}

    </div>
  );
}

export default ReactForms;