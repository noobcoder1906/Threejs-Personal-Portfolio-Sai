import React from 'react'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import  { useRef, useEffect} from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree} from '@react-three/fiber'
const GLTFLoader = new GLTFLoader();
GLTFLoader.load('../assets/3d/scene.gltf',(gltfScene) =>
{
  test.scene.add(gltfScene.scene);

}
)

export default background