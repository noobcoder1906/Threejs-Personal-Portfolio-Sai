import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import scene from '../assets/3d/Man.glb'; // Path to your GLB file

const Man = ({ currentAnimation, ...props }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Stop all actions
    Object.values(actions).forEach(action => action.stop());

    // Play the current animation if it exists
    if (currentAnimation && actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [currentAnimation, actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={611.131}>
          <group name="2c5397f55fe9449e8bd0e261fb0e14d2fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Material_130}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.Material_132}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials.Material_56}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <skinnedMesh
                    name="Object_13"
                    geometry={nodes.Object_13.geometry}
                    material={materials.Material_60}
                    skeleton={nodes.Object_13.skeleton}
                  />
                  <skinnedMesh
                    name="Object_15"
                    geometry={nodes.Object_15.geometry}
                    material={materials.Material_60_0}
                    skeleton={nodes.Object_15.skeleton}
                  />
                  <skinnedMesh
                    name="Object_17"
                    geometry={nodes.Object_17.geometry}
                    material={materials.Material_68}
                    skeleton={nodes.Object_17.skeleton}
                  />
                  <skinnedMesh
                    name="Object_19"
                    geometry={nodes.Object_19.geometry}
                    material={materials.Material_72}
                    skeleton={nodes.Object_19.skeleton}
                  />
                  <skinnedMesh
                    name="Object_21"
                    geometry={nodes.Object_21.geometry}
                    material={materials.Material_76}
                    skeleton={nodes.Object_21.skeleton}
                  />
                  <skinnedMesh
                    name="Object_23"
                    geometry={nodes.Object_23.geometry}
                    material={materials.Material_80}
                    skeleton={nodes.Object_23.skeleton}
                  />
                  <skinnedMesh
                    name="Object_25"
                    geometry={nodes.Object_25.geometry}
                    material={materials.Material_88}
                    skeleton={nodes.Object_25.skeleton}
                  />
                  <skinnedMesh
                    name="Object_27"
                    geometry={nodes.Object_27.geometry}
                    material={materials.Material_96}
                    skeleton={nodes.Object_27.skeleton}
                  />
                  <skinnedMesh
                    name="Object_29"
                    geometry={nodes.Object_29.geometry}
                    material={materials.Material_100}
                    skeleton={nodes.Object_29.skeleton}
                  />
                  <skinnedMesh
                    name="Object_31"
                    geometry={nodes.Object_31.geometry}
                    material={materials.Material_104}
                    skeleton={nodes.Object_31.skeleton}
                  />
                  <skinnedMesh
                    name="Object_33"
                    geometry={nodes.Object_33.geometry}
                    material={materials.Material_108}
                    skeleton={nodes.Object_33.skeleton}
                  />
                  <skinnedMesh
                    name="Object_35"
                    geometry={nodes.Object_35.geometry}
                    material={materials.Material_112}
                    skeleton={nodes.Object_35.skeleton}
                  />
                  <skinnedMesh
                    name="Object_37"
                    geometry={nodes.Object_37.geometry}
                    material={materials.Material_134}
                    skeleton={nodes.Object_37.skeleton}
                  />
                  <skinnedMesh
                    name="Object_39"
                    geometry={nodes.Object_39.geometry}
                    material={materials.Material_136}
                    skeleton={nodes.Object_39.skeleton}
                  />
                  <skinnedMesh
                    name="Object_41"
                    geometry={nodes.Object_41.geometry}
                    material={materials.Material_138}
                    skeleton={nodes.Object_41.skeleton}
                  />
                  <skinnedMesh
                    name="Object_43"
                    geometry={nodes.Object_43.geometry}
                    material={materials.Material_140}
                    skeleton={nodes.Object_43.skeleton}
                  />
                  <group name="Object_6" position={[0.01, 0.198, 0.2]} scale={0.001} />
                  <group
                    name="Object_8"
                    position={[0.011, 0.153, 0.2]}
                    rotation={[0, 0, Math.PI]}
                    scale={0.001}
                  />
                  <group name="Object_10" position={[0.013, 0.035, 0.2]} scale={0.001} />
                  <group
                    name="Object_12"
                    position={[-0.063, 0.096, 0.2]}
                    rotation={[0, 0, Math.PI / 2]}
                    scale={0.001}
                  />
                  <group
                    name="Object_14"
                    position={[0.09, 0.094, 0.2]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.001}
                  />
                  <group
                    name="Object_16"
                    position={[-0.017, -0.093, 0.2]}
                    rotation={[0, 0, Math.PI]}
                    scale={0.001}
                  />
                  <group
                    name="Object_18"
                    position={[0.042, -0.096, 0.2]}
                    rotation={[0, 0, -Math.PI]}
                    scale={0.001}
                  />
                  <group name="Object_20" position={[-0.017, -0.145, 0.2]} scale={0.001} />
                  <group name="Object_22" position={[0.043, -0.145, 0.2]} scale={0.001} />
                  <group
                    name="Object_24"
                    position={[0.143, 0.094, 0.2]}
                    rotation={[0, 0, Math.PI / 2]}
                    scale={0.001}
                  />
                  <group
                    name="Object_26"
                    position={[-0.112, 0.097, 0.2]}
                    rotation={[0, 0, Math.PI / 2]}
                    scale={0.001}
                  />
                  <group
                    name="Object_28"
                    position={[0.201, 0.094, 0.2]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.001}
                  />
                  <group
                    name="Object_30"
                    position={[-0.17, 0.098, 0.2]}
                    rotation={[0, 0, Math.PI / 2]}
                    scale={0.001}
                  />
                  <group
                    name="Object_32"
                    position={[-0.018, -0.206, 0.2]}
                    rotation={[0, 0, Math.PI]}
                    scale={0.001}
                  />
                  <group
                    name="Object_34"
                    position={[0.043, -0.206, 0.2]}
                    rotation={[0, 0, Math.PI]}
                    scale={0.001}
                  />
                  <group
                    name="Object_36"
                    position={[0.234, 0.095, 0.2]}
                    rotation={[0, 0, Math.PI / 2]}
                    scale={0.001}
                  />
                  <group
                    name="Object_38"
                    position={[-0.203, 0.098, 0.2]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={0.001}
                  />
                  <group name="Object_40" position={[-0.018, -0.239, 0.2]} scale={0.001} />
                  <group name="Object_42" position={[0.044, -0.24, 0.2]} scale={0.001} />
                  <group name="root">
                    <group name="root1" />
                    <group name="root2" />
                    <group name="root3" />
                    <group name="root4" />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Man;

useGLTF.preload(scene);
