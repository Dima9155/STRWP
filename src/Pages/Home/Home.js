import React, { useState, useEffect } from "react";
import { ThemeProvider, CssBaseline, Button, Box } from "@mui/material";
import { lightTheme, darkTheme } from "../theme";
import Form from "./Pages/Components/Form";
import EmployeeAPI from "./api/service";
import EmployeeTable from "./Pages/Components/Table";

function Home() {
  const [employees, setEmployees] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    EmployeeAPI.all()
      .then((data) => {
        setEmployees(data);
      })
      .catch((error) => {
        console.error('Ошибка при получении сотрудников:', error);
      });
  }, []);

  useEffect(() => {
    console.log(employees);
  }, [employees]);

  const delEmp = (id) => {
    EmployeeAPI.delete(id)
      .then(() => {
        setEmployees((prevEmployees) =>
          prevEmployees.filter((employee) => employee.id !== id)
        );
      })
      .catch((error) => {
        console.error('Ошибка при удалении сотрудника:', error);
      });
  };

  const addEmployee = (employee) => {
    console.log(employee)
    EmployeeAPI.add(employee)
      .then((newEmployee) => {
        setEmployees((prevEmployees) => [
          ...prevEmployees, // Добавляем нового сотрудника в конец списка
          employee,
        ]);
      })
      .catch((error) => {
        console.error('Ошибка при добавлении сотрудника:', error);
      });
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
        <EmployeeTable employees={employees} delEmployee={delEmp} />
      </div>
    </ThemeProvider>
  );
}

export default Home;