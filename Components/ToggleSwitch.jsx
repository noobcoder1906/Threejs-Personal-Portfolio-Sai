// ToggleSwitch.js
import React from 'react';

const ToggleSwitch = ({ isDarkMode, onToggle }) => {
  return (
    <label className="flex items-center cursor-pointer mt-24"> {/* Increased margin-top */}
      <div className="relative">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={onToggle}
          className="sr-only"
        />
        <div
          className={`block w-14 h-8 rounded-full ${isDarkMode ? 'bg-night-sky' : 'bg-day-sky'} bg-cover bg-center`}
        ></div>
        <div
          className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
            isDarkMode ? 'translate-x-full' : ''
          }`}
        ></div>
      </div>
      <span className="ml-3 text-sm font-medium">
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </span>
    </label>
  );
};

export default ToggleSwitch;
