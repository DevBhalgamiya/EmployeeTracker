import React from 'react';
import EmployeeForm from '../components/EmployeeForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
  const navigate = useNavigate();

  const handleSubmit = async (employeeData) => {
    try {
      await axios.post('http://localhost:3000/api/employees', employeeData);
      navigate('/');
    } catch (error) {
      console.error('Error adding employee:', error.message);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className='text-3xl font-medium text-[#f1f2ff] mb-4'>Add New Employee</h1>
      <EmployeeForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddEmployee;
