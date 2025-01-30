import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import axios from 'axios';

const users = [
  { username: "admin", password: "admin", role: "admin" },
  { username: "user", password: "user", role: "user" }, 
];


function Login({ setAuth }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });

      if (response.data.access_token) {
        localStorage.setItem('token', response.data.access_token); // Сохраняем токен в localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('role', response.data.role);
        setAuth(response.data.access_token); // Обновляем состояние авторизации
        navigate("/");
      } else {
          console.error("bad auth response");
      }
  
      console.log("Успешный вход:", response.data);
  
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        alert("Неверные данные для входа");
      } else {
        console.error("Ошибка при авторизации:", error);
      }
    }
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      setAuth({ username: user.username, role: user.role });
      navigate("/");
    } else {
      // alert("Неверные данные для входа");
    }
  };
  

  return (
    <Container maxWidth="sm" sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh', 
      backgroundColor: '#006fde',
      padding: 4,
      borderRadius: 2,
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
    }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#333', fontWeight: 'bold' }}>
        Вход
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
        <TextField
          fullWidth
          margin="normal"
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ backgroundColor: '#fff', borderRadius: 1 }}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ backgroundColor: '#fff', borderRadius: 1 }}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          sx={{ marginTop: 2, padding: 1.5, fontWeight: 'bold', fontSize: '1rem' }}
        >
          Войти
        </Button>
      </Box>
    </Container>
  );
}

export default Login;
