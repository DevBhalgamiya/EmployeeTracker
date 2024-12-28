import React, { useEffect, useState } from 'react';
import EmployeeForm from '../components/EmployeeForm';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);

  // Fetch the employee's existing data
  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/employees/${id}`);
        setInitialData(res.data);
      } catch (error) {
        console.error('Error fetching employee:', error.message);
      }
    };
    fetchEmployee();
  }, [id]);

  const handleSubmit = async (employeeData) => {
    try {
      await axios.put(`http://localhost:3000/api/employees/${id}`, employeeData);
      navigate('/');
    } catch (error) {
      console.error('Error updating employee:', error.message);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className='text-3xl font-medium text-[#f1f2ff] mb-4'>Edit Employee</h1>
      {initialData ? (
        <EmployeeForm onSubmit={handleSubmit} initialData={initialData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditEmployee;
