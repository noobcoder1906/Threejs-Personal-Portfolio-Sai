import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'; // Ensure this path is correct

// Lazy load the components
const Home = lazy(() => import('./pages/Home'));
const AboutMe = lazy(() => import('./pages/Aboutme'));
const MyStuffs = lazy(() => import('./pages/Mystuffs'));
const Contact = lazy(() => import('./pages/Contacts'));

const App = () => {
  return (
    <main className="bg-cyan-200 min-h-screen">
      <Router>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/mystuffs" element={<MyStuffs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Router>
    </main>
  );
};

export default App;
