import Form from "./Pages/Components/Form";
import EmployeeAPI from "./api/service";
import Table from "./Pages/Components/Table";
import { useState } from "react";

const initialEmployees = EmployeeAPI.all();
console.log(initialEmployees);
function Home() {
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
    <div className="Home">
      <Form handleSubmit={addEmployee} inEmployee={{ name: "", age: "" }} />
      <Table employees={employees} delEmployee={delEmp} />
    </div>
  );
}

export default Home;