import React, { useState } from 'react';
import AppRouter from './Router';
import EmployeeAPI from './api/service';
import "./App.css";


const App = () => {
  const [employees, setEmployees] = useState(EmployeeAPI.all());
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const initialEmployees = EmployeeAPI.all();


  const handleAuth = (username) => {
    setIsAuthenticated(true);
    setCurrentUser(username);
  };

  const delEmp = (id) => {
    if (EmployeeAPI.delete(id)) {
      setEmployees(employees.filter((employee) => employee.id !== id));
    }
  };

  const addEmployee = (employee) => {
    const newEmployee = EmployeeAPI.add(employee);
    if (newEmployee) {
      setEmployees([...employees, newEmployee]);
    }
  };

  return (
    <div className="App">
      <AppRouter 
        isAuthenticated={isAuthenticated} 
        currentUser={currentUser} 
        setAuth={handleAuth} 
        addEmployee={addEmployee} 
        delEmployee={delEmp} 
        employees={employees}
      />
    </div>
  );
};

export default App;
