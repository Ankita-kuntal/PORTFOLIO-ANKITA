import React, { useState, useEffect, useRef } from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [eyePosition, setEyePosition] = useState({ leftEye: { x: 0, y: 0 }, rightEye: { x: 0, y: 0 } });
  const catRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (catRef.current) {
        const catRect = catRef.current.getBoundingClientRect();
        
        // Only activate eye movement if mouse is near the cat (within 150px)
        const distanceToCat = Math.sqrt(
          Math.pow(e.clientX - (catRect.left + catRect.width / 2), 2) + 
          Math.pow(e.clientY - (catRect.top + catRect.height / 2), 2)
        );
        
        if (distanceToCat > 150) {
          // Reset eyes to center when mouse is far away
          setEyePosition({
            leftEye: { x: 0, y: 0 },
            rightEye: { x: 0, y: 0 }
          });
          return;
        }

        // Calculate positions for left and right eyes relative to cat container
        const leftEyeCenterX = catRect.left + 85 + 6; // Match the CSS left position + half eye width
        const leftEyeCenterY = catRect.top + 50 + 6;  // Match the CSS top position + half eye height
        const rightEyeCenterX = catRect.left + 105 + 6; // Match the CSS left position + half eye width
        const rightEyeCenterY = catRect.top + 50 + 6;   // Match the CSS top position + half eye height

        // Calculate angle and distance for left eye
        const leftAngle = Math.atan2(e.clientY - leftEyeCenterY, e.clientX - leftEyeCenterX);
        const leftDistance = Math.min(6, Math.sqrt(Math.pow(e.clientX - leftEyeCenterX, 2) + Math.pow(e.clientY - leftEyeCenterY, 2)) / 15);
        
        // Calculate angle and distance for right eye
        const rightAngle = Math.atan2(e.clientY - rightEyeCenterY, e.clientX - rightEyeCenterX);
        const rightDistance = Math.min(6, Math.sqrt(Math.pow(e.clientX - rightEyeCenterX, 2) + Math.pow(e.clientY - rightEyeCenterY, 2)) / 15);

        setEyePosition({
          leftEye: {
            x: Math.cos(leftAngle) * leftDistance,
            y: Math.sin(leftAngle) * leftDistance
          },
          rightEye: {
            x: Math.cos(rightAngle) * rightDistance,
            y: Math.sin(rightAngle) * rightDistance
          }
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Track active section for highlight
  const [activeSection, setActiveSection] = useState('about');
  const [hoverSection, setHoverSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (hoverSection) return; // Don't update if hovering
      const sections = ['about', 'projects', 'experience', 'contact'];
      let current = 'about';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hoverSection]);

  // Scroll to section on hover
  const handleNavHover = (id) => {
    setHoverSection(id);
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavLeave = () => {
    setHoverSection(null);
  };

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={toggleMenu}
  className="md:hidden fixed top-0 left-4 z-50 w-10 h-10 flex flex-col items-center justify-center gap-1 bg-transparent shadow-none"
        style={{ background: 'none', boxShadow: 'none' }}
      >
  <span className={`w-7 h-1 bg-gray-700 rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
  <span className={`w-7 h-1 bg-gray-700 rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
  <span className={`w-7 h-1 bg-gray-700 rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div
          onClick={closeMenu}
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}

      {/* Sidebar */}
      <div className={`
        w-72 bg-green-200 h-screen flex flex-col items-center justify-center p-4 z-50 transition-transform duration-300
        md:fixed md:top-0 md:left-0 md:translate-x-0
        fixed top-0 left-0 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Cat Icon with Interactive Eyes and Portfolio Text */}
        <div className="flex flex-col items-center w-full">
          <div className="relative mb-2" ref={catRef}>
            <img src='cat.webp' loading="lazy" className='h-20 w-48' alt="cat" />
            
            {/* Left Eye */}
            <div 
              className="absolute w-1 h-1 bg-white rounded-full transition-all duration-100 ease-out"
              style={{
                left: `calc(50% - 18px - 0.5px)`,
                top: `calc(50% - -8px - 0.5px)`,
                transform: `translate(${eyePosition.leftEye.x * 0.5}px, ${eyePosition.leftEye.y * 0.5}px)`
              }}
            />
            {/* Right Eye */}
            <div 
              className="absolute w-1 h-1 bg-white rounded-full transition-all duration-100 ease-out"
              style={{
                left: `calc(50% + 15px - 0.5px)`,
                top: `calc(50% - -8px - 0.5px)`,
                transform: `translate(${eyePosition.rightEye.x * 0.5}px, ${eyePosition.rightEye.y * 0.5}px)`
              }}
            />
          </div>
          
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-wider mb-6 mt-2 text-center w-full font-jetbrains drop-shadow-[2px_2px_0_rgba(0,0,0,0.25)]">
            PORTFOLIO
          </h1>
          
          {/* Navigation Menu */}
          <nav className="flex flex-col gap-5 mt-2 w-full items-center">
            {[
              { id: 'about', label: 'ABOUT' },
              { id: 'projects', label: 'PROJECTS' },
              { id: 'experience', label: 'EXPERIENCE' },
              { id: 'contact', label: 'CONTACT' }
            ].map(({ id, label }) => (
              <div
                key={id}
                onMouseEnter={() => handleNavHover(id)}
                onMouseLeave={handleNavLeave}
                className="w-3/4 flex justify-center relative"
              >
                    {(activeSection === id && !hoverSection) || hoverSection === id ? (
                      <div className="absolute inset-0 bg-[#fffeed] rounded-xl z-0 transition-all duration-300"></div>
                    ) : null}
                <a
                  href={`#${id}`}
                  onClick={closeMenu}
                      className={`font-bold tracking-wide text-lg py-3 px-8 text-center transition-all duration-300 rounded-lg z-10 ${((activeSection === id && !hoverSection) || hoverSection === id) ? 'text-[#222]' : 'text-gray-800'} hover:text-[#222] hover:translate-x-1`}
                >
                  {label}
                </a>
              </div>
            ))}
          </nav>
          <div className="border-t-2 border-gray-800 w-3/4 my-6"></div>
        </div>
        
        {/* Social Icons */}
        <div className="flex gap-4 pb-2 items-center justify-center">
          <span className="w-8 h-8 flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110 group">
            <FaEnvelope className="w-8 h-8 text-black group-hover:text-green-500" />
          </span>
          <span className="w-8 h-8 flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110 group">
            <FaGithub className="w-8 h-8 text-black group-hover:text-[#2d0036]" />
          </span>
          <span className="w-8 h-8 flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110 group">
            <FaLinkedin className="w-8 h-8 text-black group-hover:text-blue-600" />
          </span>
          <span className="w-8 h-8 flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110 group">
            <FaInstagram className="w-8 h-8 text-black group-hover:text-pink-500" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;