import React from "react";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Form = ({ handleSubmit, inEmployee }) => {
  const [employee, setEmployee] = useState(inEmployee);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(employee);
    setEmployee(inEmployee);
  };

  return (
    <Box component="form" onSubmit={onSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Name"
        variant="outlined"
        name="name"
        value={employee.name}
        onChange={handleChange}
        required
      />
      <TextField
        label="Age"
        type="number"
        variant="outlined"
        name="age"
        required
        value={employee.age}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained">Add</Button>
    </Box>
  );
};

export default Form;
