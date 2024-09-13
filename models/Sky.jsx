import React from 'react';
import { useGLTF } from '@react-three/drei';
import SkyScene from '../assets/3d/sky.glb';

const Sky = () => {
  const { scene } = useGLTF(SkyScene);

  if (!scene) {
    console.error('Sky model loading failed.');
    return null;
  }

  return (
    <mesh>
      <primitive object={scene} />
    </mesh>
  );
};

export default Sky;
