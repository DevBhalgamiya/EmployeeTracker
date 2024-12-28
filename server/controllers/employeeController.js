const Employee = require('../models/Employee');

// Create a new employee
const createEmployee = async (req, res) => {
  try {
    const { name, position, department, salary } = req.body;

    if (!name || !position || !department || !salary) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newEmployee = new Employee({
      name,
      position,
      department,
      salary,
    });

    const savedEmployee = await newEmployee.save();
    res.status(201).json(savedEmployee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all employees
const getAllEmployees = async (req, res) => {
    try {
      const employees = await Employee.find();
      res.status(200).json(employees);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

// Get a single employee by ID
const getEmployeeById = async (req, res) => {
    try {
      const { id } = req.params;
      const employee = await Employee.findById(id);
  
      if (!employee) {
        return res.status(404).json({ message: "Employee not found" });
      }
  
      res.status(200).json(employee);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

// Update an employee
const updateEmployee = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, position, department, salary } = req.body;
  
      const updatedEmployee = await Employee.findByIdAndUpdate(
        id,
        { name, position, department, salary },
        { new: true, runValidators: true }
      );
  
      if (!updatedEmployee) {
        return res.status(404).json({ message: "Employee not found" });
      }
  
      res.status(200).json(updatedEmployee);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

// Delete an employee
const deleteEmployee = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedEmployee = await Employee.findByIdAndDelete(id);
  
      if (!deletedEmployee) {
        return res.status(404).json({ message: "Employee not found" });
      }
  
      res.status(200).json({ message: "Employee deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createEmployee,
    getAllEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee,
};
  
  
  
  
  