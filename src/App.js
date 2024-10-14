import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import Login from './Login';
//import Home from './Home';
//import Dashboard from './Dashboard';
import './App.css';
import Form from './Form';
import EmployeeAPI from './api/service';
import Table from './Table';

const initialEmployees = EmployeeAPI.all();

function App() {
  const [employees, setEmployees] = useState(initialEmployees);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

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
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/Home" element={token ? (
            <div>
              <Form handleSubmit={addEmployee} inEmployee={{ name: '', age: '', username: '', password: '' }} />
              <Table employees={employees} delEmployee={delEmp} />
            </div>
          ) : (
            <Navigate to="/login" replace />
          )} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
