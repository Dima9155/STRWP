import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Login from '../Pages/Login/Login';
import Form from '../Pages/Home/Component/Form';
import Table from '../Pages/Home/Component/Table';


const AppRouter = ({ isAuthenticated, currentUser, setAuth, addEmployee, delEmployee, employees }) => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Login" element={<Login setAuth={setAuth} />} />
        <Route path="/" element={
          isAuthenticated ? (
            <>
              <p>Welcome, {currentUser}!</p>
              <Form handleSubmit={addEmployee} inEmployee={{ name: "", age: "" }} />
              <Table employees={employees} delEmployee={delEmployee} />
            </>
          ) : (
            <Navigate to="/Login" />
          )
        } />
      </Routes>
    </Router>
  );
};

export default AppRouter;
