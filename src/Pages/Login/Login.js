import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const users = [
    { username: "admin", password: "admin" },
  ];
  

function Login({setAuth}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      setAuth(username);
        navigate("/");
      } else {
        alert("Неверные данные для входа");
      }
    }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
