import React, { useState, useEffect } from 'react';
import { skills } from '../Constants/index'; // Your updated skills array
import CollaborationDialog from "../Components/CollaborationDialog";
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';

const AboutMe = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer if the component is unmounted
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <section className="max-w-screen-lg mx-auto bg-gray-50 py-10 px-5 rounded-lg shadow-lg mt-24 overflow-y-auto" style={{ maxHeight: '80vh' }}>
      <div className="flex items-center mb-8 space-x-4">
        <h1 className="text-4xl font-bold text-gray-800">
          Hello! I'm <span className='text-blue-600 font-semibold'>Sai</span>
        </h1>
        <a href="https://www.linkedin.com/in/saisabarish-h-09ab85277" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-110 animate-pulse">
          <FaLinkedin size={30} />
        </a>
        {/* <a href="https://leetcode.com//" target="_blank" rel="noopener noreferrer" className="bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition transform hover:scale-110 animate-pulse">
          <SiLeetcode size={30} />
        </a> */}
        <a href="https://www.instagram.com/_sai_the_master_?igsh=MTk2eWN4bzRtdzZ6NA==" target="_blank" rel="noopener noreferrer" className="bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600 transition transform hover:scale-110 animate-pulse">
          <FaInstagram size={30} />
        </a>
        {/* <a href="https://www.hackerrank.com/" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-110 animate-pulse">
          <SiHackerrank size={30} />
        </a> */}
      </div>

      <div className='text-lg text-gray-700 leading-relaxed mb-8'>
        <p className="mb-6">
          I'm a <span className='text-blue-600 font-semibold'>B.Tech</span> student at <span className='text-blue-600 font-semibold'>Vellore Institute of Technology, Chennai</span>, currently in my 3rd year. My primary focus is on <span className='text-blue-600 font-semibold'>AI</span>, <span className='text-blue-600 font-semibold'>Machine Learning</span>, and the <span className='text-blue-600 font-semibold'>MERN stack</span>. I create stunning web applications with my MERN stack knowledge, integrating technology with practical applications.
        </p>
        <p className="mb-6">
          I have a deep interest in <span className='text-blue-600 font-semibold'>finance</span> and <span className='text-blue-600 font-semibold'>investment banking</span>. I am committed to expanding my expertise in this domain, having learned various financial skills such as <span className='text-blue-600 font-semibold'>digital marketing</span>, <span className='text-blue-600 font-semibold'>financial analysis</span>, and <span className='text-blue-600 font-semibold'>risk management</span>. My ongoing learning reflects my dedication to mastering these areas.
        </p>
        <p className="mb-6">
          Driven by my passion for <span className='text-blue-600 font-semibold'>finance</span> and <span className='text-blue-600 font-semibold'>data science</span>, I aim to bridge these fields to drive innovation. Whether through <span className='text-blue-600 font-semibold'>financial modeling</span>, <span className='text-blue-600 font-semibold'>market trend analysis</span>, or <span className='text-blue-600 font-semibold'>strategic data solutions</span>, I am dedicated to advancing in this evolving domain.
        </p>
        <p className="mb-6">
          I also have hands-on experience in several programming languages, including C++, Java, Python, and Golang. My proficiency in these languages allows me to develop robust and efficient solutions for various technical challenges.
        </p>
      </div>

      <div className='py-6'>
        <h3 className='text-3xl font-semibold text-center text-gray-800 mb-6'>My Tech Skills</h3>

        <div className='flex flex-wrap justify-center gap-8'>
          {skills.length > 0 ? (
            skills.map((skill, index) => (
              <div key={index} className='w-28 h-28 p-2 bg-white rounded-xl flex flex-col items-center transform transition-all hover:scale-105 shadow-md'>
                <img src={skill.imageUrl} alt={skill.name} className='w-16 h-16 object-contain mb-2' />
                <span className='text-gray-600 text-center text-sm'>{skill.name}</span>
              </div>
            ))
          ) : (
            <p className='text-center text-gray-600'>No skills available to display.</p>
          )}
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto text-center">
            <h2 className="text-xl font-bold mb-4">Explore My Skills!</h2>
            <p className="mb-4">Check out my skills section below to see the technologies and tools I've been working with.</p>
            <button
              onClick={handleClosePopup}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <CollaborationDialog />
    </section>
  );
};

export default AboutMe;
