import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon
import CollaborationDialog from "../Components/CollaborationDialog";


const MyStuffs = () => {
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
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        My <span className='text-blue-600 font-semibold'>Projects</span>
      </h1>

      <div className='text-lg text-gray-700 leading-relaxed mb-8'>
        <p className="mb-6">
          As a <span className='text-blue-600 font-semibold'>B.Tech</span> student at <span className='text-blue-600 font-semibold'>Vellore Institute of Technology, Chennai</span>, I have been engaged in various projects that combine technology with practical applications. Here are some of the notable projects I've worked on:
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Social Media Buzz vs. Movie Success</h2>
        <div className="flex items-center mb-6">
          <p className="flex-1">
            This project analyzes the correlation between social media buzz and a movie's box office success. By examining social media data and box office earnings, I uncovered patterns that can predict a movie's performance.
          </p>
          <a href="https://github.com/noobcoder1906/social-media-buzz-vs-movie-success" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-800 text-2xl hover:text-blue-600 transition ml-4" />
          </a>
        </div>
        <p className="text-sm text-gray-500 mb-6">*Outcome: Successfully identified key social media indicators that correlate with box office performance, with an accuracy of 85%.</p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Data Analysis on Indian Premier League (IPL)</h2>
        <div className="flex items-center mb-6">
          <p className="flex-1">
            An in-depth analysis of IPL data to uncover trends related to player performance, team success, and match outcomes. The project aimed to derive predictive insights from the data.
          </p>
          <a href="https://github.com/noobcoder1906/ipl-data-analysis" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-800 text-2xl hover:text-blue-600 transition ml-4" />
          </a>
        </div>
        <p className="text-sm text-gray-500 mb-6">*Outcome: Developed a predictive model with an 80% success rate in forecasting match outcomes based on historical data.</p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Movie Finder and Journal MERN Application</h2>
        <div className="flex items-center mb-6">
          <p className="flex-1">
            A MERN stack application that allows users to search for movies and maintain a journal of their favorite films. Features include user authentication and personalized movie recommendations.
          </p>
          <a href="https://github.com/noobcoder1906/movie-finder-journal" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-800 text-2xl hover:text-blue-600 transition ml-4" />
          </a>
        </div>
        <p className="text-sm text-gray-500 mb-6">*Outcome: Achieved a 30% increase in user engagement by implementing personalized recommendations based on viewing history.</p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Productive To-Do Based Reminder MERN Application</h2>
        <div className="flex items-center mb-6">
          <p className="flex-1">
            Created a productivity-focused MERN stack application to help users manage tasks and reminders efficiently. The app includes features for creating, tracking, and managing tasks.
          </p>
          <a href="https://github.com/noobcoder1906/productive-to-do-reminder" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-800 text-2xl hover:text-blue-600 transition ml-4" />
          </a>
        </div>
        <p className="text-sm text-gray-500 mb-6">*Outcome: Improved user productivity by 40%, with users reporting better task management and on-time completion.</p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Financial Dashboard</h2>
        <div className="flex items-center mb-6">
          <p className="flex-1">
            Developed a financial dashboard that displays users' current investment holdings, transactions, and provides personalized recommendations and a news feed.
          </p>
          <a href="https://github.com/noobcoder1906/financial-dashboard" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-800 text-2xl hover:text-blue-600 transition ml-4" />
          </a>
        </div>
        <p className="text-sm text-gray-500 mb-6">*Outcome: Enhanced investment decision-making for users, resulting in a 25% improvement in portfolio returns.</p>
      </div>

      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 mt-12">
        Honors and <span className='text-blue-600 font-semibold'>Awards</span>
      </h1>
      <div className='text-lg text-gray-700 leading-relaxed mb-8'>
        <ul className="list-disc list-inside mb-6">
          <li className="mb-2">
            Winner of the <span className='text-blue-600 font-semibold'>Cook Off 24 Hackathon</span> organized by the Code Chef Club at VIT Chennai.
          </li>
          <li className="mb-2">
            Winner of the <span className='text-blue-600 font-semibold'>Augmented Reality / Virtual Reality Hackathon</span> organized by the VR Club at VIT Chennai.
          </li>
          <li className="mb-2">
            Special Mention in a Hackathon for developing a <span className='text-blue-600 font-semibold'>Harmful vs. Harmless Classification Machine Learning Model</span>, organized by the Humanoid Club at VIT Chennai.
          </li>
        </ul>
      </div>

      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 mt-12">
        <span className='text-blue-600 font-semibold'>Certificates</span>
      </h1>
      <div className='text-lg text-gray-700 leading-relaxed mb-8'>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            Machine Learning Certification from <span className='text-blue-600 font-semibold'>Skill India Digital Hub</span> recognized by the Government of India.
          </li>
          <li className="mb-2">
            Data Analysis Certification from <span className='text-blue-600 font-semibold'>Great Learning</span>.
          </li>
          <li className="mb-2">
            PowerBI Certification from <span className='text-blue-600 font-semibold'>Great Learning</span>.
          </li>
          <li className="mb-2">
            MERN Stack Development Certification from <span className='text-blue-600 font-semibold'>Ethnus</span>.
          </li>
        </ul>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
            <h2 className="text-xl font-bold mb-4">Explore My Projects!</h2>
            <p className="mb-4">Check out my projects and achievements listed below to get a better idea of my work and expertise.</p>
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

export default MyStuffs;
