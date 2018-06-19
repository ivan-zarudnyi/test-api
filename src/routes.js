module.exports = {
    "GET /emp/:emp_id": {
        controller: "EmployeesController",
        method: "item"
    },
    "GET /emp": {
        controller: "EmployeesController",
        method: "find"
    },

    "POST /emp": {
        controller: "EmployeesController",
        method: "create"
    },

    "POST /manager": {
        controller: "ManagersController",
        method: "create"
    },

    "GET /manager/:manager_id/employees": {
        controller: "ManagersController",
        method: "getEmployees"
    },
};