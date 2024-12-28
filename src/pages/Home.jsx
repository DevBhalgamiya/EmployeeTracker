import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const Home = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/employees");
        setEmployees(res.data);
      } catch (error) {
        console.error("Error fetching employees:", error.message);
      }
    };
    fetchEmployees();
  }, []);

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/employees/${id}`);
      setEmployees(employees.filter((employee) => employee._id !== id));
    } catch (error) {
      console.error("Error deleting employee:", error.message);
    }
  };

  return (
    <div className="bg-[#181818] text-white p-6">
      <h1 className="text-3xl font-medium text-[#f1f2ff] mb-14">Employee List</h1>
      <Table className="w-full border border-collapse">
        <Thead>
          <Tr className="bg-[#121212] text-white">
            <Th className="px-4 py-2">Name</Th>
            <Th className="px-4 py-2">Position</Th>
            <Th className="px-4 py-2">Department</Th>
            <Th className="px-4 py-2">Salary</Th>
            <Th className="px-4 py-2">Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {employees.map((employee) => (
            <Tr key={employee._id} className="border-b text-white">
              <Td className="px-4 py-2">{employee.name}</Td>
              <Td className="px-4 py-2">{employee.position}</Td>
              <Td className="px-4 py-2">{employee.department}</Td>
              <Td className="px-4 py-2 text-center">{employee.salary}</Td>
              <Td className="px-4 py-2">
                <div className="flex space-x-2 justify-center">
                  <Link
                    to={`/edit/${employee._id}`}
                    className="bg-[#FFD60A] text-black font-medium px-3 py-1 rounded hover:bg-[#3D2A01] hover:text-[#ffd60a]"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteEmployee(employee._id)}
                    className="bg-red-500 text-white font-semibold px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default Home;
