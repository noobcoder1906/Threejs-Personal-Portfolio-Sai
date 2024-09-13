import React, { useRef, useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import JetScene from '../assets/3d/fighter_jet.glb';

const Jet = ({ onMove }) => {
  const { scene } = useGLTF(JetScene);
  const jetRef = useRef();
  const [position, setPosition] = useState([0, 15, 0]);
  const [direction, setDirection] = useState({ x: 0, y: 0, z: 0 });

  const handleKeyDown = (event) => {
    switch (event.key) {
      case 'ArrowUp':
        setDirection((prev) => ({ ...prev, z: -1 }));
        break;
      case 'ArrowDown':
        setDirection((prev) => ({ ...prev, z: 1 }));
        break;
      case 'ArrowLeft':
        setDirection((prev) => ({ ...prev, x: -1 }));
        break;
      case 'ArrowRight':
        setDirection((prev) => ({ ...prev, x: 1 }));
        break;
      default:
        break;
    }
  };

  const handleKeyUp = (event) => {
    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowDown':
        setDirection((prev) => ({ ...prev, z: 0 }));
        break;
      case 'ArrowLeft':
      case 'ArrowRight':
        setDirection((prev) => ({ ...prev, x: 0 }));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useFrame(() => {
    const [x, y, z] = position;
    const { x: dx, z: dz } = direction;

    const newX = x + dx * 0.1;
    const newZ = z + dz * 0.1;

    setPosition([newX, y, newZ]);
    jetRef.current.position.set(newX, y, newZ);

    if (dx !== 0 || dz !== 0) {
      const angle = Math.atan2(dz, dx);
      jetRef.current.rotation.y = -angle + Math.PI / 2;
    }

    onMove(newX, newZ);
  });

  return (
    <mesh ref={jetRef} position={position} scale={[1, 1, 1]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Jet;
