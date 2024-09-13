import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const Bullet = ({ startPosition, onHit }) => {
  const bulletRef = useRef();
  const [position, setPosition] = useState(startPosition);

  useFrame(() => {
    if (position[2] > -10) { // Adjust based on your scene's dimensions
      const newPosition = [position[0], position[1], position[2] - 0.2];
      setPosition(newPosition);
      bulletRef.current.position.set(...newPosition);

      // Check if bullet hits target
      if (newPosition[2] <= -10) { // Trigger hit when bullet reaches certain Z position
        onHit();
      }
    }
  });

  return (
    <mesh ref={bulletRef} position={position} scale={[0.1, 0.1, 0.5]}>
      <boxGeometry />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

export default Bullet;
