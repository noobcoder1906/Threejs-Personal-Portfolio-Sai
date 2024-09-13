import React, { useRef, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { a } from '@react-spring/three';
import BeachScene from '../assets/3d/fantasy_book.glb';
import Popup from '../Components/Popup';

const Beach = (props) => {
  const beachRef = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const { nodes, materials, animations } = useGLTF(BeachScene);
  const { actions } = useAnimations(animations, beachRef);

  const handleRotation = (event) => {
    const { rotation } = event.target;
    if (rotation.x > 0.5 || rotation.y > 0.5 || rotation.z > 0.5) {
      setShowPopup(true);
    }
  };

  return (
    <>
      <a.group ref={beachRef} {...props} onPointerMove={handleRotation} scale={[1, 1, 1]}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="dad255dd2cf24ae0bb357684e49722b4fbx" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Object_2">
                <group name="RootNode">
                  <group name="Scene" position={[-4.794, 0, 0.278]} rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="Object_5" position={[-14, 15.788, 4.337]}>
                      <mesh
                        name="Scene_Texture-base_0"
                        geometry={nodes['Scene_Texture-base_0'].geometry}
                        material={materials['Texture-base']}
                      />
                      <mesh
                        name="Scene_Texture-base_0_1"
                        geometry={nodes['Scene_Texture-base_0_1'].geometry}
                        material={materials['Texture-base']}
                      />
                      <mesh
                        name="Scene_Texture-base-gloss-jpg_0"
                        geometry={nodes['Scene_Texture-base-gloss-jpg_0'].geometry}
                        material={materials['Texture-base-gloss-jpg']}
                      />
                      <mesh
                        name="Scene_Book-tittle_0"
                        geometry={nodes['Scene_Book-tittle_0'].geometry}
                        material={materials['Book-tittle']}
                      />
                    </group>
                    <group
                      name="Mill-wind-wheel"
                      position={[-35.783, -27.192, 3.888]}
                      rotation={[0.445, -0.447, -0.498]}
                    >
                      <group
                        name="Object_11"
                        position={[-8.253, 39.884, -25.75]}
                        rotation={[-0.607, 0.138, 0.644]}
                      >
                        <mesh
                          name="Mill-wind-wheel_Texture-base_0"
                          geometry={nodes['Mill-wind-wheel_Texture-base_0'].geometry}
                          material={materials['Texture-base']}
                        />
                      </group>
                    </group>
                    <group
                      name="Mill-water-wheel"
                      position={[3.708, -15.395, -0.444]}
                      rotation={[-1.92, 0, 0]}
                    >
                      <group name="Object_14" position={[-17.708, 31.183, 4.781]}>
                        <mesh
                          name="Mill-water-wheel_Texture-base_0"
                          geometry={nodes['Mill-water-wheel_Texture-base_0'].geometry}
                          material={materials['Texture-base']}
                        />
                      </group>
                    </group>
                  </group>
                  <group name="Object_17" position={[-7.262, 9.035, -8.16]}>
                    <mesh
                      name="0"
                      geometry={nodes['0'].geometry}
                      material={materials['Texture-base']}
                      morphTargetDictionary={nodes['0'].morphTargetDictionary}
                      morphTargetInfluences={nodes['0'].morphTargetInfluences}
                    />
                  </group>
                  <group name="Object_20" position={[-7.262, 9.035, -8.16]}>
                    <mesh
                      name="1"
                      geometry={nodes['1'].geometry}
                      material={materials['Texture-base']}
                      morphTargetDictionary={nodes['1'].morphTargetDictionary}
                      morphTargetInfluences={nodes['1'].morphTargetInfluences}
                    />
                  </group>
                  <group
                    name="Waterfall"
                    position={[-4.794, 0, 0.351]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  >
                    <group name="Object_23" position={[-14, 15.788, 4.337]}>
                      <mesh
                        name="Waterfall_Texture-base-gloss-jpg_0"
                        geometry={nodes['Waterfall_Texture-base-gloss-jpg_0'].geometry}
                        material={materials['Texture-base-gloss-jpg']}
                      />
                    </group>
                  </group>
                  <group
                    name="deers"
                    position={[-23.122, -0.049, 14.878]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  >
                    <group name="Object_26" position={[4.328, 30.387, 4.387]}>
                      <mesh
                        name="deers_Texture-base_0"
                        geometry={nodes['deers_Texture-base_0'].geometry}
                        material={materials['Texture-base']}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </a.group>
      <Popup show={showPopup} message="You've rotated the Beach model!" />
    </>
  );
};

export default Beach;
