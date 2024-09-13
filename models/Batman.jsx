import React, { useRef, useState, useEffect } from 'react';
import { useGLTF, Text, SpotLight } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { a, useSpring } from '@react-spring/three';
import BatmanScene from '../assets/3d/batman.glb';
import './Batman.css'; // Import CSS for animation

const Batman = ({ form }) => {
  const { scene } = useGLTF(BatmanScene);
  const batmanRef = useRef();
  const [isRunning, setIsRunning] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [lightingChange, setLightingChange] = useState(false); // For lighting shift
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  // Check if form input is filled
  useEffect(() => {
    if (form.name || form.email || form.message) {
      setIsRunning(true);
      setShowMessage(true); // Show message beside Batman when form is filled
      setLightingChange(true); // Trigger lighting shift
    } else {
      setIsRunning(false);
      setShowMessage(false);
      setLightingChange(false);
    }
  }, [form]);

  // Spring for smooth position animation
  const { position } = useSpring({
    position: isRunning ? [5, 0, 5] : [0, 0, 0], // Adjust position values
    config: { mass: 1, tension: 120, friction: 14 },
    loop: true,
  });

  // Animate the model's position forward
  useFrame(() => {
    if (batmanRef.current && isRunning) {
      batmanRef.current.position.z -= 0.05; // Adjust movement speed
    }
  });

  // Handle hover state
  const handlePointerOver = () => {
    setIsHovered(true);
  };

  const handlePointerOut = () => {
    setIsHovered(false);
  };

  return (
    <>
      {/* Ambient Light */}
      <ambientLight intensity={lightingChange ? 0.2 : 1} /> {/* Dim light after submission */}
      
      {/* Spotlight on Batman */}
      {lightingChange && (
        <SpotLight
          position={[5, 10, 5]} // Position the spotlight over Batman
          angle={0.5}            // Spotlight angle
          penumbra={0.5}         // Soft edges
          intensity={1.5}        // Brightness of the spotlight
          castShadow             // Enable shadows for a dramatic effect
        />
      )}

      {/* Batman Model */}
      <a.mesh
        ref={batmanRef}
        position={position.to((x, y, z) => [x, y, z])}
        scale={[0.9, 0.9, 0.9]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <primitive object={scene} />
      </a.mesh>

      {/* Display a Thank You banner when hovering */}
      {isHovered && (
        <Text
          className={`thank-you-banner ${isHovered ? 'animate' : ''}`}
          position={[0, 1.5, 0]} // Adjust position to display the banner above Batman
          fontSize={0.5}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          Thank You!
        </Text>
      )}
    </>
  );
};

export default Batman;
