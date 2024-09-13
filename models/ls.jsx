import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { a } from '@react-spring/three';
import cityls from '../assets/3d/ls.glb';

const City = (props) => {
  const cityRef = useRef();
  const { nodes, materials } = useGLTF(cityls);

  return (
    <a.group ref={cityRef} {...props}>
      <mesh
        geometry={nodes.Dtla_Orbit_Dtla_Orbit_u3_v1_0.geometry}
        material={materials.Dtla_Orbit_u3_v1}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.124}
      />
      <mesh
        geometry={nodes.Dtla_Orbit_Dtla_Orbit_u1_v1_0.geometry}
        material={materials.Dtla_Orbit_u1_v1}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.124}
      />
      <mesh
        geometry={nodes.Dtla_Orbit_Dtla_Orbit_u2_v2_0.geometry}
        material={materials.Dtla_Orbit_u2_v2}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.124}
      />
      <mesh
        geometry={nodes.Dtla_Orbit_Dtla_Orbit_u2_v1_0.geometry}
        material={materials.Dtla_Orbit_u2_v1}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.124}
      />
      <mesh
        geometry={nodes.Dtla_Orbit_Dtla_Orbit_u1_v2_0.geometry}
        material={materials.Dtla_Orbit_u1_v2}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.124}
      />
    </a.group>
  );
};

useGLTF.preload(cityls);

export default City;
