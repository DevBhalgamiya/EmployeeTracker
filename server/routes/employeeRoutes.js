const express = require('express');
const {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} = require('../controllers/employeeController');

const router = express.Router();

// Create an employee
router.post('/', createEmployee);

// Get all employees
router.get('/', getAllEmployees);

// Get a single employee
router.get('/:id', getEmployeeById);

// Update an employee
router.put('/:id', updateEmployee);

// Delete an employee
router.delete('/:id', deleteEmployee);

module.exports = router;
