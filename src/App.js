import "./App.css";
import Form from "./Pages/Home/Component/Form";
import EmployeeAPI from "./api/service";
import Table from "./Pages/Home/Component/Table";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./Pages/Login/Login";

const initialEmployees = EmployeeAPI.all();
console.log(initialEmployees);
function App() {
  const [employees, setEmloyees] = useState(initialEmployees);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const handleAuth = (username) => {
    setIsAuthenticated(true);
    setCurrentUser(username);
  };

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
      <Router>
        <div className="App">
          <Routes>
            <Route path="/Login" element={<Login setAuth={handleAuth} />} />
            <Route path="/" element={
              isAuthenticated ? (
                <>
                  <p>Welcome, {currentUser}!</p> {/* Приветственное сообщение */}
                  <Form handleSubmit={addEmployee} inEmployee={{ name: "", surname: "", age: "" }} />
                  <Table employees={employees} delEmployee={delEmp} />
                </>
              ) : (
                <Navigate to="/Login" />
              )
            } />
          </Routes>
        </div>
      </Router>
    
  );
}


export default App;