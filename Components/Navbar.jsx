import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="header flex items-center justify-between px-4 py-2 bg-gray-900 shadow-md">
      <NavLink 
        to="/" 
        className="w-6 h-6 rounded-lg bg-gray-500 flex items-center justify-center font-bold shadow-sm transform transition-transform duration-300 hover:scale-105 hover:bg-gray-600"
      >
        <p className="text-white text-xs">SS</p>
      </NavLink>
      
      <nav className="flex text-sm gap-4 font-serif">
        <NavLink 
          to="/aboutme" 
          className={({ isActive }) => isActive 
            ? 'nav-link-active' 
            : 'nav-link'
          }
        >
          <p>About Me</p>
        </NavLink>
        <NavLink 
          to="/mystuffs" 
          className={({ isActive }) => isActive 
            ? 'nav-link-active' 
            : 'nav-link'
          }
        >
          <p>My Stuffs</p>
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => isActive 
            ? 'nav-link-active' 
            : 'nav-link'
          }
        >
          <p>Contact</p>
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
