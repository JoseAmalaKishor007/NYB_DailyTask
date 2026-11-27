
import React from "react";

function NestedList() {

  const departments = [
    {
      id: 1,
      name: "IT",
      employees: ["John", "Ravi", "Arun"]
    },
    {
      id: 2,
      name: "HR",
      employees: ["Priya", "Sneha"]
    },
    {
      id: 3,
      name: "Finance",
      employees: ["Kiran", "David"]
    }
  ];

  return (
    <div>

      <h2>Department and Employees</h2>

      {departments.map((department) => (

        <div key={department.id}>

          <h3>{department.name}</h3>

          <ul>

            {department.employees.map((employee, index) => (

              <li key={index}>
                {employee}
              </li>

            ))}

          </ul>

        </div>

      ))}

    </div>
  );
}

export default NestedList;
