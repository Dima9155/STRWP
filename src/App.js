import "./App.css";
import EmployeeAPI from "./api/service";
import Table from"./Table";
import { useState } from "react";

const initialEmployees = EmployeeAPI.all();
console.log(initialEmployees);
function App() {
  const [employees, setEmloyees] = useState(initialEmployees);

  const delEmp = (id) => {
    if (EmployeeAPI.delete(id)){
      setEmloyees(employees.filter((employee) => employee.id !== id));
    }
  };
  
  return(
    <div className="App">
      <Table employees={employees} delEmployee={delEmp}/>
    </div>
  );
}

export default App;
