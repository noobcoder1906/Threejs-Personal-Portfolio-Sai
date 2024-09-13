import React, { Suspense, useState, useEffect, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Loader from '../Components/Loader';
import Beach from '../models/Beach';
import Sky from '../models/Sky';
// import Batman from '../models/Batman';
import Jet from '../models/Jet';
import HomeInfo from '../Components/HomeInfo';
import LaserPointer from '../Components/LaserPointer';
import ToggleSwitch from '../Components/ToggleSwitch';

const Home = () => {
  const [jetPosition, setJetPosition] = useState([0, 15, 0]);
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const adjust = useCallback(() => {
    let screenscale = [0.4, 0.4, 0.4];
    let screenposition = [0, -5, 0];

    if (window.innerWidth < 768) {
      screenscale = [0.36, 0.36, 0.36];
      screenposition = [0, -6, 0];
    }

    return { scale: screenscale, position: screenposition };
  }, []);

  const [cityProps, setCityProps] = useState(adjust());

  useEffect(() => {
    const handleResize = () => {
      setCityProps(adjust());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [adjust]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'L' || event.key === 'l') {
        setRotation((prevRotation) => [prevRotation[0], prevRotation[1] - 0.1, prevRotation[2]]);
      } else if (event.key === 'R' || event.key === 'r') {
        setRotation((prevRotation) => [prevRotation[0], prevRotation[1] + 0.1, prevRotation[2]]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      const stage = Math.min(4, Math.floor(scrollPosition / (windowHeight / 4)) + 1);
      setCurrentStage(stage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (rotation[1] > 0 && rotation[1] < 1) {
      setCurrentStage(1);
    } else if (rotation[1] >= 1 && rotation[1] < 2) {
      setCurrentStage(2);
    } else if (rotation[1] >= 2 && rotation[1] < 3) {
      setCurrentStage(3);
    } else if (rotation[1] >= 3) {
      setCurrentStage(4);
    }
  }, [rotation]);

  useEffect(() => {
    if (currentStage === 4) {
      setIsPopupVisible(false);
    }
  }, [currentStage]);

  const handleJetMove = (x, z) => {
    setJetPosition([x, 15, z]);
  };

  const rotateModelRight = () => {
    setRotation((prevRotation) => [prevRotation[0], prevRotation[1] + 0.1, prevRotation[2]]);
    if (currentStage < 4) {
      setIsPopupVisible(true);
    }
  };

  const handleDirectionClick = (key, action) => {
    const event = new KeyboardEvent(action, { key });
    window.dispatchEvent(event);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <section
      className={`flex flex-col items-center justify-center min-h-screen text-center py-10 px-4 w-full h-screen relative transition-colors duration-500 ${
        isDarkMode ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <div className="absolute top-40 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage === 1 && <HomeInfo currentStage={1} />}
        {currentStage === 2 && <HomeInfo currentStage={2} />}
        {currentStage === 3 && <HomeInfo currentStage={3} />}
        {currentStage === 4 && <HomeInfo currentStage={4} />}
      </div>

      <Canvas className="w-full h-screen bg-transparent" camera={{ near: 0.1, far: 1000, position: [0, 10, 50], fov: 50 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[10, 10, 10]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[0, 10, 10]} />
          <spotLight position={[5, 5, 5]} angle={0.3} />
          <hemisphereLight skyColor="b1e1ff" groundColor="#000000" intensity={0.35} />

          <Sky />
          <Beach position={[0, 0, 0]} rotation={rotation} scale={[7, 7, 7]} {...cityProps} />
          <Jet onMove={handleJetMove} />
          {/* <Batman position={[0, 10, 0]} /> */}

          <OrbitControls
            enableZoom={false}
            minPolarAngle={Math.PI / 2.2}
            maxPolarAngle={Math.PI / 1.8}
            enablePan={false}
          />
        </Suspense>
      </Canvas>

      {/* Enhanced "Unveil my story" button */}
      <button
  onClick={rotateModelRight}
  className="absolute bottom-36 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:-translate-y-1 z-20 text-xs sm:text-sm md:text-base lg:text-lg"
>
  Unveil my story
</button>

      {/* Popup */}
      {isPopupVisible && currentStage < 4 && (
  <div
    className="absolute bottom-32 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white py-3 px-4 rounded-lg shadow-lg transition-transform duration-300 z-10 text-xs sm:text-sm md:text-base lg:text-lg"
    style={{ marginBottom: '80px' }}
  >
    Brace yourself for an adventure, keep clicking the button.
  </div>
)}

<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 grid grid-cols-2 gap-2 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
  <button
    onMouseDown={() => handleDirectionClick('ArrowUp', 'keydown')}
    onMouseUp={() => handleDirectionClick('ArrowUp', 'keyup')}
    className="bg-yellow-300 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-yellow-700 transition-transform transform hover:-translate-y-1 active:translate-y-0 active:shadow-sm font-bold uppercase tracking-wide text-xs sm:text-sm md:text-base lg:text-lg"
  >
    Move Up
  </button>
  <button
    onMouseDown={() => handleDirectionClick('ArrowDown', 'keydown')}
    onMouseUp={() => handleDirectionClick('ArrowDown', 'keyup')}
    className="bg-cyan-800 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-purple-700 transition-transform transform hover:-translate-y-1 active:translate-y-0 active:shadow-sm font-bold uppercase tracking-wide text-xs sm:text-sm md:text-base lg:text-lg"
  >
    Move Down
  </button>
  <button
    onMouseDown={() => handleDirectionClick('ArrowLeft', 'keydown')}
    onMouseUp={() => handleDirectionClick('ArrowLeft', 'keyup')}
    className="bg-gray-800 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-cyan-700 transition-transform transform hover:-translate-y-1 active:translate-y-0 active:shadow-sm font-bold uppercase tracking-wide text-xs sm:text-sm md:text-base lg:text-lg"
  >
    Move Left
  </button>
  <button
    onMouseDown={() => handleDirectionClick('ArrowRight', 'keydown')}
    onMouseUp={() => handleDirectionClick('ArrowRight', 'keyup')}
    className="bg-purple-800 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-orange-700 transition-transform transform hover:-translate-y-1 active:translate-y-0 active:shadow-sm font-bold uppercase tracking-wide text-xs sm:text-sm md:text-base lg:text-lg"
  >
    Move Right
  </button>
}
    </div>

      {/* Dark Mode Toggle with Labels */}
      <div className="absolute top-8 right-8 z-20 flex items-center">
        <ToggleSwitch isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
      </div>  
      <LaserPointer/>
    </section>
  );
};

export default Home;
