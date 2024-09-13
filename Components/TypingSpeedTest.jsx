import React, { useState, useEffect } from 'react';
import './TypingSpeedTest.css';
import jsPDF from 'jspdf';

const TypingSpeedTest = () => {
  const [text, setText] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [errorCount, setErrorCount] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [challenge, setChallenge] = useState('');
  const [challenges] = useState([
    'The quick brown fox jumps over the lazy dog.',
    'Pack my box with five dozen liquor jugs.',
    'How razorback-jumping frogs can level six piqued gymnasts.',
    'Jinxed wizards pluck ivy from the big quilt.',
    'Sphinx of black quartz, judge my vow.',
    'Mr Jock, TV quiz PhD, bags few lynx.',
    'Bright vixens jump; dozy fowl quack.'
  ]);

  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [challengeHistory, setChallengeHistory] = useState([]);

  useEffect(() => {
    if (isTyping) {
      const timer = setInterval(() => {
        if (startTime) {
          setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isTyping, startTime]);

  useEffect(() => {
    setChallenge(challenges[currentChallengeIndex]);
    setText(challenges[currentChallengeIndex]);
  }, [challenges, currentChallengeIndex]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (!isTyping) {
      setIsTyping(true);
      setStartTime(Date.now());
    }

    const minLength = Math.min(value.length, text.length);
    let errors = 0;

    for (let i = 0; i < minLength; i++) {
      if (value[i] !== text[i]) {
        errors++;
      }
    }

    if (value.length > text.length) {
      errors += value.length - text.length;
    }

    setErrorCount(errors);

    if (value === text) {
      setIsTyping(false);
      const challengeTime = Math.floor((Date.now() - startTime) / 1000);
      alert(`Congratulations! You completed the challenge in ${challengeTime} seconds with ${errorCount} errors.`);
      
      setChallengeHistory([...challengeHistory, { challenge: challenges[currentChallengeIndex], time: challengeTime, errors: errorCount }]);
      
      const nextIndex = (currentChallengeIndex + 1) % challenges.length;
      setCurrentChallengeIndex(nextIndex);
      setChallenge(challenges[nextIndex]);
      setText(challenges[nextIndex]);
      setInputValue('');
      setStartTime(null);
      setElapsedTime(0);
      setErrorCount(0);
    }
  };

  const downloadReport = () => {
    const totalChallenges = challengeHistory.length;
    const totalErrors = challengeHistory.reduce((sum, entry) => sum + entry.errors, 0);
    const totalTime = challengeHistory.reduce((sum, entry) => sum + entry.time, 0);
    const averageSpeed = totalChallenges > 0 ? (totalTime / totalChallenges) : 0;

    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Typing Speed Test Report', 20, 20);
    doc.setFontSize(12);
    doc.text(`Total Challenges: ${totalChallenges}`, 20, 40);
    doc.text(`Total Errors: ${totalErrors}`, 20, 50);
    doc.text(`Average Time per Challenge: ${averageSpeed.toFixed(2)} seconds`, 20, 60);

    doc.save('typing-speed-test-report.pdf');
  };

  return (
    <div className="typing-speed-test">
      <h2 className="typing-speed-test-title">Typing Speed Test</h2>
      <div className="typing-speed-test-text">
        <p>{text}</p>
      </div>
      <textarea
        className="typing-speed-test-input"
        value={inputValue}
        onChange={handleChange}
        placeholder="Start typing here..."
      />
      <div className="typing-speed-test-stats">
        <p className="stats-item">Errors: {errorCount}</p>
        <p className="stats-item">Time: {elapsedTime}s</p>
        <p className="stats-item">Challenge: {currentChallengeIndex + 1}/{challenges.length}</p>
      </div>
      <button onClick={downloadReport} className="typing-speed-test-download-btn">
        Download Report
      </button>
    </div>
  );
};

export default TypingSpeedTest;
