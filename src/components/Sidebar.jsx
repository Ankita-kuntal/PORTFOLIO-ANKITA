import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-72 bg-green-200 fixed top-0 left-0 h-screen flex flex-col items-center justify-center p-4 z-50">
      {/* Cat Icon and Portfolio Text */}
      <div className="flex flex-col items-center w-full">
        <img src='cat.png' className='h-20 w-48 mb-2' alt="cat" />
        <h1 className="text-2xl font-bold text-gray-800 tracking-wider mb-10 text-center w-full">
          PORTFOLIO
        </h1>
        {/* Navigation Menu */}
        <nav className="flex flex-col gap-5 mt-4 w-full items-center">
          <a
            href="#about"
            className="rounded-lg px-8 py-3 font-bold text-gray-800 tracking-wide text-lg w-3/4 text-center transition-colors duration-300 hover:text-gray-600 hover:translate-x-1"
          >
            ABOUT
          </a>
          <a
            href="#projects"
            className="font-bold text-gray-800 tracking-wide text-lg py-3 transition-all duration-300 w-3/4 text-center hover:text-gray-600 hover:translate-x-1"
          >
            PROJECTS
          </a>
          <a
            href="#experience"
            className="font-bold text-gray-800 tracking-wide text-lg py-3 transition-all duration-300 w-3/4 text-center hover:text-gray-600 hover:translate-x-1"
          >
            EXPERIENCE
          </a>
          <a
            href="#contact"
            className="font-bold text-gray-800 tracking-wide text-lg py-3 transition-all duration-300 w-3/4 text-center hover:text-gray-600 hover:translate-x-1"
          >
            CONTACT
          </a>
        </nav>
        <div className="border-t-2 border-gray-800 w-3/4 my-6"></div>
      </div>
      {/* Social Icons */}
      <div className="flex gap-4 pb-2">
        <div className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200">
          <span className="text-white text-sm font-bold">in</span>
        </div>
        <div className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200">
          <span className="text-white text-sm">📱</span>
        </div>
        <div className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200">
          <span className="text-white text-sm">📷</span>
        </div>
        <div className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200">
          <span className="text-white text-sm">⚡</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;