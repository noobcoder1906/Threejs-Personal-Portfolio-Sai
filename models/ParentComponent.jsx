import React, { useState } from 'react';
import Beach from './Beach'; // Adjust path as needed
import HomeInfo from './HomeInfo'; // Adjust path as needed

const ParentComponent = () => {
  const [currentStage, setCurrentStage] = useState(1);

  return (
    <div>
      <Beach setCurrentStage={setCurrentStage} />
      <HomeInfo currentStage={currentStage} />
    </div>
  );
};

export default ParentComponent;
