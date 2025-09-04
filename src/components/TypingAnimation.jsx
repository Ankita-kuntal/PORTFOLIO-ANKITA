import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ roles, speed = 120, pause = 1200 }) => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingTimeout;
    const fullText = roles[currentRole];
    if (!isDeleting && displayedText.length < fullText.length) {
      typingTimeout = setTimeout(() => {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
      }, speed);
    } else if (isDeleting && displayedText.length > 0) {
      typingTimeout = setTimeout(() => {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
      }, speed / 2);
    } else if (!isDeleting && displayedText.length === fullText.length) {
      typingTimeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, currentRole, roles, speed, pause]);

    // Define colors for each role (green, yellow, red)
    const roleColors = [
      'text-red-400', // WEB DEVELOPER
      'text-red-400', // DSA ENTHUSIAST
      'text-red-400' // UI/UX DESIGNER
    ];

    return (
      <div className={`font-jetbrains text-4xl font-extrabold px-6 py-2 text-left drop-shadow-lg ${roleColors[currentRole]}`}>
        {displayedText}
        <span className="animate-blink">|</span>
        <style>{`
          .animate-blink {
            animation: blink 1s steps(2, start) infinite;
          }
          @keyframes blink {
            to { visibility: hidden; }
          }
        `}</style>
      </div>
  );
};

export default TypingAnimation;
