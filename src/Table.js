<<<<<<< HEAD
import React from "react";

const Table = ({ employees, delEmployee }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>удалить</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => {
          return (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.age}</td>
              <td>
                <button onClick={() => delEmployee(employee.id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
=======
import React from "react";

const Table = ({ employees, delEmployee }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => {
          return (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.job}</td>
              <td>
                <button onClick={() => delEmployee(employee.id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
>>>>>>> 1c9f0752c29cec85d60956ceac2b2f48fc7adb61
