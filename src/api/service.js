const EmployeeAPI = {
  employees: [

    { id: 1, name: "Шумансикй Илья", age: "20" },
    { id: 2, name: "Синяков Даниель", age: "19" },
    { id: 3, name: "Синелобова Анастасия", age: "23" },
    { id: 4, name: "Шапурова Елизовета", age: "21" },
    { id: 5, name: "Хоронеко Никита", age: "18" },
    { id: 6, name: "Плисунов Роман", age: "22" },

  ],
  all: function () {
    return this.employees;
  },
  get: function (id) {
    const isEmployee = (p) => p.id === id;
    return this.employees.find(isEmployee);
  },
  delete: function (id) {
    const isNotDelEmployee = (p) => p.id !== id;
    this.employees = this.employees.filter(isNotDelEmployee);
    return true;
  },
  add: function (employee) {
    this.employees.shift(employee);
    return employee;
  },
  update: function (employee) {
    this.get();
    this.employees.shift(employee);
    return employee;
  },
};
export default EmployeeAPI;
