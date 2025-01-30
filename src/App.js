import React, { useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline, Button, Box } from '@mui/material';
import { lightTheme, darkTheme } from './theme'; // Импорт светлой и тёмной тем
import AppRouter from './Router';
import EmployeeAPI from './api/service';
import "./App.css";


const App = () => {
  const [employees, setEmployees] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false); // состояние для текущей темы

  // Загрузка сотрудников при монтировании компонента
  useEffect(() => {
    EmployeeAPI.all()
      .then((data) => {
        setEmployees(data);
      })
      .catch((error) => {
        console.error('Ошибка при получении сотрудников:', error);
      });
  }, []);

  const handleAuth = ({ username, role }) => {
    setIsAuthenticated(true);
    setCurrentUser(username);
    setUserRole(role);
  };

  const deleteEmployee = (id) => {
    if (userRole === "admin") {
      console.log(id)
      EmployeeAPI.delete(id)
        .then(() => {
          setEmployees((prevEmployees) =>
            prevEmployees.filter((employee) => employee.id !== id)
          );
        })
        .catch((error) => {
          console.error('Ошибка при удалении сотрудника:', error);
        });
    } else {
      alert("У вас нет прав для удаления");
    }
  };

  const addEmployee = (employee) => {
    if (userRole === "admin") {
      EmployeeAPI.add(employee)
        .then((newEmployee) => {
          setEmployees((prevEmployees) => [
            ...prevEmployees,
            {...employee, 'id': newEmployee.id},
          ]);
        })
        .catch((error) => {
          console.error('Ошибка при добавлении сотрудника:', error);
        });
    } else {
      alert("У вас нет прав для добавления сотрудника");
    }
  };

  // Функция переключения темы
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div className="App">
        <Box sx={{ position: 'absolute', top: 70, right: 190 }}>
          <Button
            variant="outlined"
            onClick={toggleTheme}
          >
            {isDarkMode ? "Светлая тема" : "Тёмная тема"}
          </Button>
        </Box>
        <AppRouter 
          isAuthenticated={isAuthenticated} 
          currentUser={currentUser} 
          setAuth={handleAuth} 
          addEmployee={addEmployee} 
          delEmployee={deleteEmployee} 
          employees={employees}
          userRole={userRole}
        />
      </div>
    </ThemeProvider>
  );
};

export default App;