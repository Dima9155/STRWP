import "./App.css";
import Form from "./Form";
import EmployeeAPI from "./api/service";
import Table from "./Table";
import { useState } from "react";

const initialEmployees = EmployeeAPI.all();
console.log(initialEmployees);
function App() {
  const [employees, setEmloyees] = useState(initialEmployees);

  const delEmp = (id) => {
    if (EmployeeAPI.delete(id)) {
      setEmloyees(employees.filter((employee) => employee.id !== id));
    }
  };

  const addEmployee = (employee) => {
    const newEmployee = EmployeeAPI.add(employee);
    if (newEmployee) {
      setEmloyees([...employees, newEmployee]);
    }
  };

  return (
    <div className="App">
      <Form handleSubmit={addEmployee} inEmployee={{ name: "", age: "" }} />
      <Table employees={employees} delEmployee={delEmp} />
    </div>
  );
}

export default App;