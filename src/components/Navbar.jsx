import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="w-full max-w-maxContent mx-auto flex justify-between items-center p-4 md:p-6 text-white bg-[#121212] border-gray-200">
    <Link to="/">
      <div className='flex items-center space-x-2'>
        <h1 className='text-xl md:text-2xl font-bold tracking-wide font-bricolage'>insomniacs</h1>
      </div>
    </Link>

    <ul className="hidden md:flex space-x-8">
      <li>
        <Link to="/" className="font-bold hover:text-[#FABD00]">Home</Link>
      </li>
      <li>
        <Link to="/add" className="font-bold hover:text-[#FABD00]">Add Employee</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
