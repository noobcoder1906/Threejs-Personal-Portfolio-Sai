// SteeringWheel.js
import React, { useState } from 'react';

const SteeringWheel = ({ onMove }) => {
  const [dragging, setDragging] = useState(false);

  const handleMouseDown = () => {
    setDragging(true);
  };

  const handleMouseUp = () => {
    setDragging(false);
    onMove(0, 0); // Reset jet movement when dragging stops
  };

  const handleMouseMove = (event) => {
    if (dragging) {
      const { clientX, clientY } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // Calculate the direction of movement based on mouse position
      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;

      const movementX = deltaX / 50;
      const movementY = deltaY / 50;

      onMove(movementX, -movementY);
    }
  };

  return (
    <div
      className="steering-wheel relative bg-gray-800 w-40 h-40 rounded-full shadow-lg flex items-center justify-center cursor-pointer"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div className="center bg-yellow-400 w-8 h-8 rounded-full"></div>
    </div>
  );
};

export default SteeringWheel;
