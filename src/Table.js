
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