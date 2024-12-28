import React, { useState, useEffect } from 'react';

const EmployeeForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    department: '',
    salary: '',
  });

  // Populate form with initial data if editing
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className='bg-[#181818] p-6 space-y-4"'>
      <form onSubmit={handleSubmit} className="bg-[#181818] p-6 space-y-4">
        <div className="space-y-2">
          <label className="block font-bold text-white">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FABD00]"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="block font-bold text-white">Position</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FABD00]"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="block font-bold text-white">Department</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FABD00]"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="block font-bold text-white">Salary</label>
          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FABD00]"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#FFD60A] text-black font-medium px-4 py-2 rounded hover:bg-[#3D2A01] hover:text-[#ffd60a]"
        >
          {initialData ? 'Update Employee' : 'Add Employee'}
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
