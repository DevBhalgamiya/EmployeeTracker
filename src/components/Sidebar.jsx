import React from "react";
import { Link, useLocation } from "react-router-dom";
import { VscListFlat, VscAdd, VscDashboard } from "react-icons/vsc";

const Sidebar = () => {
  const location = useLocation();

  const links = [
    { id: 1, name: "Dashboard", path: "/profile", icon: VscDashboard },
    { id: 2, name: "Employee List", path: "/", icon: VscListFlat },
    { id: 3, name: "Add Employee", path: "/add", icon: VscAdd }
  ];

  const matchRoute = (route) => location.pathname === route;
// h-[calc(100vh-4rem)]
  return (
    <div className="h-100% w-60 bg-[#121212] text-white flex flex-col py-4">
      <div className="flex flex-col">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.id}
              to={link.path}
              className={`relative flex items-center px-4 py-2 my-1 text-sm font-medium transition-colors duration-200 ${
                matchRoute(link.path)
                  ? "bg-[#3d2a01] text-[#ffd60a]"
                  : "bg-opacity-0 text-gray-200"
              }`}
            >
              <span
                className={`absolute left-0 top-0 h-full w-1 bg-[#ffd60a] ${
                  matchRoute(link.path) ? "opacity-100" : "opacity-0"
                } transition-opacity duration-200`}
              ></span>
              <Icon className="mr-2 text-lg" />
              {link.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
