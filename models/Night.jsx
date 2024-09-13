import { useGLTF } from '@react-three/drei';
import React, { useEffect } from 'react';
import nightscene from '../assets/3d/ship.glb';

const Night = (props) => {
  const { scene } = useGLTF(nightscene);

  useEffect(() => {
    console.log('Night scene loaded', scene);
  }, [scene]);

  return (
    <primitive object={scene} {...props} scale={props.scale} position={props.position} />
  );
};

useGLTF.preload(nightscene);

export default Night;
