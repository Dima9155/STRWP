import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";

const EmployeeTable = ({ employees, delEmployee }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Имя</TableCell>
            <TableCell>Возраст</TableCell>
            <TableCell>Удалить</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee, index) => (
            <TableRow key={index}>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.age}</TableCell>
              <TableCell>
                <Button variant="contained" color="secondary" onClick={() => delEmployee(employee.id)}>
                  Удалить
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeTable;
