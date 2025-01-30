import axios from 'axios';

const apiUrl = 'http://localhost:5000';

const EmployeeAPI = {
  all: function() {
    const token = localStorage.getItem('token');
    return axios.get(`${apiUrl}/employees`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching employees:', error);
      throw error;
    });
  },

  get: function(id) {
    const token = localStorage.getItem('token');
    return axios.get(`${apiUrl}/employees/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => response.data)
    .catch(error => {
      console.error(`Error fetching employee with id ${id}:`, error);
      throw error;
    });
  },

  delete: function(id) {
    const token = localStorage.getItem('token');
    return axios.delete(`${apiUrl}/employees/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(() => true)
    .catch(error => {
      console.error(`Error deleting employee with id ${id}:`, error);
      throw error;
    });
  },

  add: function(employee) {
    const token = localStorage.getItem('token');
    return axios.post(`${apiUrl}/employees`, employee, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => response.data.employee)
    .catch(error => {
      console.error('Error adding employee:', error);
      throw error;
    });
  },

  update: function(employee) {
    const token = localStorage.getItem('token');
    return axios.put(`${apiUrl}/employees/${employee.id}`, employee, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => response.data)
    .catch(error => {
      console.error(`Error updating employee with id ${employee.id}:`, error);
      throw error;
    });
  }
};

export default EmployeeAPI;