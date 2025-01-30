import React, { useState} from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Card, CardContent, Typography, Grid } from "@mui/material";

const EmployeeTable = ({ employees = [], delEmployee }) => {
  const [isTableView, setIsTableView] = useState(true);

  const toggleView = () => {
    setIsTableView((prev) => !prev);
  };

  return (
    <div>
      <Button variant="outlined" onClick={toggleView} style={{ marginBottom: "1rem" }}>
        {isTableView ? "Switch to Card View" : "Switch to Table View"}
      </Button>

      {Array.isArray(employees) && employees.length > 0 ? (
        isTableView ? (
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
        ) : (
          <Grid container spacing={2}>
            {employees.map((employee, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">{employee.name}</Typography>
                    <Typography variant="body2">Возраст: {employee.age}</Typography>
                    <Button variant="contained" color="secondary" onClick={() => delEmployee(employee.id)} style={{ marginTop: "1rem" }}>
                      Удалить
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )
      ) : (
        <p>Список сотрудников пуст</p>
      )}
    </div>
  );
};

export default EmployeeTable;
