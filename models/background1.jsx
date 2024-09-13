import React from 'react'
import { useGLTF } from '@react-three/drei'
import skyscene from '...assets/3d/island.glb'

const Sky =() => {
    const sky= useGLTF(skyscene);

  return (
  <mesh>
<primitive object={Sky.scene}></primitive>
  </mesh>
  )
}

export default background1