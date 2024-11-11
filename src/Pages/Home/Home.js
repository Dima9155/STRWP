import React, { useState } from "react";
import { ThemeProvider, CssBaseline, Button, Box } from "@mui/material";
import { lightTheme, darkTheme } from "../theme";
import Form from "./Pages/Components/Form";
import EmployeeAPI from "./api/service";
import Table from "./Pages/Components/Table";
import { useState } from "react";

const initialEmployees = EmployeeAPI.all();
console.log(initialEmployees);
function Home() {
  const [employees, setEmloyees] = useState(initialEmployees);
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box sx={{ position: 'fixed', top: 150, right: 100, zIndex: 1000 }}>
        <Button variant="contained" color="primary" onClick={toggleTheme}>
          {isDarkMode ? "Светлая тема" : "Тёмная тема"}
        </Button>
      </Box>
      <div className="Home">
        <Form handleSubmit={addEmployee} inEmployee={{ name: "", age: "" }} />
        <Table employees={employees} delEmployee={delEmp} />
      </div>
    </ThemeProvider>
  );
}

export default Home;