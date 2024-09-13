import React from 'react';

const Popup = ({ show, message }) => {
  if (!show) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="text-black">{message}</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={() => show(false)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
