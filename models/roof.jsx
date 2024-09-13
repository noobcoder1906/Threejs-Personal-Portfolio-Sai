import React from 'react';
import { useGLTF } from '@react-three/drei';
import skyscene from '../assets/3d/island.glb';

const Roof = () => {
  const { scene } = useGLTF(skyscene);

  return (
    <primitive object={scene} />
  );
};

export default Roof;
