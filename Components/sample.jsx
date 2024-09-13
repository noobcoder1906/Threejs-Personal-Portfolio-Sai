import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => (
  <nav className="bg-gray-800 p-4">
    <div className="container mx-auto flex justify-between">
      <div className="text-white text-lg font-bold">My Portfolio</div>
      <div className="flex space-x-4">
        <Link to="/" className="text-white">Home</Link>
        <Link to="/aboutme" className="text-white">About Me</Link>
        <Link to="/mystuffs" className="text-white">My Stuffs</Link>
        <Link to="/contact" className="text-white">Contact</Link>
      </div>
    </div> 
  </nav>
);

export default Navbar;
